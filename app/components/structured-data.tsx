import { sitePages, siteUrl } from '../../seo.config.mjs';

export function StructuredData() {
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite', '@id': new URL('/#website', siteUrl).href,
        name: 'Delusionals', url: siteUrl.href, inLanguage: 'en',
        description: sitePages['/'].description,
        about: { '@id': new URL('/#app', siteUrl).href },
      },
      {
        '@type': 'MobileApplication', '@id': new URL('/#app', siteUrl).href,
        name: 'Delusionals', url: siteUrl.href,
        description: sitePages['/'].description,
        operatingSystem: 'iOS, Android', applicationCategory: 'LifestyleApplication',
        image: new URL('/opengraph-image', siteUrl).href,
        featureList: ['Personal goals and steps', 'Private progress tracking', 'Optional sharing', 'Community encouragement'],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />;
}
