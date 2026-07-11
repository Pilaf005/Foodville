"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { DesktopNavigation, MobileNavigation } from "./navigation";
import AddressPickerModal from "@/features/address/components/AddressPickerModal";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { useAddresses, useAddressMutations } from "@/features/profile/hooks/useProfile";

export const Navbar = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useAuth();
  const { addresses } = useAddresses();
  const { update } = useAddressMutations();
  const [isPickerOpen, setIsPickerOpen] = useState(false);

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
      <header className="sticky top-0 z-30 border-b border-cardline bg-cream/95 backdrop-blur">
        <div className="hidden sm:block">
          <DesktopNavigation onLocationClick={handleLocationClick} activeAddress={activeAddress} />
        </div>
        <div className="sm:hidden">
          <MobileNavigation onLocationClick={handleLocationClick} activeAddress={activeAddress} />
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
    </>
  );
};

export default Navbar;
