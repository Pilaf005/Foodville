"use client";

import { useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "fv_recent_searches";
const MAX_RECENT = 8;

export function useRecentSearches() {
  const [recentSearches, setRecentSearches] = useState([]);

  // Load from localStorage on mount (client only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setRecentSearches(JSON.parse(stored));
    } catch {}
  }, []);

  const addSearch = useCallback((term) => {
    const trimmed = term.trim();
    if (!trimmed) return;
    setRecentSearches((prev) => {
      const filtered = prev.filter((s) => s.toLowerCase() !== trimmed.toLowerCase());
      const updated = [trimmed, ...filtered].slice(0, MAX_RECENT);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch {}
      return updated;
    });
  }, []);

  const removeSearch = useCallback((term) => {
    setRecentSearches((prev) => {
      const updated = prev.filter((s) => s !== term);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch {}
      return updated;
    });
  }, []);

  const clearAll = useCallback(() => {
    setRecentSearches([]);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  }, []);

  return { recentSearches, addSearch, removeSearch, clearAll };
}

export default useRecentSearches;
