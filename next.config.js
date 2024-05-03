/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
