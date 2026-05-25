import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['scontent-den2-1.cdninstagram.com', 'upload.wikimedia.org', 'static.wikia.nocookie.net', 'upload.wikimedia.org'],
  },
};

module.exports = nextConfig
