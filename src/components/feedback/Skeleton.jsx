/**
 * Loading skeletons. Each mirrors the real component's box model so swapping
 * skeleton → content causes no layout shift (no flicker, no jump).
 */

export function Skeleton({ className = "" }) {
  return <div className={`animate-pulse rounded-lg bg-cardline/60 ${className}`} />;
}

/** Matches a ProductCard cell. */
export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-cardline bg-surface flex flex-col h-full">
      <Skeleton className="aspect-square w-full rounded-none shrink-0" />
      <div className="flex flex-col flex-1 p-2.5 sm:p-3.5 justify-between space-y-2">
        <div className="space-y-1.5">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
        <div className="flex items-center justify-between pt-2">
          <Skeleton className="h-5 w-1/3" />
          <Skeleton className="h-7 w-16 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

/** Matches ProductGrid's responsive columns. */
export function ProductGridSkeleton({ count = 10 }) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 pt-4 sm:pt-12 pb-4">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}

/** Matches a BlogCard cell. */
export function BlogCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-cardline bg-white">
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <div className="space-y-2 p-3">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  );
}

export function BlogGridSkeleton({ count = 6, className = "grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3" }) {
  return (
    <div className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <BlogCardSkeleton key={i} />
      ))}
    </div>
  );
}

/** Matches the category tiles (horizontal single-row scroll on mobile, 8-col grid on desktop). */
export function CategoryFilterSkeleton({ count = 8 }) {
  return (
    <div className="w-full px-0 py-0 sm:py-2 -mt-3 sm:mt-0">
      {/* Horizontal single row scroll on mobile (full screen width), 8-col grid on desktop */}
      <div className="flex sm:grid gap-x-2.5 sm:gap-x-4 lg:gap-x-6 gap-y-6 sm:grid-cols-8 overflow-x-auto sm:overflow-x-visible no-scrollbar mobile-bleed-scroll py-2 sm:py-0">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-1.5 w-16 sm:w-full shrink-0 sm:shrink">
            <div className="p-[3px]">
              <Skeleton className="h-14 w-14 sm:h-20 sm:w-20 md:h-22 md:w-22 lg:h-24 lg:w-24 rounded-[16px]" />
            </div>
            <Skeleton className="h-3 w-12 sm:w-14 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skeleton;
