import mongoose from "mongoose";

const { Schema } = mongoose;

const CouponSchema = new Schema(
  {
    code: { type: String, required: true, unique: true, uppercase: true, trim: true, index: true },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    discountType: { type: String, enum: ["percentage", "flat"], default: "percentage" },
    discountValue: { type: Number, required: true }, // e.g. 10 = 10%, 50 = ₹50
    maxDiscount: { type: Number, default: null }, // e.g. 500 cap
    minSubtotal: { type: Number, default: 0 },
    firstOrderOnly: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true, index: true },
  },
  { timestamps: true }
);

const Coupon = mongoose.models.Coupon || mongoose.model("Coupon", CouponSchema);
export default Coupon;
