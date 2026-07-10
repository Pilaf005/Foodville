"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const NAV_LINKS = [
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
  {
    href: "/shop",
    label: "Shop",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    href: "/category/powders",
    label: "Spice Powders",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2a5 5 0 0 1 5 5c0 5-5 11-5 11S7 12 7 7a5 5 0 0 1 5-5z" />
        <circle cx="12" cy="7" r="2" />
      </svg>
    ),
  },
  {
    href: "/category/seeds",
    label: "Seeds",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <ellipse cx="12" cy="12" rx="4" ry="7" transform="rotate(-30 12 12)" />
        <path d="M12 5C9 3 6 5 6 9" />
      </svg>
    ),
  },
  {
    href: "/category/dryfruits",
    label: "Dry Fruits & Nuts",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
      </svg>
    ),
  },
  {
    href: "/category/wellness",
    label: "Herbal & Wellness",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
      </svg>
    ),
  },
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
];

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
        <path d="M12 20s-7-4.35-9.5-8.5C.8 7.7 2.6 4.5 6 4.5c2 0 3.3 1.1 4 2.2.7-1.1 2-2.2 4-2.2 3.4 0 5.2 3.2 3.5 7C19 15.65 12 20 12 20Z" />
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

export const MobileDrawer = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const badgeCounts = { "/cart": cartCount, "/wishlist": wishlistCount };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 sm:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[280px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out sm:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Navigation menu"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-cardline bg-cream/50">
          <img
            src="/foodville-logo.png"
            alt="Foodville"
            className="h-8 w-auto object-contain"
          />
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
            {NAV_LINKS.map(({ href, label, icon }) => {
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
