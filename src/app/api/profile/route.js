import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { getMe } from "@/server/controllers/auth.controller";
import { updateProfile } from "@/server/controllers/profile.controller";
import { updateProfileSchema } from "@/server/validators/commerce.validators";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/profile
export const GET = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  return ok(await getMe(userId));
});

// PUT /api/profile
export const PUT = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  const body = updateProfileSchema.parse(await req.json().catch(() => ({})));
  return ok(await updateProfile(userId, body));
});
