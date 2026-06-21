import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.62.18'],
  async redirects() {
    return [
      { source: '/fashion', destination: '/', permanent: true },
    ]
  },
};

export default nextConfig;