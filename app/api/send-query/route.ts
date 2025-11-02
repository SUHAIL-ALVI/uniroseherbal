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
  <div style="background:linear-gradient(135deg,#fdfdfd,#f8faf9); font-family:'Poppins',Arial,sans-serif; padding:40px 0; color:#222;">
    <table style="max-width:680px; margin:auto; background:rgba(255,255,255,0.6); border-radius:24px; overflow:hidden; backdrop-filter:blur(20px); box-shadow:0 8px 40px rgba(0,0,0,0.08); border:1px solid rgba(255,255,255,0.4);">
      
      <!-- Header -->
      <thead>
        <tr>
          <td style="text-align:center; background:linear-gradient(120deg,#47C363,#E8508F); padding:50px 30px;">
            <img src="https://uniroseherbals.com/Logo2.png" alt="Unirose Herbals" width="95" style="border-radius:14px; background:white; padding:6px; box-shadow:0 3px 12px rgba(0,0,0,0.1);" />
            <h1 style="margin:20px 0 6px; font-size:28px; color:white; letter-spacing:0.4px;">Unirose Herbals</h1>
            <p style="color:rgba(255,255,255,0.9); font-size:14px; margin:0;">Rooted in Nature · Thriving in Health</p>
          </td>
        </tr>
      </thead>

      <!-- Body -->
      <tbody>
        <tr>
          <td style="padding:50px 40px 40px;">
            <h2 style="color:#148E3C; font-size:22px; margin-bottom:16px;">🌸 New Customer Query Received</h2>
            <p style="font-size:15px; color:#444; line-height:1.8; margin-bottom:28px;">
              <strong>${name}</strong> has sent a new query through your <strong>Unirose Herbals</strong> website.
            </p>

            <!-- Info Card -->
            <div style="background:rgba(255,255,255,0.8); border:1px solid rgba(232,80,143,0.15); border-radius:18px; padding:24px 28px; box-shadow:inset 0 1px 6px rgba(0,0,0,0.05);">
              <table style="width:100%; border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0;"><strong style="color:#148E3C;">👤 Name:</strong></td>
                  <td style="padding:8px 0; color:#333;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;"><strong style="color:#148E3C;">📧 Email:</strong></td>
                  <td style="padding:8px 0; color:#333;">${email}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;"><strong style="color:#148E3C;">📞 Contact:</strong></td>
                  <td style="padding:8px 0; color:#333;">${contact}</td>
                </tr>
              </table>

              <div style="margin-top:16px;">
                <p style="margin-bottom:6px; font-weight:600; color:#E8508F;">💬 Message</p>
                <div style="background:rgba(255,255,255,0.9); border-left:4px solid #E8508F; padding:16px 18px; border-radius:10px; color:#333; font-size:14px; line-height:1.7; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                  ${query}
                </div>
              </div>
            </div>

            <!-- Button -->
            <div style="text-align:center; margin-top:40px;">
              <a href="https://uniroseherbals.com"
                style="display:inline-block; padding:14px 36px; background:linear-gradient(135deg,#E8508F,#47C363); color:#fff; border-radius:40px; text-decoration:none; font-weight:600; font-size:15px; box-shadow:0 6px 16px rgba(232,80,143,0.3), 0 2px 6px rgba(71,195,99,0.25); transition:all 0.3s ease;">
                🌿 Open Dashboard
              </a>
            </div>
          </td>
        </tr>
      </tbody>

      <!-- Footer -->
      <tfoot>
        <tr>
          <td style="text-align:center; background:rgba(255,255,255,0.4); padding:22px 10px; font-size:12px; color:#666; border-top:1px solid rgba(232,80,143,0.1);">
            <p style="margin:0;">© ${new Date().getFullYear()} <strong style="color:#148E3C;">Unirose Herbals</strong>. All Rights Reserved.</p>
            <p style="margin:6px 0 0; color:#81C784;">This email was generated automatically — please do not reply.</p>
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
