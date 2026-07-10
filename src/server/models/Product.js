/**
 * Product model — polymorphic across three shapes that share one collection:
 *   - "standard" (powders/seasoning/seeds/dryfruits/wellness): brand/gtin/packaging + shopBy
 *   - "bulk": units carry perUnit/savings
 *   - "combos": comboIncludes[] + a combo-specific highlights key set
 *
 * The schema keeps every field the finalized UI reads (exact names preserved).
 * `highlights` is Mixed to allow the differing key sets without data loss.
 */
import mongoose from "mongoose";

const { Schema } = mongoose;

export const PRODUCT_CATEGORIES = [
  "powders",
  "seasoning",
  "seeds",
  "dryfruits",
  "wellness",
  "combos",
  "bulk",
];

export const SHOP_BY_VALUES = ["bestseller", "trending", "newlyIn", "valueBuys"];

const UnitSchema = new Schema(
  {
    unit: { type: String, required: true }, // "100g", "Pack of 2", "Pack of 2 (250g each)"
    price: { type: Number, required: true },
    mrp: { type: Number },
    // standard-only
    gtin: { type: String },
    packaging: { type: String },
    // bulk-only
    perUnit: { type: Number },
    savings: { type: Number },
  },
  { _id: false }
);

const ReviewSchema = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 0, max: 5 }, // can be a float (4.5)
    comment: { type: String, default: "" },
    date: { type: String, default: "" }, // kept as string to match UI display (ISO in seed data)
  },
  { _id: false }
);

const ComboIncludeSchema = new Schema(
  {
    name: { type: String, required: true },
    qty: { type: String, default: "" }, // string in the data ("1 unit")
    isFree: { type: Boolean, default: false },
  },
  { _id: false }
);

const ProductSchema = new Schema(
  {
    // Original numeric id from products.js — UI routes/lookups use this + slug.
    numericId: { type: Number, required: true, unique: true, index: true },
    slug: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
    name: { type: String, required: true, trim: true },

    category: { type: String, required: true, enum: PRODUCT_CATEGORIES, index: true },
    shopBy: { type: String, enum: SHOP_BY_VALUES, index: true }, // absent on combos/bulk

    unit: { type: String, default: "" }, // default/selected unit label
    price: { type: Number, required: true, index: true },
    mrp: { type: Number },

    image: { type: String, default: "" }, // card thumbnail
    images: { type: [String], default: [] }, // gallery
    description: { type: String, default: "" },
    details: { type: String, default: "" },

    stock: { type: Number, default: 0 },
    rating: { type: Number, default: 0, index: true },
    tags: { type: [String], default: [], index: true },

    reviews: { type: [ReviewSchema], default: [] },
    highlights: { type: Schema.Types.Mixed, default: {} }, // varying key set per product type
    units: { type: [UnitSchema], default: [] },

    // combo-only
    comboIncludes: { type: [ComboIncludeSchema], default: undefined },

    // standard-only top-level
    brand: { type: String },
    gtin: { type: String },
    packaging: { type: String },

    // admin / lifecycle
    isActive: { type: Boolean, default: true, index: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    minimize: false, // keep empty highlights object
  }
);

// Text index powering search across name / description / tags.
ProductSchema.index({ name: "text", description: "text", tags: "text" });
// Common sort/filter combos.
ProductSchema.index({ category: 1, price: 1 });
ProductSchema.index({ shopBy: 1, rating: -1 });

// Expose a stable `id` (numericId) to the client so the UI keeps working.
ProductSchema.virtual("id").get(function () {
  return this.numericId;
});

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
