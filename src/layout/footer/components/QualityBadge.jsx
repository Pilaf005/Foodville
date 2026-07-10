import React from "react";

export const QualityBadge = () => {
  return (
    <div className="pt-2">
      <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" stroke="#1E40AF" strokeWidth="2" fill="none" />
            <circle cx="20" cy="20" r="15" fill="#1E40AF" />
            <path d="M10 20H30M20 10V30M13 14C17 18 17 22 13 26M27 14C23 18 23 22 27 26" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
            <text x="20" y="22" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">ISO</text>
            <text x="20" y="28" fill="white" fontSize="5" fontWeight="semibold" textAnchor="middle" fontFamily="sans-serif">9001:2015</text>
          </svg>
        </div>
        <div className="leading-tight">
          <div className="text-[9px] font-bold tracking-wider text-[#C9A86C] uppercase">Quality Certified</div>
          <div className="text-[10px] font-extrabold text-white">ISO 9001:2015 COMPANY</div>
        </div>
      </div>
    </div>
  );
};

export default QualityBadge;
