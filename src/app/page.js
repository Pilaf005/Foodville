import HeroCarousel from "@/features/home/components/HeroCarousel";
import CategoryFilter from "@/features/categories/components/CategoryFilter";
import ShopBy from "@/features/home/components/ShopBy";
import NewReads from "@/features/home/components/NewReads";
import ErrorBoundary from "@/components/common/ErrorBoundary";

// Search now has its own page (/search), so the home page always renders its
// sections instead of blanking itself when a ?search= query was present.
export default function HomePage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <ErrorBoundary>
        <HeroCarousel />
      </ErrorBoundary>
      <ErrorBoundary>
        <CategoryFilter />
      </ErrorBoundary>
      <ErrorBoundary>
        <ShopBy />
      </ErrorBoundary>
      <ErrorBoundary>
        <NewReads />
      </ErrorBoundary>
    </div>
  );
}
