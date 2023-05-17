/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

const path = require('path');
module.exports = {
  // experimental: { appDir: true },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  webpack: (config) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    config.resolve.fallback = { fs: false };



    return config;
  },
  // experiments: {
  //   topLevelAwait: true
  // },
  images: {
    // deviceSizes: [480, 720, 1024, 1300, 1440, 1920, 2048],
    // imageSizes: [16, 16, 32, 32, 48, 48, 64],
    deviceSizes: [480, 720, 1024, 1300, 1440, 1920, 2048],
    imageSizes: [32, 32, 32, 32, 48, 48, 64],
    loader: 'default',
    domains: [
      'cdn.sanity.io',
      'magento2.tabby.dev',
      'a.lmcdn.ru',
      'storage.googleapis.com',
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
};
