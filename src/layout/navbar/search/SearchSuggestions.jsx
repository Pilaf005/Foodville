import React from "react";
import { PRODUCT_FALLBACK_IMAGE } from "@/features/products/constants";
import { HighlightMatch } from "./components/HighlightMatch";
import { TRENDING_SEARCHES } from "./constants/searchSuggestions";

const CATEGORY_NAMES = {
  powders: "Spice Powders",
  seasoning: "Seasoning & Herbs",
  seeds: "Seeds & Superfoods",
  dryfruits: "Dry Fruits & Nuts",
  wellness: "Wellness & Ayurveda",
  combos: "Combo Packs",
  bulk: "Bulk Packs",
};

export const SearchSuggestions = ({
  query,
  suggestions,
  recentSearches = [],
  onSelectSuggestion,
  onSelectCategory,
  onRemoveRecent,
  onClearRecent,
  activeIndex,
  isSearching,
  isMobileOverlay = false,
}) => {
  const hasQuery = query.trim().length > 0;

  // Compute item indices cleanly
  const hasDidYouMean = Boolean(suggestions?.didYouMean);
  const productsCount = suggestions?.products?.length || 0;
  const didYouMeanIdx = hasDidYouMean ? 0 : -1;
  const productStartIdx = hasDidYouMean ? 1 : 0;
  const categoryStartIdx = productStartIdx + productsCount;

  return (
    <div
      className={
        isMobileOverlay
          ? "w-full bg-white relative top-0 mt-0 z-10"
          : "absolute top-full left-0 right-0 mt-2 rounded-2xl border border-cardline bg-white shadow-2xl z-[100] max-h-[380px] overflow-y-auto"
      }
    >
      {isSearching && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-olive/60 animate-pulse pointer-events-none z-10" />
      )}

      {!hasQuery ? (
        recentSearches.length > 0 ? (
          <div className="p-3">
            <div className="flex items-center justify-between mb-2 px-1">
              <p className="text-[10px] font-bold text-muted uppercase tracking-wider">Recent Searches</p>
              <button 
                type="button" 
                onClick={onClearRecent} 
                className="text-[10px] font-bold text-ink hover:text-olive transition"
              >
                CLEAR ALL
              </button>
            </div>
            <div className="space-y-0.5">
              {recentSearches.map((term, i) => (
                <div key={i} className="flex items-center justify-between group p-2 rounded-xl hover:bg-cream cursor-pointer transition" onClick={() => onSelectSuggestion(term)}>
                  <div className="flex items-center gap-2">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span className="text-sm text-ink">{term}</span>
                  </div>
                  <button 
                    type="button" 
                    onClick={(e) => { e.stopPropagation(); onRemoveRecent(term); }}
                    className="opacity-0 group-hover:opacity-100 p-1 text-muted hover:text-ink transition"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : null
      ) : (
        <div>
          {hasDidYouMean && (
            <div 
              className={`bg-amber-50 border-b border-amber-100 px-4 py-2.5 cursor-pointer flex items-center gap-2 ${activeIndex === didYouMeanIdx ? 'bg-amber-100' : 'hover:bg-amber-100'} transition`}
              onClick={() => onSelectSuggestion(suggestions.didYouMean)}
            >
              <span className="text-sm text-ink">Did you mean:</span>
              <span className="text-sm font-bold text-ink italic">{suggestions.didYouMean}</span>
            </div>
          )}

          <div className="p-3">
            {suggestions?.products?.length > 0 && (
              <div className="mb-3">
                <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-2 px-1">Matching Products</p>
                <div className="space-y-0.5">
                  {suggestions.products.map((p, pIdx) => {
                    const idx = productStartIdx + pIdx;
                    return (
                      <div
                        key={p.slug || pIdx}
                        onClick={() => onSelectSuggestion(p.name)}
                        className={`flex items-center gap-3 p-2 rounded-xl cursor-pointer transition ${activeIndex === idx ? 'bg-cream' : 'hover:bg-cream'}`}
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
                          <p className="text-sm font-medium text-ink truncate">
                            <HighlightMatch text={p.name} query={query} />
                          </p>
                          <p className="text-xs text-muted">{p.unit}</p>
                        </div>
                        <span className="text-sm font-bold text-gold shrink-0">₹{p.price}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {suggestions?.categories?.length > 0 && (
              <div>
                <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-2 px-1">Categories</p>
                <div className="space-y-0.5">
                  {suggestions.categories.map((c, cIdx) => {
                    const idx = categoryStartIdx + cIdx;
                    return (
                      <div
                        key={c}
                        onClick={() => onSelectCategory(c)}
                        className={`flex items-center gap-2 p-2 rounded-xl cursor-pointer transition ${activeIndex === idx ? 'bg-cream' : 'hover:bg-cream'}`}
                      >
                        <div className="w-8 h-8 rounded-full bg-cream flex items-center justify-center shrink-0">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-olive"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
                        </div>
                        <span className="text-sm font-medium text-ink flex-1">
                          <HighlightMatch text={CATEGORY_NAMES[c] || c} query={query} />
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            
            {(!suggestions?.products?.length && !suggestions?.categories?.length && !isSearching) && (
              <p className="text-sm text-muted text-center py-4">No results for &ldquo;{query}&rdquo;</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;
