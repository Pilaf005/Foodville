import { z } from "zod";

// Amazon-style address, India only (no country field, no map coordinates).
export const addressSchema = z.object({
  label: z.enum(["Home", "Work", "Hotel", "Other"]).default("Home"),
  receiverName: z.string().trim().min(2, "Enter the full name (first and last)."),
  phone: z.string().trim().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number."),
  pincode: z.string().trim().regex(/^\d{6}$/, "Enter a valid 6-digit PIN code."),
  houseFlat: z.string().trim().min(1, "Flat / house no. / building is required."),
  area: z.string().trim().min(1, "Area / street / sector / village is required."),
  landmark: z.string().trim().default(""),
  city: z.string().trim().min(1, "Town/City is required."),
  state: z.string().trim().min(1, "Choose a state."),
  isDefault: z.boolean().optional(),
});

export const createOrderSchema = z
  .object({
    addressId: z.string().trim().optional(),
    address: addressSchema.partial().optional(),
    paymentMethod: z.enum(["cod", "razorpay"]),
  })
  .refine((d) => d.addressId || d.address, {
    message: "A delivery address is required.",
    path: ["addressId"],
  });

export const initiatePaymentSchema = z.object({
  orderId: z.string().trim().min(1, "An orderId is required."),
});

export const verifyPaymentSchema = z.object({
  razorpayOrderId: z.string().trim().min(1),
  razorpayPaymentId: z.string().trim().min(1),
  signature: z.string().trim().min(1),
});

export const updateProfileSchema = z.object({
  fullName: z.string().trim().max(80).optional(),
  phone: z.string().trim().regex(/^\d{10}$/, "Enter a valid 10-digit mobile number.").or(z.literal("")).optional(),
  gender: z.enum(["male", "female", "other", "prefer_not_to_say"]).optional(),
  dateOfBirth: z.string().trim().optional(),
  language: z.string().trim().optional(),
  avatarUrl: z.string().trim().url().or(z.string().trim().startsWith("/")).or(z.literal("")).optional(),
});

// Simple, e-commerce-appropriate settings (no OS-style push/SMS toggles).
export const notificationsSchema = z.object({
  orderUpdates: z.boolean().default(true),
  offers: z.boolean().default(true),
  newsletter: z.boolean().default(false),
});

export const preferencesSchema = z.object({
  interestedCategories: z.array(z.string().trim()).max(20).default([]),
  dietaryPreference: z.enum(["vegetarian", "non_vegetarian", "vegan", "eggetarian"]).default("vegetarian"),
  spiceIntensity: z.enum(["mild", "medium", "spicy", "extra_spicy"]).default("medium"),
});
