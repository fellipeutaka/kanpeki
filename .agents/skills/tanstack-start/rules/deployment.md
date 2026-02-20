# Deployment

## Priority: MEDIUM

TanStack Start is built on Vite and deploys to any hosting provider. Most targets use the **Nitro** plugin as the universal deployment layer.

## Cloudflare Workers (Official Partner)

```bash
npm install -D @cloudflare/vite-plugin wrangler
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import viteReact from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart(),
    viteReact(),
  ],
})
```

```jsonc
// wrangler.jsonc
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "my-app",
  "compatibility_date": "2025-09-02",
  "compatibility_flags": ["nodejs_compat"],
  "main": "@tanstack/react-start/server-entry"
}
```

```bash
npx wrangler login
npm run build && wrangler deploy
```

**Important**: Always add `nodejs_compat` flag — TanStack Start uses Node.js APIs.

## Netlify (Official Partner)

```bash
npm install -D @netlify/vite-plugin-tanstack-start
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'
import viteReact from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [tanstackStart(), netlify(), viteReact()],
})
```

```bash
npx netlify deploy
```

Optional `netlify.toml` for manual config:

```toml
[build]
  command = "vite build"
  publish = "dist/client"
[dev]
  command = "vite dev"
  port = 3000
```

## Nitro (Universal Deployment Layer)

Nitro is an agnostic layer that enables deploying to Vercel, Railway, Node.js, Bun, and many more targets.

```json
"nitro": "npm:nitro-nightly@latest"
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from 'nitro/vite'
import viteReact from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [tanstackStart(), nitro(), viteReact()],
})
```

### Vercel

Use the Nitro config above. Deploy via Vercel's one-click deployment — it auto-detects the output.

### Railway (Official Partner)

Use the Nitro config above. Push to GitHub, connect at railway.com. Railway auto-detects build settings.

Railway provides: automatic deployments on push, built-in databases (Postgres, MySQL, Redis), preview environments for PRs, automatic HTTPS.

### Node.js / Docker

Use the Nitro config above.

```json
{
  "scripts": {
    "build": "vite build",
    "start": "node .output/server/index.mjs"
  }
}
```

```bash
npm run build
npm run start
```

### Bun

Use the Nitro config with the `bun` preset. **Requires React 19+**.

```ts
export default defineConfig({
  plugins: [tanstackStart(), nitro({ preset: 'bun' }), viteReact()],
})
```

```bash
bun run build
bun run server.ts
```

### FastResponse (Node.js Performance Tip)

When deploying to Node.js with Nitro, replace the global `Response` with srvx's optimized `FastResponse` for ~5% throughput improvement:

```bash
npm install srvx
```

```ts
// src/server.ts
import { FastResponse } from 'srvx'
globalThis.Response = FastResponse
```

## Environment Variables

| Prefix | Available On | Use For |
|--------|-------------|---------|
| `VITE_` | Client + Server | Public config (API URLs) |
| None | Server only | Secrets, DB URLs, API keys |

```tsx
// Server function — access all env vars
const apiCall = createServerFn({ method: 'GET' })
  .handler(async () => {
    const secret = process.env.API_SECRET // Server only
    return fetch(process.env.API_URL!, {
      headers: { Authorization: `Bearer ${secret}` },
    }).then((r) => r.json())
  })

// Client component — only VITE_ prefixed
function ClientComponent() {
  const apiUrl = import.meta.env.VITE_PUBLIC_API_URL
  // process.env.API_SECRET is NOT available here
}
```

## Rules

- **NEVER** expose secrets in `VITE_`-prefixed variables
- Use Nitro for Vercel, Railway, Node.js, Bun, and other generic targets
- Use dedicated plugins for Cloudflare (`@cloudflare/vite-plugin`) and Netlify (`@netlify/vite-plugin-tanstack-start`)
- Always add `nodejs_compat` flag for Cloudflare Workers
- Bun deployment requires React 19+
- Test with production builds before deploying — dev server behavior differs
