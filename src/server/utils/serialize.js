/**
 * Serializers: convert lean Mongoose documents into the exact client shape the
 * finalized UI expects. We query with `.lean()` for speed (no hydration), so
 * virtuals don't run — these helpers re-add `id` and strip internal fields.
 */

const stripInternal = ({ _id, __v, isActive, createdAt, updatedAt, ...rest }) => rest;

export function serializeProduct(doc) {
  if (!doc) return null;
  const { numericId, ...rest } = stripInternal(doc);
  const out = { id: numericId, ...rest };
  // comboIncludes is only meaningful for combos; drop when empty/undefined.
  if (!out.comboIncludes || out.comboIncludes.length === 0) delete out.comboIncludes;
  // Reviews are public — never expose the reviewer's internal user id.
  if (Array.isArray(out.reviews)) {
    out.reviews = out.reviews.map(({ userId, ...review }) => review);
  }
  return out;
}

export const serializeProducts = (docs = []) => docs.map(serializeProduct);

export function serializeCategory(doc) {
  if (!doc) return null;
  const { slug, name, image, bgColor, order } = doc;
  return { id: slug, name, ...(image ? { image } : {}), ...(bgColor ? { bgColor } : {}), ...(order != null ? { order } : {}) };
}

export const serializeCategories = (docs = []) => docs.map(serializeCategory);

export function serializeBlog(doc) {
  if (!doc) return null;
  const { numericId, ...rest } = stripInternal(doc);
  return { id: numericId, ...rest };
}

export const serializeBlogs = (docs = []) => docs.map(serializeBlog);
