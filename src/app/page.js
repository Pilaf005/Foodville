import Link from "next/link";
import HeroCarousel from "@/features/home/components/HeroCarousel";
import CategoryFilter from "@/features/categories/components/CategoryFilter";
import ShopBy from "@/features/home/components/ShopBy";
import FranchiseSection from "@/features/home/components/FranchiseSection";
import NewReads from "@/features/home/components/NewReads";
import ErrorBoundary from "@/components/common/ErrorBoundary";

export default function HomePage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Server-Rendered SEO Heading & Brand Section for Googlebot Crawlers */}
      <section className="sr-only">
        <h1>Foodville — Pure Spice Powders, Seeds &amp; Dry Fruits</h1>
        <p>
          Welcome to Foodville Consumer Products Private Limited. We manufacture and supply 100% natural, premium dehydrated spice powders (Red Onion Powder, Garlic Powder, Green Chilli Powder, Moringa Powder), organic seeds, dry fruits, and herbal wellness products. Order online with nationwide delivery across India.
        </p>
        <nav aria-label="Popular Categories">
          <ul>
            <li><Link href="/shop">Shop All Products</Link></li>
            <li><Link href="/bulk-order">Bulk &amp; Wholesale Orders</Link></li>
            <li><Link href="/franchise">Franchise Opportunities</Link></li>
            <li><Link href="/blogs">Health &amp; Cooking Blogs</Link></li>
          </ul>
        </nav>
      </section>

      <ErrorBoundary>
        <HeroCarousel />
      </ErrorBoundary>
      <ErrorBoundary>
        <CategoryFilter />
      </ErrorBoundary>
      <ErrorBoundary>
        <ShopBy />
      </ErrorBoundary>

      {/* Visible Brand Intro Banner & Features for Users & Search Engine Crawlers */}
      <section className="bg-surface border border-cardline rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
          Foodville Consumer Products Private Limited
        </h2>
        <p className="text-xs sm:text-sm text-muted leading-relaxed max-w-4xl">
          Foodville is committed to bringing pure, preservative-free, dehydrated farm spices and organic dry fruits directly to your kitchen. Explore our wide selection of gourmet spice powders, healthy seeds, and premium dry fruit combos.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="p-3 bg-cream/40 rounded-xl border border-cardline/60 text-center">
            <span className="text-lg block mb-1">🌿</span>
            <p className="font-bold text-xs text-ink">100% Pure &amp; Natural</p>
            <p className="text-[10px] text-muted mt-0.5">No artificial preservatives</p>
          </div>
          <div className="p-3 bg-cream/40 rounded-xl border border-cardline/60 text-center">
            <span className="text-lg block mb-1">🚀</span>
            <p className="font-bold text-xs text-ink">Pan-India Delivery</p>
            <p className="text-[10px] text-muted mt-0.5">24,000+ PIN codes served</p>
          </div>
          <div className="p-3 bg-cream/40 rounded-xl border border-cardline/60 text-center">
            <span className="text-lg block mb-1">📦</span>
            <p className="font-bold text-xs text-ink">Bulk &amp; Wholesale</p>
            <p className="text-[10px] text-muted mt-0.5">Direct factory pricing</p>
          </div>
          <div className="p-3 bg-cream/40 rounded-xl border border-cardline/60 text-center">
            <span className="text-lg block mb-1">🛡️</span>
            <p className="font-bold text-xs text-ink">Secure Payments</p>
            <p className="text-[10px] text-muted mt-0.5">UPI, Cards &amp; COD Available</p>
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <FranchiseSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <NewReads />
      </ErrorBoundary>
    </div>
  );
}
