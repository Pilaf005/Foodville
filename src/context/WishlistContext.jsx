"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";
import wishlistService from "@/features/wishlist/services/wishlist.service";

/**
 * Hybrid wishlist — same pattern as the cart: localStorage for guests, server
 * for signed-in users, merged once on login. The exposed API is unchanged.
 */
const WishlistContext = createContext(null);
const STORAGE_KEY = "fv_guest_wishlist";

const readGuest = () => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

const writeGuest = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* non-fatal */
  }
};

export function WishlistProvider({ children }) {
  const { isAuthenticated, isLoading } = useAuth();

  // wishlist = array of full product objects (the grid renders them directly)
  const [wishlist, setWishlist] = useState([]);
  const mergedRef = useRef(false);
  const hydratedRef = useRef(false);

  useEffect(() => {
    setWishlist(readGuest());
    hydratedRef.current = true;
  }, []);

  useEffect(() => {
    if (!hydratedRef.current || isAuthenticated) return;
    writeGuest(wishlist);
  }, [wishlist, isAuthenticated]);

  // On login: merge guest wishlist ids, then adopt the server's list.
  useEffect(() => {
    if (isLoading || !isAuthenticated || mergedRef.current) return;
    mergedRef.current = true;

    (async () => {
      try {
        const guestIds = readGuest().map((p) => p.id).filter(Boolean);
        const products = guestIds.length
          ? (await wishlistService.merge(guestIds)).wishlist
          : await wishlistService.get();
        setWishlist(products || []);
        writeGuest([]);
      } catch {
        /* keep local list if sync fails */
      }
    })();
  }, [isAuthenticated, isLoading]);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) mergedRef.current = false;
  }, [isAuthenticated, isLoading]);

  function isInWishlist(id) {
    return wishlist.some((item) => item.id === id);
  }

  async function toggleWishlist(product) {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );

    if (isAuthenticated) {
      try {
        const { products } = await wishlistService.toggle(product.id);
        setWishlist(products || []);
      } catch { /* local state stands */ }
    }
  }

  async function removeFromWishlist(id) {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    if (isAuthenticated) {
      try {
        const { products } = await wishlistService.toggle(id);
        setWishlist(products || []);
      } catch { /* ignore */ }
    }
  }

  const wishlistCount = wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        isInWishlist,
        toggleWishlist,
        removeFromWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used inside WishlistProvider");
  return ctx;
}
