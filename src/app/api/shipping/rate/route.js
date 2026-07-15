import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { getCart } from "@/server/controllers/cart.controller";
import { getShippingRate } from "@/server/services/shiprocket.service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function estimateCartWeight(items) {
  let totalWeight = 0;
  for (const item of items) {
    let itemWeight = 0.25; // default 250g fallback
    
    const unitStr = String(item.unit || "").toLowerCase();
    const weightMatch = unitStr.match(/(\d+(?:\.\d+)?)\s*(g|kg|ml|l)/);
    if (weightMatch) {
      const val = parseFloat(weightMatch[1]);
      const unit = weightMatch[2];
      if (unit === "g" || unit === "ml") {
        itemWeight = val / 1000;
      } else if (unit === "kg" || unit === "l") {
        itemWeight = val;
      }
    }
    totalWeight += itemWeight * (item.qty || 1);
  }
  return Math.max(0.1, totalWeight); // minimum 100g
}

// GET /api/shipping/rate?pincode=XXXXXX&paymentMethod=cod|razorpay
export const GET = withRoute(async (req) => {
  try {
    const { userId } = await requireAuth(req);
    
    const { searchParams } = new URL(req.url);
    const pincode = searchParams.get("pincode");
    const paymentMethod = searchParams.get("paymentMethod") || "razorpay";
    
    console.log(`[Rate API] Requested pincode: ${pincode}, paymentMethod: ${paymentMethod}, user: ${userId}`);

    if (!pincode) {
      console.log(`[Rate API] No pincode provided, returning default fallback`);
      return ok({ deliveryCharge: 40 }); // default fallback
    }

    // 1. Get user's cart
    const cartData = await getCart(userId);
    if (!cartData.items || cartData.items.length === 0) {
      console.log(`[Rate API] Empty cart, returning default fallback`);
      return ok({ deliveryCharge: 40 });
    }

    // 2. Estimate total weight in kgs
    const weight = estimateCartWeight(cartData.items);
    console.log(`[Rate API] Estimated cart weight: ${weight} kg`);

    // 3. Query Shiprocket Courier Serviceability
    const isCod = paymentMethod === "cod";
    const rateDetails = await getShippingRate({
      deliveryPincode: Number(pincode),
      weight,
      isCod
    });

    console.log(`[Rate API] Calculated Shiprocket rate details:`, rateDetails);

    if (rateDetails) {
      return ok({
        ...rateDetails,
        estimatedWeight: weight,
        isCustomRate: true
      });
    } else {
      return ok({
        baseDeliveryCharge: 40,
        codCharge: 0,
        gst: 0,
        deliveryCharge: 40,
        estimatedWeight: weight,
        isCustomRate: false
      });
    }
  } catch (err) {
    console.error("[Rate API Error]", err);
    return ok({
      baseDeliveryCharge: 40,
      codCharge: 0,
      gst: 0,
      deliveryCharge: 40,
      error: err.message
    });
  }
});
