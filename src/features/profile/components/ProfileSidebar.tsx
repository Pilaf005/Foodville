"use client";

import type { ProfileSection } from "../types/profile.types";

interface NavItem {
  key: ProfileSection;
  label: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  {
    key: "personal",
    label: "Personal Info",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M20 21a8 8 0 1 0-16 0" />
      </svg>
    ),
  },
  {
    key: "addresses",
    label: "Saved Addresses",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    key: "orders",
    label: "My Orders",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    key: "wishlist",
    label: "Wishlist",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 20s-7-4.35-9.5-8.5C.8 7.7 2.6 4.5 6 4.5c2 0 3.3 1.1 4 2.2.7-1.1 2-2.2 4-2.2 3.4 0 5.2 3.2 3.5 7C19 15.65 12 20 12 20Z" />
      </svg>
    ),
  },
  {
    key: "payments",
    label: "Payment Methods",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
  {
    key: "rewards",
    label: "Rewards",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    key: "preferences",
    label: "Preferences",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
        <circle cx="8" cy="6" r="2" fill="currentColor" stroke="none" />
        <circle cx="16" cy="12" r="2" fill="currentColor" stroke="none" />
        <circle cx="10" cy="18" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    key: "notifications",
    label: "Notifications",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
  },
  {
    key: "security",
    label: "Security",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

interface ProfileSidebarProps {
  activeSection: ProfileSection;
  onSectionChange: (section: ProfileSection) => void;
}

export default function ProfileSidebar({ activeSection, onSectionChange }: ProfileSidebarProps) {
  return (
    <nav className="rounded-3xl border border-cardline bg-white overflow-hidden shadow-sm">
      {NAV_ITEMS.map((item, index) => {
        const isActive = activeSection === item.key;
        const isLast = index === NAV_ITEMS.length - 1;
        return (
          <button
            key={item.key}
            onClick={() => onSectionChange(item.key)}
            className={`relative w-full flex items-center gap-3 px-4 py-3.5 text-left transition-all duration-150 ${
              !isLast ? "border-b border-cardline/60" : ""
            } ${isActive ? "bg-olive/5" : "hover:bg-cream/80"}`}
          >
            {isActive && (
              <span className="absolute left-0 top-0 h-full w-[3px] rounded-r-full bg-olive" />
            )}
            <span className={`shrink-0 transition-colors ${isActive ? "text-olive" : "text-muted"}`}>
              {item.icon}
            </span>
            <span
              className={`text-sm font-semibold transition-colors ${
                isActive ? "text-olive" : "text-ink"
              }`}
            >
              {item.label}
            </span>
            {isActive && (
              <svg
                className="ml-auto shrink-0 text-olive"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            )}
          </button>
        );
      })}
    </nav>
  );
}

export { NAV_ITEMS };
export type { NavItem };
