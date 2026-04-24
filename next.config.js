/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-jason-aballe', 
  assetPrefix: '/portfolio-jason-aballe',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig