"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import { useQuery, keepPreviousData } from "@tanstack/react-query";

export function useNavbarSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchContainerRef = useRef(null);

  // Sync search input with URL param on /search page, clear input when navigating to home or other routes
  useEffect(() => {
    setIsSearchFocused(false);
    if (pathname === "/search") {
      if (typeof window !== "undefined") {
        const params = new URLSearchParams(window.location.search);
        const qParam = params.get("q") || "";
        setQuery(qParam);
      }
    } else {
      setQuery("");
    }
  }, [pathname]);

  const debouncedQuery = useDebounce(query.trim(), 300);

  const { data: suggestions, isFetching } = useQuery({
    queryKey: ["search-suggestions", debouncedQuery],
    queryFn: async () => {
      const res = await fetch(`/api/search/suggestions?q=${encodeURIComponent(debouncedQuery)}`);
      if (!res.ok) return { products: [], categories: [], didYouMean: null };
      const json = await res.json();
      return json.data || { products: [], categories: [], didYouMean: null };
    },
    enabled: debouncedQuery.length > 1,
    placeholderData: keepPreviousData,
    staleTime: 30_000,
  });

  const currentSuggestions = suggestions || { products: [], categories: [], didYouMean: null };
  const totalItemsCount =
    (currentSuggestions.didYouMean ? 1 : 0) +
    currentSuggestions.products.length +
    currentSuggestions.categories.length;

  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  useEffect(() => {
    const handler = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function handleSearch(e) {
    if (e) e.preventDefault();
    setIsSearchFocused(false);
    const q = query.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  }

  function handleKeyDown(e) {
    if (!isSearchFocused) return;
    
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (prev < totalItemsCount - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) => (prev > -1 ? prev - 1 : -1));
    } else if (e.key === "Escape") {
      setIsSearchFocused(false);
    } else if (e.key === "Enter") {
      if (activeIndex > -1) {
        e.preventDefault();
        
        let currentIndex = 0;
        
        // Check Did You Mean
        if (currentSuggestions.didYouMean) {
          if (activeIndex === currentIndex) {
            setQuery(currentSuggestions.didYouMean);
            setIsSearchFocused(false);
            router.push(`/search?q=${encodeURIComponent(currentSuggestions.didYouMean)}`);
            return;
          }
          currentIndex++;
        }
        
        // Check Products
        if (activeIndex < currentIndex + currentSuggestions.products.length) {
          const product = currentSuggestions.products[activeIndex - currentIndex];
          setQuery(product.name);
          setIsSearchFocused(false);
          router.push(`/shop/${product.slug}`);
          return;
        }
        currentIndex += currentSuggestions.products.length;
        
        // Check Categories
        if (activeIndex < currentIndex + currentSuggestions.categories.length) {
          const category = currentSuggestions.categories[activeIndex - currentIndex];
          setIsSearchFocused(false);
          router.push(`/shop?tab=${category}`);
          return;
        }
      }
    }
  }

  return {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    searchContainerRef,
    handleSearch,
    suggestions: currentSuggestions,
    isSearching: isFetching,
    activeIndex,
    handleKeyDown,
    router,
  };
}

export default useNavbarSearch;
