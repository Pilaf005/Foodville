"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function CouponSection({
  availableCoupons = [],
  appliedCoupon = null,
  onApplyCoupon,
  onRemoveCoupon,
  subtotal = 0,
}) {
  const [inputCode, setInputCode] = useState("");
  const [showCouponsList, setShowCouponsList] = useState(false);

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (!inputCode.trim()) {
      toast.error("Please enter a coupon code.");
      return;
    }
    onApplyCoupon(inputCode.trim().toUpperCase());
    setInputCode("");
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-cardline/60 p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] space-y-3.5">
      <div className="flex items-center justify-between">
        <h4 className="text-xs sm:text-sm font-bold text-gray-900 flex items-center gap-1.5">
          <span>🎟️</span> Apply Offer / Coupon
        </h4>
        {availableCoupons.length > 0 && (
          <button
            type="button"
            onClick={() => setShowCouponsList((prev) => !prev)}
            className="text-[11px] font-bold text-[#6B7F59] hover:underline transition cursor-pointer"
          >
            {showCouponsList ? "Hide Offers" : `View Offers (${availableCoupons.length})`}
          </button>
        )}
      </div>

      {/* Applied Coupon Display */}
      {appliedCoupon && appliedCoupon.code ? (
        <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl px-3.5 py-2.5">
          <div className="flex items-center gap-2 min-w-0">
            <span className="bg-emerald-600 text-white font-black text-[10px] px-2 py-0.5 rounded-md uppercase tracking-wider shrink-0">
              {appliedCoupon.code}
            </span>
            <div className="min-w-0">
              <p className="text-xs font-bold text-emerald-900 truncate">
                Saved ₹{appliedCoupon.amount}!
              </p>
              <p className="text-[10px] text-emerald-700 font-medium truncate">
                {appliedCoupon.title || appliedCoupon.discountLabel}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onRemoveCoupon}
            className="text-[11px] font-bold text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-2 py-1 rounded-lg transition shrink-0 ml-2"
          >
            Remove
          </button>
        </div>
      ) : (
        /* Coupon Code Manual Entry Box */
        <form onSubmit={handleManualSubmit} className="flex gap-2">
          <input
            type="text"
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value.toUpperCase())}
            placeholder="ENTER PROMO CODE (e.g. WELCOME10)"
            className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold uppercase tracking-wider text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#6B7F59] focus:bg-white transition"
          />
          <button
            type="submit"
            className="bg-[#6B7F59] hover:bg-[#5a6b4a] active:scale-95 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-sm cursor-pointer shrink-0"
          >
            Apply
          </button>
        </form>
      )}

      {/* Available Coupons List / Drawer */}
      {showCouponsList && (
        <div className="pt-2 border-t border-gray-100 space-y-2.5">
          {availableCoupons.map((c) => {
            const isApplied = appliedCoupon?.code === c.code;
            return (
              <div
                key={c.code}
                className={`p-3 rounded-xl border transition-all ${
                  isApplied
                    ? "border-emerald-500 bg-emerald-50/50"
                    : c.isEligible
                    ? "border-gray-200 hover:border-[#6B7F59]/50 bg-gray-50/50"
                    : "border-gray-100 bg-gray-50/30 opacity-75"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-xs text-gray-900 bg-white border border-gray-200 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {c.code}
                    </span>
                    {c.maxDiscount && (
                      <span className="text-[9px] font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">
                        Max ₹{c.maxDiscount} OFF
                      </span>
                    )}
                  </div>
                  {isApplied ? (
                    <span className="text-[11px] font-extrabold text-emerald-700 flex items-center gap-1">
                      ✓ Applied
                    </span>
                  ) : c.isEligible ? (
                    <button
                      type="button"
                      onClick={() => onApplyCoupon(c.code)}
                      className="text-xs font-bold text-[#6B7F59] hover:text-white hover:bg-[#6B7F59] border border-[#6B7F59] px-3 py-1 rounded-lg transition"
                    >
                      Apply Code
                    </button>
                  ) : (
                    <span className="text-[10px] text-gray-400 font-medium">
                      Not eligible
                    </span>
                  )}
                </div>
                <p className="text-xs font-bold text-gray-800 mt-1.5">{c.title}</p>
                {c.description && (
                  <p className="text-[10px] text-gray-500 mt-0.5 leading-snug">{c.description}</p>
                )}
                {!c.isEligible && c.reason && (
                  <p className="text-[10px] text-amber-700 font-semibold mt-1">
                    💡 {c.reason}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
