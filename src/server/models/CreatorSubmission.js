import mongoose from "mongoose";

const CreatorSubmissionSchema = new mongoose.Schema(
  {
    submissionId: { type: String, required: true, unique: true, index: true },
    creatorName: { type: String, required: true, trim: true },
    socialHandle: { type: String, trim: true, default: "" },
    email: { type: String, required: true, lowercase: true, trim: true, index: true },
    phone: { type: String, required: true, trim: true },
    reelUrl: { type: String, required: true, trim: true },
    shippingAddress: {
      street: { type: String, required: true, trim: true },
      city: { type: String, required: true, trim: true },
      state: { type: String, required: true, trim: true },
      pincode: { type: String, required: true, trim: true },
    },
    recipeNotes: { type: String, default: "" },
    status: {
      type: String,
      enum: ["pending", "verified", "dispatched", "rejected"],
      default: "pending",
      index: true,
    },
    trackingNumber: { type: String, default: "" },
    internalNotes: { type: String, default: "" },
  },
  { timestamps: true }
);

const CreatorSubmission =
  mongoose.models.CreatorSubmission ||
  mongoose.model("CreatorSubmission", CreatorSubmissionSchema);

export default CreatorSubmission;
