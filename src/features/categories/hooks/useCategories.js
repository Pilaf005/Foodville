"use client";

import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import categoryService from "@/features/categories/services/category.service";
import { queryKeys } from "@/lib/queryKeys";

const LOCAL_STORAGE_KEY = "foodville_categories_cache";

function getCachedCategories() {
  if (typeof window === "undefined") return undefined;
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return undefined;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch {
    // Ignore JSON parse or localStorage access errors
  }
  return undefined;
}

function setCachedCategories(data) {
  if (typeof window === "undefined" || !Array.isArray(data) || data.length === 0) return;
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Ignore storage quota / access errors
  }
}

/**
 * Hook to retrieve categories with instant localStorage cache & background revalidation.
 */
export function useCategories() {
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: queryKeys.categories.all,
    queryFn: async () => {
      const data = await categoryService.list();
      if (Array.isArray(data) && data.length > 0) {
        setCachedCategories(data);
      }
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes fresh
    gcTime: 24 * 60 * 60 * 1000, // keep in memory for 24 hours
  });

  // Hydration-safe client cache seeding from localStorage
  useEffect(() => {
    if (!query.data) {
      const cached = getCachedCategories();
      if (cached && Array.isArray(cached) && cached.length > 0) {
        queryClient.setQueryData(queryKeys.categories.all, cached);
      }
    }
  }, [query.data, queryClient]);

  const categories = query.data || [];

  return { ...query, categories };
}
