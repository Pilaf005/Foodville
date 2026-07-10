import { ok, withRoute } from "@/server/utils/apiResponse";
import { getProductBySlug } from "@/server/controllers/product.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/products/:slug — single product by slug.
export const GET = withRoute(async (_req, { params }) => {
  const { key } = await params;
  const product = await getProductBySlug(key);
  return ok(product);
});
