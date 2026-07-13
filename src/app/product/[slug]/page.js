"use client";

import { use } from "react";
import Link from "next/link";
import { useProduct } from "@/features/products/hooks/useProducts";
import ProductGallery from "@/features/products/components/ProductGallery";
import ProductInfo from "@/features/products/components/ProductInfo";
import ProductDescription from "@/features/products/components/ProductDescription";
import ProductHighlights from "@/features/products/components/ProductHighlights";
import WhyShopWithUs from "@/features/products/components/WhyShopWithUs";
import SimilarProducts from "@/features/products/components/SimilarProducts";
import TopSellers from "@/features/products/components/TopSellers";
import { Skeleton } from "@/components/feedback/Skeleton";

function ProductBreadcrumb({ product }) {
  return (
    <nav className="flex items-center gap-2 text-xs font-semibold text-muted tracking-wide uppercase px-0.5">
      <Link href="/" className="hover:text-olive transition">Home</Link>
      <span>/</span>
      <span className="hover:text-olive transition">{product.category}</span>
      <span>/</span>
      <span className="text-ink">{product.name}</span>
    </nav>
  );
}

/** Mirrors the real layout so there's no jump when the data lands. */
function ProductLoadingState() {
  return (
    <div className="space-y-12 pb-16">
      <Skeleton className="h-3 w-64" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <Skeleton className="aspect-square w-full rounded-2xl" />
        <div className="space-y-4">
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-12 w-full rounded-2xl" />
        </div>
      </div>
    </div>
  );
}

function ProductNotFoundState() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
      <span className="text-5xl">🔍</span>
      <h2 className="text-xl font-bold text-ink">Product Not Found</h2>
      <p className="text-sm text-muted max-w-sm">
        We couldn&apos;t find the product you&apos;re looking for. It might have been removed or renamed.
      </p>
      <Link
        href="/"
        className="rounded-xl bg-olive px-6 py-2.5 text-xs font-bold text-white hover:bg-olive-dark transition shadow"
      >
        Go Back Home
      </Link>
    </div>
  );
}

/** Back-compat: products without an images[] array fall back to [image] */
function resolveProductImages(product) {
  return product.images?.length > 0 ? product.images : [product.image];
}

export default function ProductDetailPage({ params: paramsPromise }) {
  const { slug } = use(paramsPromise);
  const { product, isPending, isError } = useProduct(slug);

  if (isPending) return <ProductLoadingState />;
  if (isError || !product) return <ProductNotFoundState />;

  const productImages = resolveProductImages(product);

  return (
    <div className="space-y-12 pb-[20px]">
      <ProductBreadcrumb product={product} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="min-w-0 w-full"><ProductGallery images={productImages} name={product.name} /></div>
        <div className="min-w-0 w-full"><ProductInfo product={product} /></div>
      </div>

      <ProductDescription details={product.details} />
      <ProductHighlights product={product} />
      <WhyShopWithUs />
      <SimilarProducts category={product.category} currentProductId={product.id} />
      <TopSellers />
    </div>
  );
}
