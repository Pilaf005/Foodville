import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { updateNotifications } from "@/server/controllers/profile.controller";
import { notificationsSchema } from "@/server/validators/commerce.validators";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// PUT /api/profile/notifications — email notification toggles
export const PUT = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  const body = notificationsSchema.parse(await req.json().catch(() => ({})));
  return ok(await updateNotifications(userId, body));
});
