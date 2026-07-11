import User from "@/server/models/User";
import { notFound } from "@/server/utils/apiError";
import { serializeUser } from "@/server/controllers/auth.controller";

/** Fields a user is allowed to change about themselves (never role/status). */
const EDITABLE = [
  "fullName",
  "phone",
  "gender",
  "dateOfBirth",
  "language",
  "avatarUrl",
];

export async function updateProfile(userId, data) {
  const update = {};
  for (const key of EDITABLE) {
    if (data[key] !== undefined) update[key] = data[key];
  }

  const user = await User.findByIdAndUpdate(userId, { $set: update }, { new: true }).lean();
  if (!user) throw notFound("User not found.");
  return serializeUser(user);
}

export async function updatePreferences(userId, preferences) {
  const user = await User.findByIdAndUpdate(
    userId,
    { $set: { preferences } },
    { new: true }
  ).lean();
  if (!user) throw notFound("User not found.");
  return serializeUser(user);
}

export async function updateNotifications(userId, notifications) {
  const user = await User.findByIdAndUpdate(
    userId,
    { $set: { notifications } },
    { new: true }
  ).lean();
  if (!user) throw notFound("User not found.");
  return serializeUser(user);
}
