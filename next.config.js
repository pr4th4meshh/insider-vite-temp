/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    domains: ['prod-ripcut-delivery.disney-plus.net'],
  },
}

module.exports = nextConfig;