import { blogs } from "@/data/blogs";
import BlogCard from "@/components/common/BlogCard";
import SectionHeader from "./SectionHeader";

const NEW_READS_PREVIEW_COUNT = 3;

export default function NewReads() {
  const preview = blogs.slice(0, NEW_READS_PREVIEW_COUNT);

  return (
    <section>
      {/* Outer bordered box — same style as ShopBy */}
      <div className="rounded-2xl border border-cardline bg-white overflow-hidden">

        <SectionHeader title="New Reads" viewAllHref="/blogs" />

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
