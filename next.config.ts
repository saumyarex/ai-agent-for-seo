import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.get-ryze.ai",
      },
    ],
  },
};

export default nextConfig;
