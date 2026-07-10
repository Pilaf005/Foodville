"use client";

import { useState } from "react";
import type { Rewards, Coupon } from "../types/profile.types";

const TIER_CONFIG = {
  bronze:   { label: "Bronze",   color: "#CD7F32", bg: "bg-amber-50",   border: "border-amber-200", text: "text-amber-700",  gradient: "from-amber-50 to-orange-50" },
  silver:   { label: "Silver",   color: "#C0C0C0", bg: "bg-gray-50",    border: "border-gray-200",  text: "text-gray-600",   gradient: "from-gray-50 to-slate-50"  },
  gold:     { label: "Gold",     color: "#C9A86C", bg: "bg-yellow-50",  border: "border-yellow-200",text: "text-yellow-700", gradient: "from-yellow-50 to-amber-50" },
  platinum: { label: "Platinum", color: "#E5E4E2", bg: "bg-indigo-50",  border: "border-indigo-200",text: "text-indigo-700", gradient: "from-indigo-50 to-purple-50"},
};

function CouponCard({ coupon }: { coupon: Coupon }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(coupon.code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className={`rounded-2xl border p-4 transition-opacity ${
        coupon.isUsed ? "border-cardline opacity-50" : "border-dashed border-olive/40 bg-olive/[0.03]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm font-black text-ink tracking-wider">{coupon.code}</span>
            {coupon.isUsed && (
              <span className="text-[9px] font-bold text-muted bg-gray-100 rounded-full px-2 py-0.5 uppercase tracking-wider">
                Used
              </span>
            )}
          </div>
          <p className="text-base font-black text-olive mt-0.5">{coupon.discount}</p>
          <p className="text-xs text-muted mt-1">{coupon.description}</p>
          <p className="text-[10px] text-muted mt-1.5">Expires: {coupon.expiresAt}</p>
        </div>
        {!coupon.isUsed && (
          <button
            onClick={handleCopy}
            className="shrink-0 flex items-center gap-1.5 text-[10px] font-bold text-olive border border-olive/40 rounded-xl px-3 py-1.5 hover:bg-olive/5 transition active:scale-95"
          >
            {copied ? (
              <>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <rect width="14" height="14" x="8" y="8" rx="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                Copy
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  icon: React.ReactNode;
  accentClass: string;
}

function StatCard({ value, label, icon, accentClass }: StatCardProps) {
  return (
    <div className={`rounded-2xl border border-cardline bg-white p-5 flex items-center gap-4 shadow-sm`}>
      <div className={`w-12 h-12 rounded-2xl grid place-items-center shrink-0 ${accentClass}`}>
        {icon}
      </div>
      <div>
        <p className="text-xl font-black text-ink">{value}</p>
        <p className="text-xs text-muted">{label}</p>
      </div>
    </div>
  );
}

interface RewardsCardProps {
  rewards: Rewards;
}

export default function RewardsCard({ rewards }: RewardsCardProps) {
  const tier = TIER_CONFIG[rewards.tier];
  const pointsToNextTier = rewards.tier === "bronze" ? 3000 : rewards.tier === "silver" ? 5000 : rewards.tier === "gold" ? 10000 : 99999;
  const progressPct = Math.min((rewards.points / pointsToNextTier) * 100, 100);

  return (
    <div className="space-y-5">
      {/* Tier Card */}
      <div
        className={`rounded-3xl border ${tier.border} bg-gradient-to-br ${tier.gradient} p-6 shadow-sm`}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[10px] font-black text-muted uppercase tracking-widest">Your Tier</p>
            <div className="flex items-center gap-2 mt-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill={tier.color} stroke={tier.color} strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span className={`text-2xl font-black ${tier.text}`}>{tier.label}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-black text-muted uppercase tracking-widest">Points</p>
            <p className="text-2xl font-black text-ink">{rewards.points.toLocaleString()}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-[10px] text-muted mb-1.5">
            <span>{rewards.points.toLocaleString()} pts</span>
            <span>{pointsToNextTier.toLocaleString()} pts to next tier</span>
          </div>
          <div className="h-2 rounded-full bg-white/60 border border-cardline/40 overflow-hidden">
            <div
              className="h-full rounded-full bg-olive transition-all duration-700"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          value={`₹${rewards.walletBalance}`}
          label="Wallet Balance"
          accentClass="bg-olive/10 text-olive"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
            </svg>
          }
        />
        <StatCard
          value={`₹${rewards.referralEarnings}`}
          label="Referral Earnings"
          accentClass="bg-terracotta/10 text-terracotta"
          icon={
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
        />
        <div className="rounded-2xl border border-cardline bg-white p-5 shadow-sm">
          <p className="text-[10px] font-black text-muted uppercase tracking-widest mb-1">Referral Code</p>
          <p className="text-lg font-black text-olive tracking-widest">{rewards.referralCode}</p>
          <p className="text-[10px] text-muted mt-0.5">Share to earn ₹100</p>
        </div>
      </div>

      {/* Coupons */}
      <div className="rounded-3xl border border-cardline bg-white shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-cardline">
          <h3 className="text-base font-black text-ink uppercase tracking-tight">My Coupons</h3>
          <p className="text-xs text-muted mt-0.5">
            {rewards.coupons.filter((c) => !c.isUsed).length} active coupons
          </p>
        </div>
        <div className="p-5 space-y-3">
          {rewards.coupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      </div>
    </div>
  );
}
