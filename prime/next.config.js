/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Add this for static site generation
  images: {
    unoptimized: true  // Required for static export
  }
};

module.exports = nextConfig; 