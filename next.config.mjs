/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'res.cloudinary.com'],
  },
  output: 'standalone',
};

export default nextConfig;
