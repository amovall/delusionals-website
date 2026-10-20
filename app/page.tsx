import Image from 'next/image';

const people = ['/believer-a.png', '/believer-b.png', '/believer-c.png', '/believer-d.png', '/believer-e.png'];

function BelieveIcon({ className }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1C13.7 7.6 16.4 10.3 23 12C16.4 13.7 13.7 16.4 12 23C10.3 16.4 7.6 13.7 1 12C7.6 10.3 10.3 7.6 12 1Z" /></svg>;
}

function Note({ image, name, children, className }: { image: string; name: string; children: React.ReactNode; className: string }) {
  return <aside className={`note ${className}`}><Image src={image} alt="" width={70} height={70} sizes="35px" /><div className="note-copy"><b>{name}</b><p>{children}</p></div></aside>;
}

export default function Home() {
  return <main className="hero" id="top">
    <div className="mountains" aria-hidden="true" /><Image className="ribbon" src="/espiral.png" alt="" aria-hidden="true" width={1122} height={1402} unoptimized priority />
    <div className="hero-content">
    <header className="topbar">
      <nav aria-label="Main navigation"><a href="#how-it-works">How it works</a><a href="#community">Community</a><a href="#privacy">Privacy</a></nav>
    </header>
    <section className="copy" id="how-it-works">
      <h1>What if it<br />actually<br />happens<span>?</span></h1><p className="intro">A place for your most unlikely ideas,<br className="desktop" /> real-life attempts and unexpected wins.</p>
      <div className="believers" id="community"><div className="faces" aria-label="A growing community of believers">{people.map((person) => <Image key={person} src={person} alt="" width={100} height={100} sizes="50px" />)}<span className="more"><BelieveIcon className="believe-icon" /></span></div><strong>+ 128 believers</strong></div>
      <div className="download" id="download">
        <a className="store" href="#download" aria-label="Download on the App Store">
          <svg className="store-icon apple-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.37 12.6c.02 2.2 1.93 2.94 1.95 2.95-.02.05-.3 1.04-1 2.06-.61.88-1.25 1.76-2.25 1.78-.98.02-1.3-.57-2.43-.57s-1.49.55-2.42.59c-.97.04-1.71-.95-2.33-1.83-1.27-1.83-2.24-5.17-.94-7.43a3.62 3.62 0 0 1 3.05-1.85c.95-.02 1.84.64 2.42.64.58 0 1.66-.79 2.8-.67.48.02 1.83.19 2.7 1.45-.07.04-1.61.94-1.6 2.88ZM14.53 5.8a3.3 3.3 0 0 0 .77-2.37 3.36 3.36 0 0 0-2.2 1.13 3.15 3.15 0 0 0-.8 2.3 2.78 2.78 0 0 0 2.23-1.06Z" /></svg>
          <span><small>Download on the</small><b>App Store</b></span>
        </a>
        <a className="store" href="#download" aria-label="Get it on Google Play">
          <svg className="store-icon play-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#34A853" d="M3.3 2.7c-.2.3-.3.7-.3 1.2v16.2c0 .5.1.9.3 1.2l9-9.3-9-9.3Z"/><path fill="#4285F4" d="m12.3 12 3-3.1-10.2-5.8c-.7-.4-1.4-.4-1.8-.1l9 9Z"/><path fill="#FBBC04" d="m12.3 12-9 9.3c.4.3 1.1.3 1.8-.1l10.2-5.8-3-3.4Z"/><path fill="#EA4335" d="m18.7 10.1-3.4-1.9-3 3.8 3 3.4 3.4-1.9c1.7-1 1.7-2.4 0-3.4Z"/></svg>
          <span><small>GET IT ON</small><b>Google Play</b></span>
        </a>
      </div>
    </section>
    <section className="showcase" aria-label="The Delusionals app and stories from its community">
      <Image className="phone phone-front" src="/iphone-welcome.png" alt="Delusionals welcome screen on an iPhone" width={2172} height={2896} sizes="(max-width: 700px) 55vw, 38vw" priority />
      <Image className="phone phone-back" src="/iphone-feed.png" alt="Delusionals community feed on an iPhone" width={2048} height={3072} sizes="(max-width: 700px) 48vw, 34vw" priority />
      <figure className="post-preview post-adventure"><img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=480&h=360&q=85" alt="A mountain summit above the clouds" /><figcaption>What once felt impossible is now a memory.</figcaption></figure>
      <Note image="/comment-alex.png" name="Alex Rivera" className="note-one">The universe really does show up when you try.</Note>
      <Note image="/comment-tara.png" name="Tara Wilson" className="note-two">Just signed up for my first 10K. Feeling nervous but excited!</Note>
      <Note image="/comment-james.png" name="Sophie Lee" className="note-three">Seeing you go for it gave me the courage to try too.</Note>


    </section>
    </div>
  </main>;
}

