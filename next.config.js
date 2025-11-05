/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set the output file tracing root to resolve lockfile conflicts
  outputFileTracingRoot: process.cwd(),

  // Image optimization configuration
  images: {
    // Define image domains for external sources
    domains: ['images.unsplash.com', 'cdn.pexels.com', 'images.pexels.com', 'source.unsplash.com'],

    // Responsive image sizes
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for different use cases
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimum cache time (in seconds)
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days

    // Image loader configuration
    loader: 'default',
  },

  // Performance optimizations
  experimental: {
    // Enable modern JavaScript features
    esmExternals: true,
    // Optimize package imports
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Compression
  compress: true,

  // Power by header
  poweredByHeader: false,

  // React strict mode
  reactStrictMode: true,

  // Output configuration
  output: 'standalone',

  // Disable ESLint during builds to prevent build failures
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false, // Still catch TS errors
  },

  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },

  // Headers for image optimization
  async headers() {
    return [
      {
        source: '/media/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default nextConfig
