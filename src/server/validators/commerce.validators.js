import { z } from "zod";

// Amazon-style address, India only (no country field, no map coordinates).
export const addressSchema = z.object({
  label: z.enum(["Home", "Work", "Hotel", "Other"]).default("Home"),
  receiverName: z.string().trim().min(2, "Enter the full name (first and last).").max(100, "Name is too long."),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number."),
  pincode: z.string().trim().regex(/^\d{6}$/, "Enter a valid 6-digit PIN code."),
  houseFlat: z.string().trim().min(1, "Flat / house no. / building is required.").max(200, "Too long."),
  area: z.string().trim().min(1, "Area / street / sector / village is required.").max(200, "Too long."),
  landmark: z.string().trim().max(200, "Too long.").default(""),
  city: z.string().trim().min(1, "Town/City is required.").max(100, "Too long."),
  state: z.string().trim().min(1, "Choose a state.").max(100, "Too long."),
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
  fullName: z.string().trim().max(100, "Name is too long.").optional(),
  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number.")
    .or(z.literal(""))
    .optional(),
  gender: z.enum(["male", "female", "other", "prefer_not_to_say"]).optional(),
  dateOfBirth: z.string().trim().max(20).optional(),
  language: z.string().trim().max(10).optional(),
  avatarUrl: z
    .string()
    .trim()
    .max(500, "URL is too long.")
    .url()
    .or(z.string().trim().startsWith("/"))
    .or(z.literal(""))
    .optional(),
});

