import Link from 'next/link';
import { LegalNavigation } from './legal-navigation';

type LegalSection = { id: string; title: string; content: React.ReactNode };

export function LegalPage({ title, intro, sections }: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return <main id="main-content" className="legal-page page-width">
    <Link className="text-link legal-top-link" href="/">← Back to Delusionals</Link>
    <header className="legal-header"><h1>{title}</h1><p>{intro}</p><p className="legal-updated">Last updated: <time dateTime="2026-10-20">20 October 2026</time></p></header>
    <div className="legal-grid">
      <LegalNavigation sections={sections.map(({ id, title: sectionTitle }) => ({ id, title: sectionTitle }))} />
      <div className="legal-content">
        {sections.map(section => <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}><h2 id={`${section.id}-title`}>{section.title}</h2>{section.content}</section>)}
      </div>
    </div>
  </main>;
}
