/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { hostname: 'www.google.com' },
    ],
  },
  compress: true,
}

module.exports = nextConfig
