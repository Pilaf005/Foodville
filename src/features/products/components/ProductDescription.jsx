"use client";

export default function ProductDescription({ details }) {
  return (
    <div className="rounded-3xl border border-cardline bg-white p-6 sm:p-8">
      <h2 className="text-lg font-bold text-ink uppercase tracking-wider mb-4 border-b border-cardline pb-3">
        Product Description
      </h2>
      <div className="prose prose-sm text-muted leading-relaxed space-y-3">
        <p className="text-sm sm:text-base">
          {details || "Detailed product description is coming soon. Our products are sourced directly from trusted organic farms to ensure the highest quality and freshness for your kitchen."}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 pt-4 border-t border-cardline text-xs font-semibold text-ink">
          <div className="flex items-center gap-2.5">
            <span className="h-6 w-6 rounded-lg bg-olive/10 flex items-center justify-center text-olive font-bold">✓</span>
            <span>100% Organic & Ethically Sourced</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="h-6 w-6 rounded-lg bg-olive/10 flex items-center justify-center text-olive font-bold">✓</span>
            <span>Hygienically Packed to Preserve Aroma</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="h-6 w-6 rounded-lg bg-olive/10 flex items-center justify-center text-olive font-bold">✓</span>
            <span>Zero Preservatives or Artificial Flavors</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="h-6 w-6 rounded-lg bg-olive/10 flex items-center justify-center text-olive font-bold">✓</span>
            <span>Rich in Natural Nutrients & Minerals</span>
          </div>
        </div>
      </div>
    </div>
  );
}
