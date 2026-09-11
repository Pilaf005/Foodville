"use client";

import Link from "next/link";
import Image from "next/image";

export default function GlobalExportSection({ className = "" }) {
  return (
    <div className="relative w-full max-w-full mx-auto px-2 sm:px-4">
      <div
        className={`w-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border border-[#6B7F59]/30 bg-[#1E2519] ${className}`}
      >
        {/* Background Image Layer positioned to highlight spices in bottom right */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/global_export_banner.jpg"
            alt="Worldwide Export Spices"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 95vw, 1152px"
            className="object-cover object-bottom lg:object-right-bottom"
            priority
          />
          {/* Gradient Overlay: Deep dark on left for text readability, fading to transparent on bottom right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E2519]/95 via-[#1E2519]/80 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2519]/50 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="space-y-3 max-w-3xl z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#6B7F59]/25 backdrop-blur-md border border-[#6B7F59]/40 text-[11px] font-bold text-[#D3E0C8]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            Worldwide Bulk Supply &amp; Global Spice Export
          </div>

          <h2 className="text-xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            Exporting Pure Indian Spices &amp; Powders Worldwide
          </h2>

          <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
            Direct manufacturer supply to 50+ countries. Complete export documentation (APEDA &amp; Spices Board of India compliant, Phytosanitary, US-FDA registered, ISO 9001:2015). Flexible FCL &amp; LCL container loads.
          </p>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1 text-[10.5px] sm:text-xs font-semibold text-stone-200">
            <div className="flex items-center justify-center sm:justify-start gap-1.5 bg-white/10 px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-lg border border-white/10">
              <span className="text-xs sm:text-sm shrink-0">🚢</span>
              <span className="truncate sm:whitespace-nowrap">Sea &amp; Air Freight</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 bg-white/10 px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-lg border border-white/10">
              <span className="text-xs sm:text-sm shrink-0">📦</span>
              <span className="truncate sm:whitespace-nowrap">Private Labeling</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-1.5 bg-white/10 px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-lg border border-white/10">
              <span className="text-xs sm:text-sm shrink-0">🌐</span>
              <span className="truncate sm:whitespace-nowrap">FOB &amp; CIF Terms</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0 z-10">
          <Link
            href="/global-export"
            className="inline-flex items-center justify-center gap-2 bg-[#6B7F59] hover:bg-[#56684A] text-white font-bold text-sm px-6 py-3.5 rounded-2xl shadow-lg transition-all hover:scale-[1.02] active:scale-95 text-center"
          >
            <span>Request Export Quotation</span>
            <span className="text-base">→</span>
          </Link>
          <Link
            href="/global-export#export-certifications"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-stone-200 hover:text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-2xl border border-white/15 backdrop-blur-sm transition text-center"
          >
            View Licenses &amp; Certifications
          </Link>
        </div>
      </div>
    </div>
  );
}
