const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.foodvilleindia.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/cart",
          "/checkout",
          "/profile",
          "/orders",
          "/order-confirmed",
          "/login",
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
