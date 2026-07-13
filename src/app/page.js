import HeroCarousel from "@/features/home/components/HeroCarousel";
import CategoryFilter from "@/features/categories/components/CategoryFilter";
import ShopBy from "@/features/home/components/ShopBy";
import NewReads from "@/features/home/components/NewReads";

// Search now has its own page (/search), so the home page always renders its
// sections instead of blanking itself when a ?search= query was present.
export default function HomePage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <HeroCarousel />
      <CategoryFilter />
      <ShopBy />
      <NewReads />
    </div>
  );
}
