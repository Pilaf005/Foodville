"use client";

import { useQuery } from "@tanstack/react-query";
import blogService from "@/features/blogs/services/blog.service";
import { queryKeys } from "@/lib/queryKeys";

export function useBlogs() {
  const query = useQuery({
    queryKey: queryKeys.blogs.all,
    queryFn: blogService.list,
    staleTime: 30 * 60 * 1000,
  });
  return { ...query, blogs: query.data ?? [] };
}

export function useBlog(slug) {
  const query = useQuery({
    queryKey: queryKeys.blogs.detail(slug),
    queryFn: () => blogService.getBySlug(slug),
    enabled: !!slug,
    retry: false,
  });
  return { ...query, blog: query.data ?? null };
}
