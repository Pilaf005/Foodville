"use client";

import Link from "next/link";

export default function FranchiseSection() {
  return (
    <div className="w-full max-w-6xl mx-auto my-8 sm:my-12">
      <div 
        className="relative rounded-3xl overflow-hidden text-white p-6 sm:p-10 shadow-xl border border-[#6B7F59]/30 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/franchise_store_banner.png')" }}
      >
        {/* Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-amber-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/></svg>
              Franchise & Distributorship Opportunity
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Own a Foodville Retail Store in Your City
            </h2>

            <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
              Earn high profit margins (35%+) with direct factory supply, protected pincode territory, and 100% turnkey store support. Join India's fastest growing organic consumer brand!
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-medium text-stone-200 pt-1">
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                35%+ Margins
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
                Protected Territory
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-400"><path d="M3 21h18M3 7v14M21 7v14M6 11h12M6 15h12M9 3h6v4H9z"/></svg>
                Turnkey Setup
              </div>
            </div>
          </div>

          <div className="w-full lg:w-auto shrink-0">
            <Link
              href="/franchise"
              className="w-full lg:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white text-[#2C3624] font-extrabold text-sm shadow-xl hover:bg-stone-100 transition duration-300"
            >
              Apply for Franchise
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-[#3D4A32]"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}
