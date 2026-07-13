"use client";

import { useQuery } from "@tanstack/react-query";
import categoryService from "@/features/categories/services/category.service";
import { queryKeys } from "@/lib/queryKeys";

/**
 * Hook to retrieve categories from the API.
 */
export function useCategories() {
  const query = useQuery({
    queryKey: queryKeys.categories.all,
    queryFn: categoryService.list,
    staleTime: 30 * 60 * 1000, // categories barely change
  });

  const categories = query.data || [];

  return { ...query, categories };
}
