import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ['res.cloudinary.com', 'picsum.photos', 'assets.anantara.com', 'images.unsplash.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
