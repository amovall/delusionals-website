import path from 'node:path';

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  turbopack: { root: path.resolve() },
};

export default nextConfig;
