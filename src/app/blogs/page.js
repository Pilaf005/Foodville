import { blogs } from "@/data/blogs";
import BlogCard from "@/components/common/BlogCard";

export default function BlogsPage() {
  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="border-b border-cardline pb-3 flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-ink uppercase tracking-tight">
            New Reads
          </h1>
          <p className="text-xs text-muted mt-0.5">
            Tips, recipes, and nutrition guides from our kitchen to yours.
          </p>
        </div>
        <span className="text-xs font-bold text-muted uppercase tracking-wider">
          {blogs.length} {blogs.length === 1 ? "Article" : "Articles"}
        </span>
      </div>

      {/* Grid — 2-col mobile, 3-col desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
