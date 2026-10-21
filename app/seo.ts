import type { Metadata } from 'next';
import { isIndexable, sitePages, siteUrl } from '../seo.config.mjs';

export function pageMetadata(path: keyof typeof sitePages): Metadata {
  const page = sitePages[path];
  const url = new URL(path, siteUrl).href;
  const image = {
    url: new URL('/opengraph-image', siteUrl).href,
    width: 1200,
    height: 630,
    alt: 'Delusionals. What if it actually happens? Turn big dreams into real steps.',
  };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    robots: { index: isIndexable && page.index, follow: true, 'max-image-preview': 'large' },
    openGraph: {
      type: 'website', siteName: 'Delusionals', locale: 'en_US',
      url, title: page.title, description: page.description, images: [image],
    },
    twitter: {
      card: 'summary_large_image', title: page.title, description: page.description,
      images: [image],
    },
  };
}
