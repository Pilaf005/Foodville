"use client";

import { use } from "react";
import Link from "next/link";
import { getBlogBySlug, blogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";

export default function BlogDetailPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const blog = getBlogBySlug(params.slug);

  if (!blog) {
    return (
      <div className="text-center py-24 space-y-3">
        <span className="text-4xl">📄</span>
        <h2 className="font-bold text-ink">Article not found</h2>
        <Link href="/blogs" className="text-sm text-olive hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const related = blogs.filter((b) => b.id !== blog.id).slice(0, 3);

  return (
    <div className="pb-16 max-w-5xl mx-auto">
      {/* 2-Column Balanced Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mt-6">
        
        {/* Left Column: Cover Image & Quick Summary Info */}
        <div className="md:col-span-5 space-y-6">
          {/* Cover image (medium sizing, responsive aspect) */}
          <div className="w-full overflow-hidden rounded-2xl border border-cardline bg-cream shadow-sm aspect-[4/3] sm:aspect-[1.4/1]">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quick Summary Info Card (Satisfies the 'add more info' requirement) */}
          <div className="rounded-2xl border border-cardline bg-white p-5 space-y-4 shadow-sm">
            <h3 className="text-sm font-black text-ink uppercase tracking-wider border-b border-cardline pb-2 flex items-center gap-1.5">
              <span>🌱</span> Key Quick Facts
            </h3>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between">
                <span className="text-muted font-medium">Category:</span>
                <span className="font-bold text-olive">{blog.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted font-medium">Read Duration:</span>
                <span className="font-bold text-ink">{blog.readTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted font-medium">Diet Suitability:</span>
                <span className="font-bold text-ink">Vegetarian / Vegan</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted font-medium">Origin:</span>
                <span className="font-bold text-ink">100% Organic & Native</span>
              </div>
              
              <div className="pt-2 border-t border-cardline/60">
                <p className="font-bold text-ink mb-1.5">Usage & Storage Tips:</p>
                <ul className="list-disc list-inside space-y-1 text-muted leading-relaxed">
                  <li>Store in airtight containers to preserve aroma.</li>
                  <li>Keep in a cool, dry place away from direct sunlight.</li>
                  <li>Incorporate daily in small, consistent portions.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Article Text */}
        <div className="md:col-span-7 space-y-5">
          {/* Category badge */}
          <div className="flex items-center gap-3">
            {blog.category && (
              <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide ${blog.categoryColor}`}>
                {blog.category}
              </span>
            )}
            {blog.readTime && (
              <span className="flex items-center gap-1 text-[10px] font-semibold text-muted">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 6v6l4 2" />
                </svg>
                {blog.readTime}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3.5xl font-black text-ink leading-tight">
            {blog.title}
          </h1>

          {/* Date */}
          <p className="text-xs font-semibold text-olive">{blog.date}</p>

          {/* Lead / preview statement */}
          <p className="text-sm text-muted leading-relaxed pl-4 border-l-4 border-olive/40 italic py-1 bg-cream/35 rounded-r-xl">
            {blog.preview}
          </p>

          {/* Main content paragraphs */}
          <div className="space-y-4 pt-2">
            {blog.fullContent.map((block, i) => {
              if (block.type === "heading") {
                return (
                  <h2 key={i} className="text-base sm:text-lg font-black text-ink pt-4 pb-0.5 leading-snug border-b border-cardline/40">
                    {block.text}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-sm text-ink leading-[1.85] font-normal">
                  {block.text}
                </p>
              );
            })}
          </div>

          {/* Back button */}
          <div className="pt-6 border-t border-cardline flex justify-start">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-full border-2 border-olive px-5 py-2.5 text-xs font-bold text-olive hover:bg-olive hover:text-white transition-all duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
