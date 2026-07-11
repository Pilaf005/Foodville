import api, { unwrap } from "@/lib/api";

export const wishlistService = {
  async get() {
    return unwrap(await api.get("/wishlist"));
  },
  /** Returns { added, products } */
  async toggle(productId) {
    return unwrap(await api.post("/wishlist/toggle", { productId }));
  },
  async merge(productIds = []) {
    return unwrap(await api.post("/cart/merge", { wishlist: productIds }));
  },
};

export default wishlistService;
