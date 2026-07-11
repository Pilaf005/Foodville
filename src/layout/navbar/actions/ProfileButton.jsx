"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/features/auth/hooks/useAuth";

function UserIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M20 21a8 8 0 1 0-16 0" />
    </svg>
  );
}

export const ProfileButton = () => {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  // Signed out → send them to sign in; signed in → their account.
  const href = isAuthenticated ? "/profile" : "/login";
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-label={isAuthenticated ? "My Profile" : "Sign in"}
      className={`relative p-2.5 rounded-full transition min-h-[44px] min-w-[44px] flex items-center justify-center ${
        isActive
          ? "text-olive bg-olive/10"
          : "text-ink hover:text-olive hover:bg-white/70"
      }`}
    >
      <UserIcon />
      {/* Small dot marks a signed-in session */}
      {isAuthenticated && (
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border border-white bg-olive" />
      )}
    </Link>
  );
};

export default ProfileButton;
