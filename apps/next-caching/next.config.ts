import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // @ts-ignore
    turbo: false, // Disables Turbopack and forces Webpack
  },
};

export default nextConfig;
