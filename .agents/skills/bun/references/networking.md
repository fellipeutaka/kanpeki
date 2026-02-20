# Networking

## Table of Contents

- [TCP Sockets](#tcp-sockets)
- [UDP Sockets](#udp-sockets)
- [DNS](#dns)
- [Fetch](#fetch)

## TCP Sockets

### Server (Bun.listen)

```ts
const server = Bun.listen<{ sessionId: string }>({
  hostname: "localhost",
  port: 8080,
  socket: {
    open(socket) {
      socket.data = { sessionId: crypto.randomUUID() };
    },
    data(socket, data) {
      socket.write(`Echo: ${data}`);
    },
    close(socket) {},
    drain(socket) {},       // backpressure relieved
    error(socket, error) {},
  },
});

server.stop();             // stop listening
server.stop(true);         // force close all connections
server.unref();            // allow process exit
server.reload(config);     // hot reload handlers for all connections
```

### Client (Bun.connect)

```ts
const socket = await Bun.connect({
  hostname: "localhost",
  port: 8080,
  socket: {
    open(socket) { socket.write("hello"); },
    data(socket, data) { console.log(data.toString()); },
    close(socket) {},
    connectError(socket, error) {},  // connection failed
    end(socket) {},                  // server closed connection
    timeout(socket) {},
  },
});
```

### TLS

```ts
Bun.listen({
  hostname: "localhost",
  port: 8443,
  tls: {
    key: Bun.file("./key.pem"),
    cert: Bun.file("./cert.pem"),
  },
  socket: { /* handlers */ },
});

// Client with TLS
await Bun.connect({
  hostname: "example.com",
  port: 443,
  tls: true,
  socket: { /* handlers */ },
});
```

### Performance

- Handlers declared once per server (not per socket) — less GC pressure
- Batch writes with `ArrayBufferSink({ stream: true })` instead of multiple small `socket.write()` calls
- Monitor `socket.write()` return value for backpressure; `drain` signals readiness

## UDP Sockets

### Basic Usage

```ts
// Server
const server = await Bun.udpSocket({
  port: 41234,
  socket: {
    data(socket, buf, port, addr) {
      console.log(`From ${addr}:${port}: ${buf.toString()}`);
      socket.send("ack", port, addr);
    },
    drain(socket) {},  // ready for more sends
  },
});

// Client
const client = await Bun.udpSocket({
  connect: { hostname: "127.0.0.1", port: 41234 },
});
client.send("Hello");
```

### Batch Sending

```ts
// Unconnected: [data, port, addr, data, port, addr, ...]
socket.sendMany(["msg1", 41234, "127.0.0.1", "msg2", 41234, "127.0.0.1"]);

// Connected: [data, data, ...]
client.sendMany(["msg1", "msg2", "msg3"]);
// Returns count of successfully sent packets
```

### Socket Options

```ts
socket.setBroadcast(true);
socket.setTTL(64);
```

### Multicast

```ts
socket.addMembership("224.0.0.1");
socket.addMembership("224.0.0.1", "192.168.1.100");  // specific interface
socket.dropMembership("224.0.0.1");
socket.setMulticastTTL(2);
socket.setMulticastLoopback(true);
socket.setMulticastInterface("192.168.1.100");

// Source-specific multicast
socket.addSourceSpecificMembership("10.0.0.1", "232.0.0.1");
socket.dropSourceSpecificMembership("10.0.0.1", "232.0.0.1");
```

**Note:** `send()` requires IP addresses (no DNS resolution for low-latency).

## DNS

### Bun DNS

```ts
import { dns } from "bun";

// Prefetch — resolve ahead of time to avoid latency
dns.prefetch("api.example.com", 443);

// Cache stats
const stats = dns.getCacheStats();
// { cacheHitsCompleted, cacheHitsInflight, cacheMisses, size, errors, totalCount }
```

Cache: 30s TTL per entry, max 255 entries. Override with `BUN_CONFIG_DNS_TIME_TO_LIVE_SECONDS`.

### Node.js DNS

```ts
import * as dns from "node:dns";

const addrs = await dns.promises.resolve4("bun.com", { ttl: true });
// [{ address: "172.67.161.226", family: 4, ttl: 0 }, ...]

await dns.promises.resolve("bun.com", "MX");
await dns.promises.reverse("172.67.161.226");
```

## Fetch

Bun's `fetch` is a drop-in replacement for the Web Fetch API with extras:

```ts
// Standard usage
const res = await fetch("https://api.example.com/data");
const json = await res.json();

// Unix domain socket
const res = await fetch("http://localhost/path", {
  unix: "/tmp/my-app.sock",
});

// S3 protocol
const res = await fetch("s3://my-bucket/file.txt");

// Verbose logging (debug)
// Set BUN_CONFIG_VERBOSE_FETCH=curl to log all fetch requests with curl-like headers
```

### Proxy

```ts
const res = await fetch("https://example.com", {
  proxy: "http://proxy.example.com:8080",
});

// Environment variables (auto-detected):
// HTTP_PROXY, HTTPS_PROXY, NO_PROXY, ALL_PROXY
```

### TLS Options

```ts
const res = await fetch("https://self-signed.example.com", {
  tls: {
    rejectUnauthorized: false,  // skip cert validation (dev only)
    ca: Bun.file("./ca.pem"),
  },
});
```

### Limits

Default max concurrent HTTP connections: 256. Override with `BUN_CONFIG_MAX_HTTP_REQUESTS`.
