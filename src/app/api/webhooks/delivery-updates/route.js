import { ok, withRoute } from "@/server/utils/apiResponse";
import Order from "@/server/models/Order";
import { badRequest } from "@/server/utils/apiError";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Maps Shiprocket webhook statuses to Foodville's Order statuses.
 */
function mapShiprocketStatus(srStatus) {
  const status = String(srStatus).toLowerCase().trim();

  if (["delivered"].includes(status)) {
    return "delivered";
  }
  if (["out for delivery", "out_for_delivery", "outfordelivery"].includes(status)) {
    return "out_for_delivery";
  }
  if (["shipped", "picked up", "picked_up", "in transit", "in_transit", "awb assigned"].includes(status)) {
    return "shipped";
  }
  if (["cancelled", "canceled", "rto"].includes(status)) {
    return "cancelled";
  }
  return null; // Ignore minor/intermediate statuses (e.g. "manifested")
}

/**
 * POST /api/webhooks/delivery-updates
 * Receives real-time tracking events from Shiprocket.
 * Note: Naming complies with Shiprocket's rule of not using keywords like 'shiprocket' in the URL.
 */
export const POST = withRoute(async (req) => {
  const body = await req.json().catch(() => ({}));

  console.log("[Shiprocket Webhook] Received tracking update payload:", body);

  const awb = body.awb || body.awb_code;
  const currentStatus = body.current_status || body.status;
  const activity = body.current_status_activity || body.activity || "";
  const location = body.current_status_location || body.location || "";

  if (!awb) {
    throw badRequest("Missing AWB code tracking identifier.");
  }

  // Find order associated with this AWB Code
  const orderDoc = await Order.findOne({ "shipping.awbCode": awb });
  if (!orderDoc) {
    // Return 200 to acknowledge receipt even if order is not in this database
    return ok({ ignored: true, reason: `No order found with AWB code: ${awb}` });
  }

  const mappedStatus = mapShiprocketStatus(currentStatus);
  const note = [
    activity ? `Activity: ${activity}` : null,
    location ? `Location: ${location}` : null,
  ].filter(Boolean).join(" | ") || `Status changed to ${currentStatus}`;

  // 1. Always append the detailed update to order timeline log
  orderDoc.timeline.push({
    status: mappedStatus || orderDoc.status, // keep current status if not mapped to a top-level state
    at: new Date(),
    note: `[Shiprocket Webhook] ${note}`,
  });

  // 2. Update top-level order status if it changed and is mapped to a core state
  if (mappedStatus && mappedStatus !== orderDoc.status) {
    console.log(`[Shiprocket Webhook] Transitioning order ${orderDoc.orderId} status from ${orderDoc.status} to ${mappedStatus}`);
    orderDoc.status = mappedStatus;
  }

  await orderDoc.save();

  return ok({ success: true, orderId: orderDoc.orderId });
});
