import HeroCarousel from "@/features/home/components/HeroCarousel";
import CategoryFilter from "@/features/categories/components/CategoryFilter";
import ShopBy from "@/features/home/components/ShopBy";
import FranchiseSection from "@/features/home/components/FranchiseSection";
import NewReads from "@/features/home/components/NewReads";
import ErrorBoundary from "@/components/common/ErrorBoundary";

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
        <FranchiseSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <NewReads />
      </ErrorBoundary>
    </div>
  );
}
