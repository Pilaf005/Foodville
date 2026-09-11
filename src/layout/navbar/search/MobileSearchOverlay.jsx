"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";
import { useNavbarSearch } from "./hooks/useNavbarSearch";
import { useRecentSearches } from "./hooks/useRecentSearches";

export const MobileSearchOverlay = ({ isOpen, onClose, onSearch }) => {
  const [mounted, setMounted] = useState(false);
  const {
    query,
    setQuery,
    suggestions,
    isSearching,
    activeIndex,
    router,
  } = useNavbarSearch();

  const { recentSearches, addSearch, removeSearch, clearAll } = useRecentSearches();
  const inputRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const handleSelectSuggestion = (suggestion) => {
    const name = typeof suggestion === "object" ? suggestion.name : suggestion;
    addSearch(name);
    setQuery(name);
    onClose();
    if (typeof suggestion === "object" && suggestion.slug) {
      const href = suggestion.unit
        ? `/product/${suggestion.slug}?unit=${encodeURIComponent(suggestion.unit)}`
        : `/product/${suggestion.slug}`;
      router.push(href);
    } else {
      router.push(`/search?q=${encodeURIComponent(name)}`);
    }
  };

  const handleSelectCategory = (c) => {
    onClose();
    router.push(`/shop?tab=${c}`);
  };

  const handleSubmit = (e) => {
    if (query.trim()) addSearch(query);
    onSearch(e);
    onClose();
  };

  const overlayContent = (
    <div className="fixed inset-0 bg-white z-[999] flex flex-col animate-slide-up">
      <div className="flex items-center gap-3 p-4 border-b border-cardline bg-white shadow-sm shrink-0">
        <button onClick={onClose} className="p-1 -ml-1 text-ink shrink-0 active:bg-cream rounded-full transition min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised" aria-label="Close search">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>
          </svg>
        </button>
        <form onSubmit={handleSubmit} className="relative flex-1 flex items-center">
          <div className="w-full relative" ref={inputRef}>
            <SearchInput
              query={query}
              onChange={(e) => setQuery(e.target.value)}
              isMobile
              placeholder="Search Foodville"
              isFocused
            />
          </div>
        </form>
      </div>
      
      <div className="flex-1 overflow-y-auto bg-white p-2">
        <SearchSuggestions
          query={query}
          suggestions={suggestions}
          recentSearches={recentSearches}
          onSelectSuggestion={handleSelectSuggestion}
          onSelectCategory={handleSelectCategory}
          onRemoveRecent={removeSearch}
          onClearRecent={clearAll}
          activeIndex={activeIndex}
          isSearching={isSearching}
          isMobileOverlay
        />
      </div>
    </div>
  );

  return createPortal(overlayContent, document.body);
};

export default MobileSearchOverlay;
