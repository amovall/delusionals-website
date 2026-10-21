// Shared by Next.js, page metadata, and the sitemap.
export const siteUrl = new URL(process.env.SITE_URL || 'https://delusionals.app');
if (siteUrl.protocol !== 'https:' || siteUrl.pathname !== '/' || siteUrl.search || siteUrl.hash || siteUrl.username || siteUrl.password || siteUrl.port) {
  throw new Error('SITE_URL must be a public HTTPS origin, such as https://delusionals.app');
}

export const isIndexable = process.env.NODE_ENV === 'production'
  && process.env.SEO_INDEXABLE !== 'false'
  && (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === 'production');

export const sitePages = {
  '/': {
    title: 'A social network for big dreamers | Delusionals',
    description: 'Set personal goals, plan your next steps, and track your progress with Delusionals. Keep your dreams private or share the journey and cheer on friends.',
    index: true,
  },
  '/privacy': {
    title: 'Privacy Policy | Delusionals',
    description: 'Read the draft Delusionals Privacy Policy: personal data, sharing choices, and privacy rights in the mobile apps and on this website.',
    index: false,
  },
  '/cookies': {
    title: 'Cookie Policy | Delusionals',
    description: 'Read the draft Delusionals Cookie Policy: website cookies and browser storage, plus session and device technologies used by the mobile apps.',
    index: false,
  },
  '/terms': {
    title: 'Terms of Service | Delusionals',
    description: 'Read the draft Delusionals Terms of Service for mobile app accounts, shared content, privacy choices, and community responsibilities.',
    index: false,
  },
};
