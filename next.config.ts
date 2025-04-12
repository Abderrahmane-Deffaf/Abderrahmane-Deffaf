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
        hostname: "gagyojnsnhrvpbgkrfvo.supabase.co",
        port: "",
      },
    ],
  },
};
export default nextConfig;
