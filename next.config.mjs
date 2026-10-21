import path from 'node:path';
import { isIndexable, siteUrl } from './seo.config.mjs';

const hostnamePattern = siteUrl.hostname.replaceAll('.', '\\.');

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/avif', 'image/webp'],
  },
  turbopack: { root: path.resolve() },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: `www\\.${hostnamePattern}` }],
        destination: `${siteUrl.origin}/:path*`, permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: hostnamePattern }, { type: 'header', key: 'x-forwarded-proto', value: 'http' }],
        destination: `${siteUrl.origin}/:path*`, permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          ...(!isIndexable ? [{ key: 'X-Robots-Tag', value: 'noindex, follow' }] : []),
        ],
      },
      // Protect any alternate deployment hostname, even with a production build.
      {
        source: '/:path*',
        has: [{ type: 'host', value: `(?<previewHost>(?!${hostnamePattern}$).+)` }],
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
    ];
  },
};

export default nextConfig;
