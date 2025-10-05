import { withPayload } from '@payloadcms/next/withPayload'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
    ],
    qualities: [25, 50, 75, 90, 100],
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Don't fail build on linting warnings
  },
  typescript: {
    ignoreBuildErrors: false, // Still check TypeScript errors
  },
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['lucide-react', '@payloadcms/ui'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  webpack: (webpackConfig, { dev }) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    // Speed up development builds
    if (dev) {
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        moduleIds: 'named',
      }
    }

    return webpackConfig
  },
  // Suppress lockfile warnings
  outputFileTracingRoot: __dirname,
}

export default withPayload(nextConfig)
