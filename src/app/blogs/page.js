"use client";

import Link from "next/link";
import BlogCard from "@/components/common/BlogCard";
import { useBlogs } from "@/features/blogs/hooks/useBlogs";
import { BlogCardSkeleton } from "@/components/feedback/Skeleton";

export default function BlogsPage() {
  const { blogs, isPending } = useBlogs();

  return (
    <div className="-mt-3.5 sm:mt-0 space-y-3.5 sm:space-y-6 pb-[20px] sm:pb-8">
      {/* Grid Header & Breadcrumbs */}
      <div className="sticky top-[57px] sm:relative z-20 bg-cream/95 backdrop-blur px-4 sm:px-0 -mx-4 sm:mx-0 py-3 sm:pt-2 sm:pb-3 flex items-center justify-between border-b border-cardline">
        {/* Breadcrumb path back to home */}
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-muted uppercase tracking-wider select-none">
          <Link href="/" className="hover:text-olive flex items-center gap-1 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
            Home
          </Link>
          <span className="text-muted/40 font-bold">/</span>
          <span className="text-ink font-black truncate max-w-[200px]">New Reads</span>
        </div>

        <span className="text-xs font-bold text-muted uppercase tracking-wider">
          {isPending ? "…" : `${blogs.length} ${blogs.length === 1 ? "Article" : "Articles"} found`}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs text-muted -mt-3">
        Tips, recipes, and nutrition guides from our kitchen to yours.
      </p>

      {/* Grid — 2-col mobile, 3-col desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {isPending
          ? Array.from({ length: 6 }).map((_, i) => <BlogCardSkeleton key={i} />)
          : blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
      </div>
    </div>
  );
}
