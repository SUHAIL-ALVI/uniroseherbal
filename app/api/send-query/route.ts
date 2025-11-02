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
  <div style="background:linear-gradient(135deg,#fdfdfd,#f8faf9); padding:40px 0; font-family:'Poppins',Arial,sans-serif;">
    <table style="max-width:640px; margin:auto; background:rgba(255,255,255,0.75); backdrop-filter:blur(12px); border-radius:20px; overflow:hidden; box-shadow:0 8px 30px rgba(0,0,0,0.08); border:1px solid rgba(255,255,255,0.4);">
      
      <!-- Header -->
      <thead>
        <tr>
          <td style="text-align:center; padding:40px 20px; background:linear-gradient(120deg,rgba(72,196,99,0.9),rgba(232,80,143,0.9)); color:#fff;">
            <img src="https://uniroseherbals.com/Logo2.png" alt="Unirose Herbals" width="90" style="border-radius:12px; background:white; padding:6px; box-shadow:0 3px 12px rgba(0,0,0,0.15);" />
            <h1 style="margin:14px 0 6px; font-size:26px; letter-spacing:0.5px;">Unirose Herbals</h1>
            <p style="font-size:14px; color:#eafbe9; margin:0;">Rooted in Nature · Thriving in Health</p>
          </td>
        </tr>
      </thead>

      <!-- Body -->
      <tbody>
        <tr>
          <td style="padding:40px 30px;">
            <h2 style="color:#148E3C; font-size:20px; margin-bottom:16px;">🌺 New Query from ${name}</h2>
            <p style="color:#555; font-size:15px; line-height:1.6; margin-bottom:28px;">
              You’ve received a new inquiry through the <strong>Unirose Herbals</strong> website. Here are the details:
            </p>

            <div style="background:rgba(255,255,255,0.8); border:1px solid rgba(232,80,143,0.15); border-radius:14px; padding:20px 24px; box-shadow:inset 0 1px 6px rgba(0,0,0,0.05);">
              <p style="margin:10px 0;"><strong style="color:#148E3C;">👤 Name:</strong> ${name}</p>
              <p style="margin:10px 0;"><strong style="color:#148E3C;">📧 Email:</strong> ${email}</p>
              <p style="margin:10px 0;"><strong style="color:#148E3C;">📞 Contact:</strong> ${contact}</p>
              <p style="margin:10px 0;"><strong style="color:#148E3C;">💬 Message:</strong></p>
              <p style="background:rgba(255,255,255,0.9); border-left:4px solid #E8508F; padding:14px 16px; border-radius:10px; color:#333; font-size:14px; line-height:1.6; box-shadow:0 1px 3px rgba(0,0,0,0.05);">${query}</p>
            </div>

            <div style="text-align:center; margin-top:36px;">
              <a href="https://uniroseherbals.com" 
                style="background:linear-gradient(135deg,#47C363,#E8508F); color:white; text-decoration:none; padding:14px 34px; font-size:15px; border-radius:40px; font-weight:600; box-shadow:0 6px 14px rgba(72,196,99,0.3); display:inline-block; transition:all 0.3s ease;">
                🌿 View Dashboard
              </a>
            </div>
          </td>
        </tr>
      </tbody>

      <!-- Footer -->
      <tfoot>
        <tr>
          <td style="text-align:center; background:rgba(250,250,250,0.7); padding:20px 10px; font-size:12px; color:#666; border-top:1px solid rgba(232,80,143,0.1);">
            <p style="margin:0;">© ${new Date().getFullYear()} <strong style="color:#148E3C;">Unirose Herbals</strong>. All Rights Reserved.</p>
            <p style="margin:6px 0 0; color:#81C784;">This is an automated message — please do not reply.</p>
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
