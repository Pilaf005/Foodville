import { ok, withRoute } from "@/server/utils/apiResponse";
import { requireAuth } from "@/server/middleware/auth";
import { updateAddress, deleteAddress } from "@/server/controllers/address.controller";
import { addressSchema } from "@/server/validators/commerce.validators";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// PUT /api/addresses/:id
export const PUT = withRoute(async (req, { params }) => {
  const { userId } = await requireAuth(req);
  const { id } = await params;
  const body = addressSchema.partial().parse(await req.json().catch(() => ({})));
  return ok(await updateAddress(userId, id, body));
});

// DELETE /api/addresses/:id
export const DELETE = withRoute(async (req, { params }) => {
  const { userId } = await requireAuth(req);
  const { id } = await params;
  return ok(await deleteAddress(userId, id));
});
