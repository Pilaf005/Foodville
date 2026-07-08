"use client";

export default function WhyShopWithUs() {
  const points = [
    {
      emoji: "🚀",
      bgClass: "bg-amber-50 border-amber-200/70 text-amber-600",
      title: "Superfast Delivery",
      description: "Get your orders delivered to your doorstep in record time. Freshness guaranteed on arrival."
    },
    {
      emoji: "🏷️",
      bgClass: "bg-emerald-50 border-emerald-200/70 text-emerald-600",
      title: "Best Prices & Offers",
      description: "Pocket-friendly direct-to-consumer farm pricing. Enjoy seasonal discounts and coupon savings."
    },
    {
      emoji: "🌿",
      bgClass: "bg-lime-50 border-lime-200/70 text-lime-700",
      title: "100% Natural Products",
      description: "Fresh, healthy, and organic foods sourced straight from sustainable farm fields."
    },
    {
      emoji: "🛡️",
      bgClass: "bg-blue-50 border-blue-200/70 text-blue-600",
      title: "100% Secure Payments",
      description: "Secure, encrypted transactions supporting all major UPI, Cards, Netbanking, and Wallet options."
    }
  ];

  return (
    <div className="rounded-3xl border border-cardline bg-cream/40 p-6 sm:p-8">
      <h3 className="text-base sm:text-lg font-bold text-ink uppercase tracking-wider mb-6 text-center sm:text-left">
        Why Shop From Foodville?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {points.map((pt, idx) => (
          <div key={idx} className="flex gap-4 items-center p-4 rounded-2xl bg-white border border-cardline/50 shadow-sm group hover:shadow transition-all duration-300">
            {/* Visual Large Circular Icon Box */}
            <div className={`w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full flex items-center justify-center border text-2xl sm:text-3xl shadow-inner transition-transform duration-300 group-hover:scale-105 ${pt.bgClass}`}>
              {pt.emoji}
            </div>
            <div>
              <h4 className="font-extrabold text-sm text-ink leading-snug">
                {pt.title}
              </h4>
              <p className="text-xs text-muted mt-1 leading-relaxed">
                {pt.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
