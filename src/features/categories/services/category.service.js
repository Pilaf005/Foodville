import api, { unwrap } from "@/lib/api";

export const categoryService = {
  async list() {
    return unwrap(await api.get("/categories"));
  },
};

export default categoryService;
