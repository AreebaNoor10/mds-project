/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // Ensure proper handling of client components
  compiler: {
    styledComponents: true,
  },
  // Configure static page generation
  output: 'standalone',
};

export default nextConfig;
