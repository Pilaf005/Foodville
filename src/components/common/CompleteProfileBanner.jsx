"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/features/auth/hooks/useAuth";

const DISMISS_KEY = "fv_profile_nudge_dismissed";

/**
 * Safety net for the abandoned-onboarding flow: a user who verified their OTP
 * but closed the tab / pressed Back before filling in their name and phone is
 * fully logged in with a half-empty profile. This slim banner follows them on
 * every page until they finish (or dismiss it for the session). The link lands
 * on /login, which shows the details step for incomplete profiles.
 */
export default function CompleteProfileBanner() {
  const pathname = usePathname();
  const { user, isAuthenticated, isLoading } = useAuth();
  const [dismissed, setDismissed] = useState(true); // assume dismissed until read

  useEffect(() => {
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDismissed(sessionStorage.getItem(DISMISS_KEY) === "1");
    } catch {
      setDismissed(false);
    }
  }, []);

  if (isLoading || !isAuthenticated || dismissed) return null;
  if (user?.fullName && user?.phone) return null;
  if (pathname.startsWith("/login")) return null; // they're already there

  function dismiss() {
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch { /* private mode — banner just reappears next visit */ }
  }

  return (
    <div className="animate-fade-down border-b border-olive/20 bg-olive/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <p className="min-w-0 truncate text-xs text-ink">
          <span className="font-bold">Finish setting up your account</span>
          <span className="hidden sm:inline text-muted"> — add your name & phone for faster checkout.</span>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={`/login?redirect=${encodeURIComponent(pathname)}`}
            className="rounded-full bg-olive px-3.5 py-1.5 text-[11px] font-bold text-white transition hover:bg-olive-dark active:scale-95"
          >
            Complete now
          </Link>
          <button
            onClick={dismiss}
            aria-label="Dismiss"
            className="rounded-full p-1 text-muted transition hover:bg-white/60 hover:text-ink"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
