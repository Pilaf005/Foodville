"use client";

import { useState } from "react";
import type { SavedCard, UPIAccount } from "../types/profile.types";

// ─── Card Network Icons ──────────────────────────────────────────────────────

function VisaIcon() {
  return (
    <svg width="36" height="24" viewBox="0 0 36 24" fill="none">
      <rect width="36" height="24" rx="4" fill="#1A1F71" />
      <text x="18" y="17" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="12" fill="white" letterSpacing="1">VISA</text>
    </svg>
  );
}

function MastercardIcon() {
  return (
    <svg width="36" height="24" viewBox="0 0 36 24" fill="none">
      <rect width="36" height="24" rx="4" fill="#252525" />
      <circle cx="14" cy="12" r="7" fill="#EB001B" />
      <circle cx="22" cy="12" r="7" fill="#F79E1B" />
      <path d="M18 6.8a7 7 0 0 1 0 10.4A7 7 0 0 1 18 6.8z" fill="#FF5F00" />
    </svg>
  );
}

function RupayIcon() {
  return (
    <svg width="36" height="24" viewBox="0 0 36 24" fill="none">
      <rect width="36" height="24" rx="4" fill="#097DC6" />
      <text x="18" y="16" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="9" fill="white">RuPay</text>
    </svg>
  );
}

function GPayIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#F8F9FA" />
      <text x="20" y="27" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="16" fill="#4285F4">G</text>
    </svg>
  );
}

function PhonePeIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#5F259F" />
      <path d="M16 9.5L12.5 13h2v7h3v-7h2L16 9.5z" fill="white" />
    </svg>
  );
}

function PaytmIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#00BAF2" />
      <text x="16" y="21" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="9" fill="white">PAYTM</text>
    </svg>
  );
}

function AmazonPayIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect width="32" height="32" rx="8" fill="#131921" />
      <path d="M8 23c4.4-2 10.6-2 15 0" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

const UPI_ICONS = {
  gpay: <GPayIcon />,
  phonepe: <PhonePeIcon />,
  paytm: <PaytmIcon />,
  amazonpay: <AmazonPayIcon />,
};

const UPI_LABELS: Record<string, string> = {
  gpay: "Google Pay",
  phonepe: "PhonePe",
  paytm: "Paytm",
  amazonpay: "Amazon Pay",
};

const NETWORK_ICONS = {
  visa: <VisaIcon />,
  mastercard: <MastercardIcon />,
  rupay: <RupayIcon />,
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-black text-muted uppercase tracking-widest mb-3 pl-1">
      {children}
    </p>
  );
}

interface SavedCardItemProps {
  card: SavedCard;
  onRemove: (id: string) => void;
}

function SavedCardItem({ card, onRemove }: SavedCardItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 border-b border-cardline/60 last:border-0">
      <div className="flex items-center gap-3">
        <div className="shrink-0">{NETWORK_ICONS[card.network]}</div>
        <div>
          <p className="text-sm font-bold text-ink">
            {card.type === "credit" ? "Credit" : "Debit"} Card •••• {card.last4}
          </p>
          <p className="text-[11px] text-muted">
            {card.holderName} · Expires {card.expiryMonth}/{card.expiryYear}
          </p>
        </div>
      </div>
      <button
        onClick={() => onRemove(card.id)}
        className="p-2 rounded-xl text-red-500 hover:bg-red-50 transition"
        aria-label="Remove card"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </div>
  );
}

interface UPIItemProps {
  account: UPIAccount;
  onRemove: (id: string) => void;
}

function UPIItem({ account, onRemove }: UPIItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 border-b border-cardline/60 last:border-0">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gray-50 border border-cardline flex items-center justify-center shrink-0">
          {UPI_ICONS[account.app]}
        </div>
        <div>
          <p className="text-sm font-bold text-ink">{UPI_LABELS[account.app]}</p>
          <p className="text-[11px] text-muted">{account.vpa}</p>
        </div>
      </div>
      <button
        onClick={() => onRemove(account.id)}
        className="p-2 rounded-xl text-red-500 hover:bg-red-50 transition"
        aria-label="Remove UPI"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface PaymentMethodsProps {
  savedCards: SavedCard[];
  upiAccounts: UPIAccount[];
}

export default function PaymentMethods({ savedCards: initialCards, upiAccounts: initialUPI }: PaymentMethodsProps) {
  const [cards, setCards] = useState<SavedCard[]>(initialCards);
  const [upis, setUpis] = useState<UPIAccount[]>(initialUPI);

  return (
    <div className="rounded-3xl border border-cardline bg-white shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-cardline">
        <div>
          <h2 className="text-base font-black text-ink uppercase tracking-tight">Payment Methods</h2>
          <p className="text-xs text-muted mt-0.5">Manage your saved payment options</p>
        </div>
        <button className="flex items-center gap-1.5 bg-olive hover:bg-olive-dark text-white text-xs font-bold px-4 py-2.5 rounded-2xl transition shadow-sm shadow-olive/20 active:scale-[0.98]">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add New
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* UPI */}
        <div>
          <SectionLabel>UPI Accounts</SectionLabel>
          <div className="rounded-2xl border border-cardline bg-white overflow-hidden shadow-sm">
            {upis.length === 0 ? (
              <p className="text-xs text-muted text-center py-6">No UPI accounts linked</p>
            ) : (
              upis.map((upi) => (
                <UPIItem key={upi.id} account={upi} onRemove={(id) => setUpis((p) => p.filter((u) => u.id !== id))} />
              ))
            )}
          </div>
        </div>

        {/* Saved Cards */}
        <div>
          <SectionLabel>Saved Cards</SectionLabel>
          <div className="rounded-2xl border border-cardline bg-white overflow-hidden shadow-sm">
            {cards.length === 0 ? (
              <p className="text-xs text-muted text-center py-6">No saved cards</p>
            ) : (
              cards.map((card) => (
                <SavedCardItem
                  key={card.id}
                  card={card}
                  onRemove={(id) => setCards((p) => p.filter((c) => c.id !== id))}
                />
              ))
            )}
          </div>
        </div>

        {/* Other methods */}
        <div>
          <SectionLabel>Other Methods</SectionLabel>
          <div className="rounded-2xl border border-cardline bg-white overflow-hidden shadow-sm">
            {[
              {
                label: "Cash on Delivery",
                sub: "Pay when your order arrives",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7F59" strokeWidth="2" strokeLinecap="round">
                    <rect width="20" height="12" x="2" y="6" rx="2" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                ),
              },
              {
                label: "Net Banking",
                sub: "All major banks supported",
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7F59" strokeWidth="2" strokeLinecap="round">
                    <rect width="18" height="12" x="3" y="8" rx="2" />
                    <path d="M3 10h18M12 5v3" />
                  </svg>
                ),
              },
            ].map(({ label, sub, icon }) => (
              <div key={label} className="flex items-center gap-4 p-4 border-b border-cardline/60 last:border-0">
                <div className="w-10 h-10 rounded-xl bg-olive/10 grid place-items-center shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{label}</p>
                  <p className="text-[11px] text-muted">{sub}</p>
                </div>
                <span className="ml-auto text-[10px] font-bold text-olive bg-olive/10 px-2.5 py-1 rounded-full">
                  Available
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
