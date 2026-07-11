"use client";

import { useQuery, keepPreviousData } from "@tanstack/react-query";
import productService from "@/features/products/services/product.service";
import { queryKeys } from "@/lib/queryKeys";

/**
 * Product list. `keepPreviousData` means switching tab/page keeps the old grid
 * on screen while the next one loads — no flash of empty state.
 */
export function useProducts(params = {}, options = {}) {
  const query = useQuery({
    queryKey: queryKeys.products.list(params),
    queryFn: () => productService.list(params),
    placeholderData: keepPreviousData,
    ...options,
  });

  return {
    ...query,
    products: query.data?.items ?? [],
    meta: query.data?.meta ?? null,
  };
}

export function useProduct(slug, options = {}) {
  const query = useQuery({
    queryKey: queryKeys.products.detail(slug),
    queryFn: () => productService.getBySlug(slug),
    enabled: !!slug,
    retry: false, // a 404 shouldn't be retried
    ...options,
  });

  return { ...query, product: query.data ?? null };
}

export function useSimilarProducts(key, limit = 4, options = {}) {
  const query = useQuery({
    queryKey: queryKeys.products.similar(key, limit),
    queryFn: () => productService.getSimilar(key, limit),
    enabled: !!key,
    ...options,
  });

  return { ...query, products: query.data ?? [] };
}

/** Highest-rated products (rating >= 4.5), used by the Top Sellers strip. */
export function useTopSellers(limit = 4) {
  const query = useProducts({ topSellers: true, sort: "rating", limit });
  return { ...query, products: query.products };
}
