import { ok, withRoute } from "@/server/utils/apiResponse";
import { rateLimit } from "@/server/utils/rateLimit";
import { cached } from "@/server/utils/cache";
import { searchSuggestions } from "@/server/controllers/product.controller";

export const GET = withRoute(async (req) => {
  rateLimit(req, { key: "search-suggestions", limit: 60, windowMs: 60_000 });

  const query = req.nextUrl.searchParams.get("q") || "";
  
  const cacheKey = `search-suggestions:${query.toLowerCase()}`;
  const data = await cached(cacheKey, 30_000, () => searchSuggestions(query));

  return ok(data);
});
