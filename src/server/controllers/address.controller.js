import Address from "@/server/models/Address";
import { notFound } from "@/server/utils/apiError";

const serialize = (a) => ({
  id: String(a._id),
  label: a.label,
  receiverName: a.receiverName,
  phone: a.phone,
  pincode: a.pincode,
  houseFlat: a.houseFlat,
  area: a.area,
  landmark: a.landmark,
  city: a.city,
  state: a.state,
  isDefault: !!a.isDefault,
});

export async function listAddresses(userId) {
  const docs = await Address.find({ user: userId }).sort({ isDefault: -1, updatedAt: -1 }).lean();
  return docs.map(serialize);
}

/** Only one address can be the default — clear the others when one is set. */
async function unsetOtherDefaults(userId, exceptId) {
  await Address.updateMany(
    { user: userId, ...(exceptId ? { _id: { $ne: exceptId } } : {}) },
    { $set: { isDefault: false } }
  );
}

export async function createAddress(userId, data) {
  const isFirst = (await Address.countDocuments({ user: userId })) === 0;
  const doc = await Address.create({ ...data, user: userId, isDefault: data.isDefault || isFirst });
  if (doc.isDefault) await unsetOtherDefaults(userId, doc._id);
  return serialize(doc.toObject());
}

export async function updateAddress(userId, id, data) {
  const doc = await Address.findOneAndUpdate({ _id: id, user: userId }, { $set: data }, { new: true });
  if (!doc) throw notFound("Address not found.");
  if (doc.isDefault) await unsetOtherDefaults(userId, doc._id);
  return serialize(doc.toObject());
}

export async function deleteAddress(userId, id) {
  const doc = await Address.findOneAndDelete({ _id: id, user: userId });
  if (!doc) throw notFound("Address not found.");

  // If we removed the default, promote the next most recent one.
  if (doc.isDefault) {
    const next = await Address.findOne({ user: userId }).sort({ updatedAt: -1 });
    if (next) {
      next.isDefault = true;
      await next.save();
    }
  }
  return { deleted: true, id };
}
