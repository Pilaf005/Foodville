"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import StarRating from "./StarRating";
import api, { unwrap } from "@/lib/api";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { queryKeys } from "@/lib/queryKeys";

function StarPicker({ value, onChange }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`${n} star${n > 1 ? "s" : ""}`}
          className="p-0.5 transition active:scale-90"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill={n <= value ? "#C9A86C" : "none"}
            stroke={n <= value ? "#C9A86C" : "#c9c2b4"}
            strokeWidth="1.6"
            className="transition-colors duration-150"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </button>
      ))}
    </div>
  );
}

function ReviewForm({ slug, existingReview, onDone }) {
  const queryClient = useQueryClient();
  const [rating, setRating] = useState(existingReview?.rating || 5);
  const [comment, setComment] = useState(existingReview?.comment || "");

  const submit = useMutation({
    mutationFn: async () => unwrap(await api.post(`/products/${slug}/reviews`, { rating, comment })),
    onSuccess: (product) => {
      // The API returns the updated product — refresh the detail immediately.
      queryClient.setQueryData(queryKeys.products.detail(slug), product);
      queryClient.invalidateQueries({ queryKey: queryKeys.products.all });
      toast.success(existingReview ? "Your review was updated" : "Thanks for your review!", { id: "review" });
      onDone();
    },
    onError: (err) => toast.error(err?.message || "Could not submit the review.", { id: "review" }),
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (comment.trim().length < 3) {
      toast.error("Tell us a little more about the product.", { id: "review" });
      return;
    }
    submit.mutate();
  }

  return (
    <form onSubmit={handleSubmit} className="animate-fade-in space-y-4 rounded-2xl border border-cardline bg-cream p-5">
      <h3 className="text-sm font-bold text-ink">
        {existingReview ? "Update your review" : "Write your review"}
      </h3>

      <div>
        <label className="mb-1.5 block text-[10px] font-bold uppercase tracking-widest text-muted">Your rating</label>
        <StarPicker value={rating} onChange={setRating} />
      </div>

      <div>
        <label className="mb-1 block text-[10px] font-bold uppercase tracking-widest text-muted">Comment</label>
        <textarea
          required
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Tell us what you liked or disliked about this product…"
          className="w-full resize-none rounded-xl border border-cardline bg-white px-3 py-2 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-olive/45"
        />
      </div>

      <button
        type="submit"
        disabled={submit.isPending}
        className="rounded-xl bg-olive px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-olive-dark active:scale-[0.98] disabled:opacity-60"
      >
        {submit.isPending ? "Submitting…" : existingReview ? "Update review" : "Submit review"}
      </button>
    </form>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="animate-fade-in space-y-2 rounded-2xl border border-cardline/60 bg-cream/30 p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="text-sm font-bold text-ink">{review.name}</h4>
            {review.verified && (
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-green-700">
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Verified Purchase
              </span>
            )}
          </div>
          <div className="mt-0.5">
            <StarRating rating={review.rating} size={12} strokeWidth={2} />
          </div>
        </div>
        <span className="text-[10px] font-medium text-muted">{review.date}</span>
      </div>
      <p className="text-xs leading-relaxed text-muted sm:text-sm">{review.comment}</p>
    </div>
  );
}

export default function ProductReviews({ slug, rating, reviews = [], myReview = null }) {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();
  const [showForm, setShowForm] = useState(false);

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
      : Number(rating || 0).toFixed(1);

  return (
    <div className="space-y-6 rounded-3xl border border-cardline bg-white p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-cardline pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-bold uppercase tracking-wider text-ink">Ratings &amp; Reviews</h2>
          <div className="mt-1.5 flex items-center gap-2">
            <span className="text-3xl font-black text-gold">{averageRating}</span>
            <StarRating rating={Number(averageRating)} size={18} strokeWidth={1.8} />
            <span className="text-sm text-muted">({reviews.length} reviews)</span>
          </div>
        </div>

        {isAuthenticated ? (
          <button
            onClick={() => setShowForm(!showForm)}
            className="rounded-xl border-2 border-olive bg-transparent px-5 py-2.5 text-xs font-bold text-olive transition hover:bg-olive hover:text-white active:scale-95 focus:outline-none"
          >
            {showForm ? "Cancel" : myReview ? "Edit your review" : "Write a Review"}
          </button>
        ) : (
          <Link
            href={`/login?redirect=${encodeURIComponent(pathname)}`}
            className="rounded-xl border-2 border-olive px-5 py-2.5 text-center text-xs font-bold text-olive transition hover:bg-olive hover:text-white active:scale-95"
          >
            Sign in to review
          </Link>
        )}
      </div>

      {showForm && <ReviewForm slug={slug} existingReview={myReview} onDone={() => setShowForm(false)} />}

      {/* Review List */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted">No reviews yet. Be the first to share your thoughts!</p>
        ) : (
          reviews.map((rev, i) => <ReviewCard key={i} review={rev} />)
        )}
      </div>
    </div>
  );
}
