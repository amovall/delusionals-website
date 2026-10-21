'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ArrowUpRight } from './arrow-up-right';
import { appCallToAction } from '../site-config';

export function MobileNavigation() {
  const disclosure = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !disclosure.current?.contains(event.target)) {
        disclosure.current?.removeAttribute('open');
      }
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, []);

  return <details className="mobile-navigation" ref={disclosure} onKeyDown={event => {
    if (event.key === 'Escape') {
      disclosure.current?.removeAttribute('open');
      disclosure.current?.querySelector('summary')?.focus();
    }
  }}>
    <summary aria-label="Menu"><span className="menu-icon" aria-hidden="true" /></summary>
    <nav aria-label="Mobile navigation" onClick={event => {
      if ((event.target as Element).closest('a')) disclosure.current?.removeAttribute('open');
    }}>
      <Link href="/#how-it-works">How it works</Link>
      <Link href="/#community">Community</Link>
      <Link href="/#faq">FAQ</Link>
      <Link className="mobile-download-link" href="/#download">{appCallToAction} <ArrowUpRight /></Link>
    </nav>
  </details>;
}
