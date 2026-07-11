/**
 * Centralised, validated access to environment variables.
 *
 * Import `env` anywhere on the server. Values are read lazily and cached.
 * `requireEnv()` throws a clear error only when a truly-required value is used,
 * so the app can still boot (and show helpful errors) before every secret is set.
 */

const bool = (v, fallback = false) =>
  v === undefined ? fallback : ["1", "true", "yes", "on"].includes(String(v).toLowerCase());

const int = (v, fallback) => {
  const n = Number.parseInt(v ?? "", 10);
  return Number.isFinite(n) ? n : fallback;
};

export const env = {
  nodeEnv: process.env.NODE_ENV || "development",
  isProd: process.env.NODE_ENV === "production",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  // Database
  mongoUri: process.env.MONGODB_URI || "",
  mongoDb: process.env.MONGODB_DB || "foodville",

  // Auth / JWT
  jwtSecret: process.env.JWT_SECRET || "",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  authCookieName: process.env.AUTH_COOKIE_NAME || "fv_token",

  // OTP
  otpSecret: process.env.OTP_SECRET || process.env.JWT_SECRET || "",
  otpExpMinutes: int(process.env.OTP_EXP_MINUTES, 10),
  otpResendCooldownSeconds: int(process.env.OTP_RESEND_COOLDOWN_SECONDS, 60),
  otpMaxAttempts: int(process.env.OTP_MAX_ATTEMPTS, 5),
  otpLength: int(process.env.OTP_LENGTH, 6),
  // Hard cap on how many codes one email may request per rolling window.
  otpMaxPerWindow: int(process.env.OTP_MAX_PER_WINDOW, 5),
  otpWindowMinutes: int(process.env.OTP_WINDOW_MINUTES, 60),

  // Admin
  adminEmails: (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean),

  // Email
  emailDevMode: bool(process.env.EMAIL_DEV_MODE, true),
  smtp: {
    host: process.env.SMTP_HOST || "",
    port: int(process.env.SMTP_PORT, 587),
    secure: bool(process.env.SMTP_SECURE, false),
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
    from: process.env.SMTP_FROM || "Foodville <no-reply@foodville.in>",
  },

  // Payments.
  // There is deliberately ONE key id. It is public by design (Razorpay's
  // checkout widget needs it in the browser) but we hand it to the browser from
  // the server at request time — never as a NEXT_PUBLIC_* build-time constant.
  // That keeps test→live a pure env swap, and leaves no stale copy anywhere.
  // The SECRET is server-only and must never be prefixed NEXT_PUBLIC_.
  razorpay: {
    keyId: process.env.RAZORPAY_KEY_ID || "",
    keySecret: process.env.RAZORPAY_KEY_SECRET || "",
    webhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET || "",
  },

  // Storage (Cloudflare R2 — S3-compatible)
  r2: {
    endpoint: process.env.R2_ENDPOINT || "",
    accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
    bucket: process.env.R2_BUCKET || "",
    region: process.env.R2_REGION || "auto",
    // Public base for reading objects (bucket's r2.dev URL or a custom domain).
    publicBaseUrl: (process.env.R2_PUBLIC_BASE_URL || "").replace(/\/+$/, ""),
  },

  // Commerce
  freeDeliveryThreshold: int(process.env.FREE_DELIVERY_THRESHOLD, 500),
  deliveryCharge: int(process.env.DELIVERY_CHARGE, 40),
  currency: process.env.CURRENCY || "INR",
};

/** Throw if a required env value is missing (called at point-of-use). */
export function requireEnv(path, hint) {
  const value = path.split(".").reduce((o, k) => (o == null ? o : o[k]), env);
  if (!value) {
    throw new Error(
      `Missing required environment variable for "${path}"${hint ? ` — ${hint}` : ""}. ` +
        `Add it to .env.local and restart the server.`
    );
  }
  return value;
}

export default env;
