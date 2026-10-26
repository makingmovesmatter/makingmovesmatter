import nodemailer from "nodemailer";
import { generateAdminEmailHtml, parseMessageDetails } from "./emailTemplate.js";

export async function sendAdminNotification(estimate) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const parsed = parseMessageDetails(estimate.message);
    const isUrgent = parsed.isUrgent;
    const subjectPrefix = isUrgent ? "[URGENT] " : "[NEW QUOTE] ";
    const serviceName = estimate.service || "Moving Service";
    const customerFullName =
      `${estimate.firstname || ""} ${estimate.lastname || ""}`.trim() ||
      "Prospective Client";
    const routeSummary = `${estimate.origin || "Mesa"} to ${
      estimate.destination || "AZ"
    }`;

    await transporter.sendMail({
      from: `"Make Moves Matter Dispatch" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: estimate.email,
      subject: `${subjectPrefix}${serviceName} - ${customerFullName} (${routeSummary})`,
      html: generateAdminEmailHtml(estimate),
    });

    console.log(
      "[SUCCESS] Admin email notification sent successfully to",
      process.env.ADMIN_EMAIL
    );
  } catch (error) {
    console.error("[ERROR] Failed to send admin email notification:", error);
  }
}
