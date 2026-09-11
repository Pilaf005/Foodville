"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { ALL_COUNTRIES } from "@/data/countries";

export default function SearchableCountrySelect({
  value,
  onChange,
  required = false,
  placeholder = "Search & select destination country...",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);
  const searchInputRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-focus search input when opened
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 50);
    } else {
      setSearchQuery("");
    }
  }, [isOpen]);

  // Find currently selected country object
  const selectedCountry = useMemo(() => {
    if (!value) return null;
    return (
      ALL_COUNTRIES.find(
        (c) => c.name.toLowerCase() === String(value).toLowerCase()
      ) || { name: value, flag: "🌐", code: "" }
    );
  }, [value]);

  // Filtered countries based on search
  const filteredCountries = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return ALL_COUNTRIES;
    return ALL_COUNTRIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        (c.code && c.code.toLowerCase().includes(q))
    );
  }, [searchQuery]);

  const handleSelect = (countryName) => {
    onChange(countryName);
    setIsOpen(false);
    setSearchQuery("");
  };

  return (
    <div className={`relative w-full ${className}`} ref={containerRef}>
      {/* Hidden native input for form validation */}
      <input
        type="text"
        tabIndex={-1}
        className="sr-only"
        required={required}
        value={value || ""}
        onChange={() => {}}
      />

      {/* Main Select Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 bg-white text-left text-sm flex items-center justify-between gap-2 focus:outline-none focus:ring-2 focus:ring-[#6B7F59]/20 focus:border-[#6B7F59] transition cursor-pointer shadow-xs min-h-[44px]"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2 truncate">
          {selectedCountry ? (
            <>
              <span className="text-base leading-none">{selectedCountry.flag}</span>
              <span className="font-semibold text-ink truncate">{selectedCountry.name}</span>
            </>
          ) : (
            <span className="text-stone-400 truncate">{placeholder}</span>
          )}
        </div>

        <svg
          className={`w-4 h-4 text-stone-400 transition-transform duration-200 shrink-0 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full mt-1.5 z-50 bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden animate-fadeIn">
          {/* Search Header */}
          <div className="p-2.5 bg-stone-50 border-b border-stone-100 sticky top-0 z-10">
            <div className="relative">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type to search country..."
                className="w-full pl-8 pr-7 py-2 text-xs font-semibold rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#56684A] bg-white text-ink"
              />
              <svg
                className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-stone-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-700 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>
            <p className="text-[10px] text-stone-400 mt-1.5 px-1 font-medium flex justify-between">
              <span>{filteredCountries.length} countries available</span>
              <span>All 195+ global destinations</span>
            </p>
          </div>

          {/* Countries List */}
          <ul
            className="max-h-60 overflow-y-auto divide-y divide-stone-50 text-xs py-1"
            role="listbox"
          >
            {filteredCountries.length === 0 ? (
              <li className="p-4 text-center space-y-2 text-stone-400">
                <p className="font-semibold">No standard country match for &quot;{searchQuery}&quot;</p>
                <button
                  type="button"
                  onClick={() => handleSelect(searchQuery.trim())}
                  className="px-3 py-1.5 rounded-lg bg-[#56684A] text-white text-[11px] font-bold hover:bg-[#45543B] transition"
                >
                  Use &quot;{searchQuery.trim()}&quot; as destination
                </button>
              </li>
            ) : (
              filteredCountries.map((c) => {
                const isSelected =
                  value && String(value).toLowerCase() === c.name.toLowerCase();
                return (
                  <li key={c.name}>
                    <button
                      type="button"
                      onClick={() => handleSelect(c.name)}
                      className={`w-full px-3.5 py-2.5 flex items-center justify-between text-left transition cursor-pointer ${
                        isSelected
                          ? "bg-[#56684A]/10 text-[#56684A] font-bold"
                          : "hover:bg-stone-50 text-stone-700 font-medium"
                      }`}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <span className="text-base leading-none shrink-0">{c.flag}</span>
                        <span className="truncate">{c.name}</span>
                      </div>
                      {c.code && (
                        <span className="text-[10px] font-mono font-bold text-stone-400 bg-stone-100 px-1.5 py-0.5 rounded ml-2 shrink-0">
                          {c.code}
                        </span>
                      )}
                    </button>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
