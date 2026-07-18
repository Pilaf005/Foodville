import { ok, withRoute } from "@/server/utils/apiResponse";
import { notFound } from "@/server/utils/apiError";
import { env } from "@/server/config/env";
import { seedCatalog } from "@/server/controllers/seed.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/dev/seed — (re)seed the catalog from src/data/*.
 * ONLY available in local development. In production this route does not exist
 * (returns 404) regardless of any secret header — eliminating the risk of an
 * accidental catalog wipe on the live database.
 */
export const POST = withRoute(async (req) => {
  // Hard-block in production — the route behaves as if it doesn't exist.
  if (env.isProd) {
    throw notFound("Not found.");
  }
  const result = await seedCatalog();
  return ok({ seeded: true, ...result });
});
