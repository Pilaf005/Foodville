"use client";

import { useRouter } from "next/navigation";
import { CATEGORIES } from "@/features/home/constants/categories";

export default function CategoryFilter({ active }) {
  const router = useRouter();

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-0 py-6 sm:py-8">
      {/* 4 columns on mobile (2 rows of 4), 8 columns on desktop (1 row of 8) */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-x-2.5 gap-y-6 sm:gap-x-4 justify-items-center w-full">
        {CATEGORIES.map((item) => {
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => router.push(`/category/${item.id}`)}
              className="flex flex-col items-center gap-2 group focus:outline-none select-none transition cursor-pointer w-full animate-fadeIn"
            >
              {/* Circle with visible active border */}
              <div className={`p-[3px] rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-olive shadow-lg shadow-olive/20 scale-105"
                  : "bg-transparent"
              }`}>
                <div
                  className={`w-14 h-14 sm:w-20 sm:h-20 md:w-22 md:h-22 lg:w-24 lg:h-24 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 bg-white border-2 ${
                    isActive
                      ? "border-white scale-100 shadow-md"
                      : "border-cardline group-hover:scale-105 group-hover:shadow-md group-hover:border-olive/40"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    draggable={false}
                  />
                </div>
              </div>

              {/* Label */}
              <span
                className={`text-[10px] sm:text-xs md:text-sm tracking-tight text-center max-w-[85px] sm:max-w-[120px] leading-tight transition-colors duration-200 ${
                  isActive ? "text-olive font-extrabold" : "text-ink/90 font-bold group-hover:text-ink"
                }`}
              >
                {item.name}
              </span>

              {/* Active indicator dot below label */}
              <div className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                isActive ? "bg-olive scale-100 opacity-100" : "bg-transparent scale-0 opacity-0"
              }`} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
