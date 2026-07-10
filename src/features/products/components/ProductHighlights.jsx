"use client";

import { DEFAULT_HIGHLIGHT_FIELDS, COMBO_HIGHLIGHT_FIELDS } from "../constants";
import ComboIncludesList from "./ComboIncludesList";

function buildHighlightList(product) {
  const { highlights } = product;

  if (product.category === "combos") {
    return COMBO_HIGHLIGHT_FIELDS.map(({ label, key, altKey }) => ({
      label,
      value: highlights[key] || (altKey ? highlights[altKey] : undefined),
    }));
  }

  const list = DEFAULT_HIGHLIGHT_FIELDS.map(({ label, key }) => ({
    label,
    value: highlights[key],
  }));

  if (product.category === "bulk") {
    if (product.bulkBestFor) list.push({ label: "Best For",         value: product.bulkBestFor });
    if (product.bulkDays)    list.push({ label: "Estimated Supply", value: `${product.bulkDays} Days Supply (approx.)` });
  }

  return list;
}

export default function ProductHighlights({ product }) {
  if (!product || !product.highlights) return null;

  const highlightList = buildHighlightList(product);

  return (
    <div className="rounded-3xl border border-cardline bg-white p-6 sm:p-8 space-y-6">
      <h2 className="text-lg font-bold text-ink uppercase tracking-wider border-b border-cardline pb-3">
        Product Highlights
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
        {highlightList.map((item, index) =>
          item.value ? (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start justify-between py-2 border-b border-cardline/40 last:border-b-0"
            >
              <span className="text-xs font-bold text-muted uppercase tracking-wider sm:w-1/3 mb-1 sm:mb-0">
                {item.label}
              </span>
              <span className="text-sm font-medium text-ink sm:w-2/3 sm:text-right md:text-left">
                {item.value}
              </span>
            </div>
          ) : null
        )}
      </div>

      {/* Combo Includes — expanded section for combo products */}
      {product.category === "combos" && product.comboIncludes?.length > 0 && (
        <div className="rounded-2xl border border-cardline/60 bg-cream/40 p-4">
          <h3 className="text-xs font-black text-muted uppercase tracking-wider mb-3">
            What&apos;s in the Box
          </h3>
          <ComboIncludesList
            items={product.comboIncludes}
            showBuy2Get1Note={product.comboType === "buy2get1"}
          />
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
