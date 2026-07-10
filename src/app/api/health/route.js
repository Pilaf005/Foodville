import mongoose from "mongoose";
import { ok, withRoute } from "@/server/utils/apiResponse";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// GET /api/health — quick check that the app + DB connection are alive.
export const GET = withRoute(async () => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  return ok({
    status: "ok",
    db: states[mongoose.connection.readyState] ?? "unknown",
    time: new Date().toISOString(),
  });
});
