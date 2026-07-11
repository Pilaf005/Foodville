/**
 * User — passwordless (OTP email login).
 *
 * `status: "pending"` is the LEAD-CAPTURE state: the record is created the
 * moment someone submits their email and hits Next, before they verify. So an
 * abandoned signup still leaves us their email, and a returning visitor is
 * recognised as "requested a code but never verified".
 * `status: "active"` is set on the first successful OTP verification.
 */
import mongoose from "mongoose";

const { Schema } = mongoose;

/**
 * Preferences & notifications are EMBEDDED subdocuments, not a separate
 * collection. This is the correct MongoDB relationship for strict 1:1 data
 * that is always read with the user: one query, no join, no orphan risk.
 * They get their own API endpoints (PUT /api/profile/preferences and
 * /api/profile/notifications) so the client updates them independently.
 */
const PreferencesSchema = new Schema(
  {
    interestedCategories: { type: [String], default: [] },
    dietaryPreference: {
      type: String,
      enum: ["vegetarian", "non_vegetarian", "vegan", "eggetarian"],
      default: "vegetarian",
    },
    spiceIntensity: { type: String, enum: ["mild", "medium", "spicy", "extra_spicy"], default: "medium" },
  },
  { _id: false }
);

// Kept deliberately simple for a web store: three email toggles, no OS-style
// push/SMS options.
const NotificationsSchema = new Schema(
  {
    orderUpdates: { type: Boolean, default: true },
    offers: { type: Boolean, default: true },
    newsletter: { type: Boolean, default: false },
  },
  { _id: false }
);

const RewardsSchema = new Schema(
  {
    points: { type: Number, default: 0 },
    walletBalance: { type: Number, default: 0 },
    referralEarnings: { type: Number, default: 0 },
    referralCode: { type: String, default: "" },
    tier: { type: String, enum: ["bronze", "silver", "gold", "platinum"], default: "bronze" },
  },
  { _id: false }
);

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true, index: true },
    status: { type: String, enum: ["pending", "active"], default: "pending", index: true },
    role: { type: String, enum: ["user", "admin"], default: "user", index: true },

    fullName: { type: String, default: "" },
    phone: { type: String, default: "" },
    gender: { type: String, enum: ["male", "female", "other", "prefer_not_to_say"], default: "prefer_not_to_say" },
    dateOfBirth: { type: String, default: "" },
    language: { type: String, default: "English" },
    avatarUrl: { type: String, default: "" },
    isVerified: { type: Boolean, default: false },

    preferences: { type: PreferencesSchema, default: () => ({}) },
    notifications: { type: NotificationsSchema, default: () => ({}) },
    rewards: { type: RewardsSchema, default: () => ({}) },

    otpRequestedAt: { type: Date }, // when they last asked for a code (lead capture)
    // Durable OTP request quota (survives serverless restarts, unlike memory).
    otpRequestCount: { type: Number, default: 0 },
    otpWindowStartedAt: { type: Date },
    lastLoginAt: { type: Date },
  },
  { timestamps: true, minimize: false }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
