import api from "@/lib/api";

export const wishlistService = {
  async getWishlist() {
    // Placeholder to fetch wishlist
    // const response = await api.get("/wishlist");
    // return response.data;
    return [];
  },

  async toggleWishlist(productId) {
    // Placeholder to toggle wishlist item
    // const response = await api.post(`/wishlist/toggle`, { productId });
    // return response.data;
    return null;
  },
};

export default wishlistService;
