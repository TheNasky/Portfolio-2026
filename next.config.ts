import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid long-lived optimized-image cache when replacing files under /public with the same name.
  images: {
    minimumCacheTTL: 0,
  },
};

export default nextConfig;
