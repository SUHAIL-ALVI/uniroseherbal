import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, contact, email, query } = await req.json();

    // Validate fields
    if (!name || !contact || !email || !query) {
      return NextResponse.json(
        { message: "All fields (name, contact, email, query) are required." },
        { status: 400 }
      );
    }

    console.log("EMAIL_TO:", process.env.EMAIL_TO);
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS);

    // Transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Forcefully define "to" as a string to avoid undefined or type mismatch
    const recipient = process.env.EMAIL_TO?.trim();
    if (!recipient) {
      throw new Error("EMAIL_TO is missing or empty");
    }

// Email options
const mailOptions = {
  from: `"Unirose Herbals" <${process.env.EMAIL_FROM}>`,
  to: recipient,
  subject: `🌿 New Customer Query — ${name}`,
  html: `
  <div style="background-color:#F9F9F9; font-family:'Poppins', Arial, sans-serif; padding:40px 0;">
    <table style="max-width:640px; margin:auto; background:white; border-radius:16px; overflow:hidden; box-shadow:0 6px 16px rgba(0,0,0,0.08);">
      
      <!-- Header -->
      <thead>
        <tr>
          <td style="background:linear-gradient(135deg, #148E3C, #47C363); text-align:center; padding:28px;">
            <img src="https://uniroseherbals.com/Logo2.png" alt="Unirose Herbals" width="100" style="background:white; border-radius:12px; padding:6px;" />
            <h1 style="color:white; font-size:26px; margin:12px 0 4px;">Unirose Herbals</h1>
            <p style="color:#eafbe9; font-size:14px; margin:0;">Rooted In Nature · Thriving In Health</p>
          </td>
        </tr>
      </thead>

      <!-- Body -->
      <tbody>
        <tr>
          <td style="padding:36px;">
            <h2 style="color:#148E3C; font-size:20px; margin-bottom:16px;">🌸 New Customer ${name} Query Received</h2>
            <p style="font-size:15px; color:#444; line-height:1.6; margin-bottom:24px;">
              ${name} has reached out through your Unirose Herbals website.
            </p>

            <div style="border:1px solid #E8F5E9; border-radius:12px; background:#FAFAFA; padding:20px;">
              <p style="margin:8px 0;"><strong style="color:#148E3C;">Name:</strong> ${name}</p>
              <p style="margin:8px 0;"><strong style="color:#148E3C;">Email:</strong> ${email}</p>
              <p style="margin:8px 0;"><strong style="color:#148E3C;">Contact:</strong> ${contact}</p>
              <p style="margin:8px 0;"><strong style="color:#148E3C;">Message:</strong></p>
              <p style="background:#fff; border-left:4px solid #E8508F; padding:12px; border-radius:6px; color:#333; line-height:1.6;">${query}</p>
            </div>

            <div style="text-align:center; margin-top:32px;">
              <a href="https://uniroseherbals.com" style="background:linear-gradient(135deg, #E8508F, #47C363); color:white; padding:12px 26px; border-radius:30px; text-decoration:none; font-weight:600; font-size:15px; box-shadow:0 4px 10px rgba(72,196,99,0.3);">
                Open Dashboard
              </a>
            </div>
          </td>
        </tr>
      </tbody>

      <!-- Footer -->
      <tfoot>
        <tr>
          <td style="background:#F1F8F3; text-align:center; padding:18px; font-size:12px; color:#666;">
            <p style="margin:0;">© ${new Date().getFullYear()} <strong style="color:#148E3C;">Unirose Herbals</strong> — All Rights Reserved.</p>
            <p style="margin:4px 0 0; color:#81C784;">This email was generated automatically. Please do not reply.</p>
          </td>
        </tr>
      </tfoot>

    </table>
  </div>
  `,
};



    console.log("MAIL OPTIONS:", mailOptions);

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("MAIL SENT:", info.response);

    return NextResponse.json(
      { message: "✅ Query sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("❌ Mail send error:", error);
    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? (error as { message: string }).message
        : "Unknown error";
    return NextResponse.json(
      { message: "Failed to send query", error: errorMessage },
      { status: 500 }
    );
  }
}
