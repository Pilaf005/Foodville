/**
 * QtyStepper — a shared quantity increment/decrement control.
 * Used inside UnitSelector (both pack and weight layouts).
 */
export function QtyStepper({ qty, onDecrease, onIncrease }) {
  return (
    <div className="flex items-center rounded-xl border border-cardline bg-white overflow-hidden h-11 shadow-sm shrink-0">
      <button
        onClick={onDecrease}
        className="h-full w-11 flex items-center justify-center text-ink hover:bg-cream transition text-lg font-bold"
        aria-label="Decrease"
      >
        −
      </button>
      <span className="h-full w-10 flex items-center justify-center text-xs font-bold text-ink border-x border-cardline">
        {qty}
      </span>
      <button
        onClick={onIncrease}
        className="h-full w-11 flex items-center justify-center text-ink hover:bg-cream transition text-lg font-bold"
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}

export default QtyStepper;
