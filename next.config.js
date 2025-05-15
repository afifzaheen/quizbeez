/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["placeholder.svg"],
    unoptimized: true,
  },
  // Explicitly tell Next.js to use only the App Router
  // and ignore the Pages Router
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
