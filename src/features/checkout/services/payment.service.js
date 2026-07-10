import api from "@/lib/api";

export const paymentService = {
  async initializePayment(paymentData) {
    // Placeholder to init order payment
    // const response = await api.post("/payments/initiate", paymentData);
    // return response.data;
    return null;
  },

  async verifyPayment(verificationData) {
    // Placeholder to verify payment status
    // const response = await api.post("/payments/verify", verificationData);
    // return response.data;
    return null;
  },
};

export default paymentService;
