import api, { unwrap } from "@/lib/api";

export const profileService = {
  async get() {
    return unwrap(await api.get("/profile"));
  },
  async update(data) {
    return unwrap(await api.put("/profile", data));
  },
  async updatePreferences(preferences) {
    return unwrap(await api.put("/profile/preferences", preferences));
  },
  async updateNotifications(notifications) {
    return unwrap(await api.put("/profile/notifications", notifications));
  },
};

export const addressService = {
  async list() {
    return unwrap(await api.get("/addresses"));
  },
  async create(data) {
    return unwrap(await api.post("/addresses", data));
  },
  async update(id, data) {
    return unwrap(await api.put(`/addresses/${id}`, data));
  },
  async remove(id) {
    return unwrap(await api.delete(`/addresses/${id}`));
  },
};

export const uploadService = {
  /** Uploads an image to R2 and returns { key, url }. */
  async image({ file, folder, ownerId, replaceUrl }) {
    const form = new FormData();
    form.append("file", file);
    form.append("folder", folder);
    if (ownerId) form.append("ownerId", ownerId);
    if (replaceUrl) form.append("replaceUrl", replaceUrl);

    const res = await api.post("/uploads", form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data?.data;
  },
};

export default profileService;
