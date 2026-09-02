import { ok, withRoute } from "@/server/utils/apiResponse";
import { getAuth } from "@/server/middleware/auth";
import { getAllActiveCoupons, evaluateCoupon } from "@/server/services/pricing.service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * GET /api/coupons?subtotal=999
 * Returns all active coupons with current user's eligibility and savings amount.
 */
export const GET = withRoute(async (req) => {
  const user = await getAuth(req);
  const userId = user?.userId || null;
  const subtotal = Number(req.nextUrl?.searchParams?.get("subtotal")) || 0;
  const targetCode = req.nextUrl?.searchParams?.get("code");

  const allCoupons = await getAllActiveCoupons();

  // Single coupon explicit lookup (supports hidden/secret coupons when typed directly)
  if (targetCode) {
    const clean = String(targetCode).trim().toUpperCase();
    const found = allCoupons.find((c) => c.code.toUpperCase() === clean);
    if (!found) {
      return ok({ isEligible: false, reason: `Coupon code ${clean} is invalid.`, amount: 0 });
    }
    const res = await evaluateCoupon(found, subtotal, userId);
    return ok({
      code: found.code,
      title: found.title,
      description: found.description,
      discountType: found.discountType,
      discountValue: found.discountValue,
      maxDiscount: found.maxDiscount,
      minSubtotal: found.minSubtotal,
      firstOrderOnly: found.firstOrderOnly,
      oncePerUser: found.oncePerUser,
      showInCards: found.showInCards,
      isEligible: res.isEligible,
      reason: res.reason || null,
      amount: res.amount,
      discountLabel: res.discountLabel || "",
    });
  }

  // Filter out secret / hidden coupons so they do not appear in the coupon card listing
  const coupons = allCoupons.filter((c) => c.showInCards !== false);
  const evaluated = await Promise.all(
    coupons.map(async (c) => {
      const res = await evaluateCoupon(c, subtotal, userId);
      return {
        code: c.code,
        title: c.title,
        description: c.description,
        discountType: c.discountType,
        discountValue: c.discountValue,
        maxDiscount: c.maxDiscount,
        minSubtotal: c.minSubtotal,
        firstOrderOnly: c.firstOrderOnly,
        isEligible: res.isEligible,
        reason: res.reason || null,
        amount: res.amount,
        discountLabel: res.discountLabel || "",
      };
    })
  );

  return ok(evaluated);
});
