"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import HeroCarousel from "@/features/home/components/HeroCarousel";
import CategoryFilter from "@/features/categories/components/CategoryFilter";
import ShopBy from "@/features/home/components/ShopBy";
import NewReads from "@/features/home/components/NewReads";

function HomeContent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const showHero = !searchQuery;

  return (
    <div className="space-y-6">
      {showHero && <HeroCarousel />}
      {showHero && <CategoryFilter active="all" />}
      {showHero && <ShopBy />}
      {showHero && <NewReads />}
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="text-center py-10 text-muted">Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
