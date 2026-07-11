import { ok, withRoute } from "@/server/utils/apiResponse";
import { getSimilarProducts } from "@/server/controllers/product.controller";
import { cached, publicCacheHeaders } from "@/server/utils/cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/products/:id/similar — products in the same category.
export const GET = withRoute(async (req, { params }) => {
  const { key } = await params;
  const limit = Math.min(Number(req.nextUrl.searchParams.get("limit")) || 8, 20);
  const products = await cached(`similar:${key}:${limit}`, 60_000, () => getSimilarProducts(key, limit));
  return ok(products, { headers: publicCacheHeaders(60, 300) });
});
