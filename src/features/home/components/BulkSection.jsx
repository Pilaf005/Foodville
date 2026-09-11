"use client";

import Link from "next/link";

export default function BulkSection({ className = "" }) {
  return (
    <div className="relative w-full max-w-full mx-auto px-2 sm:px-4">
      <div
        className={`w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-olive/30 bg-cover bg-center ${className}`}
        style={{ backgroundImage: "url('/images/bulk_wholesale_banner.png')" }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent pointer-events-none" />
        
        <div className="space-y-3 max-w-2xl z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-bold text-amber-300">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/>
            </svg>
            Direct B2B Factory Supply &amp; Bulk Wholesale Pricing
          </div>
          
          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight leading-tight">
            Order Commercial Packs (25kg - 500kg+) Direct
          </h2>
          
          <p className="text-stone-200 text-xs sm:text-sm leading-relaxed">
            Wholesale pricing for distributors, commercial kitchens, food manufacturers &amp; retail chains. Verified GST Invoices &amp; fast nationwide Shiprocket dispatch.
          </p>
          

        </div>

        <div className="w-full md:w-auto shrink-0 z-10">
          <Link
            href="/bulk-order"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-olive-dark font-extrabold text-xs sm:text-sm shadow-lg hover:bg-stone-100 transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-surface-raised min-h-[44px]"
          >
            <span>Request Custom B2B Quote</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
