import { ok, withRoute } from "@/server/utils/apiResponse";
import { getSimilarProducts } from "@/server/controllers/product.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/products/:id/similar — products in the same category.
export const GET = withRoute(async (req, { params }) => {
  const { key } = await params;
  const limit = Math.min(Number(req.nextUrl.searchParams.get("limit")) || 8, 20);
  const products = await getSimilarProducts(key, limit);
  return ok(products);
});
