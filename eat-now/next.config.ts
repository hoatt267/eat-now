import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmi44nnVowhm8QQXWBZEiNcmpWKR9FmetTsA&s
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
