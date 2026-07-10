/**
 * StarRating — renders a row of 5 star SVGs filled/outlined by rating value.
 * Used in ProductInfo, ProductReviews, and review list items.
 */
export function StarRating({ rating, size = 16, strokeWidth = 1.5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={s <= Math.round(rating) ? "#C9A86C" : "none"}
          stroke="#C9A86C"
          strokeWidth={strokeWidth}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default StarRating;
