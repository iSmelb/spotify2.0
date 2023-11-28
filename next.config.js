/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp', ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'is1-ssl.mzstatic.com',
        port: '',
        pathname: '/image/thumb/**',
      },
      {
        protocol: 'https',
        hostname: 'is2-ssl.mzstatic.com',
        port: '',
        pathname: '/image/thumb/**',
      },
      {
        protocol: 'https',
        hostname: 'is3-ssl.mzstatic.com',
        port: '',
        pathname: '/image/thumb/**',
      },
      {
        protocol: 'https',
        hostname: 'is4-ssl.mzstatic.com',
        port: '',
        pathname: '/image/thumb/**',
      },
      {
        protocol: 'https',
        hostname: 'is5-ssl.mzstatic.com',
        port: '',
        pathname: '/image/thumb/**',
      },
      {
        protocol: 'https',
        hostname: 'is6-ssl.mzstatic.com',
        port: '',
        pathname: '/image/thumb/**',
      },
      {
        protocol: 'https',
        hostname: 'is7-ssl.mzstatic.com',
        port: '',
        pathname: '/image/thumb/**',
      },
      {
        protocol: 'https',
        hostname: 'is8-ssl.mzstatic.com',
        port: '',
        pathname: '/image/thumb/**',
      },
    ],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig