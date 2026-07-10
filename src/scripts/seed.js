/**
 * Seed trigger (plain Node, no TypeScript/tsx).
 *
 *   npm run seed          # dev server must be running (npm run dev)
 *
 * The actual DB work happens inside the Next.js app at POST /api/dev/seed
 * (so the ESM data modules import cleanly). This script just calls it.
 */
(async () => {
  try {
    process.loadEnvFile(".env.local");
  } catch {
    /* env optional here — the server already loaded it */
  }

  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const url = `${base}/api/dev/seed`;
  const headers = { "content-type": "application/json" };
  if (process.env.SEED_SECRET) headers["x-seed-secret"] = process.env.SEED_SECRET;

  console.log(`→ Seeding via ${url} …`);
  try {
    const res = await fetch(url, { method: "POST", headers });
    const body = await res.json().catch(() => ({}));
    if (!res.ok || !body?.success) {
      console.error("✖ Seed failed:", body?.error?.message || res.statusText);
      process.exit(1);
    }
    const d = body.data;
    console.log("✓ Seed complete:");
    console.log(`   products:   ${d.products}`);
    console.log(`   categories: ${d.categories}`);
    console.log(`   blogs:      ${d.blogs}`);
    console.log("   by category:", d.byCategory);
    process.exit(0);
  } catch (err) {
    console.error("✖ Could not reach the app. Is `npm run dev` running?");
    console.error("  ", err?.message || err);
    process.exit(1);
  }
})();
