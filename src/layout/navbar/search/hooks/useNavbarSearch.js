"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "@/hooks/useDebounce";
import { useProducts } from "@/features/products/hooks/useProducts";

const SUGGESTION_LIMIT = 6;

export function useNavbarSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef(null);

  // Only hit the API once typing pauses — no request per keystroke.
  const debouncedQuery = useDebounce(query.trim(), 300);

  const { products: matchingProducts, isFetching } = useProducts(
    { search: debouncedQuery, limit: SUGGESTION_LIMIT },
    { enabled: debouncedQuery.length > 1 }
  );

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

  return {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    searchContainerRef,
    handleSearch,
    matchingProducts: debouncedQuery.length > 1 ? matchingProducts : [],
    isSearching: isFetching,
    router,
  };
}

export default useNavbarSearch;
