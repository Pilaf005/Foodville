import api, { unwrap } from "@/lib/api";

export const cartService = {
  async get() {
    return unwrap(await api.get("/cart"));
  },
  async add({ productId, qty = 1, unit = "" }) {
    return unwrap(await api.post("/cart", { productId, qty, unit }));
  },
  async update(productId, { qty, unit }) {
    return unwrap(await api.put(`/cart/${productId}`, { qty, unit }));
  },
  async remove(productId) {
    return unwrap(await api.delete(`/cart/${productId}`));
  },
  async clear() {
    return unwrap(await api.delete("/cart"));
  },
  /** Fold a guest cart (and wishlist) into the account after sign-in. */
  async merge({ items = [], wishlist = [] }) {
    return unwrap(await api.post("/cart/merge", { items, wishlist }));
  },
};

export default cartService;
