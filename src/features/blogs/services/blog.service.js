import api, { unwrap } from "@/lib/api";

export const blogService = {
  async list() {
    return unwrap(await api.get("/blogs"));
  },

  async getBySlug(slug) {
    return unwrap(await api.get(`/blogs/${slug}`));
  },
};

export default blogService;
