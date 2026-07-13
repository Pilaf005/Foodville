import React from "react";

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export const SearchInput = ({
  query,
  onChange,
  onFocus,
  displayText,
  placeholder,
  isMobile = false,
}) => {
  return (
    <>
      <input
        type="text"
        value={query}
        onChange={onChange}
        onFocus={onFocus}
        placeholder={isMobile ? placeholder : "Search products..."}
        suppressHydrationWarning
        className={
          isMobile
            ? "w-full rounded-lg border border-olive bg-white px-4 py-2 pl-4 pr-14 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-olive"
            : "w-full rounded-full border border-cardline bg-white px-4 py-2.5 pl-10 pr-24 text-sm text-ink placeholder:text-transparent focus:outline-none focus:ring-1 focus:ring-olive"
        }
      />
      {!isMobile && !query && (
        <div className="absolute left-10 pointer-events-none text-sm text-muted/60 flex items-center gap-1 select-none">
          <span>Search for</span>
          <span className="text-olive font-medium border-r-2 border-olive/70 pr-0.5 animate-pulse">
            {displayText}
          </span>
        </div>
      )}
      {!isMobile && (
        <div className="absolute left-3.5 text-muted pointer-events-none">
          <SearchIcon />
        </div>
      )}
    </>
  );
};

export default SearchInput;
