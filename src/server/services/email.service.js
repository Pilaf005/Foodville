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
import User from "@/server/models/User";

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
 
export async function sendDistributorApplicationNotification(app) {
  const t = getTransporter();
  if (!t) return;
  try {
    const distributorTypeLabels = {
      area_distributor: "Area FMCG Distributor",
      super_stockist: "Super Stockist (State / Regional)",
      wholesaler_stockist: "Wholesaler / Master Stockist",
      modern_trade_partner: "Modern Trade & Supermarket Supplier",
      institutional_supplier: "Institutional / HORECA Supplier",
    };

    const godownLabels = {
      below_500: "Below 500 sq. ft.",
      "500_1500": "500 – 1,500 sq. ft.",
      "1500_3000": "1,500 – 3,000 sq. ft.",
      "3000_plus": "3,000+ sq. ft.",
    };

    await t.sendMail({
      from: env.smtp.from,
      to: "support@foodvilleindia.com",
      subject: `New FMCG Distributor Application - ${app.applicationId} (${app.firmName})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; color: #333;">
          <h2 style="color: #6B7F59; border-bottom: 2px solid #6B7F59; padding-bottom: 8px;">New FMCG Distributor & Channel Partner Application</h2>
          <p>A new distributor partnership application has been submitted on Foodville.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; width: 220px;">Application ID</td><td style="padding: 8px; border: 1px solid #ddd; font-family: monospace; font-weight: bold; color: #6B7F59;">${app.applicationId}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Firm / Business Name</td><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">${app.firmName}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Contact Person</td><td style="padding: 8px; border: 1px solid #ddd;">${app.fullName}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">GSTIN</td><td style="padding: 8px; border: 1px solid #ddd; font-family: monospace;">${app.companyGstin || "—"}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email</td><td style="padding: 8px; border: 1px solid #ddd;"><a href="mailto:${app.email}">${app.email}</a></td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone</td><td style="padding: 8px; border: 1px solid #ddd;"><a href="tel:${app.phone}">${app.phone}</a></td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Location (HQ)</td><td style="padding: 8px; border: 1px solid #ddd;">${app.city}, ${app.state} - ${app.pincode}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Target Territory / Coverage</td><td style="padding: 8px; border: 1px solid #ddd;">${app.territoryCovered || "City-wide / Local Radius"}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Distributor Category</td><td style="padding: 8px; border: 1px solid #ddd;">${distributorTypeLabels[app.distributorType] || app.distributorType}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Working Capital / Budget</td><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #388e3c;">${app.investmentBudget}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Godown / Warehouse Space</td><td style="padding: 8px; border: 1px solid #ddd;">${godownLabels[app.godownSpace] || app.godownSpace}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Logistics Fleet (Vehicles)</td><td style="padding: 8px; border: 1px solid #ddd;">${app.vehiclesCount}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Dedicated Field Sales Team</td><td style="padding: 8px; border: 1px solid #ddd;">${app.salesTeamSize} reps</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Existing FMCG Brands Handled</td><td style="padding: 8px; border: 1px solid #ddd;">${app.existingBrands || "—"}</td></tr>
            <tr style="background-color: #f9f9f9;"><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Years in Distribution</td><td style="padding: 8px; border: 1px solid #ddd;">${app.yearsInBusiness}</td></tr>
            <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Applicant Remarks</td><td style="padding: 8px; border: 1px solid #ddd;">${app.notes || "—"}</td></tr>
          </table>
        </div>
      `,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[email] Failed to send distributor application notification:", err?.message);
  }
}

/**
 * Sends order placement notification emails to both Admin and Customer.
 * Non-blocking: logs on failure or dev-mode instead of failing order placement.
 */
export async function sendOrderNotificationEmails(order) {
  try {
    let customerEmail = null;
    let customerName = order.address?.receiverName || "Valued Customer";

    // Lookup user email if not directly on the order object
    if (order.user) {
      const user = await User.findById(order.user).select("email fullName").lean();
      if (user?.email) {
        customerEmail = user.email;
        if (user.fullName && !customerName) customerName = user.fullName;
      }
    }

    const promises = [
      sendOrderPlacementAdminNotification(order, { customerEmail, customerName }),
    ];

    if (customerEmail) {
      promises.push(sendOrderConfirmationCustomerEmail(order, { customerEmail, customerName }));
    }

    await Promise.allSettled(promises);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[email] Error in sendOrderNotificationEmails:", err?.message || err);
  }
}

export async function sendOrderPlacementAdminNotification(order, { customerEmail, customerName }) {
  const t = getTransporter();
  const paymentMethodLabel = order.paymentMethod === "cod" ? "Cash on Delivery (COD)" : "Online Payment (Razorpay)";
  const paymentStatusLabel = order.paymentStatus === "paid" ? "✅ Paid" : "⏳ Pending Payment / COD";
  const dateStr = new Date(order.placedAt || Date.now()).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const fullAddress = [
    order.address?.houseFlat,
    order.address?.area,
    order.address?.landmark ? `Near ${order.address.landmark}` : null,
    order.address?.city,
    order.address?.state,
    order.address?.pincode ? `PIN: ${order.address.pincode}` : null,
  ].filter(Boolean).join(", ");

  const itemsHtml = (order.items || [])
    .map(
      (item, idx) => `
      <tr style="border-bottom: 1px solid #EAEAEA; ${idx % 2 === 0 ? "background:#FAFAFA;" : ""}">
        <td style="padding: 10px 12px; font-weight: 600; color: #2E2A26;">
          ${item.name}
          ${item.unit ? `<span style="display:block; font-size: 11px; font-weight: normal; color: #78716C;">(${item.unit})</span>` : ""}
        </td>
        <td style="padding: 10px 12px; text-align: center; color: #444;">${item.qty}</td>
        <td style="padding: 10px 12px; text-align: right; color: #444;">₹${item.price}</td>
        <td style="padding: 10px 12px; text-align: right; font-weight: 600; color: #2E2A26;">₹${item.price * item.qty}</td>
      </tr>
    `
    )
    .join("");

  // Build recipient list
  const recipients = ["support@foodvilleindia.com", ...(env.adminEmails || [])];
  const uniqueRecipients = [...new Set(recipients)].filter(Boolean);

  if (env.emailDevMode || !t) {
    // eslint-disable-next-line no-console
    console.log(
      `\n──────────────────────────────────────────\n📧 [DEV EMAIL] Admin Order Notification for ${order.orderId}\nTo: ${uniqueRecipients.join(", ")}\nTotal: ₹${order.amounts?.total}\nCustomer: ${customerName} (${customerEmail || "No Email"})\nPhone: ${order.address?.phone}\n──────────────────────────────────────────\n`
    );
    return;
  }

  try {
    await t.sendMail({
      from: env.smtp.from,
      to: uniqueRecipients.join(", "),
      subject: `🛒 New Order Placed: ${order.orderId} (₹${order.amounts?.total}) - ${customerName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F5F0; padding: 24px 12px; color: #2E2A26;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #E7E2D8; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <div style="background: #2C3624; padding: 24px; text-align: left; color: #ffffff;">
              <div style="font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #C5A880; margin-bottom: 4px;">Foodville Store Alert</div>
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff;">New Order Placed! 🎉</h1>
              <div style="font-size: 13px; color: #E0DEC3; margin-top: 4px;">Order ID: <strong style="color: #ffffff; font-family: monospace;">${order.orderId}</strong> • Placed: ${dateStr}</div>
            </div>

            <!-- Content Area -->
            <div style="padding: 24px;">
              
              <!-- Quick Stats Summary -->
              <div style="display: flex; background: #FAF8F5; border: 1px solid #EBE7DD; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 4px 8px; font-size: 12px; color: #78716C; width: 50%;">Total Amount: <strong style="font-size: 16px; color: #2C3624; display: block; margin-top: 2px;">₹${order.amounts?.total}</strong></td>
                    <td style="padding: 4px 8px; font-size: 12px; color: #78716C; width: 50%;">Payment Method: <strong style="font-size: 14px; color: #2C3624; display: block; margin-top: 2px;">${paymentMethodLabel}</strong></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 8px 4px; font-size: 12px; color: #78716C;">Payment Status: <span style="font-weight: 600; color: #444;">${paymentStatusLabel}</span></td>
                    <td style="padding: 8px 8px 4px; font-size: 12px; color: #78716C;">Total Items: <strong style="color: #2C3624;">${order.items?.length || 0} product(s)</strong></td>
                  </tr>
                </table>
              </div>

              <!-- Customer & Delivery Address -->
              <div style="margin-bottom: 24px;">
                <h3 style="margin: 0 0 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: #6B7F59; font-weight: 700;">👤 Customer & Shipping Information</h3>
                <div style="background: #ffffff; border: 1px solid #EDE9E1; border-radius: 10px; padding: 14px 16px; font-size: 13px; line-height: 1.6;">
                  <div><strong>Customer Name:</strong> ${customerName}</div>
                  <div><strong>Phone:</strong> <a href="tel:${order.address?.phone}" style="color: #6B7F59; text-decoration: none; font-weight: bold;">${order.address?.phone || "—"}</a></div>
                  <div><strong>Email:</strong> ${customerEmail ? `<a href="mailto:${customerEmail}" style="color: #6B7F59; text-decoration: none;">${customerEmail}</a>` : "Not provided"}</div>
                  <div style="margin-top: 6px; padding-top: 6px; border-top: 1px dashed #E5E0D4;"><strong>Shipping Address:</strong><br>${fullAddress}</div>
                </div>
              </div>

              <!-- Items Ordered Table -->
              <div style="margin-bottom: 24px;">
                <h3 style="margin: 0 0 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: #6B7F59; font-weight: 700;">📦 Ordered Products</h3>
                <table style="width: 100%; border-collapse: collapse; font-size: 13px; border: 1px solid #EAEAEA; border-radius: 8px; overflow: hidden;">
                  <thead>
                    <tr style="background: #F1ECE1; color: #4A453E; text-align: left;">
                      <th style="padding: 10px 12px; font-weight: 700;">Product</th>
                      <th style="padding: 10px 12px; text-align: center; font-weight: 700;">Qty</th>
                      <th style="padding: 10px 12px; text-align: right; font-weight: 700;">Price</th>
                      <th style="padding: 10px 12px; text-align: right; font-weight: 700;">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${itemsHtml}
                  </tbody>
                </table>
              </div>

              <!-- Billing Breakdown -->
              <div style="background: #FAF8F5; border: 1px solid #EDE8DE; border-radius: 10px; padding: 16px; margin-bottom: 24px;">
                <table style="width: 100%; font-size: 13px; line-height: 1.8;">
                  <tr>
                    <td style="color: #78716C;">Items Subtotal</td>
                    <td style="text-align: right; font-weight: 600; color: #2E2A26;">₹${order.amounts?.subtotal}</td>
                  </tr>
                  ${
                    order.amounts?.discount > 0
                      ? `<tr>
                          <td style="color: #2e7d32;">Coupon Discount ${order.amounts?.couponCode ? `(${order.amounts.couponCode})` : ""}</td>
                          <td style="text-align: right; font-weight: 600; color: #2e7d32;">-₹${order.amounts.discount}</td>
                        </tr>`
                      : ""
                  }
                  <tr>
                    <td style="color: #78716C;">Shipping Fee</td>
                    <td style="text-align: right; font-weight: 600; color: #2E2A26;">${order.amounts?.delivery === 0 ? '<span style="color:#2e7d32;">FREE</span>' : `₹${order.amounts?.delivery}`}</td>
                  </tr>
                  <tr style="border-top: 1px solid #DED8CA; font-size: 15px;">
                    <td style="padding-top: 8px; font-weight: 800; color: #2C3624;">Total Order Value</td>
                    <td style="padding-top: 8px; text-align: right; font-weight: 800; color: #2C3624; font-size: 17px;">₹${order.amounts?.total}</td>
                  </tr>
                </table>
              </div>

              <!-- Admin Action Button -->
              <div style="text-align: center; margin-top: 24px;">
                <a href="${env.siteUrl}/orders/${order.orderId}" style="display: inline-block; background: #6B7F59; color: #ffffff; padding: 12px 28px; border-radius: 10px; text-decoration: none; font-weight: 700; font-size: 14px; box-shadow: 0 2px 6px rgba(107,127,89,0.3);">
                  View Order Details &rarr;
                </a>
              </div>

            </div>

            <!-- Footer -->
            <div style="background: #F1ECE1; padding: 14px; text-align: center; font-size: 11px; color: #8C8275; border-top: 1px solid #E5DFD1;">
              Foodville Processing &amp; Dispatch Facility • Ghaziabad, UP, India<br>
              Automated Operations Dispatch Alert
            </div>

          </div>
        </div>
      `,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[email] Failed to send admin order notification:", err?.message);
  }
}

export async function sendOrderConfirmationCustomerEmail(order, { customerEmail, customerName }) {
  const t = getTransporter();
  const paymentMethodLabel = order.paymentMethod === "cod" ? "Cash on Delivery (Pay on arrival)" : "Online Payment (Paid via Razorpay)";
  const dateStr = new Date(order.placedAt || Date.now()).toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const fullAddress = [
    order.address?.houseFlat,
    order.address?.area,
    order.address?.landmark ? `Near ${order.address.landmark}` : null,
    order.address?.city,
    order.address?.state,
    order.address?.pincode ? `PIN: ${order.address.pincode}` : null,
  ].filter(Boolean).join(", ");

  const itemsHtml = (order.items || [])
    .map(
      (item, idx) => `
      <tr style="border-bottom: 1px solid #EFEFEF; ${idx % 2 === 0 ? "background:#FCFBFA;" : ""}">
        <td style="padding: 12px; font-weight: 600; color: #2E2A26;">
          ${item.name}
          ${item.unit ? `<span style="display:block; font-size: 11px; font-weight: normal; color: #8A8275;">(${item.unit})</span>` : ""}
        </td>
        <td style="padding: 12px; text-align: center; color: #555;">${item.qty}</td>
        <td style="padding: 12px; text-align: right; color: #555;">₹${item.price}</td>
        <td style="padding: 12px; text-align: right; font-weight: 600; color: #2E2A26;">₹${item.price * item.qty}</td>
      </tr>
    `
    )
    .join("");

  if (env.emailDevMode || !t) {
    // eslint-disable-next-line no-console
    console.log(
      `\n──────────────────────────────────────────\n📧 [DEV EMAIL] Customer Order Confirmation for ${order.orderId}\nTo: ${customerEmail}\nCustomer: ${customerName}\nTotal: ₹${order.amounts?.total}\n──────────────────────────────────────────\n`
    );
    return;
  }

  try {
    await t.sendMail({
      from: env.smtp.from,
      to: customerEmail,
      subject: `🎉 Order Confirmed! Your Foodville Order #${order.orderId}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #FAF7F2; padding: 24px 12px; color: #2E2A26;">
          <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #EDE6D9; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.04);">
            
            <!-- Branded Header -->
            <div style="background: #56684A; padding: 28px 24px; text-align: center; color: #ffffff;">
              <div style="display: inline-block; font-size: 24px; font-weight: 900; letter-spacing: -0.5px; color: #ffffff; margin-bottom: 6px;">
                Foodville
              </div>
              <h1 style="margin: 4px 0 0; font-size: 20px; font-weight: 700; color: #ffffff;">Thank You For Your Order! 🌿</h1>
              <p style="margin: 8px 0 0; font-size: 13px; color: #E5ECD8;">
                We've received your order and our processing team is preparing your pure spices and dry fruits.
              </p>
            </div>

            <!-- Main Body -->
            <div style="padding: 24px;">
              
              <!-- Greeting & Order Badge -->
              <div style="margin-bottom: 20px;">
                <p style="margin: 0 0 8px; font-size: 15px; font-weight: 600; color: #2E2A26;">Hi ${customerName},</p>
                <p style="margin: 0; font-size: 13px; color: #686259; line-height: 1.5;">
                  Your order <strong style="color: #56684A; font-family: monospace;">#${order.orderId}</strong> was placed on <strong>${dateStr}</strong>. Here is your order summary and invoice receipt.
                </p>
              </div>

              <!-- Delivery Destination -->
              <div style="background: #FBF9F6; border: 1px solid #EEE9DF; border-radius: 12px; padding: 14px 16px; margin-bottom: 20px; font-size: 13px; line-height: 1.5;">
                <div style="font-weight: 700; color: #56684A; margin-bottom: 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">📍 Delivering To:</div>
                <div style="font-weight: 600; color: #2E2A26;">${order.address?.receiverName} (${order.address?.phone})</div>
                <div style="color: #686259; margin-top: 2px;">${fullAddress}</div>
                <div style="margin-top: 8px; font-size: 12px; color: #56684A; font-weight: 600;">
                  Payment Mode: ${paymentMethodLabel}
                </div>
              </div>

              <!-- Product Receipt Table -->
              <div style="margin-bottom: 20px;">
                <table style="width: 100%; border-collapse: collapse; font-size: 13px; border: 1px solid #EFEAE1; border-radius: 10px; overflow: hidden;">
                  <thead>
                    <tr style="background: #F4EFE6; color: #4A453E; text-align: left;">
                      <th style="padding: 10px 12px; font-weight: 700;">Item</th>
                      <th style="padding: 10px 12px; text-align: center; font-weight: 700;">Qty</th>
                      <th style="padding: 10px 12px; text-align: right; font-weight: 700;">Price</th>
                      <th style="padding: 10px 12px; text-align: right; font-weight: 700;">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${itemsHtml}
                  </tbody>
                </table>
              </div>

              <!-- Pricing Breakdown -->
              <div style="background: #FAF7F2; border: 1px solid #EDE6D9; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
                <table style="width: 100%; font-size: 13px; line-height: 1.8;">
                  <tr>
                    <td style="color: #7A7368;">Subtotal</td>
                    <td style="text-align: right; font-weight: 600; color: #2E2A26;">₹${order.amounts?.subtotal}</td>
                  </tr>
                  ${
                    order.amounts?.discount > 0
                      ? `<tr>
                          <td style="color: #2e7d32;">Coupon Discount ${order.amounts?.couponCode ? `(${order.amounts.couponCode})` : ""}</td>
                          <td style="text-align: right; font-weight: 600; color: #2e7d32;">-₹${order.amounts.discount}</td>
                        </tr>`
                      : ""
                  }
                  <tr>
                    <td style="color: #7A7368;">Delivery Fee</td>
                    <td style="text-align: right; font-weight: 600; color: #2E2A26;">${order.amounts?.delivery === 0 ? '<span style="color:#2e7d32;">FREE</span>' : `₹${order.amounts?.delivery}`}</td>
                  </tr>
                  <tr style="border-top: 1px solid #DDD6C8; font-size: 15px;">
                    <td style="padding-top: 8px; font-weight: 800; color: #2E2A26;">Total Amount</td>
                    <td style="padding-top: 8px; text-align: right; font-weight: 800; color: #56684A; font-size: 17px;">₹${order.amounts?.total}</td>
                  </tr>
                </table>
              </div>

              <!-- Dispatch Promise Banner -->
              <div style="background: #F0F4EC; border: 1px solid #D5DFCE; border-radius: 10px; padding: 12px 16px; font-size: 12px; color: #3E5132; margin-bottom: 24px;">
                🚚 <strong>Dispatch Promise:</strong> Orders are freshly packed and dispatched from our Ghaziabad ISO 9001:2015 processing facility within 24–48 working hours.
              </div>

              <!-- Action Button -->
              <div style="text-align: center; margin-bottom: 8px;">
                <a href="${env.siteUrl}/orders/${order.orderId}" style="display: inline-block; background: #56684A; color: #ffffff; padding: 13px 32px; border-radius: 12px; text-decoration: none; font-weight: 700; font-size: 14px; box-shadow: 0 2px 8px rgba(86,104,74,0.3);">
                  Track Your Order &rarr;
                </a>
              </div>

            </div>

            <!-- Footer -->
            <div style="background: #FAF7F2; border-top: 1px solid #EDE6D9; padding: 18px 24px; text-align: center; font-size: 12px; color: #8A8275; line-height: 1.6;">
              Need help with your order? Reply to this email or write to <a href="mailto:support@foodvilleindia.com" style="color: #56684A; font-weight: 600; text-decoration: none;">support@foodvilleindia.com</a>.<br>
              <strong>Foodville India</strong> • Ghaziabad, UP 201014
            </div>

          </div>
        </div>
      `,
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[email] Failed to send customer order confirmation email:", err?.message);
  }
}


