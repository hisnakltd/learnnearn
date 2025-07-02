/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['i.imgur.com']
  },
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;