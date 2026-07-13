import { z } from "zod";
import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { rateLimit } from "@/server/utils/rateLimit";
import { addReview } from "@/server/controllers/review.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const reviewSchema = z.object({
  rating: z.coerce.number().int().min(1, "Pick a rating.").max(5),
  comment: z.string().trim().min(3, "Tell us a little more.").max(1000),
});

// POST /api/products/:key/reviews  { rating, comment }
// Signed-in users only; one review per user per product (resubmit = replace).
export const POST = withRoute(async (req, { params }) => {
  const { userId } = await requireAuth(req);
  rateLimit(req, { key: "review", limit: 10, windowMs: 10 * 60_000 });

  const { key } = await params;
  const body = reviewSchema.parse(await req.json().catch(() => ({})));

  return ok(await addReview(userId, key, body));
});
