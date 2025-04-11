import type { NextConfig } from "next";

// Merge MDX config with Next.js config
const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lby26j4sei80figx.public.blob.vercel-storage.com",
        port: "",
      },
    ],
  },
};
export default nextConfig;
