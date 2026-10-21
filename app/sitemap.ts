import type { MetadataRoute } from 'next';
import { isIndexable, sitePages, siteUrl } from '../seo.config.mjs';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];
  return Object.entries(sitePages)
    .filter(([, page]) => page.index)
    .map(([path]) => ({ url: new URL(path, siteUrl).href }));
}
