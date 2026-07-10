"use client";

import React, { useState, useEffect } from "react";
import { DesktopNavigation, MobileNavigation } from "./navigation";
import LocationModal from "@/features/checkout/components/location/LocationModal";

export const Navbar = () => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [activeAddress, setActiveAddress] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("activeAddress");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (raw) setActiveAddress(JSON.parse(raw));
    } catch (_) {}
  }, []);

  const handleAddressSaved = (addr) => {
    setActiveAddress(addr);
    setIsLocationOpen(false);
    setToast({ message: "Address saved successfully!" });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] animate-fade-in-down">
          <div className="flex items-center gap-2 bg-[#6B7F59] text-white text-sm font-semibold px-5 py-3 rounded-2xl shadow-xl max-w-[90vw] text-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            {toast.message}
          </div>
        </div>
      )}

      <header className="sticky top-0 z-30 border-b border-cardline bg-cream/95 backdrop-blur">
        <div className="hidden sm:block">
          <DesktopNavigation
            onLocationClick={() => setIsLocationOpen(true)}
            activeAddress={activeAddress}
          />
        </div>
        <div className="sm:hidden">
          <MobileNavigation
            onLocationClick={() => setIsLocationOpen(true)}
            activeAddress={activeAddress}
          />
        </div>
      </header>

      <LocationModal
        isOpen={isLocationOpen}
        onClose={() => setIsLocationOpen(false)}
        onAddressSaved={handleAddressSaved}
      />
    </>
  );
};

export default Navbar;
