"use client";

import { useState } from "react";
import { useAdminOrders, useAdminMutations } from "@/features/admin/hooks/useAdmin";
import { useDebounce } from "@/hooks/useDebounce";
import { Skeleton } from "@/components/feedback/Skeleton";

const STATUSES = [
  "pending",
  "confirmed",
  "packed",
  "shipped",
  "out_for_delivery",
  "delivered",
  "cancelled",
];

const STATUS_STYLE = {
  delivered: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
  confirmed: "bg-olive/10 text-olive",
  pending: "bg-amber-100 text-amber-700",
};

const inr = (n) => `₹${Number(n || 0).toLocaleString("en-IN")}`;

export default function AdminOrdersPage() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const debounced = useDebounce(search.trim(), 300);

  const { orders, meta, isPending } = useAdminOrders({
    ...(debounced ? { search: debounced } : {}),
    ...(status ? { status } : {}),
    page,
    limit: 20,
  });
  const { updateOrderStatus } = useAdminMutations();

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-col gap-2 sm:flex-row">
        <input
          value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          placeholder="Search by order id…"
          className="w-full rounded-2xl border border-cardline bg-white px-4 py-2.5 text-sm outline-none
                     transition focus:border-olive focus:ring-2 focus:ring-olive/20"
        />
        <select
          value={status}
          onChange={(e) => { setStatus(e.target.value); setPage(1); }}
          className="rounded-2xl border border-cardline bg-white px-4 py-2.5 text-sm text-ink outline-none
                     transition focus:border-olive sm:w-52"
        >
          <option value="">All statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>{s.replace(/_/g, " ")}</option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border border-cardline bg-white">
        {isPending ? (
          <div className="space-y-2 p-4">
            {Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-12 rounded-xl" />)}
          </div>
        ) : orders.length === 0 ? (
          <p className="py-16 text-center text-sm text-muted">No orders found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-xs">
              <thead className="bg-cream/60 text-[11px] uppercase tracking-wider text-muted">
                <tr>
                  <th className="px-4 py-2.5 font-bold">Order</th>
                  <th className="px-4 py-2.5 font-bold">Customer</th>
                  <th className="px-4 py-2.5 font-bold">Items</th>
                  <th className="px-4 py-2.5 font-bold">Total</th>
                  <th className="px-4 py-2.5 font-bold">Payment</th>
                  <th className="px-4 py-2.5 font-bold">Status</th>
                  <th className="px-4 py-2.5 font-bold">Update</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((o) => (
                  <tr key={o.orderId} className="border-t border-cardline/60 align-middle">
                    <td className="px-4 py-3">
                      <p className="font-bold text-ink">{o.orderId}</p>
                      <p className="text-[11px] text-muted">
                        {o.placedAt ? new Date(o.placedAt).toLocaleDateString("en-IN") : ""}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <p className="text-ink">{o.customer?.name || "—"}</p>
                      <p className="text-[11px] text-muted">{o.customer?.email}</p>
                    </td>
                    <td className="px-4 py-3 text-muted">{o.items?.length ?? 0}</td>
                    <td className="px-4 py-3 font-bold text-ink">{inr(o.amounts?.total)}</td>
                    <td className="px-4 py-3">
                      <span className={o.paymentStatus === "paid" ? "font-bold text-green-600" : "text-muted"}>
                        {o.paymentStatus}
                      </span>
                      <p className="text-[11px] text-muted uppercase">{o.paymentMethod}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${STATUS_STYLE[o.status] || "bg-cardline/60 text-ink"}`}>
                        {o.status?.replace(/_/g, " ")}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <select
                        value={o.status}
                        disabled={updateOrderStatus.isPending}
                        onChange={(e) =>
                          updateOrderStatus.mutate({ orderId: o.orderId, status: e.target.value })
                        }
                        className="rounded-xl border border-cardline bg-white px-2 py-1.5 text-[11px] outline-none
                                   transition focus:border-olive disabled:opacity-50"
                      >
                        {STATUSES.map((s) => (
                          <option key={s} value={s}>{s.replace(/_/g, " ")}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {meta && meta.totalPages > 1 && (
        <Pagination meta={meta} page={page} setPage={setPage} />
      )}
    </div>
  );
}

export function Pagination({ meta, page, setPage }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-muted">
        Page {meta.page} of {meta.totalPages} · {meta.total} total
      </span>
      <div className="flex gap-2">
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page <= 1}
          className="rounded-xl border border-cardline bg-white px-3 py-1.5 font-bold text-ink transition
                     hover:border-olive disabled:cursor-not-allowed disabled:opacity-40"
        >
          Prev
        </button>
        <button
          onClick={() => setPage(Math.min(meta.totalPages, page + 1))}
          disabled={page >= meta.totalPages}
          className="rounded-xl border border-cardline bg-white px-3 py-1.5 font-bold text-ink transition
                     hover:border-olive disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
