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
// WhatsApp message to the stall. OFFICIAL NUMBER: +44 7405 438785
// (wa.me format "447405438785") — the client's official UK number,
// confirmed 19 Nov 2026. The old test number is withdrawn and
// must not be used anywhere. The "Copy details" button stays as a
// secondary option alongside the WhatsApp send.
export const WHATSAPP_NUMBER = '447405438785';

// ===== COMPANY RECORD — Companies House (GOV.UK) =====
// Verified 20 Nov 2026: HALAL CORN DOG LTD, Co. No. 16572901,
// incorporated 10 July 2025. The sister confirmed (20 Nov 22:29)
// the About page may link this GOV.UK record, but must carry NO
// personal name.
export const COMPANIES_HOUSE_URL =
  'https://find-and-update.company-information.service.gov.uk/company/16572901';
// Verified 18 Nov 2026 via the FSA page + FSA API:
// https://ratings.food.gov.uk/business/1966853/halal-corn-dog
// Business: Halal Corn Dog, Mobile caterer, Redbridge, postcode IG1,
// Rating 5 (Very Good), inspected 6 July 2026, all three standards Good.
// The badge asset is the official FSA online-rating SVG (style 1),
// downloaded from ratings.food.gov.uk/embed/badges/fhrs/1/fhrs-badge-5.svg.
export const FSA_RATING_URL = 'https://ratings.food.gov.uk/business/1966853/halal-corn-dog';

// ===== SITE — live domain + contact =====
// The client bought halalcorndog.co.uk on Spaceship (20 Nov 2026);
// it is the primary domain now. halalcorndog.com (bought 19 Nov 2026)
// is still owned by WordbitX — keep it as a redirect to .co.uk so
// old links do not break.
export const SITE_URL = 'https://halalcorndog.co.uk';
export const SITE_DOMAIN = 'halalcorndog.co.uk';
export const EMAIL_INFO = 'info@halalcorndog.co.uk';
export const EMAIL_QUERY = 'query@halalcorndog.co.uk';

// ===== CONTACT PHONE — display number for the footer =====
// User-given 19 Nov 2026: +44 7405 438785. Display contact number.
// This is the same number as WHATSAPP_NUMBER above (the official
// number for orders + festival enquiries on WhatsApp).
export const PHONE_DISPLAY = '+44 7405 438785';
export const PHONE_TEL = '+447405438785';

// The three real pickup areas (client-given). No new locations invented.
export const PICKUP_LOCATIONS = ['High Road, Ilford', 'High Road, Walthamstow', 'Barking Market'] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/menu', label: 'Menu', key: 'menu' },
  { href: '/stall', label: 'From the Stall', key: 'stall' },
  { href: '/our-story', label: 'Our Story', key: 'story' },
  { href: '/about', label: 'About', key: 'about' },
  { href: '/festivals', label: 'Festivals', key: 'festivals' },
  { href: '/find-us', label: 'Find Us', key: 'find-us' },
  { href: '/food-hygiene', label: 'Food Hygiene', key: 'food-hygiene' },
  { href: '/faq', label: 'FAQ', key: 'faq' },
] as const;
