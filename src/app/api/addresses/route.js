import { ok, created, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { listAddresses, createAddress } from "@/server/controllers/address.controller";
import { addressSchema } from "@/server/validators/commerce.validators";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/addresses
export const GET = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  return ok(await listAddresses(userId));
});

// POST /api/addresses
export const POST = withRoute(async (req) => {
  const { userId } = await requireAuth(req);
  const body = addressSchema.parse(await req.json().catch(() => ({})));
  return created(await createAddress(userId, body));
});
