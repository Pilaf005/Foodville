import api from "@/lib/api";

export const cartService = {
  async getCart() {
    // Placeholder to fetch cart from server
    // const response = await api.get("/cart");
    // return response.data;
    return [];
  },

  async addToCart(productId, qty) {
    // Placeholder to add item to cart
    // const response = await api.post("/cart", { productId, qty });
    // return response.data;
    return null;
  },

  async removeFromCart(productId) {
    // Placeholder to remove item from cart
    // const response = await api.delete(`/cart/${productId}`);
    // return response.data;
    return null;
  },

  async updateQty(productId, qty) {
    // Placeholder to update cart item quantity
    // const response = await api.put(`/cart/${productId}`, { qty });
    // return response.data;
    return null;
  },
};

export default cartService;
