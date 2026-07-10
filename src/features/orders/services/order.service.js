import api from "@/lib/api";

export const orderService = {
  async getOrders() {
    // Placeholder to fetch all orders
    // const response = await api.get("/orders");
    // return response.data;
    return [];
  },

  async createOrder(orderData) {
    // Placeholder to create a new order
    // const response = await api.post("/orders", orderData);
    // return response.data;
    return null;
  },

  async getOrderDetails(orderId) {
    // Placeholder to fetch order details
    // const response = await api.get(`/orders/${orderId}`);
    // return response.data;
    return null;
  },
};

export default orderService;
