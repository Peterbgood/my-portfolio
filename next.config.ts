import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // We removed the // below to activate the path
  basePath: '/my-portfolio', 
};

export default nextConfig;