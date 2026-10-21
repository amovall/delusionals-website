import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { siteUrl } from '../seo.config.mjs';

export const alt = 'Delusionals. What if it actually happens? Turn big dreams into real steps.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const logo = await readFile(path.join(process.cwd(), 'public/images/brand/logo.png'));
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '56px 72px', background: 'linear-gradient(130deg, #ffffff 40%, #e0eaf3)', color: '#050505', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 30, fontWeight: 700 }}>
        <img src={`data:image/png;base64,${logo.toString('base64')}`} width={48} height={48} alt="" />
        Delusionals
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', fontSize: 88, lineHeight: 1.02, fontWeight: 700, letterSpacing: '-5px', maxWidth: 950 }}>What if it actually happens?</div>
        <div style={{ display: 'flex', fontSize: 30, color: '#62626b' }}>Turn big dreams into real steps. Share your journey.</div>
      </div>
      <div style={{ display: 'flex', fontSize: 22, color: '#62626b' }}>{siteUrl.hostname}</div>
    </div>,
    size,
  );
}
