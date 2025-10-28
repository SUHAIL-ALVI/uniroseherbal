import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, contact, email, description } = data;

    // Basic server-side validation
    if (!name || !contact || !email || !description) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Transporter (Gmail example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // HTML email template — customize as needed
    const html = `
      <div style="font-family: Arial, sans-serif; color: #222; padding: 18px;">
        <header style="display:flex; align-items:center; gap:12px;">
          <div style="width:56px;height:56px;border-radius:10px;background:#0070f3;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;">
            ${process.env.COMPANY_INITIALS || "C"}
          </div>
          <div>
            <h3 style="margin:0; color:#0070f3">New Website Query</h3>
            <small style="color:#666">Received on ${new Date().toLocaleString()}</small>
          </div>
        </header>

        <section style="margin-top:12px;">
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Contact:</strong> ${escapeHtml(contact)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Description:</strong></p>
          <div style="margin-top:6px;padding:12px;background:#f6f8fb;border-radius:8px;">${escapeHtml(description).replace(/\n/g, "<br/>")}</div>
        </section>

        <footer style="margin-top:18px;color:#888;font-size:12px;">
          This message was generated from your website contact form.
        </footer>
      </div>
    `;

    const mailOptions = {
      from: `"Website" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Query from ${name}`,
      html,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("send-query error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

// Helper to avoid HTML injection from user content
function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
