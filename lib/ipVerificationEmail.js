
import nodemailer from "nodemailer";

export async function sendIPVerificationEmail(token, ip) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const verificationUrl = `http://localhost:3000/api/auth/verify-ip?token=${token}`;

    await transporter.sendMail({
      from: `"Make Moves Matter" <${process.env.SMTP_USER}>`,
      to:process.env.ADMIN_EMAIL,
      subject: "New IP Verification Required",
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color:#FF7B00;">New IP Login Attempt Detected</h2>
          <p>We detected a login attempt from a new IP address: <b>${ip}</b>.</p>
          <p>To complete your login, please verify this IP by clicking the button below:</p>
          <p style="margin: 20px 0;">
            <a href="${verificationUrl}" style="background-color:#FF7B00;color:white;padding:12px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">Verify IP</a>
          </p>
          <p>This link will expire in 15 minutes.</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
          <p style="font-size:12px;color:#777;">If you did not attempt to login, please secure your account immediately.</p>
        </div>
      `,
    });

    console.log("✅ IP verification email sent to");
  } catch (error) {
    console.error("❌ Failed to send IP verification email:", error);
  }
}