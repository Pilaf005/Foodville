const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.foodvilleindia.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/api/products", "/api/categories", "/api/blogs", "/api/search/suggestions"],
        disallow: [
          "/api/auth/",
          "/api/cart/",
          "/api/orders/",
          "/api/payments/",
          "/api/profile/",
          "/api/addresses/",
          "/api/dev/",
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
