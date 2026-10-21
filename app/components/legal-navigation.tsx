'use client';

export function LegalNavigation({ sections }: { sections: { id: string; title: string }[] }) {
  const links = sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>);
  return <>
    <nav className="legal-toc" aria-label="Page sections">{links}</nav>
    <details className="legal-menu">
      <summary>Browse sections <span aria-hidden="true">↓</span></summary>
      <nav aria-label="Page sections" onClick={event => {
        if ((event.target as Element).closest('a')) event.currentTarget.closest('details')?.removeAttribute('open');
      }}>{links}</nav>
    </details>
  </>;
}
