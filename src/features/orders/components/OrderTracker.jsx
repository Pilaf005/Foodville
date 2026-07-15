"use client";

/**
 * Order progress tracker.
 *
 * Renders the journey pending → confirmed → packed → shipped → out for delivery
 * → delivered as a stepper, driven entirely by the order's real `status` and
 * `timeline` from the database (the admin moves it forward from the dashboard).
 *
 * A cancelled order short-circuits to its own state rather than pretending to
 * still be in progress.
 */

export const TRACK_STEPS = [
  { key: "confirmed",        label: "Order Confirmed", hint: "We've received your order" },
  { key: "packed",           label: "Packed",          hint: "Your items are packed" },
  { key: "shipped",          label: "Shipped",         hint: "Handed to our delivery partner" },
  { key: "out_for_delivery", label: "Out for Delivery",hint: "Arriving today" },
  { key: "delivered",        label: "Delivered",       hint: "Enjoy your order!" },
];

export const STATUS_BADGE = {
  pending:          { label: "Payment Pending", cls: "bg-amber-100 text-amber-700" },
  confirmed:        { label: "Confirmed",       cls: "bg-olive/10 text-olive" },
  packed:           { label: "Packed",          cls: "bg-olive/10 text-olive" },
  shipped:          { label: "Shipped",         cls: "bg-blue-100 text-blue-700" },
  out_for_delivery: { label: "Out for Delivery",cls: "bg-blue-100 text-blue-700" },
  delivered:        { label: "Delivered",       cls: "bg-green-100 text-green-700" },
  cancelled:        { label: "Cancelled",       cls: "bg-red-100 text-red-700" },
};

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function formatWhen(date) {
  if (!date) return null;
  return new Date(date).toLocaleString("en-IN", {
    day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit",
  });
}

export default function OrderTracker({ order }) {
  const isCancelled = order.status === "cancelled";

  // When each step actually happened, taken from the stored timeline.
  const reachedAt = {};
  for (const entry of order.timeline || []) {
    if (!reachedAt[entry.status]) reachedAt[entry.status] = entry.at;
  }

  const currentIndex = TRACK_STEPS.findIndex((s) => s.key === order.status);

  if (isCancelled) {
    const cancelledAt = reachedAt.cancelled;
    return (
      <div className="animate-fade-in rounded-3xl border border-red-200 bg-red-50/60 p-6 text-center">
        <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-red-100 text-red-600">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </div>
        <h3 className="text-base font-black uppercase tracking-tight text-ink">Order Cancelled</h3>
        <p className="mt-1 text-xs text-muted">
          This order was cancelled{cancelledAt ? ` on ${formatWhen(cancelledAt)}` : ""}.
          {order.paymentStatus === "paid" && " Any amount paid will be refunded to your original payment method."}
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in rounded-3xl border border-cardline bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-black uppercase tracking-tight text-ink">Track Order</h3>
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${STATUS_BADGE[order.status]?.cls || "bg-cardline/60 text-ink"}`}>
          {STATUS_BADGE[order.status]?.label || order.status}
        </span>
      </div>

      {/* Vertical on mobile, horizontal on desktop */}
      <ol className="relative flex flex-col gap-0 sm:flex-row sm:gap-0">
        {TRACK_STEPS.map((step, i) => {
          const done = currentIndex >= 0 && i <= currentIndex;
          const isCurrent = i === currentIndex;
          const when = reachedAt[step.key];

          return (
            <li key={step.key} className="relative flex flex-1 gap-3 pb-6 last:pb-0 sm:flex-col sm:gap-0 sm:pb-0">
              {/* Connector */}
              {i < TRACK_STEPS.length - 1 && (
                <span
                  aria-hidden
                  className={`absolute left-[13px] top-7 h-full w-0.5 transition-colors duration-500 sm:left-auto sm:top-[13px] sm:h-0.5 sm:w-full sm:translate-x-[14px]
                    ${done && i < currentIndex ? "bg-olive" : "bg-cardline"}`}
                />
              )}

              {/* Dot */}
              <span
                className={`relative z-10 grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 transition-all duration-300
                  ${done
                    ? "border-olive bg-olive text-white"
                    : "border-cardline bg-white text-transparent"}
                  ${isCurrent ? "ring-4 ring-olive/15" : ""}`}
              >
                {done && <CheckIcon />}
                {isCurrent && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-olive/30" aria-hidden />
                )}
              </span>

              {/* Label */}
              <div className="min-w-0 sm:mt-3 sm:pr-3">
                <p className={`text-xs font-bold leading-tight transition-colors ${done ? "text-ink" : "text-muted"}`}>
                  {step.label}
                </p>
                <p className="mt-0.5 text-[11px] leading-snug text-muted">
                  {when ? formatWhen(when) : step.hint}
                </p>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Courier details & Transit scans (if shipped) */}
      {order.shipping?.awbCode && (
        <div className="mt-6 border-t border-cardline/60 pt-5 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-cream/30 p-3.5 rounded-2xl border border-cardline/40">
            <div>
              <p className="text-[10px] font-bold text-muted uppercase tracking-wider">Delivery Partner</p>
              <p className="text-xs font-black text-ink mt-0.5">{order.shipping.courierName || "Shiprocket Partner"}</p>
            </div>
            <div className="sm:text-right">
              <p className="text-[10px] font-bold text-muted uppercase tracking-wider">AWB Tracking Number</p>
              <p className="text-xs font-black text-ink mt-0.5">{order.shipping.awbCode}</p>
            </div>
          </div>

          {/* Webhook Scan timelines */}
          {(() => {
            // Find all timeline logs that came from Shiprocket webhook updates
            const webhookLogs = (order.timeline || [])
              .filter((t) => t.note && t.note.includes("[Shiprocket"))
              .map((t) => {
                // Strip the internal technical prefixes (Webhook, Auto-Sync, Scan Sync)
                const cleanNote = t.note.replace(/^\[Shiprocket (Webhook|Auto-Sync|Scan Sync)\]\s*/i, "");
                return { ...t, cleanNote };
              });

            if (webhookLogs.length === 0) return null;

            return (
              <div className="space-y-3.5">
                <h4 className="text-[10px] font-extrabold text-muted uppercase tracking-wider">Live Delivery Status Checkpoints</h4>
                <div className="relative pl-5 border-l border-cardline/60 ml-2 space-y-4.5">
                  {webhookLogs.map((log, idx) => (
                    <div key={idx} className="relative">
                      {/* Stepper Bullet */}
                      <span className={`absolute -left-[26px] top-1 w-2.5 h-2.5 rounded-full border-2 bg-white ${
                        idx === webhookLogs.length - 1 ? "border-olive ring-4 ring-olive/15" : "border-cardline"
                      }`} />
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                          <p className="text-xs font-bold text-ink leading-snug">{log.cleanNote}</p>
                          <span className="text-[10px] text-muted whitespace-nowrap shrink-0 sm:pt-0.5">
                            {formatWhen(log.at)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {order.status === "pending" && (
        <p className="mt-5 rounded-xl bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-700">
          We&apos;re waiting for your payment to be confirmed. This usually takes a moment.
        </p>
      )}
    </div>
  );
}
