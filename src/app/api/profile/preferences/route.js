import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { updatePreferences } from "@/server/controllers/profile.controller";
import { preferencesSchema } from "@/server/validators/commerce.validators";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// PUT /api/profile/preferences — shopping preferences (embedded 1:1 on the user)
export const PUT = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  const body = preferencesSchema.parse(await req.json().catch(() => ({})));
  return ok(await updatePreferences(userId, body));
});
