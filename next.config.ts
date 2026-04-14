import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid long-lived optimized-image cache when replacing files under /public with the same name.
  images: {
    minimumCacheTTL: 0,
    qualities: [75, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 2560, 3840],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 512, 768, 1024, 1536, 2048],
  },
};

export default nextConfig;
