"use client";

import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";
import { useNavbarSearch } from "./hooks/useNavbarSearch";
import { useTypewriter } from "./hooks/useTypewriter";
import { SEARCH_SUGGESTIONS } from "./constants/searchSuggestions";
import { useRecentSearches } from "./hooks/useRecentSearches";
import { MobileSearchOverlay } from "./MobileSearchOverlay";

export const SearchBar = ({ isMobile = false }) => {
  const {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    searchContainerRef,
    handleSearch,
    suggestions,
    isSearching,
    activeIndex,
    handleKeyDown,
    router,
  } = useNavbarSearch();

  const { displayText } = useTypewriter(SEARCH_SUGGESTIONS);
  const { recentSearches, addSearch, removeSearch, clearAll } = useRecentSearches();
  const [isMobileOverlayOpen, setIsMobileOverlayOpen] = useState(false);

  const handleSelectSuggestion = (name) => {
    addSearch(name);
    setQuery(name);
    setIsSearchFocused(false);
    setIsMobileOverlayOpen(false);
    router.push(`/search?q=${encodeURIComponent(name)}`);
  };

  const handleSelectCategory = (c) => {
    setIsSearchFocused(false);
    setIsMobileOverlayOpen(false);
    router.push(`/shop?tab=${c}`);
  };

  const handleSubmit = (e) => {
    if (query.trim()) addSearch(query);
    handleSearch(e);
  };

  if (isMobile) {
    return (
      <div ref={searchContainerRef} className="relative w-full">
        <form onSubmit={handleSubmit} className="relative flex items-center w-full">
          <SearchInput
            query={query}
            onChange={(e) => { setQuery(e.target.value); setIsSearchFocused(true); }}
            onFocus={() => setIsSearchFocused(true)}
            onKeyDown={handleKeyDown}
            isMobile
            placeholder="Search Foodville"
            isFocused={isSearchFocused}
          />
          <button
            type="submit"
            suppressHydrationWarning
            className="absolute inset-y-0 right-0 w-11 rounded-r-[7px] bg-olive hover:bg-olive-dark text-white flex items-center justify-center transition active:scale-95"
            aria-label="Search"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>
        </form>

        <div style={{ display: isSearchFocused && (query.trim().length > 0 || recentSearches.length > 0) ? "block" : "none" }}>
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
          />
        </div>
      </div>
    );
  }

  return (
    <div ref={searchContainerRef} className="relative flex-1 hidden sm:block">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <SearchInput
          query={query}
          onChange={(e) => { setQuery(e.target.value); setIsSearchFocused(true); }}
          onFocus={() => setIsSearchFocused(true)}
          onKeyDown={handleKeyDown}
          displayText={displayText}
          isFocused={isSearchFocused}
        />
        <button
          type="submit"
          suppressHydrationWarning
          className="absolute right-1 rounded-full bg-olive px-5 py-1.5 text-xs font-semibold text-white hover:bg-olive-dark transition focus:outline-none"
        >
          Search
        </button>
      </form>

      <div style={{ display: isSearchFocused && (query.trim().length > 0 || recentSearches.length > 0) ? "block" : "none" }}>
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
        />
      </div>
    </div>
  );
};

export default SearchBar;
