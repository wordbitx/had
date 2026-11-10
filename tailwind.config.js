/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  // Preflight is off: the ported stylesheet carries the design and was
  // written against browser defaults.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        brand: '#004925',
        brandDeep: '#003a1e',
        navy: '#002e18',
        sun: '#ffd303',
        sunSoft: '#ffdd3d',
        tang: '#ff9e00',
      },
    },
  },
  plugins: [],
};
