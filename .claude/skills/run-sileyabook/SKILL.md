---
name: run-sileyabook
description: Build, run, and drive SileyaBook (Vite + React + TypeScript + Tailwind + Supabase). Use when asked to start SileyaBook, run its dev server, take a screenshot of its UI, or verify it renders.
---

SileyaBook is a Vite + React SPA. Drive it by starting the Vite dev
server, then launching headless Chromium via `playwright` (a real
devDependency of this project) with
`.claude/skills/run-sileyabook/driver.mjs`.

All paths below are relative to the project root (`/root/SileyaBook`).

## Setup

```bash
npm install
```

`playwright` is a devDependency; its Chromium binary is already cached
at `/root/.cache/ms-playwright` in this sandbox, so `npm install` does
not need to download a browser.

Copy `.env.example` to `.env` and fill in `VITE_SUPABASE_URL` /
`VITE_SUPABASE_ANON_KEY` if not already present — the app throws on
import of `src/lib/supabase.ts` without them, though nothing currently
renders that imports it, so the smoke check below works even with no
`.env` at all.

## Build

No separate build step needed to run the app in dev mode. To typecheck
+ produce a production bundle:

```bash
npx tsc -b && npx vite build
```

## Run (agent path)

Start the dev server in the background and wait for it to actually
serve before driving it:

```bash
nohup npx vite --port 5173 > /tmp/sileyabook_dev.log 2>&1 &
disown
until curl -sf http://localhost:5173/ >/dev/null 2>&1; do sleep 1; done
```

Then run the driver from the project root (must run from here, or
anywhere Node's normal ESM resolution finds `node_modules/playwright`
— see Gotchas):

```bash
node .claude/skills/run-sileyabook/driver.mjs http://localhost:5173/ /tmp/sileyabook_screenshot.png
```

Prints `SCREENSHOT: <path>` and `CONSOLE_ERRORS: [...]` (empty array =
clean render). Look at the screenshot file, don't just trust an empty
error array.

Stop the dev server when done, or the next run hits `EADDRINUSE`:

```bash
pkill -f "vite --port 5173"
```

## Run (human path)

```bash
npm run dev   # → http://localhost:5173/, Ctrl-C to stop
```

## Test

No test suite configured yet in this project.

---

## Gotchas

- **`NODE_PATH` does not work for ESM `import` resolution** (Node 18,
  and generally). If you write a throwaway `.mjs` script that does
  `import { chromium } from 'playwright'` and try to run it from
  somewhere outside the project with `NODE_PATH` pointed at a
  `node_modules/playwright` elsewhere, it fails with
  `ERR_MODULE_NOT_FOUND` even though the package is right there. Fixed
  here by making `playwright` a real project devDependency and always
  running the driver with cwd at (or under) the project root, so
  normal Node resolution finds it — no `NODE_PATH` needed at all.
- **`npm install` reused the sandbox's already-cached Chromium** at
  `/root/.cache/ms-playwright/chromium-1228` instead of downloading —
  confirmed by the install finishing in ~30s with no download log
  lines. If a future `playwright` version bump changes the required
  browser build number, expect a real download (or a
  `browserType.launch: Executable doesn't exist` error) the first time
  after that bump.
