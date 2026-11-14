// Public image paths. The files are the originals, served unoptimized
// (see next.config.mjs) so the pixels are exactly as supplied.
// The binaries live in public/images/ after scripts/decode-images.mjs
// runs (prebuild/predev); the committed sources are the *.b64 files.
export const IMG = {
  logo: '/images/logo.png',
  fourVarieties: '/images/four-varieties.webp',
  foodHero: '/images/food-hero.webp',
  flatlay: '/images/flatlay.webp',
  traysVarieties: '/images/trays-varieties-v2.webp',
  chickenCornSoup: '/images/chicken-corn-soup.webp',
  mapLondon: '/images/london-map-compact.webp',
  duo: '/images/duo.webp',
  cheesePull: '/images/cheese-pull.webp',
  crispyRice: '/images/crispy-rice.webp',
  potato: '/images/potato.webp',
  menuMozzarella: '/images/menu-mozzarella.webp',
  menuSauces: '/images/menu-sauces.webp',
  menuTrayFries: '/images/menu-tray-fries.webp',
  menuRamen: '/images/menu-ramen.webp',
  menuPizzaStyle: '/images/menu-pizza-style.webp',
  drinksSoft: '/images/drinks-soft.webp',
} as const;

export type ImageKey = keyof typeof IMG;
