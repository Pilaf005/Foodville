"use client";

import { useState } from "react";
import DeleteAccountModal from "./DeleteAccountModal";

interface PasswordForm {
  current: string;
  newPass: string;
  confirm: string;
}

function ChangePasswordCard() {
  const [form, setForm] = useState<PasswordForm>({ current: "", newPass: "", confirm: "" });
  const [showForm, setShowForm] = useState(false);
  const [errors, setErrors] = useState<Partial<PasswordForm>>({});
  const [success, setSuccess] = useState(false);

  function validate(): boolean {
    const e: Partial<PasswordForm> = {};
    if (!form.current) e.current = "Current password required";
    if (form.newPass.length < 8) e.newPass = "Minimum 8 characters";
    if (form.newPass !== form.confirm) e.confirm = "Passwords do not match";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    setSuccess(true);
    setForm({ current: "", newPass: "", confirm: "" });
    setShowForm(false);
    setTimeout(() => setSuccess(false), 4000);
  }

  const inputClass =
    "w-full rounded-2xl border border-cardline bg-cream/40 px-4 py-3 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition";

  return (
    <div className="rounded-2xl border border-cardline bg-white p-5 shadow-sm space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-50 grid place-items-center text-blue-600 shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect width="18" height="11" x="3" y="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm font-bold text-ink">Change Password</p>
          <p className="text-xs text-muted">Keep your account secure with a strong password</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="shrink-0 text-xs font-bold text-olive border border-olive/50 rounded-xl px-3 py-1.5 hover:bg-olive/5 transition active:scale-95"
        >
          {showForm ? "Cancel" : "Change"}
        </button>
      </div>

      {success && (
        <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-2xl px-4 py-2.5 text-xs font-semibold text-green-700 animate-fade-in">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Password changed successfully!
        </div>
      )}

      {showForm && (
        <div className="space-y-3 pt-2 border-t border-cardline">
          <div>
            <input type="password" value={form.current} onChange={(e) => setForm((p) => ({ ...p, current: e.target.value }))} placeholder="Current password" className={inputClass} />
            {errors.current && <p className="mt-1 text-[11px] text-red-500">⚠ {errors.current}</p>}
          </div>
          <div>
            <input type="password" value={form.newPass} onChange={(e) => setForm((p) => ({ ...p, newPass: e.target.value }))} placeholder="New password (min. 8 characters)" className={inputClass} />
            {errors.newPass && <p className="mt-1 text-[11px] text-red-500">⚠ {errors.newPass}</p>}
          </div>
          <div>
            <input type="password" value={form.confirm} onChange={(e) => setForm((p) => ({ ...p, confirm: e.target.value }))} placeholder="Confirm new password" className={inputClass} />
            {errors.confirm && <p className="mt-1 text-[11px] text-red-500">⚠ {errors.confirm}</p>}
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-olive hover:bg-olive-dark active:scale-[0.98] text-white text-sm font-bold py-3 rounded-2xl transition shadow-md shadow-olive/20"
          >
            Update Password
          </button>
        </div>
      )}
    </div>
  );
}

function ActiveSessionsCard() {
  const sessions = [
    { device: "Chrome on Windows", location: "Noida, UP", time: "Now · Active", current: true },
    { device: "Safari on iPhone 14", location: "Delhi, DL", time: "2 hours ago", current: false },
  ];

  return (
    <div className="rounded-2xl border border-cardline bg-white shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-cardline">
        <div className="w-10 h-10 rounded-xl bg-olive/10 grid place-items-center text-olive shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect width="20" height="14" x="2" y="3" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-bold text-ink">Active Sessions</p>
          <p className="text-xs text-muted">Manage devices where you are logged in</p>
        </div>
      </div>
      <div className="divide-y divide-cardline/60">
        {sessions.map((s, i) => (
          <div key={i} className="flex items-center justify-between px-5 py-3.5 gap-3">
            <div>
              <p className="text-xs font-bold text-ink">{s.device}</p>
              <p className="text-[11px] text-muted">{s.location} · {s.time}</p>
            </div>
            {s.current ? (
              <span className="text-[10px] font-bold text-green-700 bg-green-50 border border-green-200 rounded-full px-2.5 py-1 uppercase tracking-wider">
                This device
              </span>
            ) : (
              <button className="text-[11px] font-bold text-red-500 hover:text-red-600 transition">
                Sign out
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SecuritySection() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  function handleDeleteConfirm() {
    setIsDeleteOpen(false);
    setIsDeleted(true);
  }

  return (
    <div className="rounded-3xl border border-cardline bg-white shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-cardline">
        <h2 className="text-base font-black text-ink uppercase tracking-tight">Security</h2>
        <p className="text-xs text-muted mt-0.5">Manage your account security settings</p>
      </div>

      <div className="p-6 space-y-5">
        {isDeleted && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-2xl px-4 py-3 text-xs font-semibold text-red-700 animate-fade-in">
            Account deletion has been scheduled. You will receive a confirmation email.
          </div>
        )}

        <ChangePasswordCard />
        <ActiveSessionsCard />

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2.5 border-2 border-cardline hover:border-gray-300 text-ink hover:text-ink text-sm font-bold py-4 rounded-2xl transition active:scale-[0.98]">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Log Out
        </button>

        {/* Delete account */}
        <button
          onClick={() => setIsDeleteOpen(true)}
          className="w-full flex items-center justify-center gap-2.5 border-2 border-red-200 hover:border-red-400 text-red-500 hover:text-red-600 text-sm font-bold py-4 rounded-2xl transition active:scale-[0.98] hover:bg-red-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
          Delete Account
        </button>
      </div>

      <DeleteAccountModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
