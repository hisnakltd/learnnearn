/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['i.imgur.com']
  },
  optimizeFonts: false,
  trailingSlash: true,
  distDir: 'out',
  experimental: {
    esmExternals: false,
  },
};

module.exports = nextConfig;