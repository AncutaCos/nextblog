/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'scontent.ffco2-1.fna.fbcdn.net',
      'episcopia-italiei.it',
      'theofania.ro'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maps.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'episcopia-italiei.it',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'theofania.ro',
        pathname: '/**'
      }
    ],
  },
};

module.exports = nextConfig;
