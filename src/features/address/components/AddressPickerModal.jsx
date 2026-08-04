"use client";

import { useState } from "react";
import { useAddresses } from "@/features/profile/hooks/useProfile";
import AddressFormModal from "@/features/address/components/AddressFormModal";
import { formatAddressLines } from "@/features/profile/components/AddressList";
import { Skeleton } from "@/components/feedback/Skeleton";
import Modal from "@/components/ui/Modal";

/**
 * Checkout / navbar address selection — pick a saved address, add a new one
 * (Amazon-style form), or start from the current location (geolocation
 * prefills the form; no map).
 */
export default function AddressPickerModal({ isOpen, onClose, selectedId, onSelect, prefill }) {
  const { addresses, isPending } = useAddresses();
  const [formOpen, setFormOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [autoDetect, setAutoDetect] = useState(false);

  if (!isOpen) return null;

  function choose(address) {
    onSelect(address);
    onClose();
  }

  function openForm({ edit = null, detect = false } = {}) {
    setEditTarget(edit);
    setAutoDetect(detect);
    setFormOpen(true);
  }

  return (
    <>
      <Modal
        isOpen
        onClose={onClose}
        title="Delivery address"
        subtitle="Choose where this order should go"
        maxWidth="max-w-md"
      >
        <div className="flex flex-col max-h-[70vh] sm:max-h-[480px]">
          {isPending ? (
            <div className="space-y-3">
              <Skeleton className="h-24 rounded-2xl" />
              <Skeleton className="h-24 rounded-2xl" />
            </div>
          ) : (
            <>
              {/* Scrollable addresses section */}
              <div className="flex-1 overflow-y-auto space-y-3 pr-1.5 pb-2">
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
                        onClick={(e) => { e.stopPropagation(); openForm({ edit: a }); }}
                        className="mt-2 inline-flex min-h-[44px] min-w-[44px] items-center text-[11px] font-bold text-olive transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised"
                      >
                        Edit
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Fixed bottom action buttons */}
              <div className="shrink-0 pt-3 border-t border-cardline bg-white space-y-2">
                {/* Use current location */}
                <button
                  type="button"
                  onClick={() => openForm({ detect: true })}
                  className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl border-2 border-olive/40 bg-olive/5 px-4 py-3 text-xs font-bold text-olive transition hover:border-olive hover:bg-olive/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised active:scale-[0.99]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Use my current location
                </button>

                {/* Add manually */}
                <button
                  type="button"
                  onClick={() => openForm()}
                  className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-cardline bg-cream/30 px-4 py-3 text-xs font-bold text-ink transition hover:border-olive/60 hover:text-olive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised active:scale-[0.99]"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                  Add a new address
                </button>
              </div>
            </>
          )}
        </div>
      </Modal>

      <AddressFormModal
        isOpen={formOpen}
        onClose={() => { setFormOpen(false); setEditTarget(null); setAutoDetect(false); }}
        editAddress={editTarget}
        prefill={prefill}
        autoDetect={autoDetect}
        onSaved={(saved) => {
          // A newly added / edited address becomes the selected one.
          if (saved) choose(saved);
        }}
      />
    </>
  );
}
