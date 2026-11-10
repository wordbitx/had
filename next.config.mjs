/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `next build` produces a deployable `out/` directory.
  output: 'export',
  images: {
    // Serve the original image files exactly as they are — no recompression,
    // no resizing, quality 100. (Also required for static export.)
    unoptimized: true,
  },
};

export default nextConfig;
