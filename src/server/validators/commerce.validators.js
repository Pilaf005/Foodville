import { z } from "zod";

export const addressSchema = z.object({
  label: z.enum(["Home", "Work", "Hotel", "Other"]).default("Home"),
  receiverName: z.string().trim().min(2, "Enter the receiver's name."),
  phone: z.string().trim().regex(/^\d{10}$/, "Enter a valid 10-digit phone number."),
  houseFlat: z.string().trim().default(""),
  apartment: z.string().trim().default(""),
  landmark: z.string().trim().default(""),
  city: z.string().trim().min(1, "City is required."),
  state: z.string().trim().default(""),
  pincode: z.string().trim().regex(/^\d{6}$/, "Enter a valid 6-digit pincode.").or(z.literal("")).default(""),
  deliveryInstructions: z.string().trim().default(""),
  coordinates: z.object({ lat: z.number(), lng: z.number() }).optional(),
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
  phone: z.string().trim().regex(/^\d{10}$/).or(z.literal("")).optional(),
  gender: z.enum(["male", "female", "other", "prefer_not_to_say"]).optional(),
  dateOfBirth: z.string().trim().optional(),
  language: z.string().trim().optional(),
  avatarUrl: z.string().trim().url().or(z.literal("")).optional(),
});
