import React from "react";
import { PRODUCT_FALLBACK_IMAGE } from "@/features/products/constants";

export const SearchSuggestions = ({ query, matchingProducts, onSelectSuggestion }) => {
  return (
    <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl border border-cardline bg-white p-3 shadow-xl z-50 animate-scale-in">
      {matchingProducts.length > 0 ? (
        <>
          <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-2 px-1">
            Matching Products
          </p>
          <div className="space-y-0.5">
            {matchingProducts.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectSuggestion(p.name)}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-cream cursor-pointer transition"
              >
                <div className="h-9 w-9 rounded-lg bg-cream overflow-hidden shrink-0">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover"
                    onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = PRODUCT_FALLBACK_IMAGE; }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-ink truncate">{p.name}</p>
                  <p className="text-xs text-muted">{p.unit}</p>
                </div>
                <span className="text-sm font-bold text-gold shrink-0">₹{p.price}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-sm text-muted text-center py-3">No results for &ldquo;{query}&rdquo;</p>
      )}
    </div>
  );
};

export default SearchSuggestions;
