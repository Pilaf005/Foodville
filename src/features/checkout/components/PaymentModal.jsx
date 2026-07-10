"use client";

import { useEffect, useState } from "react";

// ─── Payment Icons ────────────────────────────────────────────────────────
function GPayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#F8F9FA"/>
      <text x="20" y="26" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="16" fill="#4285F4">G</text>
    </svg>
  );
}
function PhonePeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="8" fill="#5F259F"/>
      <path d="M14 8.5L10.5 12h2v6h3v-6h2L14 8.5z" fill="white"/>
    </svg>
  );
}
function AmazonPayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="8" fill="#131921"/>
      <path d="M7 20c3.8-1.8 9.2-1.8 13 0" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M10 15.5c1.2-3 3.5-5.5 6.5-5.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function CardIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6B7F59" strokeWidth="2" strokeLinecap="round">
      <rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
      <line x1="6" y1="15" x2="10" y2="15"/>
    </svg>
  );
}
function NetbankingIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6B7F59" strokeWidth="2" strokeLinecap="round">
      <rect width="18" height="12" x="3" y="8" rx="2"/><path d="M3 10h18M12 5v3M7 5v3M17 5v3"/>
    </svg>
  );
}
function CodIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#6B7F59" strokeWidth="2" strokeLinecap="round">
      <rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="3"/>
    </svg>
  );
}

// ─── Payment Sections Config ──────────────────────────────────────────────
const PAYMENT_SECTIONS = [
  {
    label: "Recommended",
    methods: [
      { id: "gpay",      name: "Google Pay UPI",           Icon: GPayIcon },
      { id: "phonepe",   name: "PhonePe UPI",              Icon: PhonePeIcon },
      { id: "amazonpay", name: "Amazon Pay UPI",           Icon: AmazonPayIcon },
    ],
  },
  {
    label: "Cards",
    methods: [
      { id: "card",       name: "Add credit or debit card", Icon: CardIcon,       actionText: "ADD" },
    ],
  },
  {
    label: "Netbanking",
    methods: [
      { id: "netbanking", name: "Netbanking",               Icon: NetbankingIcon, actionText: "ADD" },
    ],
  },
  {
    label: "Pay On Delivery",
    methods: [
      { id: "cod",        name: "Cash on Delivery",         Icon: CodIcon },
    ],
  },
];

// ─── PayRow ───────────────────────────────────────────────────────────────
function PayRow({ id, name, icon, selected, onSelect, actionText, noDivider }) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3.5 cursor-pointer hover:bg-gray-50 transition-colors ${!noDivider ? "border-b border-gray-100" : ""}`}
      onClick={() => onSelect(id)}
    >
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <span className="text-sm font-semibold text-gray-800">{name}</span>
      </div>

      {actionText ? (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onSelect(id); }}
          className="text-xs font-bold text-[#6B7F59]"
        >
          {actionText}
        </button>
      ) : (
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${selected ? "border-[#6B7F59]" : "border-gray-300"}`}>
          {selected && <div className="w-2.5 h-2.5 rounded-full bg-[#6B7F59] animate-scale-in" />}
        </div>
      )}
    </div>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────
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
    // Small delay for radio animation to show, then close
    setTimeout(() => {
      onSelectMethod(id);
      onClose();
    }, 280);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(3px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-[480px] bg-gray-50 rounded-3xl flex flex-col shadow-2xl overflow-hidden"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-white border-b border-gray-100 shrink-0">
          <button onClick={onClose} className="p-2 -ml-1 rounded-full hover:bg-gray-100 transition text-gray-600">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <h2 className="text-base font-bold text-gray-900">Select Payment Method</h2>
        </div>

        {/* Scrollable sections — data-driven */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {PAYMENT_SECTIONS.map((section) => (
            <div key={section.label} className="space-y-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">
                {section.label}
              </p>
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                {section.methods.map((method, i) => (
                  <PayRow
                    key={method.id}
                    id={method.id}
                    name={method.name}
                    icon={<method.Icon />}
                    selected={localSelected === method.id}
                    onSelect={handleSelect}
                    actionText={method.actionText}
                    noDivider={i === section.methods.length - 1}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
