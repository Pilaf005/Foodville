import { ok, withRoute } from "@/server/utils/apiResponse";
import { badRequest } from "@/server/utils/apiError";
import FranchiseApplication from "@/server/models/FranchiseApplication";
import Sequence from "@/server/models/Sequence";
import { sendFranchiseApplicationNotification } from "@/server/services/email.service";

export const runtime = "nodejs";

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
    fullName,
    email,
    phone,
    city,
    state,
    pincode,
    investmentBudget,
    propertyStatus,
    experience,
    companyName,
    companyGstin,
    notes
  } = body;

  if (!fullName || !email || !phone || !city || !state || !pincode || !investmentBudget) {
    throw badRequest("Please fill in all required fields (Name, Email, Phone, City, State, Pincode, Budget).");
  }

  const nextVal = await getNextSequence("franchise_application");
  const applicationId = `FA${100000 + nextVal}`;

  const doc = await FranchiseApplication.create({
    applicationId,
    fullName,
    email,
    phone,
    city,
    state,
    pincode,
    investmentBudget,
    propertyStatus,
    experience: experience || "",
    companyName: companyName || "",
    companyGstin: companyGstin || "",
    notes: notes || "",
    status: "pending",
  });
 
  // Trigger email notification in background
  sendFranchiseApplicationNotification(doc).catch(() => {});
 
  return ok({
    success: true,
    applicationId: doc.applicationId,
    message: "Franchise partner application submitted successfully! Our expansion director will contact you within 24 hours.",
  });
});
