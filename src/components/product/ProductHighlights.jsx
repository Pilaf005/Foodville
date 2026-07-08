"use client";

export default function ProductHighlights({ product }) {
  if (!product || !product.highlights) return null;
  const { highlights } = product;

  let highlightList = [];

  if (product.category === "combos") {
    highlightList = [
      { label: "Pack Type",           value: highlights.packType || highlights.comboType },
      { label: "Total Products",      value: highlights.totalProducts || highlights.totalItems },
      { label: "Recommended Size",    value: highlights.recommendedSize || highlights.totalWeight },
      { label: "Bulk Available",      value: highlights.bulkAvailable },
      { label: "Strategy",            value: highlights.strategy },
      { label: "Best For",            value: highlights.bestFor },
      { label: "Storage Instructions", value: highlights.storage },
      { label: "Food Type",           value: highlights.foodType },
    ];
  } else {
    highlightList = [
      { label: "Brand",                value: highlights.brand },
      { label: "GTIN (Barcode)",       value: highlights.gtin },
      { label: "Net Content",          value: highlights.netContent },
      { label: "Packaging Type",       value: highlights.packagingType },
      { label: "Category",             value: highlights.category },
      { label: "Sub Category",         value: highlights.subCategory },
      { label: "Country of Origin",    value: highlights.origin },
      { label: "HS Code",              value: highlights.hsCode },
      { label: "IGST",                 value: highlights.igst },
      { label: "CGST",                 value: highlights.cgst },
      { label: "SGST",                 value: highlights.sgst },
      { label: "Company Name",         value: highlights.companyName },
      { label: "Shelf Life",           value: highlights.shelfLife },
      { label: "Storage Instructions", value: highlights.storage },
      { label: "Product Form",         value: highlights.form },
      { label: "Ingredients",          value: highlights.ingredients },
      { label: "Food Type",            value: highlights.foodType },
      { label: "Manufactured By",      value: highlights.manufacturedBy },
    ];

    // Bulk-specific highlights
    if (product.category === "bulk") {
      if (product.bulkBestFor) highlightList.push({ label: "Best For",          value: product.bulkBestFor });
      if (product.bulkDays)    highlightList.push({ label: "Estimated Supply",  value: `${product.bulkDays} Days Supply (approx.)` });
    }
  }

  return (
    <div className="rounded-3xl border border-cardline bg-white p-6 sm:p-8 space-y-6">
      <h2 className="text-lg font-bold text-ink uppercase tracking-wider border-b border-cardline pb-3">
        Product Highlights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {highlightList.map((item, index) => item.value ? (
          <div key={index} className="flex flex-col sm:flex-row sm:items-start justify-between py-2 border-b border-cardline/40 last:border-b-0">
            <span className="text-xs font-bold text-muted uppercase tracking-wider sm:w-1/3 mb-1 sm:mb-0">
              {item.label}
            </span>
            <span className="text-sm font-medium text-ink sm:w-2/3 sm:text-right md:text-left">
              {item.value}
            </span>
          </div>
        ) : null)}
      </div>

      {/* Combo Includes — expanded section for combo products */}
      {product.category === "combos" && product.comboIncludes?.length > 0 && (
        <div className="rounded-2xl border border-cardline/60 bg-cream/40 p-4">
          <h3 className="text-xs font-black text-muted uppercase tracking-wider mb-3">
            What's in the Box
          </h3>
          <ul className="space-y-2">
            {product.comboIncludes.map((item, i) => {
              const isObj = typeof item === "object";
              const name = isObj ? item.name : item;
              const qty  = isObj ? item.qty  : "";
              const free = isObj && item.isFree;
              return (
                <li key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-olive shrink-0" />
                    <span className={`font-semibold ${free ? "text-green-700" : "text-ink"}`}>
                      {name}
                    </span>
                    {qty && <span className="text-xs text-muted">· {qty}</span>}
                  </div>
                  {free ? (
                    <span className="rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-black text-white leading-none">
                      FREE
                    </span>
                  ) : (
                    <span className="text-xs text-muted font-medium">Included</span>
                  )}
                </li>
              );
            })}
          </ul>
          {product.comboType === "buy2get1" && (
            <p className="mt-3 text-[11px] text-green-700 font-semibold bg-green-50 rounded-xl px-3 py-2 border border-green-100">
              🎁 Buy 2 Get 1 Free — the FREE item is included at no extra cost.
            </p>
          )}
        </div>
      )}

      {/* Bulk supply note */}
      {product.category === "bulk" && product.bulkDays && (
        <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100 text-xs text-blue-700 font-semibold flex items-center gap-2">
          <span>💡</span>
          <span>This bulk pack lasts approximately {product.bulkDays} days for a standard household.</span>
        </div>
      )}
    </div>
  );
}
