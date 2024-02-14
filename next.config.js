/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "daisyui.com",
      },
    ],
    domains: ['i.ibb.co', 'lh3.googleusercontent.com'], 
  },
};

module.exports = nextConfig;
