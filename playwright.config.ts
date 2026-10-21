import { defineConfig } from '@playwright/test';

const baseURL = process.env.TEST_BASE_URL ?? 'http://127.0.0.1:3100';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  timeout: 45_000,
  use: {
    baseURL,
    channel: process.env.PLAYWRIGHT_CHANNEL ?? (process.platform === 'win32' ? 'msedge' : undefined),
    reducedMotion: 'reduce',
    trace: 'retain-on-failure',
  },
  webServer: process.env.TEST_BASE_URL ? undefined : {
    command: 'npm run start -- --hostname 127.0.0.1 --port 3100',
    url: baseURL,
    timeout: 30_000,
  },
  projects: [
    ...[320, 375, 390, 430, 768, 1024, 1440].map(width => ({
      name: `${width}px`,
      use: { viewport: { width, height: width <= 430 ? 844 : 1024 }, isMobile: width <= 768, hasTouch: width <= 768 },
    })),
    { name: 'landscape', use: { viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true } },
  ],
});
