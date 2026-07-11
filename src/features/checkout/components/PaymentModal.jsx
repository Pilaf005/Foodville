"use client";

import { useEffect, useState } from "react";

/**
 * Payment method picker — exactly two choices.
 *
 * "razorpay" opens Razorpay Checkout, which already provides UPI (GPay,
 * PhonePe…), cards and netbanking — so we don't rebuild those UIs here.
 * "cod" is cash on delivery.
 */
const METHODS = [
  {
    id: "razorpay",
    name: "Pay Online",
    hint: "UPI · Cards · Netbanking · Wallets — via Razorpay",
    Icon: OnlineIcon,
  },
  {
    id: "cod",
    name: "Cash on Delivery",
    hint: "Pay in cash when your order arrives",
    Icon: CodIcon,
  },
];

function OnlineIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6B7F59" strokeWidth="2" strokeLinecap="round">
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" y1="10" x2="22" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </svg>
  );
}

function CodIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6B7F59" strokeWidth="2" strokeLinecap="round">
      <rect width="20" height="12" x="2" y="6" rx="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export default function PaymentModal({ isOpen, onClose, selectedMethod, onSelectMethod, totalPayable }) {
  const [localSelected, setLocalSelected] = useState(selectedMethod);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isOpen) setLocalSelected(selectedMethod);
  }, [isOpen, selectedMethod]);

  if (!isOpen) return null;

  function handleSelect(id) {
    setLocalSelected(id);
    // Small delay so the radio animation is visible, then close.
    setTimeout(() => {
      onSelectMethod(id);
      onClose();
    }, 240);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(3px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="animate-scale-in w-full max-w-[440px] overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <div>
            <h2 className="text-base font-bold text-gray-900">Select Payment Method</h2>
            {totalPayable != null && (
              <p className="mt-0.5 text-xs text-gray-500">Total payable: <span className="font-bold text-gray-800">₹{totalPayable}</span></p>
            )}
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-full p-2 text-gray-500 transition hover:bg-gray-100">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Options */}
        <div className="space-y-3 p-4">
          {METHODS.map(({ id, name, hint, Icon }) => {
            const selected = localSelected === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleSelect(id)}
                className={`flex w-full items-center justify-between rounded-2xl border-2 px-4 py-4 text-left transition-all duration-200 active:scale-[0.99] ${
                  selected ? "border-[#6B7F59] bg-[#6B7F59]/5" : "border-gray-200 bg-white hover:border-[#6B7F59]/50"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-gray-100 bg-gray-50">
                    <Icon />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{name}</p>
                    <p className="mt-0.5 text-[11px] text-gray-500">{hint}</p>
                  </div>
                </div>
                <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-all duration-200 ${selected ? "border-[#6B7F59]" : "border-gray-300"}`}>
                  {selected && <span className="h-2.5 w-2.5 animate-scale-in rounded-full bg-[#6B7F59]" />}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
