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
  // Enable static export for cPanel deployment
  output: 'export',
  trailingSlash: true,
  // Disable features that don't work with static export
  swcMinify: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Disable server-side features for static export
  distDir: 'out',
};

module.exports = nextConfig;