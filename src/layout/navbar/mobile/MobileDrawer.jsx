"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useAddresses } from "@/features/profile/hooks/useProfile";
import { useCategories } from "@/features/categories/hooks/useCategories";
import { useAuth, useLogout } from "@/features/auth/hooks/useAuth";

const ACCOUNT_LINKS = [
  {
    href: "/profile",
    label: "My Profile",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
  },
  {
    href: "/wishlist",
    label: "Wishlist",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    href: "/cart",
    label: "Cart",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M3 4h2l1.2 12.2A2 2 0 0 0 8.2 18h9.6a2 2 0 0 0 2-1.8L21 8H6" />
        <circle cx="9" cy="21" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="17" cy="21" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const categoryIcons = {
  powders: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2a5 5 0 0 1 5 5c0 5-5 11-5 11S7 12 7 7a5 5 0 0 1 5-5z" />
      <circle cx="12" cy="7" r="2" />
    </svg>
  ),
  seeds: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <ellipse cx="12" cy="12" rx="4" ry="7" transform="rotate(-30 12 12)" />
      <path d="M12 5C9 3 6 5 6 9" />
    </svg>
  ),
  dryfruits: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
    </svg>
  ),
  wellness: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
    </svg>
  ),
  combos: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="3" y="3" width="7" height="9" rx="1" />
      <rect x="14" y="3" width="7" height="5" rx="1" />
      <rect x="14" y="12" width="7" height="9" rx="1" />
      <rect x="3" y="16" width="7" height="5" rx="1" />
    </svg>
  ),
  bulk: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
};

const defaultIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" strokeWidth="2.5" />
  </svg>
);

export const MobileDrawer = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { addresses } = useAddresses();
  const { categories } = useCategories();
  const { isAuthenticated } = useAuth();
  const logout = useLogout();

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const activeAddress = addresses.find((a) => a.isDefault) || addresses[0] || null;
  const addressLabel = activeAddress ? (activeAddress.label || activeAddress.city || "My Location") : null;

  const navLinks = useMemo(() => {
    const baseLinks = [
      {
        href: "/",
        label: "Home",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
      },
    ];

    const footerLinks = [
      {
        href: "/blogs",
        label: "Blogs",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
            <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z" />
          </svg>
        ),
      },
      {
        href: "/why-choose-us",
        label: "Why Choose Us",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
        ),
      },
      {
        href: "/franchise",
        label: "Franchise Opportunity",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 21h18M3 7v14M21 7v14M6 11h12M6 15h12M9 3h6v4H9z" />
          </svg>
        ),
      },
    ];

    return [...baseLinks, ...footerLinks];
  }, []);

  const badgeCounts = { "/cart": cartCount, "/wishlist": wishlistCount };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel — slides in from LEFT */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[280px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-cardline bg-cream/50">
          <div className="flex flex-col items-start gap-0.5">
            <img
              src="/foodville-logo.png"
              alt="Foodville"
              className="h-7 w-auto object-contain"
            />
            {addressLabel && (
              <p className="text-[10px] text-muted font-semibold flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                {addressLabel}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-2.5 rounded-full hover:bg-gray-100 transition text-gray-600 min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable nav body */}
        <div className="flex-1 overflow-y-auto py-3">
          {/* Main navigation */}
          <p className="px-5 py-2 text-[10px] font-black text-muted uppercase tracking-widest">
            Browse
          </p>
          <nav>
            {navLinks.map(({ href, label, icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={onClose}
                  className={`flex items-center gap-3.5 px-5 py-3.5 text-sm font-semibold transition-colors min-h-[52px] ${
                    isActive
                      ? "bg-olive/8 text-olive border-r-2 border-olive"
                      : "text-ink hover:bg-cream"
                  }`}
                >
                  <span className={isActive ? "text-olive" : "text-muted"}>{icon}</span>
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Account links */}
          <div className="border-t border-cardline mt-3 pt-3">
            <p className="px-5 py-2 text-[10px] font-black text-muted uppercase tracking-widest">
              My Account
            </p>
            <nav>
              {ACCOUNT_LINKS.map(({ href, label, icon }) => {
                const isActive = pathname === href;
                const badge = badgeCounts[href];
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={onClose}
                    className={`flex items-center gap-3.5 px-5 py-3.5 text-sm font-semibold transition-colors min-h-[52px] ${
                      isActive
                        ? "bg-olive/8 text-olive border-r-2 border-olive"
                        : "text-ink hover:bg-cream"
                    }`}
                  >
                    <span className={isActive ? "text-olive" : "text-muted"}>{icon}</span>
                    <span className="flex-1">{label}</span>
                    {badge > 0 && (
                      <span className="h-5 min-w-[20px] px-1 rounded-full bg-olive text-white text-[10px] font-bold flex items-center justify-center">
                        {badge}
                      </span>
                    )}
                  </Link>
                );
              })}
              {isAuthenticated && (
                <button
                  onClick={() => {
                    onClose();
                    logout.mutate();
                  }}
                  className="w-full flex items-center gap-3.5 px-5 py-3.5 text-sm font-semibold transition-colors min-h-[52px] text-red-500 hover:bg-red-50/50 cursor-pointer"
                >
                  <span className="text-red-400">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                      <polyline points="16 17 21 12 16 7" />
                      <line x1="21" y1="12" x2="9" y2="12" />
                    </svg>
                  </span>
                  <span>Logout</span>
                </button>
              )}
            </nav>
          </div>
        </div>

        {/* Footer strip */}
        <div className="border-t border-cardline px-5 py-4 bg-cream/30">
          <p className="text-[11px] text-muted text-center">
            © 2025 Foodville Consumer Products
          </p>
        </div>
      </aside>
    </>
  );
};

export default MobileDrawer;
