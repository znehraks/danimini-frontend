/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "m.bhc.co.kr",
      },
    ],
  },
};

module.exports = nextConfig;
