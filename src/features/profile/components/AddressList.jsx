"use client";

import { useState } from "react";
import { useAddresses, useAddressMutations } from "@/features/profile/hooks/useProfile";
import AddressFormModal from "@/features/address/components/AddressFormModal";
import { Skeleton } from "@/components/feedback/Skeleton";

const LABEL_ICON = {
  Home: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Work: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Hotel: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16" />
      <path d="M2 21h20M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
    </svg>
  ),
  Other: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

export function formatAddressLines(a) {
  return [
    [a.houseFlat, a.area].filter(Boolean).join(", "),
    [a.landmark, a.city].filter(Boolean).join(", "),
    [a.state, a.pincode].filter(Boolean).join(" — "),
  ].filter(Boolean);
}

function AddressCard({ address, onEdit, onDelete, onSetDefault, busy }) {
  return (
    <div className={`animate-fade-in relative rounded-2xl border p-4 transition ${address.isDefault ? "border-olive/60 bg-olive/5" : "border-cardline bg-white"}`}>
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-cream px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink">
          <span className="text-olive">{LABEL_ICON[address.label] || LABEL_ICON.Other}</span>
          {address.label}
        </span>
        {address.isDefault && (
          <span className="rounded-full bg-olive px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
            Default
          </span>
        )}
      </div>

      <p className="text-sm font-bold text-ink">{address.receiverName}</p>
      {formatAddressLines(address).map((line, i) => (
        <p key={i} className="mt-0.5 text-xs leading-relaxed text-muted">{line}</p>
      ))}
      <p className="mt-1 text-xs font-semibold text-muted">📞 {address.phone}</p>

      <div className="mt-3 flex flex-wrap gap-2 border-t border-cardline/60 pt-3">
        <button
          onClick={() => onEdit(address)}
          className="rounded-xl border border-cardline px-3 py-1.5 text-[11px] font-bold text-ink transition hover:border-olive hover:text-olive active:scale-95"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(address)}
          disabled={busy}
          className="rounded-xl border border-red-200 px-3 py-1.5 text-[11px] font-bold text-red-500 transition hover:bg-red-50 active:scale-95 disabled:opacity-50"
        >
          Delete
        </button>
        {!address.isDefault && (
          <button
            onClick={() => onSetDefault(address)}
            disabled={busy}
            className="rounded-xl border border-cardline px-3 py-1.5 text-[11px] font-bold text-muted transition hover:border-olive hover:text-olive active:scale-95 disabled:opacity-50"
          >
            Set as default
          </button>
        )}
      </div>
    </div>
  );
}

export default function AddressList({ prefill }) {
  const { addresses, isPending } = useAddresses();
  const { update, remove } = useAddressMutations();
  const [modalOpen, setModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);

  const openAdd = () => { setEditTarget(null); setModalOpen(true); };
  const openEdit = (a) => { setEditTarget(a); setModalOpen(true); };

  function handleDelete(a) {
    if (confirm(`Delete the ${a.label} address for ${a.receiverName}?`)) {
      remove.mutate(a.id);
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-cardline bg-white shadow-sm">
      {/* Header — the ONLY add button (the empty state has its own, shown only when the list is empty) */}
      <div className="flex items-center justify-between border-b border-cardline px-6 py-4">
        <div>
          <h2 className="text-base font-black uppercase tracking-tight text-ink">Saved Addresses</h2>
          <p className="mt-0.5 text-xs text-muted">
            {isPending ? "Loading…" : `${addresses.length} ${addresses.length === 1 ? "address" : "addresses"} saved`}
          </p>
        </div>
        {addresses.length > 0 && (
          <button
            onClick={openAdd}
            className="flex items-center gap-1.5 rounded-2xl bg-olive px-4 py-2.5 text-xs font-bold text-white shadow-sm shadow-olive/20 transition hover:bg-olive-dark active:scale-[0.98]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
            Add Address
          </button>
        )}
      </div>

      <div className="p-6">
        {isPending ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Skeleton className="h-40 rounded-2xl" />
            <Skeleton className="h-40 rounded-2xl" />
          </div>
        ) : addresses.length === 0 ? (
          <div className="flex flex-col items-center justify-center space-y-4 rounded-3xl border border-dashed border-cardline bg-cream/30 py-16 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-olive/10 text-olive">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-ink">No saved addresses</p>
              <p className="mt-1 text-xs text-muted">Add your home, work or other addresses for faster checkout.</p>
            </div>
            <button
              onClick={openAdd}
              className="rounded-2xl bg-olive px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-olive-dark active:scale-[0.98]"
            >
              Add Address
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {addresses.map((address) => (
              <AddressCard
                key={address.id}
                address={address}
                onEdit={openEdit}
                onDelete={handleDelete}
                onSetDefault={(a) => update.mutate({ id: a.id, data: { isDefault: true } })}
                busy={update.isPending || remove.isPending}
              />
            ))}
          </div>
        )}
      </div>

      <AddressFormModal
        isOpen={modalOpen}
        onClose={() => { setModalOpen(false); setEditTarget(null); }}
        editAddress={editTarget}
        prefill={prefill}
      />
    </div>
  );
}
