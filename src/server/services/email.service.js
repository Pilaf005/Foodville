/**
 * Transactional email via Nodemailer/SMTP (Gmail).
 *
 * Behaviour:
 *  - EMAIL_DEV_MODE=true (or no SMTP_HOST): the code is printed to the server
 *    console instead of emailed — handy for local testing.
 *  - Otherwise it sends for real. If sending fails outside production we fall
 *    back to logging the code so local development is never blocked; in
 *    production a failure is surfaced as a proper error.
 */
import nodemailer from "nodemailer";
import { env } from "@/server/config/env";
import { AppError } from "@/server/utils/apiError";

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;
  if (!env.smtp.host) return null;
  transporter = nodemailer.createTransport({
    host: env.smtp.host,
    port: env.smtp.port,
    secure: env.smtp.secure, // true => 465, false => 587 (STARTTLS)
    auth: env.smtp.user ? { user: env.smtp.user, pass: env.smtp.pass } : undefined,
  });
  return transporter;
}

function logCode(to, code, why) {
  // eslint-disable-next-line no-console
  console.log(
    `\n──────────────────────────────────────────\n📧  OTP for ${to}: ${code}   (${why})\n──────────────────────────────────────────\n`
  );
}

function otpEmailHtml(code, minutes) {
  return `
  <div style="font-family:Inter,system-ui,sans-serif;background:#FAF7F2;padding:32px">
    <div style="max-width:480px;margin:0 auto;background:#fff;border:1px solid #EDE6D9;border-radius:16px;padding:32px">
      <h1 style="margin:0 0 8px;font-size:20px;color:#2E2A26">Your Foodville code</h1>
      <p style="margin:0 0 24px;font-size:14px;color:#8A8275">
        Use the code below to sign in. It expires in ${minutes} minutes.
      </p>
      <div style="text-align:center;margin:24px 0">
        <span style="display:inline-block;font-size:32px;font-weight:700;letter-spacing:10px;
                     color:#6B7F59;background:#FAF7F2;border:1px solid #EDE6D9;
                     border-radius:12px;padding:16px 24px">${code}</span>
      </div>
      <p style="margin:24px 0 0;font-size:12px;color:#A39E93">
        If you didn't request this, you can safely ignore this email — nobody can access your account without the code.
      </p>
    </div>
  </div>`;
}

export async function sendOtpEmail({ to, code, expiresInMinutes }) {
  // Dev/console mode
  if (env.emailDevMode || !env.smtp.host) {
    logCode(to, code, "EMAIL_DEV_MODE — not emailed");
    return { delivered: false, dev: true };
  }

  try {
    const t = getTransporter();
    await t.sendMail({
      from: env.smtp.from,
      to,
      subject: `${code} is your Foodville verification code`,
      text: `Your Foodville verification code is ${code}. It expires in ${expiresInMinutes} minutes.`,
      html: otpEmailHtml(code, expiresInMinutes),
    });
    return { delivered: true };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[email] SMTP send failed:", err?.message);
    if (!env.isProd) {
      logCode(to, code, "SMTP failed — dev fallback");
      return { delivered: false, dev: true };
    }
    throw new AppError(
      "We couldn't send the verification email. Please try again in a moment.",
      502,
      "EMAIL_SEND_FAILED"
    );
  }
}
 
export async function sendBulkInquiryNotification(inquiry) {
  const t = getTransporter();
  if (!t) return;
  try {
    await t.sendMail({
      from: env.smtp.from,
      to: "support@foodvilleindia.com",
      subject: `New Bulk Order Inquiry - ${inquiry.inquiryId}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333;">
          <h2 style="color: #6B7F59; border-bottom: 2px solid #6B7F59; padding-bottom: 8px;">New Bulk Order Quotation Request</h2>
          <p>A new bulk order quotation request has been submitted on Foodville.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 200px;">Inquiry ID</td><td style="padding: 8px; border: 1px solid #ddd; font-family: monospace;">${inquiry.inquiryId}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Full Name</td><td style="padding: 8px; border: 1px solid #ddd;">${inquiry.fullName}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company Name</td><td style="padding: 8px; border: 1px solid #ddd;">${inquiry.companyName || "—"}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company GSTIN</td><td style="padding: 8px; border: 1px solid #ddd;">${inquiry.gstin || "—"}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${inquiry.email}">${inquiry.email}</a></td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${inquiry.phone}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Product Name</td><td style="padding: 8px; border: 1px solid #ddd;">${inquiry.productName}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Quantity Required</td><td style="padding: 8px; border: 1px solid #ddd;">${inquiry.quantityKg} kg</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Delivery Pincode</td><td style="padding: 8px; border: 1px solid #ddd;">${inquiry.deliveryPincode}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Additional Notes</td><td style="padding: 8px; border: 1px solid #ddd;">${inquiry.notes || "—"}</td></tr>
          </table>
        </div>
      `,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[email] Failed to send bulk inquiry notification:", err?.message);
  }
}
 
export async function sendFranchiseApplicationNotification(app) {
  const t = getTransporter();
  if (!t) return;
  try {
    await t.sendMail({
      from: env.smtp.from,
      to: "support@foodvilleindia.com",
      subject: `New Franchise Application - ${app.applicationId}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333;">
          <h2 style="color: #6B7F59; border-bottom: 2px solid #6B7F59; padding-bottom: 8px;">New Franchise Partner Application</h2>
          <p>A new franchise partner application has been submitted on Foodville.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 200px;">Application ID</td><td style="padding: 8px; border: 1px solid #ddd; font-family: monospace;">${app.applicationId}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Full Name</td><td style="padding: 8px; border: 1px solid #ddd;">${app.fullName}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company Name</td><td style="padding: 8px; border: 1px solid #ddd;">${app.companyName || "—"}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company GSTIN</td><td style="padding: 8px; border: 1px solid #ddd;">${app.companyGstin || "—"}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${app.email}">${app.email}</a></td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;">${app.phone}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Location</td><td style="padding: 8px; border: 1px solid #ddd;">${app.city}, ${app.state} - ${app.pincode}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Investment Budget</td><td style="padding: 8px; border: 1px solid #ddd;">${app.investmentBudget}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Property Status</td><td style="padding: 8px; border: 1px solid #ddd;">${app.propertyStatus}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Experience</td><td style="padding: 8px; border: 1px solid #ddd;">${app.experience || "—"}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Additional Notes</td><td style="padding: 8px; border: 1px solid #ddd;">${app.notes || "—"}</td></tr>
          </table>
        </div>
      `,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[email] Failed to send franchise application notification:", err?.message);
  }
}
