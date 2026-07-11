import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { getMe } from "@/server/controllers/auth.controller";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/auth/me — the signed-in user (401 when the cookie is missing/invalid).
export const GET = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  return ok(await getMe(userId));
});
