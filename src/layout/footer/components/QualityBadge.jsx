import React from "react";
import Image from "next/image";

export const QualityBadge = () => {
  return (
    <div className="pt-2">
      <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden relative">
          {/* Certification mark image (public/iso.jpg) */}
          <Image
            src="/iso.jpg"
            alt="ISO 9001:2015 certified"
            width={40}
            height={40}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="leading-tight">
          <div className="text-[9px] font-bold tracking-wider text-[#F3D08A] uppercase">Quality Certified</div>
          <div className="text-[10px] font-extrabold text-white">ISO 9001:2015 COMPANY</div>
        </div>
      </div>
    </div>
  );
};

export default QualityBadge;
