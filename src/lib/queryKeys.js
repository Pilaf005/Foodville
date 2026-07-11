/**
 * Central TanStack Query key factory — keeps cache keys consistent so
 * invalidation actually hits what you expect.
 */
export const queryKeys = {
  auth: {
    me: ["auth", "me"],
  },
  products: {
    all: ["products"],
    list: (params = {}) => ["products", "list", params],
    detail: (slug) => ["products", "detail", slug],
    similar: (key, limit) => ["products", "similar", key, limit],
  },
  categories: {
    all: ["categories"],
  },
  blogs: {
    all: ["blogs"],
    detail: (slug) => ["blogs", "detail", slug],
  },
  cart: { all: ["cart"] },
  wishlist: { all: ["wishlist"] },
  orders: {
    all: ["orders"],
    detail: (id) => ["orders", "detail", id],
  },
  addresses: { all: ["addresses"] },
  admin: {
    stats: ["admin", "stats"],
    products: (params = {}) => ["admin", "products", params],
    orders: (params = {}) => ["admin", "orders", params],
    users: (params = {}) => ["admin", "users", params],
  },
};

export default queryKeys;
