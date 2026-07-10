"use client";

import { useState } from "react";
import type { NotificationSettings as NotifSettings } from "../types/profile.types";

interface SettingRow {
  key: keyof NotifSettings;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const SETTING_ROWS: SettingRow[] = [
  {
    key: "orderUpdates",
    label: "Order Updates",
    description: "Get notified when your order status changes",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    key: "offers",
    label: "Offers & Promotions",
    description: "Exclusive deals, coupons and flash sales",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    key: "emailNotifications",
    label: "Email Notifications",
    description: "Order receipts, updates and newsletters",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    key: "sms",
    label: "SMS Alerts",
    description: "Text messages for order and payment updates",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    key: "pushNotifications",
    label: "Push Notifications",
    description: "Real-time alerts on your device",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
  },
  {
    key: "newsletter",
    label: "Newsletter",
    description: "Weekly tips, recipes, and new product alerts",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
        <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z" />
      </svg>
    ),
  },
];

interface NotificationSettingsProps {
  settings: NotifSettings;
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative shrink-0 w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-olive/30 ${
        checked ? "bg-olive" : "bg-gray-200"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function NotificationSettings({ settings: initial }: NotificationSettingsProps) {
  const [settings, setSettings] = useState<NotifSettings>(initial);
  const [saved, setSaved] = useState(false);

  function update(key: keyof NotifSettings, value: boolean) {
    setSettings((prev) => ({ ...prev, [key]: value }));
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="rounded-3xl border border-cardline bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-cardline">
        <h2 className="text-base font-black text-ink uppercase tracking-tight">Notification Preferences</h2>
        <p className="text-xs text-muted mt-0.5">Choose what alerts you want to receive</p>
      </div>

      {saved && (
        <div className="mx-6 mt-4 flex items-center gap-2 bg-green-50 border border-green-200 rounded-2xl px-4 py-2.5 text-xs font-semibold text-green-700 animate-fade-in">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Notification settings saved!
        </div>
      )}

      <div className="divide-y divide-cardline/60">
        {SETTING_ROWS.map(({ key, label, description, icon }) => (
          <div
            key={key}
            className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-cream/40 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-xl grid place-items-center shrink-0 ${settings[key] ? "bg-olive/10 text-olive" : "bg-gray-50 text-muted"} transition-colors`}>
                {icon}
              </div>
              <div>
                <p className="text-sm font-bold text-ink">{label}</p>
                <p className="text-xs text-muted mt-0.5">{description}</p>
              </div>
            </div>
            <Toggle checked={settings[key]} onChange={(v) => update(key, v)} />
          </div>
        ))}
      </div>

      <div className="px-6 py-5 border-t border-cardline bg-cream/20">
        <button
          onClick={handleSave}
          className="bg-olive hover:bg-olive-dark active:scale-[0.98] text-white text-sm font-bold px-8 py-3 rounded-2xl transition shadow-md shadow-olive/20"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
}
