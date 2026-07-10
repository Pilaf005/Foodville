import { ok, withRoute } from "@/server/utils/apiResponse";
import { forbidden } from "@/server/utils/apiError";
import { env } from "@/server/config/env";
import { seedCatalog } from "@/server/controllers/seed.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * POST /api/dev/seed — (re)seed the catalog from src/data/*.
 * Open in development; in production it requires the x-seed-secret header
 * to match SEED_SECRET (and is a no-op otherwise). Wipes + re-inserts.
 */
export const POST = withRoute(async (req) => {
  if (env.isProd) {
    const secret = process.env.SEED_SECRET;
    if (!secret || req.headers.get("x-seed-secret") !== secret) {
      throw forbidden("Seeding is disabled in production unless x-seed-secret matches SEED_SECRET.");
    }
  }
  const result = await seedCatalog();
  return ok({ seeded: true, ...result });
});
