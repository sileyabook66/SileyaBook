// Driver for the run-sileyabook skill. Launches headless Chromium via the
// project's own `playwright` devDependency, navigates to the running Vite
// dev server, waits for the app shell to render, and screenshots it.
//
// Usage: node .claude/skills/run-sileyabook/driver.mjs [url] [screenshotPath]
// Must be run with cwd = project root (or anywhere under it) so Node's
// normal ESM resolution finds node_modules/playwright — see "Gotchas" in
// SKILL.md for why this matters.
import { chromium } from 'playwright';

const url = process.argv[2] ?? 'http://localhost:5173/';
const screenshotPath = process.argv[3] ?? '/tmp/sileyabook_screenshot.png';

const browser = await chromium.launch({ args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

const consoleErrors = [];
page.on('console', (msg) => {
  if (msg.type() === 'error') consoleErrors.push(msg.text());
});
page.on('pageerror', (err) => consoleErrors.push(String(err)));

await page.goto(url, { waitUntil: 'networkidle' });
await page.waitForSelector('text=SileyaBook', { timeout: 15000 });
await page.screenshot({ path: screenshotPath });

console.log('SCREENSHOT:', screenshotPath);
console.log('CONSOLE_ERRORS:', JSON.stringify(consoleErrors));

await browser.close();
