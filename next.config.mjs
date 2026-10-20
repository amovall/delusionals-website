import path from 'node:path';

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: { root: path.resolve() },
};

export default nextConfig;
