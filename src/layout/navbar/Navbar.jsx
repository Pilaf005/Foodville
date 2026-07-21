"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { DesktopNavigation, MobileNavigation } from "./navigation";
import AddressPickerModal from "@/features/address/components/AddressPickerModal";
import { MobileDrawer } from "./mobile/MobileDrawer";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useAddresses, useAddressMutations } from "@/features/profile/hooks/useProfile";

export const Navbar = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const { addresses } = useAddresses();
  const { update } = useAddressMutations();
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const transitionLock = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (transitionLock.current) return; // block events during height transition
      const y = window.scrollY;
      setIsScrolled((prev) => {
        if (!prev && y > 100) {
          // lock scroll events for the duration of the CSS transition
          transitionLock.current = true;
          setTimeout(() => { transitionLock.current = false; }, 400);
          return true;
        }
        if (prev && y < 12) {
          transitionLock.current = true;
          setTimeout(() => { transitionLock.current = false; }, 400);
          return false;
        }
        return prev; // dead zone — no change
      });
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The navbar shows the DEFAULT saved address — one source of truth shared
  // with checkout (which also auto-selects the default). No localStorage.
  const activeAddress = addresses.find((a) => a.isDefault) || addresses[0] || null;

  function handleLocationClick() {
    if (!isAuthenticated) {
      toast.info("Sign in to save your delivery address.");
      router.push("/login?redirect=/");
      return;
    }
    setIsPickerOpen(true);
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-cardline bg-cream/95 backdrop-blur">
        <div className="hidden md:block">
          <DesktopNavigation onLocationClick={handleLocationClick} activeAddress={activeAddress} />
        </div>
        <div className="md:hidden">
          <MobileNavigation
            onLocationClick={handleLocationClick}
            activeAddress={activeAddress}
            onMenuClick={() => setIsDrawerOpen(true)}
            isScrolled={isScrolled}
          />
        </div>
      </header>

      <AddressPickerModal
        isOpen={isPickerOpen}
        onClose={() => setIsPickerOpen(false)}
        selectedId={activeAddress?.id}
        prefill={{ receiverName: user?.fullName, phone: user?.phone }}
        onSelect={(addr) => {
          // Choosing here makes it the default — navbar and checkout stay in sync.
          if (addr?.id && !addr.isDefault) update.mutate({ id: addr.id, data: { isDefault: true } });
        }}
      />

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default Navbar;
