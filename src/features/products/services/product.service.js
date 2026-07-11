import api, { unwrap } from "@/lib/api";

export const productService = {
  /** List/filter products. Returns { items, meta } (meta carries pagination). */
  async list(params = {}) {
    const res = await api.get("/products", { params });
    return { items: res.data?.data ?? [], meta: res.data?.meta ?? null };
  },

  async getBySlug(slug) {
    return unwrap(await api.get(`/products/${slug}`));
  },

  async getSimilar(key, limit = 8) {
    return unwrap(await api.get(`/products/${key}/similar`, { params: { limit } }));
  },
};

export default productService;
