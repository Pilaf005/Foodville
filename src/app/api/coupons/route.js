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

  const coupons = await getAllActiveCoupons();
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
