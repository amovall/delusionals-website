import { storeLinks } from '../site-config';

export function StoreBadges() {
  const stores = [
    { name: 'App Store', url: storeLinks.apple, label: 'Download on the', icon: <svg className="store-icon apple-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M16.37 12.6c.02 2.2 1.93 2.94 1.95 2.95-.02.05-.3 1.04-1 2.06-.61.88-1.25 1.76-2.25 1.78-.98.02-1.3-.57-2.43-.57s-1.49.55-2.42.59c-.97.04-1.71-.95-2.33-1.83-1.27-1.83-2.24-5.17-.94-7.43a3.62 3.62 0 0 1 3.05-1.85c.95-.02 1.84.64 2.42.64.58 0 1.66-.79 2.8-.67.48.02 1.83.19 2.7 1.45-.07.04-1.61.94-1.6 2.88ZM14.53 5.8a3.3 3.3 0 0 0 .77-2.37 3.36 3.36 0 0 0-2.2 1.13 3.15 3.15 0 0 0-.8 2.3 2.78 2.78 0 0 0 2.23-1.06Z" /></svg> },
    { name: 'Google Play', url: storeLinks.google, label: 'GET IT ON', icon: <svg className="store-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#34A853" d="M3.3 2.7c-.2.3-.3.7-.3 1.2v16.2c0 .5.1.9.3 1.2l9-9.3-9-9.3Z"/><path fill="#4285F4" d="m12.3 12 3-3.1-10.2-5.8c-.7-.4-1.4-.4-1.8-.1l9 9Z"/><path fill="#FBBC04" d="m12.3 12-9 9.3c.4.3 1.1.3 1.8-.1l10.2-5.8-3-3.4Z"/><path fill="#EA4335" d="m18.7 10.1-3.4-1.9-3 3.8 3 3.4 3.4-1.9c1.7-1 1.7-2.4 0-3.4Z"/></svg> },
  ];

  return <div className="download">{stores.map(({ name, url, label, icon }) => {
    const content = <>{icon}<span><small>{url ? label : 'Coming soon to'}</small><b>{name}</b></span></>;
    return url
      ? <a className="store" href={url} key={name} aria-label={`${label} ${name}`}>{content}</a>
      : <div className="store store-upcoming" key={name}>{content}</div>;
  })}</div>;
}
