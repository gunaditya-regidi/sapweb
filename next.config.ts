import type { NextConfig } from "next";
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  compress: true,
  poweredByHeader: false,
  images: {
    domains: ['*'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  webpack: (config, { isServer }) => {
    // Enable tree shaking
    config.optimization.usedExports = true;

    // Enable code splitting
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 25,
      minSize: 20000,
      cacheGroups: {
        default: false,
        vendors: false,
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          reuseExistingChunk: true,
        },
        lib: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          name: 'vendor',
          priority: 1,
          minChunks: 1,
          reuseExistingChunk: true,
        },
      },
    };

    return config;
  },
};

export default bundleAnalyzer(nextConfig);
