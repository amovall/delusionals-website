import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], weight: '800', variable: '--font-manrope', display: 'swap' });

export const metadata: Metadata = {
  title: 'Delusionals | What if it actually happens?',
  description: 'A place for your most unlikely ideas, real-life attempts and unexpected wins.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={manrope.variable}><body>{children}</body></html>;
}
