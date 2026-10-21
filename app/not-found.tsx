import Link from 'next/link';
import { ArrowUpRight } from './components/arrow-up-right';

export const metadata = {
  title: 'Page not found | Delusionals',
  description: 'This page could not be found. Head back to Delusionals to explore personal goals, real steps, and shared journeys.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <main id="main-content" className="not-found page-width">
    <p className="eyebrow">404</p>
    <h1>Looks like<br />a wrong turn.</h1>
    <p>This page couldn’t be found. Your next story is still waiting.</p>
    <Link className="text-link" href="/">Back to Delusionals <span aria-hidden="true"><ArrowUpRight /></span></Link>
  </main>;
}
