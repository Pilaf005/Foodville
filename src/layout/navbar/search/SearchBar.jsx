"use client";

import React from "react";
import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";
import { useNavbarSearch } from "./hooks/useNavbarSearch";
import { useTypewriter } from "./hooks/useTypewriter";
import { SEARCH_SUGGESTIONS } from "./constants/searchSuggestions";

export const SearchBar = ({ isMobile = false }) => {
  const {
    query,
    setQuery,
    isSearchFocused,
    setIsSearchFocused,
    searchContainerRef,
    handleSearch,
    matchingProducts,
    router,
  } = useNavbarSearch();

  const { displayText } = useTypewriter(SEARCH_SUGGESTIONS);

  const handleSelectSuggestion = (name) => {
    setQuery(name);
    setIsSearchFocused(false);
    router.push(`/search?q=${encodeURIComponent(name)}`);
  };

  if (isMobile) {
    return (
      <form onSubmit={handleSearch} className="relative flex items-center">
        <SearchInput
          query={query}
          onChange={(e) => setQuery(e.target.value)}
          isMobile
          placeholder="Search products..."
        />
        <button
          type="submit"
          className="absolute right-1.5 rounded-xl bg-olive px-4 py-2 text-xs font-semibold text-white min-h-[36px]"
        >
          Search
        </button>
      </form>
    );
  }

  return (
    <div ref={searchContainerRef} className="relative flex-1 hidden sm:block">
      <form onSubmit={handleSearch} className="relative flex items-center">
        <SearchInput
          query={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsSearchFocused(true)}
          displayText={displayText}
        />
        <button
          type="submit"
          className="absolute right-1 rounded-full bg-olive px-5 py-1.5 text-xs font-semibold text-white hover:bg-olive-dark transition focus:outline-none"
        >
          Search
        </button>
      </form>

      {isSearchFocused && query.trim() && (
        <SearchSuggestions
          query={query}
          matchingProducts={matchingProducts}
          onSelectSuggestion={handleSelectSuggestion}
        />
      )}
    </div>
  );
};

export default SearchBar;
