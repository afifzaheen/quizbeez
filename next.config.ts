import path from 'path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, 
  },

  // Extend Webpack config
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@component': path.resolve(__dirname, 'src/components'), // adjust if needed
    };

    return config;
  },
};

export default nextConfig;
