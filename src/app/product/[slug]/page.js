"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { getProductBySlug } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDescription from "@/components/product/ProductDescription";
import ProductHighlights from "@/components/product/ProductHighlights";
import WhyShopWithUs from "@/components/product/WhyShopWithUs";
import ProductReviews from "@/components/product/ProductReviews";
import SimilarProducts from "@/components/product/SimilarProducts";
import TopSellers from "@/components/product/TopSellers";

export default function ProductDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { slug } = params;
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details based on slug
    const prod = getProductBySlug(slug);
    setProduct(prod);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center text-muted">
        <svg className="animate-spin h-8 w-8 text-olive" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        <span className="ml-2 font-medium">Loading product details...</span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
        <span className="text-5xl">🔍</span>
        <h2 className="text-xl font-bold text-ink">Product Not Found</h2>
        <p className="text-sm text-muted max-w-sm">
          We couldn't find the product you're looking for. It might have been removed or renamed.
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

  // Back-compatibility helper for products that might not have images[] array yet
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  return (
    <div className="space-y-12 pb-16">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-muted tracking-wide uppercase px-0.5">
        <Link href="/" className="hover:text-olive transition">Home</Link>
        <span>/</span>
        <span className="hover:text-olive transition">{product.category}</span>
        <span>/</span>
        <span className="text-ink">{product.name}</span>
      </nav>

      {/* Main product gallery and info section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <div className="min-w-0 w-full">
          <ProductGallery images={productImages} name={product.name} />
        </div>
        <div className="min-w-0 w-full">
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Detailed Description */}
      <ProductDescription details={product.details} />

      {/* Product Highlights */}
      <ProductHighlights product={product} />

      {/* Why Shop With Us */}
      <WhyShopWithUs />

      {/* Ratings & Reviews */}
      <ProductReviews rating={product.rating} reviews={product.reviews} />

      {/* Similar Products Recommendation */}
      <SimilarProducts category={product.category} currentProductId={product.id} />

      {/* Top Sellers Section */}
      <TopSellers />
    </div>
  );
}
