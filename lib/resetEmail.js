
import nodemailer from "nodemailer";

export async function sendResetEmail(token) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const verificationUrl = `https://mesamovingexperts.com/admin/reset-password?token=${token}`;

    await transporter.sendMail({
      from: `"Make Moves Matter" <${process.env.SMTP_USER}>`,
      to:process.env.ADMIN_EMAIL,
      subject: "Password Reset Request",
      html: `
        <div style="font-family: 'Segoe UI', sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color:#FF7B00;">Password Request Detected</h2>
          <p>To complete reseting password by clicking the button below:</p>
          <p style="margin: 20px 0;">
            <a href="${verificationUrl}" style="background-color:#FF7B00;color:white;padding:12px 20px;border-radius:6px;text-decoration:none;font-weight:bold;">Verify IP</a>
          </p>
          <p>This link will expire in 15 minutes.</p>
          <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
          <p style="font-size:12px;color:#777;">If you did not attempt to login, please secure your account immediately.</p>
        </div>
      `,
    });

    console.log("✅ Pass Reset sent to");
  } catch (error) {
    console.error("❌ Failed to send password email:", error);
  }
}