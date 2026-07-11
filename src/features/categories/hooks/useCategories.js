"use client";

import { useQuery } from "@tanstack/react-query";
import categoryService from "@/features/categories/services/category.service";
import { CATEGORIES } from "@/features/home/constants/categories";
import { queryKeys } from "@/lib/queryKeys";

// "All Products" is a UI-only pseudo-category — it isn't stored in the DB.
const ALL_CATEGORY = CATEGORIES.find((c) => c.id === "all");

/**
 * Categories from the API, with the "All Products" tile prepended so the home
 * filter row renders exactly as before.
 */
export function useCategories() {
  const query = useQuery({
    queryKey: queryKeys.categories.all,
    queryFn: categoryService.list,
    staleTime: 30 * 60 * 1000, // categories barely change
  });

  const categories = query.data?.length ? [ALL_CATEGORY, ...query.data] : [];

  return { ...query, categories };
}
