/**
 * ComboIncludesList — renders a list of combo product inclusions.
 * Supports both string format (legacy) and object format { name, qty, isFree }.
 * Used in UnitSelector, ProductHighlights, and ProductInfo.
 */
export function ComboIncludesList({ items = [], showBuy2Get1Note = false }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => {
        const isObj = typeof item === "object";
        const name = isObj ? item.name : item;
        const qty  = isObj ? item.qty  : "";
        const free = isObj && item.isFree;
        return (
          <li key={i} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-olive shrink-0" />
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
              <span className="text-[10px] text-muted font-medium">Included</span>
            )}
          </li>
        );
      })}
      {showBuy2Get1Note && (
        <li>
          <p className="mt-2 text-[11px] text-green-700 font-semibold bg-green-50 rounded-xl px-3 py-2 border border-green-100">
            🎁 Buy 2 Get 1 Free — the FREE item is included at no extra cost.
          </p>
        </li>
      )}
    </ul>
  );
}

export default ComboIncludesList;
