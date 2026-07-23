/**
 * Instant client-side pricing & coupon calculation utility.
 * Ensures the cart billing breakdown and progress bars update at 60fps in 0ms
 * whenever the user clicks + or - on any cart item.
 */

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
  },
];

export function evaluateCouponClient(coupon, subtotal, isFirstTime = true) {
  if (!coupon) return { isEligible: false, amount: 0, reason: "Invalid coupon" };

  if (coupon.isEligible === false) {
    return {
      isEligible: false,
      amount: 0,
      reason: coupon.reason || `Code ${coupon.code} is valid for first-time orders only.`,
    };
  }

  if (subtotal < (coupon.minSubtotal || 0)) {
    return {
      isEligible: false,
      amount: 0,
      reason: `Add ₹${(coupon.minSubtotal - subtotal).toFixed(0)} more to unlock code ${coupon.code}`,
    };
  }

  if (coupon.firstOrderOnly && !isFirstTime) {
    return {
      isEligible: false,
      amount: 0,
      reason: `Code ${coupon.code} is valid for first-time orders only`,
    };
  }

  let raw = 0;
  if (coupon.discountType === "flat") {
    raw = coupon.discountValue;
  } else {
    raw = Math.round(subtotal * (coupon.discountValue / 100));
  }

  let isCapped = false;
  let finalAmount = raw;
  if (coupon.maxDiscount != null && coupon.maxDiscount > 0 && finalAmount > coupon.maxDiscount) {
    finalAmount = coupon.maxDiscount;
    isCapped = true;
  }

  finalAmount = Math.min(finalAmount, subtotal);

  let discountLabel = "";
  if (coupon.discountType === "flat" || isCapped) {
    discountLabel = `Flat ₹${finalAmount} off (${coupon.code})`;
  } else if (coupon.discountType === "percentage") {
    discountLabel = `${coupon.discountValue}% off (${coupon.code})`;
  } else {
    discountLabel = `₹${coupon.discountValue} off (${coupon.code})`;
  }

  return {
    isEligible: true,
    amount: finalAmount,
    code: coupon.code,
    title: coupon.title,
    discountLabel,
    isCapped,
  };
}

export function getBestCouponClient(subtotal, isFirstTime = true, availableCoupons = DEFAULT_COUPONS) {
  const couponsToTest = availableCoupons.length > 0 ? availableCoupons : DEFAULT_COUPONS;
  const evaluated = couponsToTest.map((c) => evaluateCouponClient(c, subtotal, isFirstTime));
  const eligible = evaluated.filter((e) => e.isEligible && e.amount > 0);
  if (!eligible.length) return null;
  eligible.sort((a, b) => b.amount - a.amount);
  return eligible[0];
}

export function getNextDiscountTierClient(subtotal) {
  if (subtotal >= 2500) return null; // Already at maximum tier
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
