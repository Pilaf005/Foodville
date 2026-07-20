/**
 * Server-authoritative pricing.
 *
 * The client NEVER tells us what something costs. We take productId/qty/unit,
 * re-read the real price from the catalog, and compute the bill here. This is
 * what stops someone editing the request and buying a ₹900 combo for ₹1.
 */
import Product from "@/server/models/Product";
import { env } from "@/server/config/env";
import { badRequest } from "@/server/utils/apiError";
import { getShippingRate } from "@/server/services/shiprocket.service";

/** Resolve the price for a chosen unit/variant, falling back to the base price. */
function resolveVariant(product, unit) {
  if (unit && Array.isArray(product.units)) {
    const match = product.units.find((u) => u.unit === unit);
    if (match) return { unit: match.unit, price: match.price, mrp: match.mrp ?? match.price };
  }
  return { unit: product.unit || "", price: product.price, mrp: product.mrp ?? product.price };
}

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
  return Math.max(0.1, totalWeight);
}

/**
 * Turn [{ productId, qty, unit }] into priced line items + a bill.
 * Throws if a product is missing, inactive, or out of stock.
 */
export async function priceItems(rawItems, { pincode = null, paymentMethod = "razorpay" } = {}) {
  if (!Array.isArray(rawItems) || rawItems.length === 0) {
    throw badRequest("Your cart is empty.");
  }

  const ids = [...new Set(rawItems.map((i) => Number(i.productId)))];
  const products = await Product.find({ numericId: { $in: ids }, isActive: true }).lean();
  const byId = new Map(products.map((p) => [p.numericId, p]));

  const items = rawItems.map((raw) => {
    const product = byId.get(Number(raw.productId));
    if (!product) throw badRequest(`A product in your cart is no longer available.`);

    const qty = Math.max(1, Number(raw.qty) || 1);
    if (product.stock != null && product.stock < qty) {
      throw badRequest(`"${product.name}" only has ${product.stock} left in stock.`);
    }

    const variant = resolveVariant(product, raw.unit);

    return {
      productId: product.numericId,
      slug: product.slug,
      name: product.name,
      brand: product.brand || "Foodville",
      image: product.image,
      unit: variant.unit,
      price: variant.price,
      mrp: variant.mrp,
      qty,
    };
  });

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const mrpTotal = items.reduce((sum, i) => sum + (i.mrp ?? i.price) * i.qty, 0);
  const savings = Math.max(0, mrpTotal - subtotal);

  let baseDeliveryCharge = env.deliveryCharge;
  let codCharge = 0;
  let gst = 0;
  let deliveryCharge = baseDeliveryCharge;

  // If pincode is provided, calculate dynamic Shiprocket rate as delivery charge
  if (pincode) {
    const weight = estimateCartWeight(items);
    const isCod = paymentMethod === "cod";
    const srRate = await getShippingRate({
      deliveryPincode: Number(pincode),
      weight,
      isCod
    });
    if (srRate !== null) {
      baseDeliveryCharge = srRate.baseDeliveryCharge;
      codCharge = srRate.codCharge;
      gst = srRate.gst;
      deliveryCharge = srRate.deliveryCharge;
    }
  }

  // Free delivery threshold: if order subtotal is > 499, delivery is 100% FREE!
  if (subtotal > 499) {
    baseDeliveryCharge = 0;
    codCharge = 0;
    gst = 0;
    deliveryCharge = 0;
  }

  const total = subtotal + deliveryCharge;

  return {
    items,
    amounts: { 
      subtotal, 
      savings, 
      baseDeliveryCharge, 
      codCharge, 
      gst, 
      deliveryCharge, 
      total 
    },
  };
}
