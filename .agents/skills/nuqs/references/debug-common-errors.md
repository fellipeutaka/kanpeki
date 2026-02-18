---
title: Diagnose Common nuqs Errors
impact: LOW-MEDIUM
tags: debug, errors, troubleshooting, common-issues, hydration
---

## Diagnose Common nuqs Errors

| Error / Symptom | Cause | Fix |
|-----------------|-------|-----|
| `Cannot read property 'push' of undefined` | Missing `NuqsAdapter` | Wrap app with the correct adapter — see `setup-adapter.md` |
| `Hooks can only be called inside Client Components` | Missing `'use client'` | Add `'use client'` — see `setup-client-hooks.md` |
| `Attempted to call withDefault() from the server` | Imported from `nuqs` in server code | Import from `nuqs/server` — see `setup-server-imports.md` |
| Uncontrolled input warning | `value={query}` where `query` is `null` | Use `value={query ?? ''}` — see `state-controlled-inputs.md` |
| Hydration mismatch | Different parsers/defaults on client vs server | Share parsers — see `setup-shared-parsers.md` |
| URL not updating | Missing or wrong adapter | Verify adapter matches framework — see `setup-adapter.md` |
| `State undefined` in Server Component | Called `.get()` before `.parse()` | Always call `parse()` at page level first — see `server-search-params-cache.md` |
| `Missing Suspense boundary with useSearchParams` | Client component not wrapped in `<Suspense>` | Wrap in `<Suspense>` or move `'use client'` to a leaf component |
| Stale state after Back button | Copied URL state into `useState` | Read URL state directly — see `history-back-sync.md` |
| Different parsers on same key | Two hooks with different parsers for the same URL key | Use shared parsers — see `setup-shared-parsers.md` |

**Quick diagnostic steps:**

1. Check adapter is mounted correctly (`setup-adapter.md`)
2. Enable debug logging (`debug-enable-logging.md`)
3. Confirm all parsers for the same key are identical across components
4. Check `nuqs` version — minimum `next@14.2.0` for Next.js
