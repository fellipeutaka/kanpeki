# HTTP Server

## Table of Contents

- [Routes](#routes)
- [BunRequest](#bunrequest)
- [WebSockets](#websockets)
- [Cookies](#cookies)
- [Fullstack Dev Server](#fullstack-dev-server)
- [Static Routes](#static-routes)
- [Server Lifecycle](#server-lifecycle)
- [TLS / HTTPS](#tls--https)

## Routes

Route precedence (highest → lowest):
1. Exact: `/users/all`
2. Parameter: `/users/:id`
3. Wildcard: `/users/*`
4. Global catch-all: `/*`

### Per-Method Handlers

```ts
Bun.serve({
  routes: {
    "/api/users": {
      GET: () => Response.json(users),
      POST: async (req) => {
        const body = await req.json();
        return Response.json(body, { status: 201 });
      },
      PUT: async (req) => Response.json(await req.json()),
      DELETE: () => new Response(null, { status: 204 }),
    },
  },
});
```

### Static Response Routes

Pre-built `Response` objects (~15% faster, no per-request allocation):

```ts
routes: {
  "/health": new Response("OK"),
  "/api/not-found": Response.json({ error: "Not found" }, { status: 404 }),
}
```

### File Routes

```ts
routes: {
  "/favicon.ico": Bun.file("./public/favicon.ico"),  // streamed, per-request
}
```

### Async Routes

```ts
routes: {
  "/api/version": async () => {
    const [row] = await sql`SELECT version()`;
    return Response.json(row);
  },
}
```

### Export Default Syntax

```ts
export default {
  port: 3000,
  fetch(req) {
    return new Response("Hello");
  },
} satisfies Serve.Options<undefined>;
```

## BunRequest

Extends standard `Request` with `.params` and `.cookies`.

```ts
"/users/:id": (req) => {
  req.params.id;                    // route parameter
  req.cookies.get("session");       // read cookie
  req.cookies.set("visited", "1");  // auto-applied to response
  return new Response("OK");
}
```

TypeScript infers param types from route string literals.

## WebSockets

### Server Setup

```ts
Bun.serve({
  fetch(req, server) {
    if (server.upgrade(req, { data: { userId: "123" } })) return;
    return new Response("Not a WebSocket", { status: 400 });
  },
  websocket: {
    open(ws) {
      ws.subscribe("chat");
      ws.send("Welcome!");
    },
    message(ws, message) {
      // Broadcast to all subscribers except sender
      ws.publish("chat", message);
      // Or send to all including sender
      // server.publish("chat", message);
    },
    close(ws, code, reason) {
      ws.unsubscribe("chat");
    },
    drain(ws) {
      // Backpressure relieved, safe to send again
    },
  },
});
```

### WebSocket Methods

| Method | Returns | Purpose |
|--------|---------|---------|
| `ws.send(data)` | bytes sent, -1 (backpressure), 0 (dropped) | Send to this client |
| `ws.publish(topic, data)` | void | Broadcast to topic (excludes sender) |
| `ws.subscribe(topic)` | void | Join topic |
| `ws.unsubscribe(topic)` | void | Leave topic |
| `ws.close(code?, reason?)` | void | Close connection |
| `ws.isSubscribed(topic)` | boolean | Check subscription |

`server.publish(topic, data)` — broadcast from server (includes all subscribers).

### WebSocket Config

```ts
websocket: {
  maxPayloadLength: 16 * 1024 * 1024,  // 16 MB default
  backpressureLimit: 1024 * 1024,       // 1 MB default
  idleTimeout: 120,                      // seconds, default 120
  sendPings: true,                       // default true
  publishToSelf: false,                  // default false
  perMessageDeflate: false,              // enable for compression
}
```

### WebSocket Client

```ts
const ws = new WebSocket("ws://localhost:3000/chat");

// Bun-specific: pass custom headers (not available in browsers)
const ws = new WebSocket("wss://api.example.com", {
  headers: { Authorization: "Bearer token" },
});

ws.onopen = () => ws.send("hello");
ws.onmessage = (e) => console.log(e.data);
ws.onclose = (e) => console.log(e.code, e.reason);
```

## Cookies

### CookieMap (Collection)

```ts
const cookies = new CookieMap("session=abc; theme=dark");
cookies.get("session");       // "abc"
cookies.set("visited", "true");
cookies.delete("session");
cookies.has("theme");         // true
cookies.toSetCookieHeaders(); // string[] for Set-Cookie headers
```

### Cookie (Individual)

```ts
const c = new Cookie("session", "abc123", {
  path: "/",
  sameSite: "lax",         // "strict" | "lax" | "none"
  httpOnly: true,
  secure: true,
  maxAge: 3600,            // seconds
  expires: new Date("2025-12-31"),
  domain: "example.com",
});
c.serialize();  // "session=abc123; Path=/; HttpOnly; Secure; ..."
c.isExpired();
Cookie.parse("session=abc123; Path=/");
```

### Cookies in Routes

```ts
"/login": async (req) => {
  const session = req.cookies.get("session");
  if (!session) {
    req.cookies.set("session", crypto.randomUUID(), {
      httpOnly: true,
      secure: true,
      maxAge: 86400,
    });
  }
  return new Response("OK");
}
```

Cookies set via `req.cookies.set()` are automatically included in the response.

## Fullstack Dev Server

```ts
import homepage from "./index.html";

Bun.serve({
  routes: {
    "/": homepage,
    "/api/data": () => Response.json({ items: [] }),
  },
  development: true,  // enables HMR, sourcemaps, no minification
});
```

### Development Mode Options

```ts
development: {
  hmr: true,       // hot module replacement
  console: true,   // stream browser console.log to terminal
}
```

### Tailwind CSS Plugin

```toml
# bunfig.toml
[serve.static]
plugins = ["bun-plugin-tailwind"]
```

### Production Build

```bash
bun build --target=bun --production --outdir=dist ./src/index.ts
```

| Feature | Dev | Prod |
|---------|-----|------|
| Source maps | yes | no |
| Minification | no | yes |
| Hot reloading | yes | no |
| Asset bundling | per-request | cached |

## Static Routes

Pre-cached, zero FS I/O per request, ETag support:

```ts
Bun.serve({
  static: {
    "/assets/logo.png": Bun.file("./public/logo.png"),
    "/robots.txt": new Response("User-agent: *\nAllow: /"),
  },
  routes: { /* ... */ },
  fetch(req) { return new Response("Not Found", { status: 404 }); },
});
```

## Server Lifecycle

```ts
const server = Bun.serve({ /* ... */ });

// Info
server.url;                          // URL object
server.port;                         // number
server.hostname;                     // string
server.pendingRequests;              // number
server.pendingWebSockets;            // number
server.subscriberCount("topic");     // number

// Control
server.stop();                       // graceful stop
server.stop(true);                   // force close connections
server.ref();                        // keep process alive
server.unref();                      // allow process exit

// Per-request
server.requestIP(req);               // { address, family, port }
server.timeout(req, 30);             // per-request timeout (seconds)

// Hot reload handlers without restart
server.reload({
  routes: { /* new routes */ },
  fetch(req) { return new Response("Updated"); },
});
```

## TLS / HTTPS

```ts
Bun.serve({
  port: 443,
  tls: {
    key: Bun.file("./key.pem"),
    cert: Bun.file("./cert.pem"),
    // Optional
    ca: Bun.file("./ca.pem"),
    passphrase: "secret",
  },
  fetch(req) {
    return new Response("Secure!");
  },
});
```

Unix domain sockets:

```ts
Bun.serve({
  unix: "/tmp/my-app.sock",
  fetch(req) { return new Response("Unix socket"); },
});
```
