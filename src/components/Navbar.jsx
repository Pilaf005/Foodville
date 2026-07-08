"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { products } from "@/data/products";
import LocationModal from "@/components/location/LocationModal";

const SEARCH_SUGGESTIONS = [
  "fresh spice powders",
  "organic chia seeds",
  "premium California almonds",
  "pure turmeric powder",
  "ayurvedic ashwagandha",
  "roasted pumpkin seeds",
  "dehydrated garlic powder",
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  // ── Product Search State ──────────────────────────────────────
  const [query, setQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const searchContainerRef = useRef(null);

  // ── Location State ────────────────────────────────────────────
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [activeAddress, setActiveAddress] = useState(null);

  // ── Toast ─────────────────────────────────────────────────────
  const [toast, setToast] = useState(null); // { message }

  // ── Init from localStorage ────────────────────────────────────
  useEffect(() => {
    try {
      const raw = localStorage.getItem("activeAddress");
      if (raw) setActiveAddress(JSON.parse(raw));
    } catch (_) {}
  }, []);

  // ── Typewriter Placeholder ────────────────────────────────────
  useEffect(() => {
    let timer;
    const fullText = SEARCH_SUGGESTIONS[placeholderIndex];
    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);
        if (displayText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);
        if (displayText === "") {
          setIsDeleting(false);
          setPlaceholderIndex((p) => (p + 1) % SEARCH_SUGGESTIONS.length);
          return;
        }
      }
      timer = setTimeout(handleType, typingSpeed);
    };
    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, placeholderIndex, typingSpeed]);

  // ── Close search on outside click ─────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
        setIsSearchFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ── After address saved ───────────────────────────────────────
  function handleAddressSaved(addr) {
    setActiveAddress(addr);
    setIsLocationOpen(false);
    // Show toast
    setToast({ message: "Address saved successfully!" });
    setTimeout(() => setToast(null), 3000);
  }

  // ── Product autocomplete ──────────────────────────────────────
  function handleSearch(e) {
    if (e) e.preventDefault();
    setIsSearchFocused(false);
    if (query.trim()) router.push(`/?search=${encodeURIComponent(query.trim())}`);
    else router.push("/");
  }

  const matchingProducts = query.trim()
    ? products
        .filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase())) ||
            p.category.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5)
    : [];

  // ── Display label for navbar ──────────────────────────────────
  const locationLabel = activeAddress
    ? activeAddress.label || activeAddress.city || "My Location"
    : "Select Location";
  const locationSub = activeAddress
    ? (activeAddress.city || activeAddress.area || "").slice(0, 22)
    : null;

  // ─────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Toast notification ─────────────────────────────────── */}
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] animate-fade-in-down">
          <div className="flex items-center gap-2 bg-[#6B7F59] text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-xl">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {toast.message}
          </div>
        </div>
      )}

      {/* ══ HEADER ══════════════════════════════════════════════ */}
      <header className="sticky top-0 z-30 border-b border-cardline bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">

          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                window.scrollTo({ top: 0 });
              }
            }}
            className="flex items-center gap-2 group hover:opacity-90 transition mr-2 shrink-0"
          >
            <div className="w-9 h-9 rounded-xl bg-olive/15 flex items-center justify-center text-olive transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 shadow-sm border border-olive/10">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2c1.5 3 3.5 4 6.5 4-3 1.5-4 3.5-4 6.5-1.5-3-3.5-4-6.5-4 3-1.5 4-3.5 4-6.5z" fill="currentColor" fillOpacity="0.25" />
                <path d="M6 10h12l-1 9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2l-1-9z" />
                <path d="M9 10V6a3 3 0 0 1 6 0v4" />
              </svg>
            </div>
            <span className="text-base font-extrabold tracking-tight text-ink flex items-center">
              <span>Food</span>
              <span className="text-olive font-black ml-0.5">ville</span>
            </span>
          </Link>

          {/* Location Button */}
          <button
            onClick={() => setIsLocationOpen(true)}
            className="flex items-center gap-2 shrink-0 rounded-xl border border-cardline bg-white/70 px-3 py-2 text-left transition hover:bg-white hover:border-olive group focus:outline-none"
          >
            <span className="text-olive transition-transform duration-200 group-hover:scale-110">
              <MapPinIcon />
            </span>
            <div className="hidden md:block leading-tight max-w-[160px]">
              <div className="text-[10px] text-muted font-medium">Deliver to</div>
              <div className="flex items-center gap-0.5 text-xs font-bold text-ink">
                <span className="truncate">{locationLabel}</span>
                <ChevronDownIcon />
              </div>
              {locationSub && (
                <div className="text-[10px] text-muted truncate">{locationSub}</div>
              )}
            </div>
            <div className="md:hidden flex items-center gap-0.5 text-xs font-bold text-ink">
              <span className="max-w-[80px] truncate">{locationLabel}</span>
              <ChevronDownIcon />
            </div>
          </button>

          {/* Search Bar */}
          <div ref={searchContainerRef} className="relative flex-1 hidden sm:block">
            <form onSubmit={handleSearch} className="relative flex items-center">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                className="w-full rounded-full border border-cardline bg-white px-4 py-2.5 pl-10 pr-24 text-sm text-ink placeholder:text-transparent focus:outline-none focus:ring-1 focus:ring-olive"
              />
              {!query && (
                <div className="absolute left-10 pointer-events-none text-sm text-muted/60 flex items-center gap-1 select-none">
                  <span>Search for</span>
                  <span className="text-olive font-medium border-r-2 border-olive/70 pr-0.5 animate-pulse">
                    {displayText}
                  </span>
                </div>
              )}
              <div className="absolute left-3.5 text-muted pointer-events-none"><SearchIcon /></div>
              <button type="submit" className="absolute right-1 rounded-full bg-olive px-5 py-1.5 text-xs font-semibold text-white hover:bg-olive-dark transition focus:outline-none">
                Search
              </button>
            </form>

            {/* Autocomplete Dropdown */}
            {isSearchFocused && query.trim() && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-cardline bg-white p-3 shadow-xl z-50">
                {matchingProducts.length > 0 ? (
                  <>
                    <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-2 px-1">
                      Matching Products
                    </p>
                    <div className="space-y-0.5">
                      {matchingProducts.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => {
                            setQuery(p.name);
                            router.push(`/?search=${encodeURIComponent(p.name)}`);
                            setIsSearchFocused(false);
                          }}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-cream cursor-pointer transition"
                        >
                          <div className="h-9 w-9 rounded-lg bg-cream overflow-hidden shrink-0">
                            <img
                              src={p.image}
                              alt={p.name}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.onerror = null;
                                e.currentTarget.src =
                                  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36'><rect width='36' height='36' fill='%23F5F5F4'/></svg>";
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-ink truncate">{p.name}</p>
                            <p className="text-xs text-muted">{p.unit}</p>
                          </div>
                          <span className="text-sm font-bold text-gold shrink-0">₹{p.price}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-muted text-center py-3">No results for &ldquo;{query}&rdquo;</p>
                )}
              </div>
            )}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3 ml-auto shrink-0">
            <Link href="/wishlist" className="relative p-2 rounded-full text-ink hover:text-terracotta hover:bg-white/70 transition">
              <HeartIcon />
              {wishlistCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 h-4 w-4 grid place-items-center rounded-full bg-terracotta text-[9px] font-bold text-white ring-2 ring-cream">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link href="/cart" className="relative p-2 rounded-full text-ink hover:text-olive hover:bg-white/70 transition">
              <CartIcon />
              {cartCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 h-4 w-4 grid place-items-center rounded-full bg-olive text-[9px] font-bold text-white ring-2 ring-cream">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile search row */}
        <div className="px-4 pb-3 sm:hidden">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-cardline bg-white px-4 py-2 pl-9 pr-14 text-xs text-ink placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-olive"
            />
            <div className="absolute left-3 text-muted pointer-events-none"><SearchIcon /></div>
            <button type="submit" className="absolute right-1 rounded-full bg-olive px-3 py-1 text-xs text-white">Go</button>
          </form>
        </div>
      </header>

      {/* ══ NEW LOCATION MODAL ═══════════════════════════════════ */}
      <LocationModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
        onAddressSaved={handleAddressSaved}
      />
    </>
  );
}

// ═══ SVG Icon Components ═══════════════════════════════════════════
function HeartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 20s-7-4.35-9.5-8.5C.8 7.7 2.6 4.5 6 4.5c2 0 3.3 1.1 4 2.2.7-1.1 2-2.2 4-2.2 3.4 0 5.2 3.2 3.5 7C19 15.65 12 20 12 20Z" />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 4h2l1.2 12.2A2 2 0 0 0 8.2 18h9.6a2 2 0 0 0 2-1.8L21 8H6" />
      <circle cx="9" cy="21" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="17" cy="21" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
