"use client";

/**
 * Profile navigation — trimmed to what a simple e-commerce store needs.
 * (Payment methods live in checkout via Razorpay; password/security sections
 * don't apply to OTP login; rewards are parked for now.)
 */
const NAV_ITEMS = [
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
];

const LOGOUT_ICON = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export default function ProfileSidebar({ activeSection, onSectionChange, onLogout }) {
  return (
    <nav className="overflow-hidden rounded-3xl border border-cardline bg-white shadow-sm">
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.key;
        return (
          <button
            key={item.key}
            onClick={() => onSectionChange(item.key)}
            className={`relative flex w-full items-center gap-3 border-b border-cardline/60 px-4 py-3.5 text-left transition-all duration-150 ${
              isActive ? "bg-olive/5" : "hover:bg-cream/80"
            }`}
          >
            {isActive && <span className="absolute left-0 top-0 h-full w-[3px] rounded-r-full bg-olive" />}
            <span className={`shrink-0 transition-colors ${isActive ? "text-olive" : "text-muted"}`}>{item.icon}</span>
            <span className={`text-sm font-semibold transition-colors ${isActive ? "text-olive" : "text-ink"}`}>
              {item.label}
            </span>
            {isActive && (
              <svg className="ml-auto shrink-0 text-olive" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            )}
          </button>
        );
      })}

      {/* Logout — confirmation handled by the parent */}
      <button
        onClick={onLogout}
        className="flex w-full items-center gap-3 px-4 py-3.5 text-left text-red-500 transition-colors duration-150 hover:bg-red-50"
      >
        <span className="shrink-0">{LOGOUT_ICON}</span>
        <span className="text-sm font-semibold">Logout</span>
      </button>
    </nav>
  );
}

export { NAV_ITEMS };
