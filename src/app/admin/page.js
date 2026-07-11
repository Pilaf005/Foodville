"use client";

import Link from "next/link";
import { useAdminStats } from "@/features/admin/hooks/useAdmin";
import { Skeleton } from "@/components/feedback/Skeleton";

const inr = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;

function StatCard({ label, value, hint, accent = "text-ink" }) {
  return (
    <div className="card-hover animate-fade-up rounded-2xl border border-cardline bg-white p-4 transition">
      <p className="text-[11px] font-bold uppercase tracking-wider text-muted">{label}</p>
      <p className={`mt-1 text-xl font-black sm:text-2xl ${accent}`}>{value}</p>
      {hint && <p className="mt-0.5 text-[11px] text-muted">{hint}</p>}
    </div>
  );
}

const STATUS_STYLE = {
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  confirmed: "bg-olive/10 text-olive",
  pending: "bg-amber-100 text-amber-700",
};

export default function AdminDashboard() {
  const { stats, isPending } = useAdminStats();

  if (isPending) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-24 rounded-2xl" />)}
        </div>
        <Skeleton className="h-72 rounded-2xl" />
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* KPIs */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Revenue" value={inr(stats.revenue)} hint={`${stats.paidOrders} paid orders`} accent="text-olive" />
        <StatCard label="Orders" value={stats.totalOrders} hint={`${stats.ordersByStatus?.pending ?? 0} pending`} />
        <StatCard label="Customers" value={stats.totalUsers} hint={`${stats.pendingLeads} unverified leads`} />
        <StatCard
          label="Products"
          value={stats.totalProducts}
          hint={`${stats.outOfStock} out of stock`}
          accent={stats.outOfStock > 0 ? "text-terracotta" : "text-ink"}
        />
      </div>

      {/* Recent orders */}
      <div className="overflow-hidden rounded-2xl border border-cardline bg-white">
        <div className="flex items-center justify-between border-b border-cardline px-4 py-3">
          <h2 className="text-sm font-black uppercase tracking-tight text-ink">Recent orders</h2>
          <Link href="/admin/orders" className="text-xs font-bold text-olive hover:underline">
            View all →
          </Link>
        </div>

        {stats.recentOrders.length === 0 ? (
          <p className="py-12 text-center text-sm text-muted">No orders yet.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-xs">
              <thead className="bg-cream/60 text-[11px] uppercase tracking-wider text-muted">
                <tr>
                  <th className="px-4 py-2.5 font-bold">Order</th>
                  <th className="px-4 py-2.5 font-bold">Items</th>
                  <th className="px-4 py-2.5 font-bold">Total</th>
                  <th className="px-4 py-2.5 font-bold">Payment</th>
                  <th className="px-4 py-2.5 font-bold">Status</th>
                </tr>
              </thead>
              <tbody>
                {stats.recentOrders.map((o) => (
                  <tr key={o.orderId} className="border-t border-cardline/60">
                    <td className="px-4 py-3 font-bold text-ink">{o.orderId}</td>
                    <td className="px-4 py-3 text-muted">{o.items?.length ?? 0}</td>
                    <td className="px-4 py-3 font-bold text-ink">{inr(o.amounts?.total)}</td>
                    <td className="px-4 py-3">
                      <span className={o.paymentStatus === "paid" ? "font-bold text-green-600" : "text-muted"}>
                        {o.paymentStatus}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${STATUS_STYLE[o.status] || "bg-cardline/60 text-ink"}`}>
                        {o.status?.replace(/_/g, " ")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
