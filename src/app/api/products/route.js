import { ok, withRoute } from "@/server/utils/apiResponse";
import { parseListQuery } from "@/server/validators/product.validators";
import { listProducts } from "@/server/controllers/product.controller";
import { cached, publicCacheHeaders } from "@/server/utils/cache";
import { rateLimit } from "@/server/utils/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/products?category=&tab=&shopBy=&search=&sort=&page=&limit=&topSellers=
export const GET = withRoute(async (req) => {
  rateLimit(req, { key: "products", limit: 120, windowMs: 60_000 });

  const query = parseListQuery(req.nextUrl.searchParams);
  const cacheKey = `products:${JSON.stringify(query)}`;

  const { items, meta } = await cached(cacheKey, 60_000, () => listProducts(query));

  return ok(items, { meta, headers: publicCacheHeaders(60, 300) });
});
