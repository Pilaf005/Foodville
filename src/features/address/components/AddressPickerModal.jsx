"use client";

import { useEffect, useState } from "react";
import { useAddresses } from "@/features/profile/hooks/useProfile";
import AddressFormModal from "@/features/address/components/AddressFormModal";
import { formatAddressLines } from "@/features/profile/components/AddressList";
import { Skeleton } from "@/components/feedback/Skeleton";

/**
 * Checkout address selection — pick a saved address or add a new one
 * (Amazon-style form). Replaces the old map/pin-drop flow entirely.
 */
export default function AddressPickerModal({ isOpen, onClose, selectedId, onSelect, prefill }) {
  const { addresses, isPending } = useAddresses();
  const [formOpen, setFormOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  function choose(address) {
    onSelect(address);
    onClose();
  }

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center sm:p-4"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <div className="animate-slide-up max-h-[88vh] w-full max-w-md overflow-y-auto rounded-t-3xl border border-cardline bg-white shadow-2xl sm:animate-scale-in sm:rounded-3xl">
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-cardline bg-white px-5 py-4">
            <h2 className="text-base font-black uppercase tracking-tight text-ink">Delivery address</h2>
            <button onClick={onClose} aria-label="Close" className="rounded-full p-1.5 text-muted transition hover:bg-cream hover:text-ink">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-3 p-4">
            {isPending ? (
              <>
                <Skeleton className="h-24 rounded-2xl" />
                <Skeleton className="h-24 rounded-2xl" />
              </>
            ) : (
              <>
                {addresses.map((a) => {
                  const selected = selectedId === a.id;
                  return (
                    <div
                      key={a.id}
                      onClick={() => choose(a)}
                      className={`w-full cursor-pointer rounded-2xl border-2 p-4 text-left transition-all duration-150 active:scale-[0.99] ${
                        selected ? "border-olive bg-olive/5" : "border-cardline bg-white hover:border-olive/50"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-sm font-bold text-ink">{a.receiverName}</p>
                            <span className="rounded-full bg-cream px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted">
                              {a.label}
                            </span>
                            {a.isDefault && (
                              <span className="rounded-full bg-olive px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white">
                                Default
                              </span>
                            )}
                          </div>
                          {formatAddressLines(a).map((line, i) => (
                            <p key={i} className="mt-0.5 text-[11px] leading-relaxed text-muted">{line}</p>
                          ))}
                          <p className="mt-1 text-[11px] font-semibold text-muted">📞 {a.phone}</p>
                        </div>
                        <span className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition ${selected ? "border-olive" : "border-cardline"}`}>
                          {selected && <span className="h-2.5 w-2.5 animate-scale-in rounded-full bg-olive" />}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setEditTarget(a); setFormOpen(true); }}
                        className="mt-2 text-[11px] font-bold text-olive transition hover:underline"
                      >
                        Edit
                      </button>
                    </div>
                  );
                })}

                {/* Add new */}
                <button
                  type="button"
                  onClick={() => { setEditTarget(null); setFormOpen(true); }}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-cardline bg-cream/30 px-4 py-4 text-xs font-bold text-olive transition hover:border-olive/60 active:scale-[0.99]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Add a new address
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <AddressFormModal
        isOpen={formOpen}
        onClose={() => { setFormOpen(false); setEditTarget(null); }}
        editAddress={editTarget}
        prefill={prefill}
        onSaved={(saved) => {
          // A newly added / edited address becomes the selected one.
          if (saved) choose(saved);
        }}
      />
    </>
  );
}
