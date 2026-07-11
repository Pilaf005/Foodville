import { ok, withRoute } from "@/server/utils/apiResponse";
import { getProductBySlug } from "@/server/controllers/product.controller";
import { cached, publicCacheHeaders } from "@/server/utils/cache";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/products/:slug — single product by slug.
export const GET = withRoute(async (_req, { params }) => {
  const { key } = await params;
  const product = await cached(`product:${key}`, 60_000, () => getProductBySlug(key));
  return ok(product, { headers: publicCacheHeaders(60, 300) });
});
