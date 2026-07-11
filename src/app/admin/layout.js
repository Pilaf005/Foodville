"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: "▦" },
  { href: "/admin/products", label: "Products", icon: "◨" },
  { href: "/admin/categories", label: "Categories", icon: "◈" },
  { href: "/admin/orders", label: "Orders", icon: "▤" },
  { href: "/admin/blogs", label: "Blogs", icon: "▧" },
  { href: "/admin/users", label: "Customers", icon: "◍" },
];

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isActive = (href) => (href === "/admin" ? pathname === href : pathname.startsWith(href));

  return (
    <div className="animate-fade-in pb-12">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-cardline pb-3">
        <div>
          <h1 className="text-xl font-black uppercase tracking-tight text-ink sm:text-2xl">Admin</h1>
          <p className="mt-0.5 text-xs text-muted">Manage products, orders and customers.</p>
        </div>
        {/* An admin is still a customer — this is the way back to the shop. */}
        <Link
          href="/profile"
          className="rounded-xl border border-cardline bg-white px-4 py-2 text-xs font-bold text-ink transition hover:border-olive hover:text-olive"
        >
          ← Back to my account
        </Link>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Nav — horizontal pills on mobile, sidebar on desktop */}
        <nav className="flex gap-2 overflow-x-auto no-scrollbar lg:w-52 lg:shrink-0 lg:flex-col lg:overflow-visible">
          {NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex shrink-0 items-center gap-2 rounded-2xl border px-4 py-2.5 text-xs font-bold
                  transition-all duration-200 active:scale-[0.98] lg:w-full ${
                    active
                      ? "border-olive bg-olive text-white shadow-sm"
                      : "border-cardline bg-white text-ink hover:-translate-y-0.5 hover:border-olive/50 hover:text-olive hover:shadow-sm"
                  }`}
              >
                <span aria-hidden>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
