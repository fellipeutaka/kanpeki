---
title: Enable Debug Logging for Troubleshooting
impact: LOW-MEDIUM
tags: debug, logging, localStorage, troubleshooting, devtools
---

## Enable Debug Logging for Troubleshooting

Enable nuqs debug logs in the browser to see state changes, URL updates, and timing.

```js
// In browser DevTools console:
localStorage.setItem('debug', 'nuqs')
// Then reload the page
```

Log lines are prefixed with `[nuqs]` (for `useQueryState`) and `[nuq+]` (for
`useQueryStates`).

**Combining with other debug namespaces:**

```js
localStorage.setItem('debug', '*,nuqs')  // all + nuqs
```

**Disable:**

```js
localStorage.removeItem('debug')
```

**User Timing markers** are also recorded for advanced performance analysis in
the browser's Performance tab. Providing debug logs when filing a GitHub issue
is always appreciated.

> Unlike the `debug` npm package, wildcards don't work — use the exact string `'nuqs'`.
