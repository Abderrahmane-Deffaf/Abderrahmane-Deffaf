import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
