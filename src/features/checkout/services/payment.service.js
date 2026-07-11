import api, { unwrap } from "@/lib/api";

export const paymentService = {
  /** Creates the Razorpay order → { razorpayOrderId, amount, currency, keyId } */
  async initiate(orderId) {
    return unwrap(await api.post("/payments/initiate", { orderId }));
  },

  /** Server re-checks the HMAC signature; only this marks an order paid. */
  async verify({ razorpayOrderId, razorpayPaymentId, signature }) {
    return unwrap(
      await api.post("/payments/verify", { razorpayOrderId, razorpayPaymentId, signature })
    );
  },
};

export default paymentService;
