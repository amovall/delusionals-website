import Image from 'next/image';

import { StoreBadges } from './components/store-badges';
import { LandingSections } from './components/landing-sections';
import { StructuredData } from './components/structured-data';
import { pageMetadata } from './seo';

export const metadata = pageMetadata('/');

const people = ['/images/avatars/community/canal-sunset.png', '/images/avatars/community/city-entrance.png', '/images/avatars/community/indoor-knitwear.png', '/images/avatars/community/sunny-street.png', '/images/avatars/community/tree-lined-street.png'];

function Note({ image, name, children, className }: { image: string; name: string; children: React.ReactNode; className: string }) {
  return <aside className={`note ${className}`}><Image src={image} alt="" width={70} height={70} sizes="35px" /><div className="note-copy"><b>{name}</b><p>{children}</p></div></aside>;
}

export default function Home() {
  return <main id="main-content"><StructuredData /><section className="hero" aria-label="Introducing Delusionals">
    <div className="mountains" aria-hidden="true"><Image src="/images/backgrounds/snowy-mountains.webp" alt="" fill sizes="100vw" loading="eager" fetchPriority="high" /></div><Image className="ribbon" src="/images/backgrounds/monochrome-spiral.webp" alt="" aria-hidden="true" width={1122} height={1402} sizes="(max-width: 900px) 110vw, (max-width: 1590px) 66vw, 1050px" loading="eager" fetchPriority="low" />
    <div className="hero-content page-width">
    <section className="copy" aria-label="What if it actually happens?">
      <h1><span className="sr-only">Delusionals: </span>What if it<br />actually<br />happens<span>?</span></h1><p className="intro">Turn big dreams into real steps.<br className="desktop" /> Track your goals. Share your journey.</p>
      <div className="believers"><div className="faces" aria-hidden="true">{people.map((person) => <Image key={person} src={person} alt="" width={100} height={100} sizes="(max-width: 700px) 30px, (max-width: 900px) 36px, 50px" />)}<span className="more"><svg className="believe-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1C13.7 7.6 16.4 10.3 23 12C16.4 13.7 13.7 16.4 12 23C10.3 16.4 7.6 13.7 1 12C7.6 10.3 10.3 7.6 12 1Z" /></svg></span></div><strong>+ 128 believers</strong></div>
      <StoreBadges />
    </section>
    <section className="showcase" aria-label="The Delusionals app and stories from its community">
      <div className="phone-pair">
      <Image className="phone phone-front" src="/images/mockups/iphone-welcome.png" alt="Delusionals welcome screen on an iPhone" width={2172} height={2896} sizes="(max-width: 700px) min(calc(62vw - 25px), 321px), (max-width: 900px) 364px, (max-width: 1200px) 38vw, 492px" loading="eager" fetchPriority="low" />
      <Image className="phone phone-back" src="/images/mockups/iphone-feed.png" alt="Delusionals community feed on an iPhone" width={2048} height={3072} sizes="(max-width: 700px) min(calc(52vw - 21px), 270px), (max-width: 900px) 307px, (max-width: 1200px) 34vw, 415px" loading="eager" fetchPriority="low" />
      </div>
      <figure className="post-preview"><Image loading="lazy" src="/images/posts/mountain-valley.jpg" alt="A mountain valley with forested slopes and distant snowy peaks" width={480} height={360} sizes="(max-width: 900px) 1px, 250px" /><figcaption>What once felt impossible is now a memory.</figcaption></figure>
      <div className="community-notes">
      <Note image="/images/avatars/comments/alex-rivera.png" name="Alex Rivera" className="note-one">The universe really does show up when you try.</Note>
      <Note image="/images/avatars/comments/tara-wilson.png" name="Tara Wilson" className="note-two">Just signed up for my first 10K. Feeling nervous but excited!</Note>
      <Note image="/images/avatars/comments/sophie-lee.png" name="Sophie Lee" className="note-three">Seeing you go for it gave me the courage to try too.</Note>
      </div>
    </section>
    </div>
  </section><LandingSections /></main>;
}

