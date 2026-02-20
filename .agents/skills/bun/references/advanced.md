# Advanced Features

## Table of Contents

- [Workers](#workers)
- [HTMLRewriter](#htmlrewriter)
- [FFI (bun:ffi)](#ffi-bunffi)
- [C Compiler](#c-compiler)
- [Bun.secrets](#bunsecrets)
- [Runtime Plugins](#runtime-plugins)
- [Environment Variables](#environment-variables)
- [Node.js Compatibility](#nodejs-compatibility)

## Workers

### Basic Usage

```ts
// main.ts
const worker = new Worker("./worker.ts");
worker.postMessage({ type: "start", data: [1, 2, 3] });
worker.onmessage = (event) => console.log(event.data);

// worker.ts
declare var self: Worker;
self.onmessage = (event: MessageEvent) => {
  const result = event.data.data.reduce((a: number, b: number) => a + b, 0);
  postMessage({ type: "result", value: result });
};
```

### Options

```ts
const worker = new Worker("./worker.ts", {
  preload: ["./sentry.js"],  // run before worker starts
  ref: false,                 // don't keep process alive for this worker
  smol: true,                 // reduce memory usage
});
```

### Lifecycle

```ts
worker.terminate();   // force stop
worker.unref();       // decouple from main process lifetime
worker.ref();         // re-couple

// Bun-specific events
worker.addEventListener("open", () => console.log("worker ready"));
worker.addEventListener("close", (e) => console.log("exit code:", e.code));
```

### Shared Environment Data

```ts
// main.ts
import { setEnvironmentData } from "worker_threads";
setEnvironmentData("config", { apiUrl: "https://api.example.com" });

// worker.ts
import { getEnvironmentData } from "worker_threads";
const config = getEnvironmentData("config");
```

### Utilities

```ts
Bun.isMainThread;  // true on main thread, false in worker
process.on("worker", (worker) => console.log("worker created"));
```

## HTMLRewriter

Cloudflare Workers-compatible streaming HTML transformer.

### Basic Usage

```ts
const rewriter = new HTMLRewriter()
  .on("a[href]", {
    element(el) {
      const href = el.getAttribute("href");
      if (href?.startsWith("/")) {
        el.setAttribute("href", `https://example.com${href}`);
      }
    },
  })
  .on("h1", {
    element(el) {
      el.setInnerContent("New Title");
    },
  })
  .onDocument({
    text(chunk) {
      // Process all text nodes
    },
  });

// Transform Response, string, ArrayBuffer, Blob, or File
const output = rewriter.transform(new Response("<h1>Old</h1>"));
const html = await output.text();
```

### Element Handler

```ts
{
  element(el) {
    // Properties
    el.tagName;                          // e.g. "div"
    el.namespaceURI;
    el.selfClosing;                      // boolean
    el.removed;                          // boolean

    // Attributes
    el.getAttribute("class");
    el.setAttribute("class", "new");
    el.hasAttribute("id");
    el.removeAttribute("style");

    // Content manipulation
    el.setInnerContent("text");                    // replace inner content
    el.setInnerContent("<b>html</b>", { html: true });
    el.before("text");                             // insert before element
    el.after("text");
    el.prepend("text");                            // insert as first child
    el.append("text");                             // insert as last child
    el.remove();                                   // remove element + children
    el.removeAndKeepContent();                     // unwrap element

    // End tag handler
    el.onEndTag((endTag) => {
      endTag.before("<!-- end -->");
    });
  },
}
```

### Text / Comment Handlers

```ts
{
  text(chunk) {
    chunk.text;           // string content
    chunk.lastInTextNode; // boolean — last chunk of this text node
    chunk.before("prefix");
    chunk.after("suffix");
    chunk.replace("new text");
    chunk.remove();
  },
  comments(comment) {
    comment.text;         // comment content
    comment.replace("new comment");
    comment.remove();
  },
}
```

### Supported CSS Selectors

`div`, `.class`, `#id`, `[attr]`, `[attr=val]`, `[attr~=word]`, `[attr^=prefix]`, `[attr$=suffix]`, `[attr*=sub]`, `div > p`, `div p`, `:nth-child()`, `:first-child`, `:last-child`, `:not()`, `*`

## FFI (bun:ffi)

> Experimental. Prefer Node-API (napi) modules for production.

### dlopen

```ts
import { dlopen, FFIType, suffix } from "bun:ffi";

const lib = dlopen(`libcrypto.${suffix}`, {
  MD5: {
    args: [FFIType.ptr, FFIType.u64, FFIType.ptr],
    returns: FFIType.ptr,
  },
});

lib.symbols.MD5(dataPtr, dataLen, outputPtr);
lib.close();
```

`suffix`: `"dylib"` (macOS), `"so"` (Linux), `"dll"` (Windows)

### FFI Types

| Type | Description |
|------|-------------|
| `i8`, `i16`, `i32`, `i64` | Signed integers |
| `u8`, `u16`, `u32`, `u64` | Unsigned integers |
| `f32`, `f64` | Floats |
| `ptr` | Pointer |
| `buffer` | TypedArray pointer |
| `cstring` | Null-terminated C string |
| `bool` | Boolean |
| `function` / `callback` | Function pointer |

### Pointer Utilities

```ts
import { ptr, toArrayBuffer, read, CString } from "bun:ffi";

ptr(typedArray);                   // get pointer from TypedArray
toArrayBuffer(ptr, offset, len);   // pointer → ArrayBuffer
read.u8(ptr, offset);             // read typed value at pointer
read.i32(ptr, 4);
new CString(ptr);                  // null-terminated C string
new CString(ptr, offset, length); // with bounds
```

### JavaScript Callbacks

```ts
import { JSCallback, FFIType } from "bun:ffi";

const callback = new JSCallback(
  (a, b) => a + b,
  { args: [FFIType.i32, FFIType.i32], returns: FFIType.i32 }
);

// Pass callback.ptr to C functions
// Must close when done:
callback.close();
```

## C Compiler

Compile and call C code inline using TinyCC.

```ts
import { cc } from "bun:ffi";
import source from "./math.c" with { type: "file" };

const { symbols: { add, multiply } } = cc({
  source,
  symbols: {
    add: { args: ["i32", "i32"], returns: "i32" },
    multiply: { args: ["i32", "i32"], returns: "i32" },
  },
});

add(2, 3);       // 5
multiply(4, 5);  // 20
```

### Options

| Option | Purpose |
|--------|---------|
| `source` | Path/URL to `.c` file |
| `symbols` | Functions to expose with types |
| `library` | Libraries to link (e.g., `["sqlite3"]`) |
| `flags` | Compiler flags (`-I`, `-D`, etc.) |
| `define` | Preprocessor definitions |

### N-API Integration

```c
// hello.c
#include <node/node_api.h>
napi_value hello(napi_env env) {
  napi_value result;
  napi_create_string_utf8(env, "Hello from C!", NAPI_AUTO_LENGTH, &result);
  return result;
}
```

```ts
const { symbols: { hello } } = cc({
  source: "./hello.c",
  symbols: { hello: { args: ["napi_env"], returns: "napi_value" } },
});
console.log(hello()); // "Hello from C!"
```

## Bun.secrets

OS credential store integration. **Experimental.**

| Platform | Backend |
|----------|---------|
| macOS | Keychain Services |
| Linux | libsecret (GNOME Keyring, KWallet) |
| Windows | Credential Manager |

```ts
// Store
await Bun.secrets.set({
  service: "my-cli",
  name: "github-token",
  value: "ghp_xxxxxxxxxxxx",
});

// Retrieve
const token = await Bun.secrets.get({
  service: "my-cli",
  name: "github-token",
}); // string | null

// Delete
await Bun.secrets.delete({
  service: "my-cli",
  name: "github-token",
}); // boolean
```

- Async (runs on threadpool)
- User-scoped, persistent across restarts
- Password memory zeroed after use
- Max password: 2048–4096 bytes (platform-dependent)
- Use for CLI credentials, local dev secrets — NOT production server secrets

## Runtime Plugins

Register plugins that transform imports at runtime (not just build time).

```ts
// plugins/yaml.ts
import { plugin } from "bun";

plugin({
  name: "yaml-loader",
  setup(build) {
    build.onLoad({ filter: /\.ya?ml$/ }, async ({ path }) => {
      const text = await Bun.file(path).text();
      return {
        contents: `export default ${JSON.stringify(parseYaml(text))}`,
        loader: "js",
      };
    });
  },
});
```

```toml
# bunfig.toml — load plugin before entry
preload = ["./plugins/yaml.ts"]
```

Then in application code:

```ts
import config from "./config.yaml";  // works!
```

## Environment Variables

### Loading Order

Files loaded automatically (each overrides previous):
1. `.env`
2. `.env.$(NODE_ENV)` — e.g., `.env.production`, `.env.development`, `.env.test`
3. `.env.local`

### Access

```ts
Bun.env.API_KEY           // Bun-native (recommended)
process.env.API_KEY       // Node.js compat
import.meta.env.API_KEY   // Vite compat
```

### CLI Flags

```bash
bun --env-file=.env.staging run start   # specific file
bun --no-env-file run start             # disable auto-loading
FOO=bar bun run dev                     # inline
```

### Variable Expansion

```ini
HOST=localhost
PORT=3000
URL=http://$HOST:$PORT    # → http://localhost:3000
ESCAPED=hello\$HOST       # → hello$HOST (literal)
```

### TypeScript Type Safety

```ts
declare module "bun" {
  interface Env {
    DATABASE_URL: string;
    API_KEY: string;
    PORT?: string;
  }
}
```

### Key Built-in Vars

| Variable | Purpose |
|----------|---------|
| `BUN_CONFIG_VERBOSE_FETCH=curl` | Log all fetch with headers |
| `BUN_CONFIG_MAX_HTTP_REQUESTS` | Max concurrent fetch (default: 256) |
| `BUN_CONFIG_DNS_TIME_TO_LIVE_SECONDS` | DNS cache TTL |
| `NODE_TLS_REJECT_UNAUTHORIZED=0` | Skip TLS validation (dev only) |
| `NO_COLOR=1` | Disable ANSI colors |
| `DO_NOT_TRACK=1` | Disable crash reports |

## Node.js Compatibility

### Fully Supported Modules

`assert`, `buffer`, `console`, `crypto` (mostly), `dgram`, `dns`, `events`, `fs` (92%), `net`, `os`, `path`, `punycode`, `querystring`, `readline`, `stream`, `string_decoder`, `tty`, `url`, `zlib` (98%), `diagnostics_channel`

### Partially Supported

| Module | Notable Gaps |
|--------|-------------|
| `child_process` | Missing gid/uid props, socket handle IPC |
| `cluster` | Missing cross-process handle passing |
| `http` | No streaming outgoing request bodies |
| `http2` | Missing ALTSVC, pushStream |
| `worker_threads` | Missing stdin/stdout/stderr options |

### Not Supported

`node:repl`, `node:sqlite`, `node:trace_events`, `node:test` (use `bun:test`)

### Key Compat Notes

- `__dirname` and `__filename` work in ESM (unlike Node.js)
- CommonJS `require()` and ESM `import` can be mixed freely
- `node:*` prefix supported for all built-in modules
- `process` is global (no import needed)
- `Buffer` is global
- Most npm packages work without modification
