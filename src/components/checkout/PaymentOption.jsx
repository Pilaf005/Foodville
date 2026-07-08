"use client";

export default function PaymentOption({
  id,
  name,
  icon,
  actionText,
  onActionClick,
  isSelected,
  onSelect,
  showArrow = true,
}) {
  return (
    <div
      onClick={() => onSelect && onSelect(id)}
      className={`flex items-center justify-between p-4 cursor-pointer transition border-l-4 ${
        isSelected
          ? "border-[#6B7F59] bg-[#6B7F59]/5"
          : "border-transparent hover:bg-gray-50/50"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <span className="text-sm font-bold text-gray-800">{name}</span>
      </div>

      {actionText ? (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onActionClick) onActionClick(id);
          }}
          className="text-xs font-bold text-[#6B7F59] hover:underline"
        >
          {actionText}
        </button>
      ) : showArrow ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2.2" strokeLinecap="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      ) : (
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
          isSelected ? "border-[#6B7F59]" : "border-gray-300"
        }`}>
          {isSelected && (
            <div className="w-2.5 h-2.5 rounded-full bg-[#6B7F59]" />
          )}
        </div>
      )}
    </div>
  );
}
