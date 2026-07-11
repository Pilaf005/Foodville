"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/features/auth/hooks/useAuth";
import cartService from "@/features/cart/services/cart.service";
import { queryKeys } from "@/lib/queryKeys";

/**
 * Hybrid cart.
 *
 *  - Guest      → kept in localStorage, so it survives a refresh.
 *  - Signed in  → the SERVER is the source of truth (prices are recomputed
 *                 there, so a tampered client can't change what things cost).
 *  - On login   → the guest cart is merged into the account exactly once.
 *
 * The exposed API (cart, addToCart, removeFromCart, updateQty, clearCart,
 * cartCount, cartTotal) is unchanged, so every existing component still works.
 */
const CartContext = createContext(null);
const STORAGE_KEY = "fv_guest_cart";

const readGuestCart = () => {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
};

const writeGuestCart = (items) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    /* quota / private mode — non-fatal */
  }
};

/** Server line items → the shape the UI already renders. */
const fromServer = (data) =>
  (data?.items || []).map((i) => ({
    id: i.productId,
    slug: i.slug,
    name: i.name,
    price: i.price,
    mrp: i.mrp,
    image: i.image,
    unit: i.unit,
    qty: i.qty,
  }));

export function CartProvider({ children }) {
  const { isAuthenticated, isLoading } = useAuth();
  const queryClient = useQueryClient();

  const [cart, setCart] = useState([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const mergedRef = useRef(false);
  const hydratedRef = useRef(false);

  // 1. Hydrate the guest cart from localStorage on first mount.
  useEffect(() => {
    setCart(readGuestCart());
    hydratedRef.current = true;
  }, []);

  // 2. Persist guest changes (only while signed out).
  useEffect(() => {
    if (!hydratedRef.current || isAuthenticated) return;
    writeGuestCart(cart);
  }, [cart, isAuthenticated]);

  // 3. On login: merge the guest cart, then adopt the server cart.
  useEffect(() => {
    if (isLoading || !isAuthenticated || mergedRef.current) return;
    mergedRef.current = true;

    (async () => {
      setIsSyncing(true);
      try {
        const guestItems = readGuestCart().map((i) => ({
          productId: i.id,
          qty: i.qty,
          unit: i.unit || "",
        }));

        const data = guestItems.length
          ? (await cartService.merge({ items: guestItems })).cart
          : await cartService.get();

        setCart(fromServer(data));
        writeGuestCart([]); // the guest cart now lives in the account
        queryClient.invalidateQueries({ queryKey: queryKeys.cart.all });
      } catch {
        /* keep the local cart if the sync fails */
      } finally {
        setIsSyncing(false);
      }
    })();
  }, [isAuthenticated, isLoading, queryClient]);

  // Reset the merge latch on sign-out.
  useEffect(() => {
    if (!isAuthenticated && !isLoading) mergedRef.current = false;
  }, [isAuthenticated, isLoading]);

  /* ── mutations ───────────────────────────────────────────────────────────
     Optimistic locally, then reconciled with the server when signed in.     */

  async function addToCart(product, qty = 1) {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          mrp: product.mrp,
          image: product.image,
          unit: product.unit,
          qty,
        },
      ];
    });

    if (isAuthenticated) {
      try {
        const data = await cartService.add({
          productId: product.id,
          qty,
          unit: product.unit || "",
        });
        setCart(fromServer(data));
      } catch {
        /* local state stays — the next load reconciles */
      }
    }
  }

  async function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
    if (isAuthenticated) {
      try {
        setCart(fromServer(await cartService.remove(id)));
      } catch { /* ignore */ }
    }
  }

  async function updateQty(id, qty) {
    if (qty <= 0) return removeFromCart(id);

    setCart((prev) => prev.map((item) => (item.id === id ? { ...item, qty } : item)));
    if (isAuthenticated) {
      try {
        setCart(fromServer(await cartService.update(id, { qty })));
      } catch { /* ignore */ }
    }
  }

  async function clearCart() {
    setCart([]);
    writeGuestCart([]);
    if (isAuthenticated) {
      try {
        await cartService.clear();
      } catch { /* ignore */ }
    }
  }

  /** Pull the server cart again (e.g. after placing an order). */
  async function refreshCart() {
    if (!isAuthenticated) return;
    try {
      setCart(fromServer(await cartService.get()));
    } catch { /* ignore */ }
  }

  const cartCount = cart.length; // number of unique products, not total quantity
  const cartTotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        refreshCart,
        cartCount,
        cartTotal,
        isSyncing,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
