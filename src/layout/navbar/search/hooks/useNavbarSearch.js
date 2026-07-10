"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getMatchingProducts } from "../utils/searchHelpers";

export function useNavbarSearch() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchContainerRef = useRef(null);

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
    if (query.trim()) {
      router.push(`/?search=${encodeURIComponent(query.trim())}`);
    } else {
      router.push("/");
    }
  }

  const matchingProducts = getMatchingProducts(query);

  return {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    searchContainerRef,
    handleSearch,
    matchingProducts,
    router,
  };
}

export default useNavbarSearch;
