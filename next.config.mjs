/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 외부 이미지 도메인이 생기면 여기서 추가합니다.
    remotePatterns: []
  }
};

export default nextConfig;

