/**
 * Alias for /api/webhook/razorpay (plural spelling), so a mismatch between the
 * URL configured in the Razorpay dashboard and the route can't silently drop
 * payment events. Both paths behave identically.
 *
 * Route segment config must be declared literally here — Next.js parses these
 * statically and they cannot be re-exported.
 */
export { POST } from "@/app/api/webhook/razorpay/route";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
