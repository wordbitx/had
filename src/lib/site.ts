// ===== DEMO GATE — Coming Soon =====
// Home and Menu are live. The pages below show Coming Soon for the client demo.
// Their real content is fully preserved in the page components — to restore a
// page to full content, set its value to false here (one small change per page).
export const COMING_SOON = {
  stall: false,
  story: false,
  'find-us': true,
  faq: true,
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
