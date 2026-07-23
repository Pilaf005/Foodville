/**
 * Server-authoritative pricing.
 *
 * The client NEVER tells us what something costs. We take productId/qty/unit,
 * re-read the real price from the catalog, and compute the bill here. This is
 * what stops someone editing the request and buying a ₹900 combo for ₹1.
 */
import Product from "@/server/models/Product";
import Order from "@/server/models/Order";
import Coupon from "@/server/models/Coupon";
import { env } from "@/server/config/env";
import { badRequest } from "@/server/utils/apiError";
import { getShippingRate } from "@/server/services/shiprocket.service";

/** Default built-in coupons if database has no coupon documents created yet */
export const DEFAULT_COUPONS = [
  {
    code: "WELCOME10",
    title: "10% OFF First Order",
    description: "Valid for your first order at Foodville",
    discountType: "percentage",
    discountValue: 10,
    maxDiscount: null,
    minSubtotal: 0,
    firstOrderOnly: true,
    isActive: true,
  },
  {
    code: "FOODVILLE15",
    title: "15% OFF on ₹999+",
    description: "Get 15% discount on orders of ₹999 or more",
    discountType: "percentage",
    discountValue: 15,
    maxDiscount: null,
    minSubtotal: 999,
    firstOrderOnly: false,
    isActive: true,
  },
  {
    code: "FOODVILLE20",
    title: "20% OFF on ₹1,999+",
    description: "Get 20% discount on orders between ₹1,999 and ₹2,499",
    discountType: "percentage",
    discountValue: 20,
    maxDiscount: 499,
    minSubtotal: 1999,
    firstOrderOnly: false,
    isActive: true,
  },
  {
    code: "MAX500",
    title: "Flat ₹500 OFF on ₹2,500+",
    description: "Get Flat ₹500 OFF on orders of ₹2,500 or more",
    discountType: "flat",
    discountValue: 500,
    maxDiscount: 500,
    minSubtotal: 2500,
    firstOrderOnly: false,
    isActive: true,
  },
];

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

import mongoose from "mongoose";

/** Check if user is a first-time customer */
export async function isFirstTimeCustomer(userId) {
  if (!userId) return false;
  try {
    const userObjId = typeof userId === "string" && mongoose.Types.ObjectId.isValid(userId)
      ? new mongoose.Types.ObjectId(userId)
      : userId;
    const existingOrder = await Order.exists({
      user: userObjId,
      status: { $ne: "cancelled" },
      isDraft: { $ne: true },
    });
    return !existingOrder;
  } catch {
    return false;
  }
}

/** Fetch active coupons from DB merged with defaults */
export async function getAllActiveCoupons() {
  let dbCoupons = [];
  try {
    dbCoupons = await Coupon.find({ isActive: true }).lean();
  } catch (err) {
    console.error("[pricing.service] Error loading DB coupons:", err?.message);
  }

  const codeMap = new Map();
  // Load defaults first
  for (const c of DEFAULT_COUPONS) {
    codeMap.set(c.code.toUpperCase(), c);
  }
  // DB coupons override defaults if same code
  for (const c of dbCoupons) {
    codeMap.set(c.code.toUpperCase(), {
      code: c.code.toUpperCase(),
      title: c.title,
      description: c.description || "",
      discountType: c.discountType,
      discountValue: c.discountValue,
      maxDiscount: c.maxDiscount,
      minSubtotal: c.minSubtotal,
      firstOrderOnly: c.firstOrderOnly,
      isActive: c.isActive,
    });
  }

  return Array.from(codeMap.values()).filter((c) => c.isActive);
}

/** Evaluate a single coupon against cart subtotal and user state */
export async function evaluateCoupon(couponObj, subtotal, userId) {
  if (!couponObj) return { isEligible: false, reason: "Invalid coupon.", amount: 0 };

  if (subtotal < (couponObj.minSubtotal || 0)) {
    return {
      isEligible: false,
      reason: `Add ₹${(couponObj.minSubtotal - subtotal).toFixed(0)} more to unlock code ${couponObj.code}`,
      amount: 0,
      coupon: couponObj,
    };
  }

  if (couponObj.firstOrderOnly) {
    const isFirstTime = await isFirstTimeCustomer(userId);
    if (!isFirstTime) {
      return {
        isEligible: false,
        reason: `Code ${couponObj.code} is valid for first-time customers only.`,
        amount: 0,
        coupon: couponObj,
      };
    }
  }

  // Calculate discount amount based on subtotal (selling price total)
  let rawAmount = 0;
  if (couponObj.discountType === "flat") {
    rawAmount = couponObj.discountValue;
  } else {
    rawAmount = Math.round(subtotal * (couponObj.discountValue / 100));
  }

  // Apply maximum cap if defined (e.g. ₹500 max cap)
  let finalAmount = rawAmount;
  let isCapped = false;
  if (couponObj.maxDiscount != null && couponObj.maxDiscount > 0 && finalAmount > couponObj.maxDiscount) {
    finalAmount = couponObj.maxDiscount;
    isCapped = true;
  }

  finalAmount = Math.min(finalAmount, subtotal); // Cannot discount more than subtotal

  let discountLabel = "";
  if (isCapped) {
    discountLabel = `₹${couponObj.maxDiscount} off (${couponObj.code})`;
  } else if (couponObj.discountType === "percentage") {
    discountLabel = `${couponObj.discountValue}% off (${couponObj.code})`;
  } else {
    discountLabel = `₹${couponObj.discountValue} off (${couponObj.code})`;
  }

  return {
    isEligible: true,
    amount: finalAmount,
    coupon: couponObj,
    code: couponObj.code,
    title: couponObj.title,
    discountLabel,
    isCapped,
  };
}

/** Find all eligible coupons and return the best one (highest ₹ savings) */
export async function getBestEligibleCoupon(subtotal, userId) {
  const coupons = await getAllActiveCoupons();
  const evaluated = await Promise.all(coupons.map((c) => evaluateCoupon(c, subtotal, userId)));

  const eligible = evaluated.filter((e) => e.isEligible && e.amount > 0);
  if (eligible.length === 0) return null;

  // Sort descending by discount amount
  eligible.sort((a, b) => b.amount - a.amount);
  return eligible[0];
}

/** Calculate next tier progress information for cart motivation banner */
export function getNextDiscountTier(subtotal) {
  if (subtotal >= 2500) return null; // Already at maximum discount tier
  if (subtotal >= 1999) {
    const amountLeft = 2500 - subtotal;
    const progressPct = Math.min(100, (subtotal / 2500) * 100);
    return {
      threshold: 2500,
      percentLabel: "Flat ₹500",
      nextCode: "MAX500",
      amountLeft,
      progressPct,
    };
  }
  if (subtotal >= 999) {
    const amountLeft = 1999 - subtotal;
    const progressPct = Math.min(100, (subtotal / 1999) * 100);
    return {
      threshold: 1999,
      percentLabel: "20%",
      nextCode: "FOODVILLE20",
      amountLeft,
      progressPct,
    };
  }
  const amountLeft = 999 - subtotal;
  const progressPct = Math.min(100, (subtotal / 999) * 100);
  return {
    threshold: 999,
    percentLabel: "15%",
    nextCode: "FOODVILLE15",
    amountLeft,
    progressPct,
  };
}

/**
 * Turn [{ productId, qty, unit }] into priced line items + a bill.
 * Throws if a product is missing, inactive, or out of stock.
 */
export async function priceItems(
  rawItems,
  { pincode = null, paymentMethod = "razorpay", userId = null, couponCode = null } = {}
) {
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
      isCod,
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

  // Coupon evaluation
  let appliedCoupon = null;

  if (couponCode && String(couponCode).trim()) {
    const cleanCode = String(couponCode).trim().toUpperCase();
    const allCoupons = await getAllActiveCoupons();
    const found = allCoupons.find((c) => c.code.toUpperCase() === cleanCode);
    if (found) {
      const evalRes = await evaluateCoupon(found, subtotal, userId);
      if (evalRes.isEligible) {
        appliedCoupon = evalRes;
      }
    }
  }

  // If no explicit coupon applied or requested code was invalid, auto-apply the best eligible coupon
  if (!appliedCoupon) {
    appliedCoupon = await getBestEligibleCoupon(subtotal, userId);
  }

  const discount = appliedCoupon ? appliedCoupon.amount : 0;
  const appliedCouponCode = appliedCoupon ? appliedCoupon.code : "";
  const discountLabel = appliedCoupon ? appliedCoupon.discountLabel : "";

  const total = Math.max(0, subtotal - discount + deliveryCharge);
  const nextTier = getNextDiscountTier(subtotal);

  return {
    items,
    amounts: {
      subtotal,
      savings,
      discount,
      couponCode: appliedCouponCode,
      discountLabel,
      baseDeliveryCharge,
      codCharge,
      gst,
      deliveryCharge,
      total,
    },
    nextTier,
    appliedCoupon: appliedCoupon
      ? {
          code: appliedCoupon.code,
          title: appliedCoupon.title,
          amount: appliedCoupon.amount,
          discountLabel: appliedCoupon.discountLabel,
        }
      : null,
  };
}
