import { ok, withRoute } from "@/server/utils/apiResponse";
import { parseListQuery } from "@/server/validators/product.validators";
import { listProducts } from "@/server/controllers/product.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/products?category=&tab=&shopBy=&search=&sort=&page=&limit=&topSellers=
export const GET = withRoute(async (req) => {
  const query = parseListQuery(req.nextUrl.searchParams);
  const { items, meta } = await listProducts(query);
  return ok(items, { meta });
});
