/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.communitydragon.org",
        port: "",
        pathname: "/latest/**",
      },
    ],
  },
};

export default nextConfig;
