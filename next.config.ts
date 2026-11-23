import type { NextConfig } from "next";

const longCache = [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" }];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75, 85],
    deviceSizes: [640, 828, 1080, 1280, 1600],
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      { source: "/images/:path*", headers: longCache },
      { source: "/video/:path*", headers: longCache },
    ];
  },
};

export default nextConfig;
