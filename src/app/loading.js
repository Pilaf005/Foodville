import { Skeleton, ProductGridSkeleton } from "@/components/feedback/Skeleton";

/** Shown while a route segment streams in — keeps the page from flashing blank. */
export default function Loading() {
  return (
    <div className="space-y-6 py-2">
      <Skeleton className="h-8 w-48" />
      <ProductGridSkeleton count={10} />
    </div>
  );
}
