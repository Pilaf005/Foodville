"use client";

import { useRouter } from "next/navigation";

export default function CategoryFilter({ active }) {
  const router = useRouter();

  const filterItems = [
    {
      id: "all",
      name: "All Products",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=180&h=180&q=80",
      bgColor: "bg-white"
    },
    {
      id: "powders",
      name: "Spice Powders",
      image: "https://i.pinimg.com/736x/65/ae/dd/65aedd56ac63e9b98194b9f7c0bd0d74.jpg",
      bgColor: "bg-white"
    },
    {
      id: "seasoning",
      name: "Seasoning & Herbs",
      image: "https://i.pinimg.com/736x/b8/9c/8b/b89c8bbaf5a4db2b4fe13ca26e80b40c.jpg",
      bgColor: "bg-white"
    },
    {
      id: "seeds",
      name: "Seeds",
      image: "https://i.pinimg.com/736x/b6/73/20/b67320741f3f44ab852a7749116af875.jpg",
      bgColor: "bg-white"
    },
    {
      id: "dryfruits",
      name: "Dry Fruits & Nuts",
      image: "https://i.pinimg.com/736x/84/67/1a/84671af313c0c46f79f4757d8c62674e.jpg",
      bgColor: "bg-white"
    },
    {
      id: "wellness",
      name: "Herbal & Wellness",
      image: "https://i.pinimg.com/1200x/1f/d7/59/1fd759d27f9098bc2fc7847a634c5e2a.jpg",
      bgColor: "bg-white"
    },
    {
      id: "combos",
      name: "Combo Packs",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=180&h=180&q=80",
      bgColor: "bg-white"
    },
    {
      id: "bulk",
      name: "Bulk Products",
      image: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?auto=format&fit=crop&w=180&h=180&q=80",
      bgColor: "bg-white"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-0 py-6 sm:py-8">
      {/* 4 columns on mobile (2 rows of 4), 8 columns on desktop (1 row of 8) */}
      <div className="grid grid-cols-4 sm:grid-cols-8 gap-x-2.5 gap-y-6 sm:gap-x-4 justify-items-center w-full">
        {filterItems.map((item) => {
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
