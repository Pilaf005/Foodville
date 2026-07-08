"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  return (
    <footer className="bg-[#3A4930] text-white border-t border-[#4E5E43] mt-12">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        
        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-10 border-b border-[#4E5E43]/50">
          
          {/* Column 1: Logo & Company Address */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2 group hover:opacity-90 transition">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 shadow-sm border border-white/20">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2c1.5 3 3.5 4 6.5 4-3 1.5-4 3.5-4 6.5-1.5-3-3.5-4-6.5-4 3-1.5 4-3.5 4-6.5z" fill="currentColor" fillOpacity="0.25" />
                  <path d="M6 10h12l-1 9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2l-1-9z" />
                  <path d="M9 10V6a3 3 0 0 1 6 0v4" />
                </svg>
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center">
                <span>Food</span>
                <span className="text-[#C9A86C] font-black ml-0.5">ville</span>
              </span>
            </Link>
            
            <div className="space-y-2 text-xs text-white/80 leading-relaxed">
              <p className="font-bold text-white text-sm">Foodville Consumer Products Private Limited</p>
              <p>H-112, 1st Floor, Patel Nagar-III,<br />Ghaziabad, U.P. 201001</p>
            </div>

            {/* ISO Certification Badge */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  {/* Circular ISO SVG Badge */}
                  <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" stroke="#1E40AF" strokeWidth="2" fill="none" />
                    <circle cx="20" cy="20" r="15" fill="#1E40AF" />
                    {/* Globe lines inside circle */}
                    <path d="M10 20H30M20 10V30M13 14C17 18 17 22 13 26M27 14C23 18 23 22 27 26" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
                    {/* ISO text */}
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
          </div>

          {/* Column 2: Information Links */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A86C]">Information</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/blogs" className="text-white/80 hover:text-white transition">Blogs</Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/80 hover:text-white transition">Shop Products</Link>
              </li>
              <li>
                <Link href="/wishlist" className="text-white/80 hover:text-white transition">My Wishlist</Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-white/80 hover:text-white transition">Why Choose Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Need Help Links */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A86C]">Need Help</h4>
            <ul className="space-y-2 text-xs text-white/80">
              <li>
                <Link href="/refund-policy" className="hover:text-white transition">Refund Policy</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-white transition">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/shipping-policy" className="hover:text-white transition">Shipping Policy</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A86C]">Contact Support</h4>
            <div className="space-y-3">
              {/* WhatsApp Redirect Link for Phone Number */}
              <a 
                href="https://wa.me/919911575605"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white/80 hover:text-white transition group focus:outline-none"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/80 group-hover:bg-[#25D366] group-hover:text-white group-hover:border-transparent transition-all">
                  {/* WhatsApp SVG Icon */}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.703 1.46h.007c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[9px] text-[#C9A86C] font-bold">WHATSAPP CHAT</div>
                  <div className="font-extrabold">+91 9911575605</div>
                </div>
              </a>
              {/* Tap-to-call phone link */}
              <a
                href="tel:+919911575605"
                className="flex items-center gap-2 text-xs text-white/80 hover:text-white transition group focus:outline-none"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/80 group-hover:bg-olive group-hover:text-white group-hover:border-transparent transition-all">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[9px] text-[#C9A86C] font-bold">CALL US</div>
                  <div className="font-extrabold">+91 9911575605</div>
                </div>
              </a>

              {/* Active Email Link */}
              <a 
                href="mailto:support@foodvilleindia.com"
                className="flex items-center gap-2 text-xs text-white/80 hover:text-white transition group focus:outline-none"
              >
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white/80 group-hover:bg-[#C9A86C] group-hover:text-white group-hover:border-transparent transition-all">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="leading-tight">
                  <div className="text-[9px] text-[#C9A86C] font-bold">EMAIL SUPPORT</div>
                  <div className="font-extrabold truncate">support@foodvilleindia.com</div>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom / Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-white/60">
          <p>© 2026, Foodville Consumer Products Private Limited. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white transition cursor-pointer">Sitemap</span>
            <span className="hover:text-white transition cursor-pointer">Delivery Areas</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
