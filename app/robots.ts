import type { MetadataRoute } from 'next';
import { isIndexable, siteUrl } from '../seo.config.mjs';

export default function robots(): MetadataRoute.Robots {
  // Allow crawling so crawlers can read noindex on previews and legal drafts.
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(isIndexable ? { sitemap: new URL('/sitemap.xml', siteUrl).href } : {}),
  };
}
