import api from "@/lib/api";

export const authService = {
  async login(credentials) {
    // Placeholder login call
    // const response = await api.post("/auth/login", credentials);
    // return response.data;
    return null;
  },

  async logout() {
    // Placeholder logout call
    // const response = await api.post("/auth/logout");
    // return response.data;
    return null;
  },

  async register(data) {
    // Placeholder register call
    // const response = await api.post("/auth/register", data);
    // return response.data;
    return null;
  },

  async getCurrentUser() {
    // Placeholder fetch user profile
    // const response = await api.get("/auth/me");
    // return response.data;
    return null;
  },
};

export default authService;
