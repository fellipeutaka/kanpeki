# Bundler & Compile

## Table of Contents

- [Bun.build API](#bunbuild-api)
- [CLI](#cli)
- [Build Output](#build-output)
- [Compile to Executable](#compile-to-executable)
- [Embedding Assets](#embedding-assets)
- [Plugins](#plugins)
- [Bun.Transpiler](#buntranspiler)
- [Watch & Hot Modes](#watch--hot-modes)

## Bun.build API

```ts
const result = await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",

  // Target runtime
  target: "browser",             // "browser" | "bun" | "node"
  format: "esm",                 // "esm" | "cjs" | "iife"

  // Optimization
  minify: true,                  // or { whitespace: true, syntax: true, identifiers: true }
  splitting: true,               // code splitting via dynamic import()
  sourcemap: "linked",           // "linked" | "inline" | "external" | "none"
  bytecode: true,                // compile to bytecode (target=bun only)

  // Module handling
  external: ["react", "react-dom"],
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },

  // Output naming
  naming: {
    entry: "[name].[hash].js",
    chunk: "chunks/[name].[hash].js",
    asset: "assets/[name].[hash][ext]",
  },

  // Environment variables
  env: "inline",                 // inline all env vars
  // or: "PUBLIC_*"              // inline matching prefix only

  // Metadata
  metafile: true,                // generate metafile for analysis

  // Error handling
  throw: false,                  // don't throw on error, check result.success
});
```

### All Options

| Option | Type | Default |
|--------|------|---------|
| `entrypoints` | `string[]` | required |
| `outdir` | `string` | — |
| `target` | `"browser"` \| `"bun"` \| `"node"` | `"browser"` |
| `format` | `"esm"` \| `"cjs"` \| `"iife"` | `"esm"` |
| `splitting` | `boolean` | `false` |
| `minify` | `boolean` \| `object` | `false` |
| `sourcemap` | `"linked"` \| `"inline"` \| `"external"` \| `"none"` | `"none"` |
| `external` | `string[]` | — |
| `define` | `Record<string, string>` | — |
| `naming` | `object` | — |
| `publicPath` | `string` | — |
| `env` | `"inline"` \| `string` | — |
| `bytecode` | `boolean` | `false` |
| `metafile` | `boolean` \| `string` | `false` |
| `plugins` | `BunPlugin[]` | — |
| `throw` | `boolean` | `true` |

### Supported File Types

`.js`, `.jsx`, `.ts`, `.tsx`, `.json`, `.jsonc`, `.toml`, `.yaml`, `.css`, `.html`, `.wasm`, `.node`

## CLI

```bash
bun build ./src/index.ts --outdir ./dist
bun build ./src/index.ts --outdir ./dist --splitting --minify --sourcemap=linked
bun build ./src/index.ts --outdir ./dist --target node --format cjs
bun build --watch ./src/index.ts --outdir ./dist   # rebuild on change
```

## Build Output

```ts
const result = await Bun.build({ entrypoints: ["./index.ts"], outdir: "./dist", throw: false });

if (!result.success) {
  for (const log of result.logs) {
    console.error(log.message);
  }
  process.exit(1);
}

for (const artifact of result.outputs) {
  artifact.path;    // output file path
  artifact.kind;    // "entry-point" | "chunk" | "asset" | "sourcemap"
  artifact.hash;    // content hash
  artifact.loader;  // loader used
  // Blob methods: .text(), .arrayBuffer(), .stream(), etc.
}
```

## Compile to Executable

### Basic

```bash
bun build --compile ./app.ts --outfile myapp
./myapp  # standalone, no Bun install needed
```

### Production Flags

```bash
bun build --compile --minify --sourcemap --bytecode ./app.ts --outfile myapp
```

### Cross-Compilation Targets

| Target | Platform |
|--------|----------|
| `bun-linux-x64` | Linux x64 (AVX2 required) |
| `bun-linux-x64-baseline` | Linux x64 (pre-2013 CPUs) |
| `bun-linux-arm64` | Linux ARM64 |
| `bun-linux-x64-musl` | Alpine Linux |
| `bun-windows-x64` | Windows x64 (auto `.exe`) |
| `bun-darwin-x64` | macOS Intel |
| `bun-darwin-arm64` | macOS Apple Silicon |

```bash
bun build --compile --target=bun-linux-arm64 ./app.ts --outfile myapp-linux
bun build --compile --target=bun-darwin-arm64 ./app.ts --outfile myapp-mac
bun build --compile --target=bun-windows-x64 ./app.ts --outfile myapp.exe
```

### Windows Options (API)

```ts
await Bun.build({
  entrypoints: ["./app.ts"],
  compile: {
    outfile: "./myapp",
    windows: {
      icon: "./icon.ico",
      hideConsole: true,
      title: "My App",
      publisher: "My Company",
      version: "1.0.0",
    },
  },
});
```

### Multiple Entrypoints (Workers)

```bash
bun build --compile ./index.ts ./worker.ts --outfile myapp
```

### Runtime Flags

```bash
BUN_OPTIONS="--cpu-prof" ./myapp       # pass flags without recompile
BUN_BE_BUN=1 ./myapp                   # expose full Bun CLI
```

### Config Loading Defaults

| Config | Default |
|--------|---------|
| `.env` | enabled |
| `bunfig.toml` | enabled |
| `tsconfig.json` | disabled |
| `package.json` | disabled |

```bash
bun build --compile --compile-autoload-tsconfig ./app.ts   # enable tsconfig
bun build --compile --no-compile-autoload-dotenv ./app.ts   # disable .env
```

## Embedding Assets

### Files

```ts
import icon from "./icon.png" with { type: "file" };
// icon = hashed path string, file bundled alongside executable
```

### SQLite Databases

```ts
import db from "./data.db" with { type: "sqlite", embed: "true" };
// db = Database instance, read-write copy extracted at runtime
```

### List Embedded Files

```ts
import { embeddedFiles } from "bun";
for (const file of embeddedFiles) {
  console.log(`${file.name} - ${file.size} bytes`);
}
```

### Fullstack Executable

```ts
import homepage from "./index.html";

export default {
  routes: { "/": homepage },
  fetch: () => new Response("Not Found", { status: 404 }),
};
```

```bash
bun build --compile ./server.ts --outfile myapp
# Single binary serves HTML + bundled JS/CSS
```

## Plugins

### Structure

```ts
import type { BunPlugin } from "bun";

const yamlPlugin: BunPlugin = {
  name: "yaml-loader",
  setup(build) {
    build.onLoad({ filter: /\.ya?ml$/ }, async ({ path }) => {
      const text = await Bun.file(path).text();
      const data = parseYaml(text);
      return { contents: `export default ${JSON.stringify(data)}`, loader: "js" };
    });
  },
};
```

### Hooks

| Hook | Purpose |
|------|---------|
| `build.onStart(fn)` | Runs when bundling begins (async-safe) |
| `build.onResolve({ filter }, fn)` | Transform import paths |
| `build.onLoad({ filter }, fn)` | Transform module contents |
| `build.onBeforeParse({ filter }, fn)` | Native-only, runs before parsing |

### onResolve

```ts
build.onResolve({ filter: /^env:/ }, ({ path }) => ({
  path: path.slice(4),
  namespace: "env",
}));
```

### onLoad

```ts
build.onLoad({ filter: /.*/, namespace: "env" }, ({ path }) => ({
  contents: `export default ${JSON.stringify(Bun.env[path])}`,
  loader: "js",
}));
```

### Available Loaders

`js`, `jsx`, `ts`, `tsx`, `json`, `jsonc`, `toml`, `yaml`, `file`, `napi`, `wasm`, `text`, `css`, `html`

### Usage

```ts
// In Bun.build
await Bun.build({
  entrypoints: ["./index.ts"],
  outdir: "./dist",
  plugins: [yamlPlugin],
});

// As runtime plugin (via bunfig.toml preload)
Bun.plugin(yamlPlugin);
```

```toml
# bunfig.toml
preload = ["./plugins/yaml.ts"]
```

## Bun.Transpiler

Programmatic access to Bun's transpiler.

```ts
const transpiler = new Bun.Transpiler({ loader: "tsx" });

// Transpile code
const js = transpiler.transformSync('<div>Hello</div>');
const js = await transpiler.transform('<div>Hello</div>', "tsx");

// Scan imports/exports
const { imports, exports } = transpiler.scan(code);
// imports: [{ path: "react", kind: "import-statement" }, ...]
// exports: ["default", "MyComponent", ...]

// Fast import scan only
const imports = transpiler.scanImports(code);
```

### Constructor Options

| Option | Purpose |
|--------|---------|
| `loader` | Default loader: `"js"`, `"jsx"`, `"ts"`, `"tsx"` |
| `target` | `"browser"`, `"bun"`, `"node"` |
| `define` | Key-value replacements (JSON strings) |
| `tsconfig` | Custom TSConfig (JSX factory, import source) |
| `trimUnusedImports` | Remove unused imports |
| `minifyWhitespace` | Minify whitespace |
| `inline` | Inline constant values (default: true) |

### Import Kinds

`import-statement`, `require-call`, `require-resolve`, `dynamic-import`, `import-rule` (CSS), `url-token` (CSS), `internal`, `entry-point-build`, `entry-point-run`

## Watch & Hot Modes

### --watch (Hard Restart)

```bash
bun --watch index.ts
bun --watch test
```

- Tracks all imported files
- Restarts entire process on change
- Preserves CLI args and env
- Auto-restarts on crash
- Uses native OS APIs (kqueue/inotify), not polling

### --hot (Soft Reload)

```bash
bun --hot server.ts
```

- Rebuilds module registry without restart
- **Preserves** `globalThis` and global state
- Re-transpiles changed modules
- Ideal for stateful HTTP servers

### --no-clear-screen

```bash
bun --watch --no-clear-screen index.ts
```
