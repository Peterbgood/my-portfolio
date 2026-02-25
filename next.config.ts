import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Required for GitHub Pages static export
  images: {
    unoptimized: true, // Required because GitHub Pages doesn't have a built-in image server
  },
  // If your site is at Peterbgood.github.io/my-portfolio/, 
  // you MUST uncomment the line below and set it to your repo name:
  // basePath: '/my-portfolio', 
};

export default nextConfig;