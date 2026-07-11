import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-24 text-center">
      <span className="text-6xl">🧭</span>
      <h1 className="text-2xl font-black uppercase tracking-tight text-ink sm:text-3xl">
        Page not found
      </h1>
      <p className="max-w-sm text-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist, or it may have moved.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Link
          href="/"
          className="rounded-xl bg-olive px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-olive-dark"
        >
          Go home
        </Link>
        <Link
          href="/shop"
          className="rounded-xl border-2 border-olive px-6 py-2.5 text-xs font-bold text-olive transition hover:bg-olive hover:text-white"
        >
          Browse products
        </Link>
      </div>
    </div>
  );
}
