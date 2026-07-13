"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";

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
    <Modal
      isOpen
      onClose={onClose}
      title="Select Payment Method"
      subtitle={totalPayable != null ? `Total payable: ₹${totalPayable}` : undefined}
      maxWidth="max-w-md"
    >
      <div className="space-y-3">
        {METHODS.map(({ id, name, hint, Icon }) => {
          const selected = localSelected === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => handleSelect(id)}
              className={`flex w-full items-center justify-between rounded-2xl border-2 px-4 py-4 text-left transition-all duration-200 active:scale-[0.99] ${
                selected ? "border-olive bg-olive/5" : "border-cardline bg-white hover:border-olive/50"
              }`}
            >
              <div className="flex items-center gap-3.5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-cardline/60 bg-cream/60">
                  <Icon />
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{name}</p>
                  <p className="mt-0.5 text-[11px] text-muted">{hint}</p>
                </div>
              </div>
              <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full border-2 transition-all duration-200 ${selected ? "border-olive" : "border-cardline"}`}>
                {selected && <span className="h-2.5 w-2.5 animate-scale-in rounded-full bg-olive" />}
              </span>
            </button>
          );
        })}
      </div>
    </Modal>
  );
}
