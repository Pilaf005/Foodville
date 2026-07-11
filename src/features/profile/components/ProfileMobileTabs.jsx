"use client";

import { NAV_ITEMS } from "./ProfileSidebar";

export default function ProfileMobileTabs({ activeSection, onSectionChange, onLogout }) {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
      {NAV_ITEMS.map((item) => {
        const isActive = activeSection === item.key;
        return (
          <button
            key={item.key}
            onClick={() => onSectionChange(item.key)}
            className={`shrink-0 flex items-center gap-2 px-4 py-3 rounded-full border text-xs font-bold whitespace-nowrap transition-all duration-150 min-h-[44px] ${
              isActive
                ? "bg-olive text-white border-olive shadow-sm shadow-olive/20"
                : "bg-white text-ink border-cardline hover:border-olive/40 hover:text-olive"
            }`}
          >
            <span className={isActive ? "text-white" : "text-muted"}>{item.icon}</span>
            {item.label}
          </button>
        );
      })}

      {/* Logout — confirmation handled by the parent */}
      <button
        onClick={onLogout}
        className="shrink-0 flex items-center gap-2 px-4 py-3 rounded-full border border-red-200 bg-white text-xs font-bold whitespace-nowrap text-red-500 transition-all duration-150 min-h-[44px] hover:bg-red-50"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
        Logout
      </button>
    </div>
  );
}
