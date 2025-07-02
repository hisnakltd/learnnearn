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
  optimizeFonts: false,
  // Remove static export for proper deployment
  trailingSlash: true,
};

module.exports = nextConfig;