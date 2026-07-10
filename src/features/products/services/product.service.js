import api from "@/lib/api";

export const productService = {
  async getProducts(params) {
    // Placeholder to fetch all products
    // const response = await api.get("/products", { params });
    // return response.data;
    return [];
  },

  async getProductBySlug(slug) {
    // Placeholder to fetch a single product
    // const response = await api.get(`/products/${slug}`);
    // return response.data;
    return null;
  },

  async getSimilarProducts(id) {
    // Placeholder to fetch similar products
    // const response = await api.get(`/products/${id}/similar`);
    // return response.data;
    return [];
  },
};

export default productService;
