/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  env: {
    HOST: process.env.HOST,
    PORT: process.env.PORT,
  }
};

export default nextConfig;
