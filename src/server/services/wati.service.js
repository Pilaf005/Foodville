/**
 * WATI WhatsApp Automation Service for Foodville.
 *
 * Handles sending automated WhatsApp notifications via WATI's WhatsApp Business API.
 * Designed to be non-blocking and fault-tolerant: notifications never interrupt
 * or fail order checkout / payment processing.
 */
import { env } from "@/server/config/env";

/**
 * Normalizes Indian phone numbers into standard E.164 without '+'
 * as expected by WATI API (e.g. 919876543210).
 *
 * @param {string|number} phone
 * @returns {string|null} Sanitized phone string or null if invalid
 */
export function formatWhatsAppNumber(phone) {
  if (!phone) return null;
  let digits = String(phone).replace(/\D/g, "");

  // If starts with leading 0 (e.g. 09876543210), strip it
  if (digits.length === 11 && digits.startsWith("0")) {
    digits = digits.slice(1);
  }

  // If 10 digits (standard Indian mobile), prepend 91
  if (digits.length === 10) {
    digits = "91" + digits;
  }

  // Valid length check (most international WhatsApp numbers are 10-15 digits)
  if (digits.length < 10 || digits.length > 15) {
    return null;
  }

  return digits;
}

/**
 * Formats order items into a concise string for WhatsApp.
 * e.g. "2x Kashmiri Walnuts (500g), 1x California Almonds (250g)"
 *
 * @param {Array} items
 * @param {number} maxLen
 * @returns {string}
 */
export function formatOrderItems(items = [], maxLen = 300) {
  if (!Array.isArray(items) || items.length === 0) {
    return "Assorted Items";
  }

  const parts = items.map((item) => {
    const qty = item.qty || 1;
    const name = item.name || "Item";
    const unit = item.unit ? ` (${item.unit})` : "";
    return `${qty}x ${name}${unit}`;
  });

  const joined = parts.join(", ");
  if (joined.length <= maxLen) {
    return joined;
  }

  // Truncate cleanly if too long for WhatsApp parameter
  return joined.slice(0, maxLen - 3) + "...";
}

/**
 * Sends an Order Confirmation WhatsApp template message to the customer.
 * Non-blocking: logs warnings on failures rather than throwing.
 *
 * @param {object} order - Mongoose Order document or plain object
 * @returns {Promise<{ success: boolean, data?: any, error?: string }>}
 */
export async function sendOrderConfirmationWhatsApp(order) {
  try {
    const { endpoint, accessToken, templateOrderConfirmation } = env.wati || {};

    if (!endpoint || !accessToken) {
      console.warn("[WATI] Service skipped: WATI_API_ENDPOINT or WATI_ACCESS_TOKEN is missing.");
      return { success: false, error: "WATI credentials not configured." };
    }

    const rawPhone = order.address?.phone || order.phone;
    const whatsappNumber = formatWhatsAppNumber(rawPhone);

    if (!whatsappNumber) {
      console.warn(`[WATI] Order ${order.orderId}: Invalid phone number "${rawPhone}". Skipping WhatsApp.`);
      return { success: false, error: "Invalid phone number." };
    }

    const receiverName = order.address?.receiverName || "Valued Customer";
    const orderId = order.orderId || String(order._id);
    const totalAmount = String(order.amounts?.total ?? 0);
    const itemsSummary = formatOrderItems(order.items);
    const city = order.address?.city || "your area";
    const pincode = String(order.address?.pincode || "");

    const customParams = [
      { name: "name", value: receiverName },
      { name: "order_id", value: orderId },
      { name: "total", value: totalAmount },
      { name: "items", value: itemsSummary },
      { name: "city", value: city },
      { name: "pincode", value: pincode },
    ];

    const templateName = templateOrderConfirmation || "foodville_order_confirmation";
    const broadcastName = `order_confirm_${orderId}`;

    const authHeader = accessToken.startsWith("Bearer ") ? accessToken : `Bearer ${accessToken}`;

    // WATI supports single message via sendTemplateMessage?whatsappNumber={phone}
    const apiUrl = `${endpoint}/api/v1/sendTemplateMessage?whatsappNumber=${whatsappNumber}`;

    const payload = {
      template_name: templateName,
      broadcast_name: broadcastName,
      parameters: customParams,
      customParams,
    };

    console.log(`[WATI] Sending WhatsApp order confirmation for ${orderId} to ${whatsappNumber}...`);

    const res = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authHeader,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok || data.result === false || data.result === "error") {
      console.error(`[WATI Error] Failed to send order confirmation for ${orderId}:`, {
        status: res.status,
        statusText: res.statusText,
        data,
      });
      return { success: false, error: data.message || `HTTP ${res.status}` };
    }

    console.log(`[WATI] WhatsApp order confirmation successfully queued for ${orderId} (${whatsappNumber})`);
    return { success: true, data };
  } catch (err) {
    console.error(`[WATI Exception] Unexpected error sending WhatsApp confirmation for ${order?.orderId}:`, err?.message || err);
    return { success: false, error: err?.message || String(err) };
  }
}

/**
 * Sends a New Order Alert WhatsApp template message to the Owner / Admin numbers.
 * Non-blocking: logs warnings on failures rather than throwing.
 *
 * @param {object} order - Mongoose Order document or plain object
 * @returns {Promise<Array<{ phone: string, success: boolean, data?: any, error?: string }>>}
 */
export async function sendAdminOrderAlertWhatsApp(order) {
  const { endpoint, accessToken, templateOrderConfirmation, adminWhatsAppNumbers = [] } = env.wati || {};

  if (!endpoint || !accessToken || !adminWhatsAppNumbers.length) {
    return [];
  }

  const receiverName = order.address?.receiverName || "Customer";
  const orderId = order.orderId || String(order._id);
  const totalAmount = String(order.amounts?.total ?? 0);
  const itemsSummary = formatOrderItems(order.items);
  const city = order.address?.city || "Customer Area";
  const pincode = String(order.address?.pincode || "");
  const authHeader = accessToken.startsWith("Bearer ") ? accessToken : `Bearer ${accessToken}`;
  const templateName = templateOrderConfirmation || "foodville_order_confirm";

  const customParams = [
    { name: "name", value: `Admin (New Order: ${receiverName})` },
    { name: "order_id", value: orderId },
    { name: "total", value: totalAmount },
    { name: "items", value: itemsSummary },
    { name: "city", value: city },
    { name: "pincode", value: pincode },
  ];

  const results = [];

  for (const rawPhone of adminWhatsAppNumbers) {
    const adminPhone = formatWhatsAppNumber(rawPhone);
    if (!adminPhone) continue;

    try {
      const apiUrl = `${endpoint}/api/v1/sendTemplateMessage?whatsappNumber=${adminPhone}`;
      const payload = {
        template_name: templateName,
        broadcast_name: `admin_alert_${orderId}`,
        parameters: customParams,
        customParams,
      };

      console.log(`[WATI] Sending Admin WhatsApp Alert for ${orderId} to ${adminPhone}...`);

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authHeader,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.result === false || data.result === "error") {
        console.error(`[WATI Admin Alert Error] Order ${orderId} -> ${adminPhone}:`, data);
        results.push({ phone: adminPhone, success: false, error: data.message || `HTTP ${res.status}` });
      } else {
        console.log(`[WATI] Admin WhatsApp Alert successfully queued for ${orderId} (${adminPhone})`);
        results.push({ phone: adminPhone, success: true, data });
      }
    } catch (err) {
      console.error(`[WATI Admin Alert Exception] Order ${orderId} -> ${adminPhone}:`, err?.message || err);
      results.push({ phone: adminPhone, success: false, error: err?.message || String(err) });
    }
  }

  return results;
}

/**
 * Triggers dual WhatsApp notifications for both Customer and Owner/Admin.
 * Completely fault-tolerant and non-blocking.
 *
 * @param {object} order
 */
export async function sendOrderWhatsAppNotifications(order) {
  return Promise.allSettled([
    sendOrderConfirmationWhatsApp(order),
    sendAdminOrderAlertWhatsApp(order),
  ]);
}

const watiService = {
  formatWhatsAppNumber,
  formatOrderItems,
  sendOrderConfirmationWhatsApp,
  sendAdminOrderAlertWhatsApp,
  sendOrderWhatsAppNotifications,
};

export default watiService;
