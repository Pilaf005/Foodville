import api, { unwrap } from "@/lib/api";

export const orderService = {
  async list() {
    return unwrap(await api.get("/orders"));
  },
  async getById(orderId) {
    return unwrap(await api.get(`/orders/${orderId}`));
  },
  /** { addressId | address, paymentMethod: "cod" | "razorpay" } */
  async create(payload) {
    return unwrap(await api.post("/orders", payload));
  },
};

export default orderService;
