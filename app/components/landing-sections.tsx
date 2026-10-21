import Image from 'next/image';
import { ArrowUpRight } from './arrow-up-right';
import { StoreBadges } from './store-badges';
import { StepsCarousel } from './steps-carousel';
import { storeLinks } from '../site-config';

const availableStores = [storeLinks.apple && 'the App Store', storeLinks.google && 'Google Play'].filter(Boolean);

const faqs = [
  ['What is a delusional shot?', 'It’s a dream you would usually dismiss as too unlikely. On Delusionals, you give that idea a name, break it into real steps, and give yourself a chance to find out what happens.'],
  ['How is this different from a to-do list?', 'A shot keeps the bigger dream connected to your next steps. You can track your progress privately, choose to share updates, and encourage other people who are giving their own ideas a go.'],
  ['Do I have to share my shots?', 'No. New shots start as Just me. Creating a shot or completing a step does not automatically publish a post. You choose whether to share a beginning, a progress update, or a win.'],
  ['Who can see what I share?', 'On a private account, shared shots are visible to approved followers. On a public account, shared shots can be public. Shots marked Just me stay private, and your step descriptions are only visible to you, even when you share progress.'],
  ['What are believers?', 'A believe is a way to encourage someone’s shared post. You can also leave a comment, reply to a conversation, or follow someone to keep up with their shared journey.'],
  ['What happens when I finish a shot?', 'Mark your shot complete and celebrate the moment. You can share a win with a photo or a few words, or keep it just for yourself. Completed shots stay in your collection.'],
  ['Where can I download Delusionals?', availableStores.length
    ? `Delusionals is available on ${availableStores.join(' and ')}. Use the store links below to see availability for your device and region.`
    : 'Delusionals is coming to iOS and Android. Official App Store and Google Play links will appear here when the app is available.'],
] as const;

export function LandingSections() {
  return <>
    <section className="meaning section-space" aria-labelledby="meaning-title">
      <div className="page-width">
        <div className="meaning-intro">
          <h2 id="meaning-title">Be a little<br /><span>delusional.</span></h2>
          <div className="meaning-copy"><p>A <strong>delusional shot</strong> is a dream so unlikely you almost don’t dare say it out loud.</p><p className="meaning-statement">The point is to give yourself a real chance to find out what happens.</p></div>
        </div>
        <div className="principles">
          <div><span className="principle-symbol" aria-hidden="true"><ArrowUpRight /></span><h3>Think ridiculously big.</h3><p>Name the thing you would normally dismiss as impossible.</p></div>
          <div><span className="principle-symbol" aria-hidden="true">∿</span><h3>Meet the universe halfway.</h3><p>Take a real step. Stay open to people and unexpected doors.</p></div>
          <div><span className="principle-symbol" aria-hidden="true">∞</span><h3>Notice. Thank. Repeat.</h3><p>Appreciate the little surprises, keep going, and celebrate the stories worth sharing.</p></div>
        </div>
      </div>
    </section>

    <section className="section-space" id="how-it-works" aria-labelledby="how-title">
      <div className="page-width">
        <div className="section-heading"><h2 id="how-title">From a wild idea<br />to a real story.</h2><p className="section-description">Set a personal goal, break it into steps, and track your progress at your own pace.</p></div>
        <StepsCarousel>
          <li>
            <div className="step-visual visual-create" role="group" aria-label="Example: creating a private shot">
              <div className="app-example create-example"><span className="example-label">New shot</span><p className="example-heading">What will you<br />make happen?</p><span className="field-label">My delusional shot</span><p className="example-field">Run the New York Marathon.</p><span className="privacy-pill"><LockIcon /> Just me</span><span className="example-hint">Private by default.</span></div>
              <span className="visual-orbit" aria-hidden="true" />
            </div>
            <div className="step-copy"><span className="step-number">1</span><div><h3>Create a shot.</h3><p>Give that unlikely idea a name. Add your steps and an optional photo. Keep it just for you, or choose to share.</p></div></div>
          </li>
          <li>
            <div className="step-visual visual-progress" role="group" aria-label="Example: two of three personal steps completed">
              <div className="app-example progress-example"><span className="example-label">My shot</span><p className="example-heading">Run the New York Marathon.</p><div className="example-progress"><span>2 of 3 steps completed</span><b>67%</b></div><div className="progress-track"><span /></div><ul className="example-checklist"><li><span aria-hidden="true">✓</span>Run my first 5K</li><li><span aria-hidden="true">✓</span>Finish a half marathon</li><li><span className="unchecked" aria-hidden="true" />Run the New York Marathon</li></ul><span className="example-hint">Your step details stay private.</span></div>
            </div>
            <div className="step-copy"><span className="step-number">2</span><div><h3>Take real steps.</h3><p>Tick off your steps as you go and watch your progress grow. Share an update when you feel like it.</p></div></div>
          </li>
          <li>
            <div className="step-visual visual-win" role="group" aria-label="Example: celebrating a completed shot">
              <div className="app-example win-example"><span className="example-label">Shot completed</span><p className="example-heading">You did it.</p><p className="win-subtitle">Remember when this felt impossible?</p><Image src="/images/posts/new-york.png" alt="The Empire State Building in New York at sunset" width={892} height={582} sizes="(max-width: 420px) calc(100vw - 130px), 258px" /><p className="win-caption">A dream made real.</p><span className="example-hint">Share this win. Or keep it just for you.</span></div>
            </div>
            <div className="step-copy"><span className="step-number">3</span><div><h3>Make it a memory.</h3><p>Mark your shot complete. Celebrate your win, tell the story, and give someone else a little courage to try.</p></div></div>
          </li>
        </StepsCarousel>
      </div>
    </section>

    <section className="community section-space" id="community" aria-labelledby="community-title">
      <div className="community-grid page-width">
        <div className="community-copy"><h2 id="community-title">Different dreams.<br />Same energy.</h2><p>A first race. A stage you never thought you’d stand on. A place you’ve only seen in pictures.</p><p>Share goals with friends, follow people taking their own shots, and celebrate each other’s progress. Leave a believe or a comment to give someone a little encouragement.</p><a className="text-link" href="#download">Explore Delusionals for iOS and Android <span aria-hidden="true"><ArrowUpRight /></span></a></div>
        <div className="community-scene">
          <div className="community-photo"><Image src="/images/posts/community-sunset.png" alt="A group of friends watching the sunset from a hillside" width={1536} height={1024} sizes="(max-width: 700px) 90vw, 45vw" /><span className="photo-label">What if you gave it a shot?</span></div>
          <aside className="community-note"><Image src="/images/avatars/comments/lucia-garcia.png" alt="" width={44} height={44} /><div><b>Lucía García</b><p>Your energy gave me the push I needed to go for it too.</p></div></aside>
        </div>
      </div>
    </section>

    <section className="faq section-space" id="faq" aria-labelledby="faq-title">
      <div className="faq-grid page-width"><div className="faq-heading"><h2 id="faq-title">Good<br /> questions.</h2><p>Big dreams can start<br /> with a little clarity.</p></div><div>{faqs.map(([question, answer]) => <details key={question} className="faq-item"><summary>{question}<span className="faq-toggle" aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></div>
    </section>

    <section className="download-section" id="download" aria-labelledby="download-title">
      <div className="download-landscape" aria-hidden="true"><Image src="/images/backgrounds/snowy-mountains.webp" alt="" fill sizes="100vw" loading="eager" /></div>
      <div className="page-width">
      <div className="download-content"><Image className="download-logo" src="/images/brand/logo.png" alt="" width={44} height={44} /><p className="eyebrow">Delusionals</p><h2 id="download-title">Your next story<br />starts with a shot.</h2><p>You’ve thought about it long enough.<br className="desktop" /> Give it a shot.</p><StoreBadges /></div>
      </div>
    </section>
  </>;
}

function LockIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="3" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></svg>;
}

