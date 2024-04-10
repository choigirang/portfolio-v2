/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // cdn으로 svg 가져오는 경우 사용
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
      {
        protocol: "https",
        hostname: "choigirang-portfolio.s3.ap-northeast-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
