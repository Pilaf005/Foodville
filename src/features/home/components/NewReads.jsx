"use client";

import BlogCard from "@/components/common/BlogCard";
import SectionHeader from "./SectionHeader";
import { useBlogs } from "@/features/blogs/hooks/useBlogs";
import { BlogCardSkeleton } from "@/components/feedback/Skeleton";

const NEW_READS_PREVIEW_COUNT = 3;

export default function NewReads() {
  const { blogs, isPending } = useBlogs();
  const preview = blogs.slice(0, NEW_READS_PREVIEW_COUNT);

  return (
    <section>
      {/* Outer bordered box — flat on mobile, boxed on desktop */}
      <div className="border-0 sm:border border-cardline bg-transparent sm:bg-white rounded-none sm:rounded-2xl overflow-visible sm:overflow-hidden">

        <SectionHeader title="New Reads" viewAllHref="/blogs" />

        {/* 3-column card grid on desktop, scrollable row on mobile */}
        <div className="px-0 sm:px-4 pb-4">
          <div className="flex sm:grid gap-3.5 sm:gap-4 sm:grid-cols-3 overflow-x-auto sm:overflow-x-visible no-scrollbar mobile-bleed-scroll snap-x snap-mandatory">
            {isPending
              ? Array.from({ length: NEW_READS_PREVIEW_COUNT }).map((_, i) => (
                  <div key={i} className="w-[165px] min-w-[165px] sm:w-auto sm:min-w-0 shrink-0 sm:shrink">
                    <BlogCardSkeleton />
                  </div>
                ))
              : preview.map((blog) => (
                  <div key={blog.id} className="w-[165px] min-w-[165px] sm:w-auto sm:min-w-0 shrink-0 sm:shrink snap-start">
                    <BlogCard blog={blog} />
                  </div>
                ))}
          </div>
        </div>

      </div>
    </section>
  );
}
