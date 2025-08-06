import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com', 'picsum.photos'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
