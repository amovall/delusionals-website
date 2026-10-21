import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from './arrow-up-right';
import { MobileNavigation } from './mobile-navigation';
import { appCallToAction } from '../site-config';

function Brand() {
  return <Link className="brand" href="/" aria-label="Delusionals home">
    <Image src="/images/brand/logo.png" alt="" width={34} height={34} />
    <span>Delusionals</span>
  </Link>;
}

export function SiteHeader() {
  return <header className="site-header">
    <div className="site-header-inner page-width">
      <Brand />
      <nav className="desktop-navigation" aria-label="Main navigation">
        <Link href="/#how-it-works">How it works</Link>
        <Link href="/#community">Community</Link>
        <Link href="/#faq">FAQ</Link>
      </nav>
      <Link className="header-cta" href="/#download">{appCallToAction} <span aria-hidden="true"><ArrowUpRight /></span></Link>
      <MobileNavigation />
    </div>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-main page-width">
      <div><Brand /><p>Shoot your shot.</p></div>
      <nav aria-label="Footer navigation">
        <Link href="/#how-it-works">How it works</Link>
        <Link href="/#community">Community</Link>
        <Link href="/#faq">FAQ</Link>
        <Link href="/#download">{appCallToAction}</Link>
      </nav>
    </div>
    <div className="footer-bottom page-width">
      <div className="footer-credit"><small>© {new Date().getFullYear()} Delusionals</small><small>Developed by Amver Studio</small></div>
      <nav aria-label="Legal navigation">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/cookies">Cookies</Link>
        <Link href="/terms">Terms</Link>
      </nav>
      <a className="back-top" href="#top">Back to top <span aria-hidden="true">↑</span></a>
    </div>
  </footer>;
}
