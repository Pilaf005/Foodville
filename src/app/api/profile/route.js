import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { getMe } from "@/server/controllers/auth.controller";
import { updateProfile } from "@/server/controllers/profile.controller";
import { updateProfileSchema } from "@/server/validators/commerce.validators";
import { signAuthToken, setAuthCookie } from "@/server/services/token.service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/profile — also re-issues the auth cookie if the user's role changed
// in the DB since login (same refresh as /api/auth/me).
export const GET = withRoute(async (req) => {
  const auth = await requireAuth(req);
  const user = await getMe(auth.userId);

  if (user.role !== auth.role) {
    const token = await signAuthToken({ userId: user.id, email: user.email, role: user.role });
    return setAuthCookie(ok(user), token);
  }

  return ok(user);
});

// PUT /api/profile
export const PUT = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  const body = updateProfileSchema.parse(await req.json().catch(() => ({})));
  return ok(await updateProfile(userId, body));
});
