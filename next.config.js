/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_CLIENT: process.env.GOOGLE_CLIENT,
  },
};

module.exports = nextConfig;
