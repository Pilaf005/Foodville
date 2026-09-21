export const META_PIXEL_ID =
  process.env.META_PIXEL_ID ||
  process.env.NEXT_PUBLIC_META_PIXEL_ID ||
  "1820318982485910";

export const FB_PIXEL_ID = META_PIXEL_ID;

/**
 * Triggers a PageView event in Meta Pixel.
 */
export const pageview = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }
};

/**
 * Tracks standard Meta Pixel events (e.g., 'ViewContent', 'AddToCart', 'InitiateCheckout', 'Purchase').
 * @param {string} name - The event name
 * @param {object} [options={}] - Event parameters (currency, value, content_name, etc.)
 */
export const trackEvent = (name, options = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", name, options);
  }
};

/**
 * Tracks custom Meta Pixel events.
 * @param {string} name - The custom event name
 * @param {object} [options={}] - Custom parameters
 */
export const trackCustomEvent = (name, options = {}) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("trackCustom", name, options);
  }
};
