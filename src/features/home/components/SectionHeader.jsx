import Link from "next/link";

/**
 * Shared section header used by ShopBy, NewReads, and similar section containers.
 * Renders a title on the left and an optional "View All" link on the right.
 */
export function SectionHeader({ title, viewAllHref }) {
  return (
    <div className="flex items-center justify-between px-4 pt-4 pb-3">
      <h2 className="text-base font-black text-ink tracking-tight">{title}</h2>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="text-xs font-semibold text-olive hover:underline underline-offset-2 transition"
        >
          View All
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
