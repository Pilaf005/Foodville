/**
 * Route protection at the network edge (Next.js `proxy` convention — the
 * successor to `middleware` as of Next 16).
 *
 * Public (no auth):   /api/products, /api/categories, /api/blogs, /api/health,
 *                     /api/auth/*, /api/webhook/* (Razorpay calls this), and the
 *                     whole storefront — a shopper must be able to browse before
 *                     signing in.
 * Signed-in only:     /api/cart, /api/wishlist, /api/orders, /api/addresses,
 *                     /api/profile, /api/payments  +  the /profile pages.
 * Admin only:         /api/admin/*, /admin/*
 *
 * Unauthenticated API calls get a 401 JSON envelope; unauthenticated page loads
 * redirect to /login?redirect=<path>. Route handlers re-verify the JWT
 * independently, so this is a fast gate, not the only line of defence.
 */
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const COOKIE = process.env.AUTH_COOKIE_NAME || "fv_token";
const SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "");

// Pages a signed-out visitor may never open by typing the URL — they are
// redirected to /login?redirect=… and land back here after signing in.
// (/cart and /wishlist stay public on purpose: guests must be able to shop.
//  The login wall is enforced at checkout, where an account is actually needed.)
const PROTECTED_PAGES = ["/profile", "/admin", "/orders", "/order-confirmed"];
const PROTECTED_API = [
  "/api/cart",
  "/api/wishlist",
  "/api/orders",
  "/api/addresses",
  "/api/profile",
  "/api/payments",
  "/api/uploads",
  "/api/admin",
];
const ADMIN_PAGES = ["/admin"];
const ADMIN_API = ["/api/admin"];

const startsWithAny = (pathname, list) =>
  list.some((p) => pathname === p || pathname.startsWith(`${p}/`));

async function readToken(req) {
  const token = req.cookies.get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, SECRET);
    return payload;
  } catch {
    return null; // expired or tampered
  }
}

const unauthorizedJson = () =>
  NextResponse.json(
    { success: false, error: { code: "UNAUTHORIZED", message: "Please sign in to continue." } },
    { status: 401 }
  );

const forbiddenJson = () =>
  NextResponse.json(
    { success: false, error: { code: "FORBIDDEN", message: "Admin access required." } },
    { status: 403 }
  );

export async function proxy(req) {
  const { pathname } = req.nextUrl;
  const isApi = pathname.startsWith("/api");

  const needsAuth = isApi ? startsWithAny(pathname, PROTECTED_API) : startsWithAny(pathname, PROTECTED_PAGES);
  if (!needsAuth) return NextResponse.next();

  const payload = await readToken(req);

  if (!payload) {
    if (isApi) return unauthorizedJson();
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.search = `?redirect=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }

  const needsAdmin = isApi ? startsWithAny(pathname, ADMIN_API) : startsWithAny(pathname, ADMIN_PAGES);
  if (needsAdmin && payload.role !== "admin") {
    if (isApi) return forbiddenJson();
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile/:path*",
    "/admin/:path*",
    "/orders/:path*",
    "/order-confirmed/:path*",
    "/api/cart/:path*",
    "/api/wishlist/:path*",
    "/api/orders/:path*",
    "/api/addresses/:path*",
    "/api/profile/:path*",
    "/api/payments/:path*",
    "/api/uploads/:path*",
    "/api/admin/:path*",
  ],
};
