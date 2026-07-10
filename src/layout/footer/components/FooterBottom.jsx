import React from "react";

export const FooterBottom = () => {
  return (
    <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-white/60">
      <p>© 2026, Foodville Consumer Products Private Limited. All rights reserved.</p>
      <div className="flex gap-4">
        <span className="hover:text-white transition cursor-pointer">Sitemap</span>
        <span className="hover:text-white transition cursor-pointer">Delivery Areas</span>
      </div>
    </div>
  );
};

export default FooterBottom;
