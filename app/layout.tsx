import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import './sections.css';
import { SiteFooter, SiteHeader } from './components/site-chrome';
import { isIndexable, siteUrl } from '../seo.config.mjs';

const manrope = Manrope({ subsets: ['latin'], weight: '800', variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: 'Delusionals',
  robots: { index: isIndexable, follow: true },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={manrope.variable}><body id="top">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    {children}
    <SiteFooter />
  </body></html>;
}
