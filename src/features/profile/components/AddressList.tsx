"use client";

import { useState } from "react";
import type { SavedAddress } from "../types/profile.types";
import AddressCard from "./AddressCard";
import AddAddressModal from "./AddAddressModal";

interface AddressListProps {
  addresses: SavedAddress[];
}

function AddressEmptyState({ onAdd }: { onAdd: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center rounded-3xl border border-dashed border-cardline bg-cream/30 space-y-4">
      <div className="w-14 h-14 rounded-full bg-olive/10 grid place-items-center text-olive">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      </div>
      <div>
        <p className="text-sm font-bold text-ink">No saved addresses</p>
        <p className="text-xs text-muted mt-1">Add your home, work or other addresses for faster checkout.</p>
      </div>
      <button
        onClick={onAdd}
        className="bg-olive hover:bg-olive-dark text-white text-xs font-bold px-6 py-2.5 rounded-2xl transition shadow active:scale-[0.98]"
      >
        Add Address
      </button>
    </div>
  );
}

export default function AddressList({ addresses: initialAddresses }: AddressListProps) {
  const [addresses, setAddresses] = useState<SavedAddress[]>(initialAddresses);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState<SavedAddress | null>(null);

  function handleAdd() {
    setEditTarget(null);
    setIsModalOpen(true);
  }

  function handleEdit(address: SavedAddress) {
    setEditTarget(address);
    setIsModalOpen(true);
  }

  function handleDelete(id: string) {
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  }

  function handleSetDefault(id: string) {
    setAddresses((prev) =>
      prev.map((a) => ({ ...a, isDefault: a.id === id }))
    );
  }

  function handleSave(address: SavedAddress) {
    if (editTarget) {
      setAddresses((prev) => prev.map((a) => (a.id === address.id ? address : a)));
    } else {
      // If first address, make it default
      const isFirst = addresses.length === 0;
      setAddresses((prev) => [...prev, { ...address, isDefault: isFirst }]);
    }
    setIsModalOpen(false);
    setEditTarget(null);
  }

  return (
    <div className="rounded-3xl border border-cardline bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-cardline">
        <div>
          <h2 className="text-base font-black text-ink uppercase tracking-tight">Saved Addresses</h2>
          <p className="text-xs text-muted mt-0.5">
            {addresses.length} {addresses.length === 1 ? "address" : "addresses"} saved
          </p>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-1.5 bg-olive hover:bg-olive-dark text-white text-xs font-bold px-4 py-2.5 rounded-2xl transition shadow-sm shadow-olive/20 active:scale-[0.98]"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add Address
        </button>
      </div>

      <div className="p-6">
        {addresses.length === 0 ? (
          <AddressEmptyState onAdd={handleAdd} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addresses.map((address) => (
              <AddressCard
                key={address.id}
                address={address}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onSetDefault={handleSetDefault}
              />
            ))}
          </div>
        )}
      </div>

      <AddAddressModal
        isOpen={isModalOpen}
        editAddress={editTarget}
        onClose={() => {
          setIsModalOpen(false);
          setEditTarget(null);
        }}
        onSave={handleSave}
      />
    </div>
  );
}
