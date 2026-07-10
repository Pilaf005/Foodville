"use client";

import type { ProfileSection } from "../types/profile.types";
import { NAV_ITEMS } from "./ProfileSidebar";

interface ProfileMobileTabsProps {
  activeSection: ProfileSection;
  onSectionChange: (section: ProfileSection) => void;
}

export default function ProfileMobileTabs({ activeSection, onSectionChange }: ProfileMobileTabsProps) {
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
            <span className={isActive ? "text-white" : "text-muted"}>
              {item.icon}
            </span>
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
