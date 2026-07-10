"use client";

import { useState } from "react";
import StarRating from "./StarRating";

function ReviewForm({ onSubmit, onCancel }) {
  const [userRating, setUserRating] = useState(5);
  const [comment, setComment]       = useState("");
  const [name, setName]             = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!comment.trim() || !name.trim()) return;
    onSubmit({ name, rating: userRating, comment, date: new Date().toISOString().split("T")[0] });
    setComment("");
    setName("");
  }

  return (
    <form onSubmit={handleSubmit} className="p-5 rounded-2xl bg-cream border border-cardline space-y-4">
      <h3 className="text-sm font-bold text-ink">Write Your Review</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1">Your Name</label>
          <input
            type="text" required
            value={name} onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Priyanshu S."
            className="w-full rounded-xl border border-cardline bg-white px-3 py-2 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-olive/45"
          />
        </div>
        <div>
          <label className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1">Rating</label>
          <select
            value={userRating} onChange={(e) => setUserRating(Number(e.target.value))}
            className="w-full rounded-xl border border-cardline bg-white px-3 py-2.5 text-sm text-ink focus:outline-none focus:ring-2 focus:ring-olive/45"
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>{n} Stars</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1">Comment</label>
        <textarea
          required rows={3}
          value={comment} onChange={(e) => setComment(e.target.value)}
          placeholder="Tell us what you liked or disliked about this product..."
          className="w-full rounded-xl border border-cardline bg-white px-3 py-2 text-sm text-ink placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-olive/45 resize-none"
        />
      </div>
      <button
        type="submit"
        className="rounded-xl bg-olive px-6 py-2.5 text-xs font-bold text-white hover:bg-olive-dark transition shadow"
      >
        Submit Review
      </button>
    </form>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="p-5 rounded-2xl border border-cardline/60 bg-cream/30 space-y-2">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-ink">{review.name}</h4>
          <div className="mt-0.5">
            <StarRating rating={review.rating} size={12} strokeWidth={2} />
          </div>
        </div>
        <span className="text-[10px] text-muted font-medium">{review.date}</span>
      </div>
      <p className="text-xs sm:text-sm text-muted leading-relaxed">{review.comment}</p>
    </div>
  );
}

export default function ProductReviews({ rating, reviews = [] }) {
  const [showForm, setShowForm]               = useState(false);
  const [submittedReviews, setSubmittedReviews] = useState(reviews);

  function handleAddReview(newReview) {
    setSubmittedReviews([newReview, ...submittedReviews]);
    setShowForm(false);
  }

  const averageRating =
    submittedReviews.length > 0
      ? (submittedReviews.reduce((sum, r) => sum + r.rating, 0) / submittedReviews.length).toFixed(1)
      : rating;

  return (
    <div className="rounded-3xl border border-cardline bg-white p-6 sm:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-cardline pb-5">
        <div>
          <h2 className="text-lg font-bold text-ink uppercase tracking-wider">Ratings &amp; Reviews</h2>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-3xl font-black text-gold">{averageRating}</span>
            <StarRating rating={Number(averageRating)} size={18} strokeWidth={1.8} />
            <span className="text-sm text-muted">({submittedReviews.length} reviews)</span>
          </div>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="rounded-xl border-2 border-olive bg-transparent px-5 py-2.5 text-xs font-bold text-olive hover:bg-olive hover:text-white transition active:scale-95 focus:outline-none"
        >
          {showForm ? "Cancel Review" : "Write a Review"}
        </button>
      </div>

      {showForm && <ReviewForm onSubmit={handleAddReview} onCancel={() => setShowForm(false)} />}

      {/* Review List */}
      <div className="space-y-4">
        {submittedReviews.length === 0 ? (
          <p className="text-sm text-muted text-center py-6">No reviews yet. Be the first to share your thoughts!</p>
        ) : (
          submittedReviews.map((rev, i) => <ReviewCard key={i} review={rev} />)
        )}
      </div>
    </div>
  );
}
