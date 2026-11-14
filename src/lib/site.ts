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

export const NAV_LINKS = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/menu', label: 'Menu', key: 'menu' },
  { href: '/stall', label: 'From the Stall', key: 'stall' },
  { href: '/our-story', label: 'Our Story', key: 'story' },
  { href: '/find-us', label: 'Find Us', key: 'find-us' },
  { href: '/faq', label: 'FAQ', key: 'faq' },
] as const;
