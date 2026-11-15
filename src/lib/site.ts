// ===== DEMO GATE — Coming Soon =====
// All pages are live now (FAQ unlocked in Round 10). Every value is false.
// The gate stays as the mechanism: to hide a page again, set it to true
// here (one small change per page). Real page content is fully preserved
// in the page components — the gate never deletes data.
export const COMING_SOON = {
  stall: false,
  story: false,
  'find-us': false,
  faq: false,
} as const;

export type ComingSoonKey = keyof typeof COMING_SOON;

// ===== ORDERS + FESTIVAL ENQUIRIES — WhatsApp =====
// Orders and festival enquiries are sent through the website as a
// WhatsApp message to the stall. TEST NUMBER ONLY: +92 371 0997900
// (wa.me format "923710997900") — the client has NOT given her official
// WhatsApp number yet. TODO: replace this with the client's official
// WhatsApp number (international format, digits only, no "+") as soon
// as she provides it. The "Copy details" button stays as a secondary
// option alongside the WhatsApp send.
export const WHATSAPP_NUMBER = '923710997900';

// The three real pickup areas (client-given). No new locations invented.
export const PICKUP_LOCATIONS = ['High Road, Ilford', 'High Road, Walthamstow', 'Barking Market'] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/menu', label: 'Menu', key: 'menu' },
  { href: '/stall', label: 'From the Stall', key: 'stall' },
  { href: '/our-story', label: 'Our Story', key: 'story' },
  { href: '/find-us', label: 'Find Us', key: 'find-us' },
  { href: '/faq', label: 'FAQ', key: 'faq' },
] as const;
