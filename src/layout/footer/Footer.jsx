"use client";

import React from "react";
import FooterLogo from "./components/FooterLogo";
import FooterLinks from "./components/FooterLinks";
import FooterContact from "./components/FooterContact";
import FooterBottom from "./components/FooterBottom";
import { INFORMATION_LINKS, HELP_LINKS } from "./constants";

export default function Footer() {
  return (
    <footer className="bg-olive text-white border-t border-white/10 mt-12 transition-colors duration-300">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 pb-10 border-b border-border-muted/50">
          <FooterLogo />
          
          <FooterLinks
            title="Information"
            links={INFORMATION_LINKS}
            className="col-span-1 md:col-span-2 space-y-4"
          />
          
          <FooterLinks
            title="Need Help"
            links={HELP_LINKS}
            className="col-span-1 md:col-span-3 space-y-4"
          />
          
          <FooterContact />
        </div>

        {/* Footer Bottom / Copyright */}
        <FooterBottom />
      </div>
    </footer>
  );
}
