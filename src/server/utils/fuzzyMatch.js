export function levenshtein(a, b) {
  const aLen = a.length;
  const bLen = b.length;
  if (aLen === 0) return bLen;
  if (bLen === 0) return aLen;

  const v0 = new Array(bLen + 1);
  const v1 = new Array(bLen + 1);

  for (let i = 0; i <= bLen; i++) v0[i] = i;

  for (let i = 0; i < aLen; i++) {
    v1[0] = i + 1;
    for (let j = 0; j < bLen; j++) {
      const cost = a[i] === b[j] ? 0 : 1;
      v1[j + 1] = Math.min(
        v1[j] + 1,
        v0[j + 1] + 1,
        v0[j] + cost
      );
    }
    for (let j = 0; j <= bLen; j++) v0[j] = v1[j];
  }
  return v0[bLen];
}

export function findBestMatch(query, candidates, maxDistance = 2) {
  const q = String(query).toLowerCase();
  let bestMatch = null;
  let minDistance = Infinity;

  for (const candidate of candidates) {
    const c = String(candidate).toLowerCase();
    
    if (c.includes(q)) {
      return candidate; // Prioritize substring match
    }

    const distance = levenshtein(q, c);
    if (distance < minDistance && distance <= maxDistance) {
      minDistance = distance;
      bestMatch = candidate;
    }
  }

  return bestMatch;
}

export function fuzzySearchProducts(query, products, limit = 6) {
  const q = String(query).toLowerCase();
  
  const scoredProducts = products.map(product => {
    let minDistance = Infinity;
    
    if (product.name) {
      const nameLower = String(product.name).toLowerCase();
      if (nameLower.includes(q)) {
        minDistance = -1;
      } else {
        const words = nameLower.split(/\s+/);
        minDistance = Math.min(
          minDistance,
          levenshtein(q, nameLower),
          ...words.map(w => levenshtein(q, w))
        );
      }
    }
    
    if (product.tags && Array.isArray(product.tags)) {
      for (const tag of product.tags) {
        const tagLower = String(tag).toLowerCase();
        if (tagLower.includes(q)) {
          minDistance = -1;
        } else {
          minDistance = Math.min(minDistance, levenshtein(q, tagLower));
        }
      }
    }
    
    return { product, distance: minDistance };
  });
  
  return scoredProducts
    .filter(p => p.distance <= 3) // Filter out very distant matches
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
    .map(p => p.product);
}
