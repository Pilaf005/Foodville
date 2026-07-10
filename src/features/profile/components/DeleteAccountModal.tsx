"use client";

import { useEffect, useState } from "react";

interface DeleteAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteAccountModal({ isOpen, onClose, onConfirm }: DeleteAccountModalProps) {
  const [confirmText, setConfirmText] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!isOpen) setConfirmText("");
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const isConfirmed = confirmText.trim().toUpperCase() === "DELETE";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="w-full max-w-[420px] bg-white rounded-3xl flex flex-col shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Warning header */}
        <div className="bg-red-50 border-b border-red-100 px-6 pt-6 pb-5 text-center">
          <div className="w-14 h-14 rounded-full bg-red-100 border border-red-200 flex items-center justify-center text-red-500 mx-auto mb-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <h2 className="text-base font-black text-red-700">Delete Account</h2>
          <p className="text-xs text-red-500 mt-1">This action cannot be undone</p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-ink leading-relaxed">
            Deleting your account will permanently remove all your data including orders, addresses, rewards, and preferences. You will not be able to recover this information.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3.5 flex items-start gap-2.5">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="2" strokeLinecap="round" className="shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            <p className="text-xs text-amber-700 font-medium">
              Any unused wallet balance or reward points will be forfeited and cannot be refunded.
            </p>
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-bold text-muted uppercase tracking-widest">
              Type <span className="text-red-500 font-black">DELETE</span> to confirm
            </label>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder="Type DELETE"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-red-400 transition uppercase tracking-widest font-bold"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 pb-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 border-2 border-cardline text-ink text-sm font-bold py-3 rounded-2xl hover:border-gray-300 transition active:scale-[0.98]"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={!isConfirmed}
            className="flex-1 bg-red-500 hover:bg-red-600 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-white text-sm font-bold py-3 rounded-2xl transition active:scale-[0.98] shadow-sm"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
