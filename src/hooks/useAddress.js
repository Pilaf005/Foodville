"use client";
import { useState, useEffect, useCallback } from "react";

const ADDRESSES_KEY = "savedAddresses";
const ACTIVE_KEY = "activeAddress";

export function useAddress() {
  const [addresses, setAddresses] = useState([]);
  const [activeAddress, setActiveAddressState] = useState(null);

  // Load on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(ADDRESSES_KEY);
      if (raw) setAddresses(JSON.parse(raw));
    } catch (_) {}
    try {
      const raw = localStorage.getItem(ACTIVE_KEY);
      if (raw) setActiveAddressState(JSON.parse(raw));
    } catch (_) {}
  }, []);

  const saveAddress = useCallback((addr) => {
    setAddresses((prev) => {
      const exists = prev.some((a) => a.id === addr.id);
      const updated = exists
        ? prev.map((a) => (a.id === addr.id ? addr : a))
        : [...prev, addr];
      localStorage.setItem(ADDRESSES_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const deleteAddress = useCallback((id) => {
    setAddresses((prev) => {
      const updated = prev.filter((a) => a.id !== id);
      localStorage.setItem(ADDRESSES_KEY, JSON.stringify(updated));
      return updated;
    });
    // Clear active if it was deleted
    setActiveAddressState((prev) => {
      if (prev?.id === id) {
        localStorage.removeItem(ACTIVE_KEY);
        return null;
      }
      return prev;
    });
  }, []);

  const setActiveAddress = useCallback((addr) => {
    setActiveAddressState(addr);
    if (addr) {
      localStorage.setItem(ACTIVE_KEY, JSON.stringify(addr));
    } else {
      localStorage.removeItem(ACTIVE_KEY);
    }
  }, []);

  return { addresses, activeAddress, saveAddress, deleteAddress, setActiveAddress };
}
