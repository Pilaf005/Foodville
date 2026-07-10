"use client";

import Link from "next/link";

// darkBorder prop adds border-ink border, used only in New Reads section
export default function BlogCard({ blog, darkBorder = false }) {
  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className={`group flex flex-col rounded-2xl bg-white overflow-hidden hover:shadow-md transition-shadow duration-200 ${
        darkBorder
          ? "border-2 border-ink"
          : "border border-cardline"
      }`}
    >
      {/* Cover image */}
      <div className="aspect-[16/9] overflow-hidden bg-cream shrink-0">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='225' viewBox='0 0 400 225'><rect width='400' height='225' fill='%23F5F0E8'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-size='14' fill='%23A8A29E'>No Image</text></svg>";
          }}
        />
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-4 gap-2">
        {/* Category badge */}
        {blog.category && (
          <span className={`self-start rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-wide ${blog.categoryColor}`}>
            {blog.category}
          </span>
        )}

        {/* Title */}
        <h3 className="text-sm font-bold text-ink leading-snug line-clamp-2 group-hover:text-olive transition-colors">
          {blog.title}
        </h3>

        {/* Date */}
        <p className="text-xs font-semibold text-olive">{blog.date}</p>

        {/* Preview */}
        <p className="text-xs text-muted leading-relaxed line-clamp-3 flex-1">
          {blog.preview}
        </p>

        {/* Read time */}
        {blog.readTime && (
          <div className="flex items-center gap-1 mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" d="M12 6v6l4 2" />
            </svg>
            <span className="text-[10px] font-semibold text-muted">{blog.readTime}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
