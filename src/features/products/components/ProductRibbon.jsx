import { PRODUCT_RIBBONS } from "../constants";

/**
 * ProductRibbon — top-left badge overlay on product card images.
 * Renders nothing if the shopBy value has no matching ribbon config.
 */
export function ProductRibbon({ shopBy }) {
  const ribbon = PRODUCT_RIBBONS[shopBy];
  if (!ribbon) return null;

  return (
    <span
      className={`absolute top-2 left-2 z-10 flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[10px] font-black text-white shadow-sm leading-none ${ribbon.className}`}
    >
      {ribbon.label}
    </span>
  );
}

export default ProductRibbon;
