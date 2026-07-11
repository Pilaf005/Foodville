"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Route-level error boundary. Catches render/data errors so a single failure
 * never takes the whole app down with a white screen.
 */
export default function Error({ error, reset }) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-24 text-center">
      <span className="text-6xl">🫤</span>
      <h1 className="text-2xl font-black uppercase tracking-tight text-ink sm:text-3xl">
        Something went wrong
      </h1>
      <p className="max-w-sm text-sm text-muted">
        We hit an unexpected problem loading this page. Please try again — if it keeps happening,
        come back in a moment.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button
          onClick={reset}
          className="rounded-xl bg-olive px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-olive-dark active:scale-[0.98]"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-xl border-2 border-olive px-6 py-2.5 text-xs font-bold text-olive transition hover:bg-olive hover:text-white"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
