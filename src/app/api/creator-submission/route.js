import { ok, withRoute } from "@/server/utils/apiResponse";
import { badRequest } from "@/server/utils/apiError";
import CreatorSubmission from "@/server/models/CreatorSubmission";
import Sequence from "@/server/models/Sequence";
import {
  sendCreatorSubmissionAdminNotification,
  sendCreatorSubmissionConfirmation,
} from "@/server/services/email.service";

export const runtime = "nodejs";

const PHONE_REGEX = /^[6-9]\d{9}$/;
const PINCODE_REGEX = /^[1-9]\d{5}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

async function getNextSequence(name) {
  const seq = await Sequence.findOneAndUpdate(
    { name },
    { $inc: { val: 1 } },
    { new: true, upsert: true }
  );
  return seq.val;
}

export const POST = withRoute(async (req) => {
  const body = await req.json();
  const {
    creatorName,
    socialHandle,
    email,
    phone,
    reelUrl,
    street,
    city,
    state,
    pincode,
    recipeNotes,
    website,     // Honeypot field 1
    b_confirm,   // Honeypot field 2
  } = body;

  // 1. Anti-Bot Honeypot Trap
  if (website || b_confirm) {
    console.warn("[Anti-Bot Shield] Creator submission rejected via Honeypot trap.");
    return ok({
      success: true,
      message: "Submission received successfully.",
      data: { submissionId: "CREATOR-2026-BOT" },
    });
  }

  // 2. Mandatory Fields Check
  if (!creatorName || !email || !phone || !reelUrl || !street || !city || !state || !pincode) {
    throw badRequest(
      "Please fill in all required fields (Name, Email, Phone, Reel URL, Street Address, City, State, PIN code)."
    );
  }

  // 3. Strict Phone & Pincode Validation
  const rawPhone = String(phone).trim();
  if (!PHONE_REGEX.test(rawPhone)) {
    throw badRequest("Please enter a valid 10-digit Indian mobile number starting with 6, 7, 8, or 9.");
  }

  const rawPincode = String(pincode).trim();
  if (!PINCODE_REGEX.test(rawPincode)) {
    throw badRequest("Please enter a valid 6-digit Indian delivery PIN code.");
  }

  const cleanEmail = String(email).trim().toLowerCase();
  if (!EMAIL_REGEX.test(cleanEmail)) {
    throw badRequest("Please enter a valid email address.");
  }

  // 4. Basic URL check
  const cleanReelUrl = String(reelUrl).trim();
  if (!cleanReelUrl.startsWith("http://") && !cleanReelUrl.startsWith("https://")) {
    throw badRequest("Please enter a valid link starting with https:// or http://");
  }

  // 5. Generate Sequential ID
  const seqNum = await getNextSequence("creatorSubmission");
  const year = new Date().getFullYear();
  const submissionId = `CREATOR-${year}-${String(seqNum).padStart(4, "0")}`;

  // 6. Save to Database
  const submission = await CreatorSubmission.create({
    submissionId,
    creatorName: String(creatorName).trim(),
    socialHandle: socialHandle ? String(socialHandle).trim() : "",
    email: cleanEmail,
    phone: rawPhone,
    reelUrl: cleanReelUrl,
    shippingAddress: {
      street: String(street).trim(),
      city: String(city).trim(),
      state: String(state).trim(),
      pincode: rawPincode,
    },
    recipeNotes: recipeNotes ? String(recipeNotes).trim() : "",
    status: "pending",
  });

  // 7. Fire Async Dual-Email Notifications
  Promise.allSettled([
    sendCreatorSubmissionAdminNotification(submission),
    sendCreatorSubmissionConfirmation(submission),
  ]).catch((err) => {
    console.error("[Email Notification Error in Creator Route]:", err);
  });

  return ok({
    submissionId: submission.submissionId,
    creatorName: submission.creatorName,
    email: submission.email,
  });
});
