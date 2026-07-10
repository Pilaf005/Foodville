"use client";

import type { SavedAddress } from "../types/profile.types";

const LABEL_STYLES: Record<string, { bg: string; text: string; border: string }> = {
  Home:  { bg: "bg-rose-50",   text: "text-rose-600",   border: "border-rose-200" },
  Work:  { bg: "bg-blue-50",   text: "text-blue-600",   border: "border-blue-200" },
  Hotel: { bg: "bg-amber-50",  text: "text-amber-600",  border: "border-amber-200" },
  Other: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
};

function getLabelStyle(label: string) {
  return LABEL_STYLES[label] ?? LABEL_STYLES.Other;
}

interface AddressCardProps {
  address: SavedAddress;
  onEdit: (address: SavedAddress) => void;
  onDelete: (id: string) => void;
  onSetDefault: (id: string) => void;
}

export default function AddressCard({ address, onEdit, onDelete, onSetDefault }: AddressCardProps) {
  const style = getLabelStyle(address.label);

  return (
    <div
      className={`rounded-3xl border bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${
        address.isDefault ? "border-olive/40 ring-1 ring-olive/20" : "border-cardline"
      }`}
    >
      {/* Top row: label + default badge */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${style.bg} ${style.text} ${style.border}`}
        >
          {address.label}
        </span>
        {address.isDefault && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-olive/10 text-olive text-[10px] font-bold uppercase tracking-wider border border-olive/20">
            <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
              <polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
            Default
          </span>
        )}
      </div>

      {/* Receiver name */}
      <p className="text-sm font-bold text-ink mb-0.5">{address.receiverName}</p>
      <p className="text-xs text-muted mb-2">+91 {address.phone}</p>

      {/* Address text */}
      <p className="text-xs text-ink leading-relaxed">
        {[address.houseFlat, address.apartment, address.landmark, address.city, address.state, address.pincode]
          .filter(Boolean)
          .join(", ")}
      </p>

      {/* Delivery instructions */}
      {address.deliveryInstructions && (
        <div className="mt-2.5 flex items-start gap-1.5">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="mt-0.5 shrink-0 text-muted">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <p className="text-[11px] text-muted italic">{address.deliveryInstructions}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-cardline/60">
        <button
          onClick={() => onEdit(address)}
          className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          </svg>
          Edit
        </button>

        <button
          onClick={() => onDelete(address.id)}
          className="flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-600 transition"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          Delete
        </button>

        {!address.isDefault && (
          <button
            onClick={() => onSetDefault(address.id)}
            className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-olive hover:text-olive-dark transition"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Set Default
          </button>
        )}
      </div>
    </div>
  );
}
