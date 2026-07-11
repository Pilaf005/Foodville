# Foodville

E-commerce storefront for spice powders, seeds, dry fruits, wellness blends and combo packs.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind v4 · MongoDB Atlas + Mongoose · TanStack Query · Razorpay · Cloudflare R2 · Nodemailer

---

## Getting started

```bash
npm install
cp .env.example .env.local     # then fill in the values (see below)
npm run dev                    # http://localhost:3000
npm run seed                   # loads the catalog into MongoDB (dev server must be running)
```

`npm run seed` posts to `/api/dev/seed`, which imports the catalog from `src/data/` into
MongoDB: **128 products, 7 categories, 9 blog articles**. It is idempotent — safe to re-run.

---

## Environment

| Variable | Purpose |
|---|---|
| `MONGODB_URI`, `MONGODB_DB` | MongoDB Atlas connection |
| `JWT_SECRET`, `JWT_EXPIRES_IN`, `AUTH_COOKIE_NAME` | Auth session (httpOnly cookie) |
| `OTP_SECRET`, `OTP_LENGTH`, `OTP_EXP_MINUTES`, `OTP_MAX_ATTEMPTS`, `OTP_RESEND_COOLDOWN_SECONDS`, `OTP_MAX_PER_WINDOW`, `OTP_WINDOW_MINUTES` | One-time-code login rules |
| `ADMIN_EMAILS` | Comma-separated emails granted the `admin` role on login |
| `EMAIL_DEV_MODE`, `SMTP_*` | OTP email. `EMAIL_DEV_MODE=true` prints the code to the server console instead of sending it |
| `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `RAZORPAY_WEBHOOK_SECRET` | Payments (server-only — see below) |
| `R2_*` | Cloudflare R2 image storage |
| `FREE_DELIVERY_THRESHOLD`, `DELIVERY_CHARGE`, `CURRENCY` | Commerce rules |
| `DNS_SERVERS` | Optional. Public DNS used to resolve Atlas (see *DNS note*) |

> **DNS note.** `mongodb+srv://` needs an SRV lookup, which some local resolvers refuse
> (`querySrv ECONNREFUSED`). `src/server/db/mongoose.js` resolves the SRV/TXT records via a
> public resolver and connects with a standard `mongodb://` URI, so it works regardless of the
> machine's DNS. Override the resolvers with `DNS_SERVERS`.

---

## Architecture

```
src/
  app/
    api/            route handlers (thin — auth, validate, delegate)
    admin/          admin panel (dashboard, products, orders, customers)
    (storefront)/   home, shop, category, product, search, cart, order-confirmed, profile, login
  server/           the backend
    config/env.js   validated environment
    db/mongoose.js  cached Atlas connection (+ SRV workaround)
    models/         Mongoose schemas
    controllers/    business logic
    services/       razorpay · storage (R2) · email · pricing · otp · token
    validators/     zod schemas
    middleware/     auth guards
    utils/          errors, response envelope, cache, rate limit, serializers
  features/         per-domain UI: components · hooks · services
  proxy.js          edge route protection
```

**Response envelope:** `{ success, data, meta? }` / `{ success, error: { code, message, details? } }`

---

## Auth — passwordless OTP

One flow, no separate signup:

1. **Enter email → Next.** The user is recorded immediately as `status: "pending"` — a
   **lead capture**, so an abandoned signup still leaves us the email.
2. A 6-digit code is emailed. It is stored **hashed** (HMAC, peppered with `OTP_SECRET`) —
   never in plaintext — and auto-expires via a MongoDB TTL index.
3. **Verify → the account is activated** (`status: "active"`) and a JWT is issued in an
   **httpOnly, Secure, SameSite cookie**. Browser JS can never read the token.

Limits (all enforced in the DB, so they survive serverless restarts):
resend cooldown · max attempts per code · max codes per email per window · IP rate limits.

Emails listed in `ADMIN_EMAILS` receive the `admin` role on login.

### Route protection

| Public | Signed in | Admin only |
|---|---|---|
| products, categories, blogs, search, health, auth, Razorpay webhook | cart, wishlist, orders, addresses, profile, payments, uploads | `/admin/*`, `/api/admin/*` |

Enforced twice: at the edge in `src/proxy.js`, and again inside each route handler.

---

## Payments (Razorpay)

1. Server creates a Razorpay order for the amount **it** computed (never the client's).
2. Browser opens Razorpay Checkout.
3. Server recomputes the HMAC signature — **only that marks an order paid**.
4. `POST /api/webhook/razorpay` repeats the confirmation server-to-server as a backstop
   (verified against the **raw** request body; `/api/webhooks/razorpay` is an alias).

Local testing works fully — the webhook is the only part that can't reach `localhost`, and it
isn't needed because step 3 confirms payment synchronously.

**Prices are always recomputed server-side** from the catalog (`services/pricing.service.js`),
so a tampered client can't change what anything costs.

### Going live — env change only, no code change

The publishable `key_id` is sent to the browser **by the server at request time**, not baked in
at build time. So switching modes is just:

```diff
- RAZORPAY_KEY_ID=rzp_test_xxxxxxxx
- RAZORPAY_KEY_SECRET=<test secret>
+ RAZORPAY_KEY_ID=rzp_live_xxxxxxxx
+ RAZORPAY_KEY_SECRET=<live secret>
  RAZORPAY_WEBHOOK_SECRET=<the secret you set on the LIVE webhook>
```

Restart (or redeploy) and it's live — no rebuild, no code edit. The `/api/payments/initiate`
response includes `mode: "test" | "live"`, derived from the key prefix, so you can always tell
which one is in play.

> **Only `NEXT_PUBLIC_*` variables reach the browser bundle.** Every secret here
> (`RAZORPAY_KEY_SECRET`, `MONGODB_URI`, `SMTP_PASS`, `R2_SECRET_ACCESS_KEY`, `JWT_SECRET`,
> `OTP_SECRET`) is server-only and must **never** be given that prefix. There is exactly one
> Razorpay key id — a `NEXT_PUBLIC_` duplicate would be baked in at build time and go stale the
> moment you switch to live keys.

Before going live: create the **Live** webhook in the Razorpay dashboard pointing at
`https://<your-domain>/api/webhook/razorpay` (HTTPS is required), and whitelist your domain.
The key **secret never reaches the browser** — only `key_id` does.

---

## Images (Cloudflare R2)

`POST /api/uploads` (multipart). Validated by **magic bytes** — not just the declared
Content-Type — with a 4MB cap. Keys are always built server-side:

```
media/products/<slug>/<uuid>.<ext>
media/categories/<slug>.<ext>
media/blogs/<slug>/<uuid>.<ext>
media/users/<userId>/avatar.<ext>
```

Replacing an image deletes the previous object, so the bucket never accumulates orphans.
Admins may upload catalog images; a user may only replace **their own** avatar.

---

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` / `npm start` | Production build / serve |
| `npm run seed` | Load the catalog into MongoDB |
| `npm run lint` | ESLint |
