# Denji Configuration Reference

Complete reference for `denji.json` configuration.

## Schema

Add JSON schema validation to your config. The URL depends on how Denji is installed:

**Locally installed** (`npm i -D denji`):

```json
{
  "$schema": "./node_modules/denji/configuration_schema.json"
}
```

**Not installed locally** (using `npx`, `bunx`, `pnpx`, `yarn dlx`):

```json
{
  "$schema": "https://denji-docs.vercel.app/configuration_schema.json"
}
```

## All Fields

### `framework` (required)

```json
{ "framework": "react" }
```

Options: `react`, `preact`, `solid`, `qwik`, `vue`, `svelte`

### `output` (required)

String shorthand (defaults to file mode):

```json
{ "output": "./src/icons.tsx" }
```

Explicit object form:

```json
{ "output": { "type": "file", "path": "./src/icons.tsx" } }
{ "output": { "type": "folder", "path": "./src/icons" } }
```

**Important:** Svelte only supports folder mode.

File extension must match framework + TypeScript setting:

| Framework | TypeScript | JavaScript |
|-----------|-----------|------------|
| React | `.tsx` | `.jsx` |
| Preact | `.tsx` | `.jsx` |
| Solid | `.tsx` | `.jsx` |
| Qwik | `.tsx` | `.jsx` |
| Vue | `.ts` | `.js` |
| Svelte | `.svelte` | `.svelte` |

### `typescript`

```json
{ "typescript": true }
```

Default: `true`. Set `false` for JavaScript output.

### `a11y`

```json
{ "a11y": "hidden" }
```

Accessibility strategy applied to all generated icons:

| Value | Effect |
|-------|--------|
| `"hidden"` | Adds `aria-hidden="true"` — for decorative icons |
| `"img"` | Adds `role="img"` with `aria-label` |
| `"title"` | Adds `<title>` element inside SVG |
| `"presentation"` | Adds `role="presentation"` |
| `false` | No accessibility attributes |

Can be overridden per-icon with `denji add --a11y`.

### `trackSource`

```json
{ "trackSource": true }
```

Default: `true`. When enabled, adds `data-icon="prefix:name"` attribute to track the original Iconify source.

### `hooks`

Run shell commands at lifecycle points. Each hook is an array of commands.

```json
{
  "hooks": {
    "preAdd": ["echo 'Adding...'"],
    "postAdd": ["npx biome check --write ./src/icons.tsx"],
    "preRemove": [],
    "postRemove": [],
    "preClear": [],
    "postClear": [],
    "preList": [],
    "postList": []
  }
}
```

Common use: auto-format after icon changes.

## Framework-Specific Options

### React

```json
{
  "framework": "react",
  "react": {
    "forwardRef": true
  }
}
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `forwardRef` | boolean | `false` | Wrap icons with `React.forwardRef` |

### Preact

```json
{
  "framework": "preact",
  "preact": {
    "forwardRef": true
  }
}
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `forwardRef` | boolean | `false` | Wrap icons with `forwardRef` from `preact/compat` |

### Solid

```json
{
  "framework": "solid",
  "output": "./src/icons.tsx"
}
```

No additional options. Refs work natively as props.

### Qwik

```json
{
  "framework": "qwik",
  "output": "./src/icons.tsx"
}
```

No additional options. Uses `component$()` wrapper in folder mode, plain functions in file mode.

### Vue

```json
{
  "framework": "vue",
  "output": "./src/icons.ts",
  "vue": {
    "syntax": "h"
  }
}
```

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `syntax` | `"h"` | `"h"` | Component syntax — uses `h()` render functions |

### Svelte

```json
{
  "framework": "svelte",
  "output": { "type": "folder", "path": "./src/icons" }
}
```

No additional options. Uses Svelte 5 `$props()` runes. Folder mode only.

## Full Example

```json
{
  "$schema": "./node_modules/denji/configuration_schema.json",
  "framework": "react",
  "output": "./src/icons.tsx",
  "typescript": true,
  "a11y": "hidden",
  "trackSource": true,
  "react": {
    "forwardRef": true
  },
  "hooks": {
    "postAdd": ["npx biome check --write ./src/icons.tsx"],
    "postRemove": ["npx biome check --write ./src/icons.tsx"]
  }
}
```
