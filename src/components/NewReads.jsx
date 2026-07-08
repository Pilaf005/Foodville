import Link from "next/link";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";

export default function NewReads() {
  const preview = blogs.slice(0, 3);

  return (
    <section>
      {/* Outer bordered box — same style as ShopBy */}
      <div className="rounded-2xl border border-cardline bg-white overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-4 pt-4 pb-3">
          <h2 className="text-base font-black text-ink tracking-tight">New Reads</h2>
          <Link
            href="/blogs"
            className="text-xs font-semibold text-olive hover:underline underline-offset-2 transition"
          >
            View All
          </Link>
        </div>

        {/* 3-column card grid — no dark border, subtle cardline border */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4 pb-4">
          {preview.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

      </div>
    </section>
  );
}
