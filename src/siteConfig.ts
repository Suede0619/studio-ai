// Single place to manage booking links. Drop the real Calendly URL here when ready;
// until then every "Book a free call" button gracefully falls back to email.

export const BOOKING_EMAIL = "hi@nrvana.com";

// Paste your Calendly link here, e.g. "https://calendly.com/nrvana/studio-intro"
export const CALENDLY_URL = "";

// Free 30-minute intro call. Falls back to a pre-filled email if Calendly isn't set yet.
export const CALL_HREF =
  CALENDLY_URL || `mailto:${BOOKING_EMAIL}?subject=Free%2030-minute%20intro%20call`;

// Paid Snapshot booking. Wire Stripe/Calendly later; email fallback for now.
export const SNAPSHOT_HREF = `mailto:${BOOKING_EMAIL}?subject=Book%20the%20Snapshot`;
