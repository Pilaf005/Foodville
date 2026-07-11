/**
 * Seed trigger (plain Node — no TypeScript/tsx).
 *
 *   npm run seed                      # seeds LOCALHOST (dev server must be running)
 *   SEED_URL=https://foodville.vercel.app npm run seed   # seeds production (needs SEED_SECRET)
 *
 * The actual DB work happens inside the Next.js app at POST /api/dev/seed
 * (so the ESM data modules import cleanly). This script just calls it.
 *
 * SAFETY: the target is SEED_URL and defaults to localhost. It deliberately does
 * NOT read NEXT_PUBLIC_SITE_URL — otherwise setting that to your live domain
 * would make a routine `npm run seed` wipe and re-seed the PRODUCTION catalog.
 * Hitting production is opt-in, per-command, and requires the secret.
 */
(async () => {
  try {
    process.loadEnvFile(".env.local");
  } catch {
    /* env optional here — the server already loaded its own */
  }

  const base = (process.env.SEED_URL || "http://localhost:3000").replace(/\/+$/, "");
  const url = `${base}/api/dev/seed`;
  const isRemote = !/^https?:\/\/(localhost|127\.0\.0\.1)/.test(base);

  const headers = { "content-type": "application/json" };
  if (process.env.SEED_SECRET) headers["x-seed-secret"] = process.env.SEED_SECRET;

  if (isRemote && !process.env.SEED_SECRET) {
    console.error(`✖ Refusing to seed ${base} without SEED_SECRET set.`);
    process.exit(1);
  }

  if (isRemote) {
    console.log(`⚠  Seeding a REMOTE target: ${base}`);
    console.log("   This WIPES and re-inserts products, categories and blogs there.");
  }

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
    console.error(`✖ Could not reach ${base}. Is the server running?`);
    console.error("  ", err?.message || err);
    process.exit(1);
  }
})();
