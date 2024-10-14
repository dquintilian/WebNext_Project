// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'query', key: 'path' }],
        destination: '/:path*/',
        permanent: true,
      },
    ];
  },
  trailingSlash: true, // Ensure trailing slash on all routes
};

module.exports = nextConfig;