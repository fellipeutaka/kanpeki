# File I/O, S3, Glob, Streams, Hashing, Semver

## Table of Contents

- [Bun.file](#bunfile)
- [Bun.write](#bunwrite)
- [S3 (Bun.S3Client)](#s3-buns3client)
- [Glob](#glob)
- [Streams](#streams)
- [Hashing](#hashing)
- [Semver](#semver)

## Bun.file

Lazy file reference — no I/O until you read.

```ts
const file = Bun.file("data.json");

// Read
await file.text();          // string
await file.json();          // parsed JSON
await file.arrayBuffer();   // ArrayBuffer
await file.bytes();         // Uint8Array
await file.stream();        // ReadableStream

// Metadata
file.size;                  // bytes (sync)
file.type;                  // MIME type (sync)
await file.exists();        // boolean
await file.stat();          // { size, mtime, ... }

// Slice (lazy, no I/O)
const chunk = file.slice(0, 1024);
await chunk.text();

// Delete
await file.delete();
```

### Incremental Writing (FileSink)

```ts
const writer = Bun.file("log.txt").writer();
writer.write("line 1\n");
writer.write("line 2\n");
writer.write(new Uint8Array([0x48, 0x65]));
writer.flush();   // force write buffered data
writer.end();     // close
```

### Standard Streams

```ts
const input = await Bun.stdin.text();   // read all stdin
Bun.stdout;  // writable
Bun.stderr;  // writable
```

## Bun.write

```ts
// String
await Bun.write("out.txt", "hello");

// JSON
await Bun.write("data.json", JSON.stringify(obj));

// Copy file
await Bun.write(Bun.file("dest.txt"), Bun.file("src.txt"));

// From Response
await Bun.write("page.html", await fetch("https://example.com"));

// From Blob / Buffer / TypedArray
await Bun.write("data.bin", new Uint8Array([1, 2, 3]));
```

### Directory Operations (via node:fs)

```ts
import { readdir, mkdir, rm } from "node:fs/promises";

await readdir("./src", { recursive: true });
await mkdir("./dist/assets", { recursive: true });
await rm("./tmp", { recursive: true, force: true });
```

## S3 (Bun.S3Client)

### Setup

```ts
import { s3, S3Client } from "bun";

// Global singleton — reads env vars
const file = s3.file("photos/cat.jpg");

// Explicit client
const client = new S3Client({
  accessKeyId: "...",
  secretAccessKey: "...",
  bucket: "my-bucket",
  endpoint: "https://s3.us-east-1.amazonaws.com",
  region: "us-east-1",
});
const file = client.file("photos/cat.jpg");
```

### Env Vars (priority: S3_* then AWS_*)

`S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, `S3_REGION`, `S3_BUCKET`, `S3_ENDPOINT`, `S3_SESSION_TOKEN`

### Reading

```ts
await file.text();
await file.json();
await file.bytes();
await file.arrayBuffer();
await file.stream();

// Range read (HTTP Range)
const chunk = file.slice(0, 1024);
await chunk.text();
```

### Writing

```ts
await file.write("Hello World!");
await file.write(JSON.stringify(data), { type: "application/json" });

// Multipart upload (large files, automatic chunking)
const writer = file.writer({ partSize: 5 * 1024 * 1024, queueSize: 4 });
writer.write(chunk1);
writer.write(chunk2);
await writer.end();
```

### Presigned URLs

```ts
const url = file.presign({
  method: "PUT",         // "GET" | "PUT"
  expiresIn: 3600,       // seconds
  acl: "public-read",    // optional
});
```

### Other Operations

```ts
await file.exists();
await file.stat();        // { size, etag, lastModified, type }
await file.delete();      // or file.unlink()

// List objects
const objects = await S3Client.list({ bucket: "my-bucket", prefix: "photos/" });
```

### S3 Protocol

```ts
// Works with Bun.file and fetch
const file = Bun.file("s3://my-bucket/file.txt");
const text = await file.text();

const res = await fetch("s3://my-bucket/file.txt");
const json = await res.json();
```

### Service Endpoints

| Provider | Endpoint |
|----------|----------|
| AWS S3 | `https://s3.<region>.amazonaws.com` |
| Cloudflare R2 | `https://<account-id>.r2.cloudflarestorage.com` |
| DigitalOcean Spaces | `https://<region>.digitaloceanspaces.com` |
| Google Cloud Storage | `https://storage.googleapis.com` |
| MinIO | `http://localhost:9000` |

## Glob

```ts
import { Glob } from "bun";

const glob = new Glob("**/*.ts");

// Async scan
for await (const path of glob.scan("./src")) {
  console.log(path);
}

// Sync scan
for (const path of glob.scanSync("./src")) { }

// Test a string
glob.match("src/index.ts");  // true
glob.match("README.md");     // false
```

### Scan Options

```ts
glob.scan({
  cwd: "./src",          // root directory (default: cwd)
  dot: true,             // include dotfiles
  absolute: true,        // return absolute paths
  followSymlinks: true,  // follow symlinks
  onlyFiles: true,       // files only (default: true)
});
```

### Pattern Syntax

| Pattern | Meaning |
|---------|---------|
| `?` | Single character |
| `*` | Any chars (no path separator) |
| `**` | Any chars including `/` |
| `[ab]`, `[a-z]` | Character class |
| `[^ab]`, `[!a-z]` | Negated class |
| `{a,b,c}` | Alternation (up to 10 levels) |
| `!pattern` | Negate pattern |
| `\` | Escape special chars |

### Node.js Compat

```ts
import { glob, globSync } from "node:fs";
const files = globSync("**/*.ts", { cwd: "./src", exclude: ["node_modules"] });
```

## Streams

### Standard ReadableStream

```ts
const stream = new ReadableStream({
  start(controller) {
    controller.enqueue("hello ");
    controller.enqueue("world");
    controller.close();
  },
});
```

### Direct ReadableStream (Optimized)

No queue copying — data written directly to consumer:

```ts
const stream = new ReadableStream({
  type: "direct",
  pull(controller) {
    controller.write("hello ");
    controller.write("world");
    controller.flush();
  },
});
```

### Async Generator Responses

```ts
const response = new Response(
  (async function* () {
    yield "chunk 1\n";
    yield "chunk 2\n";
    yield "chunk 3\n";
  })()
);
```

### ArrayBufferSink

```ts
const sink = new Bun.ArrayBufferSink();
sink.start({ asUint8Array: true, highWaterMark: 1024 * 1024 });
sink.write("hello");
sink.write(new Uint8Array([1, 2, 3]));
const buf = sink.end();  // Uint8Array

// Streaming mode
sink.start({ stream: true, asUint8Array: true });
sink.write("chunk");
const partial = sink.flush();  // retrieve without closing
```

### Stream Utilities

```ts
await Bun.readableStreamToText(stream);
await Bun.readableStreamToArrayBuffer(stream);
await Bun.readableStreamToJSON(stream);
await Bun.readableStreamToBlob(stream);
```

## Hashing

### Password Hashing (Bun.password)

```ts
// Hash (default: argon2id)
const hash = await Bun.password.hash("my-password");

// Argon2 options
const hash = await Bun.password.hash("pw", {
  algorithm: "argon2id",  // "argon2id" | "argon2i" | "argon2d"
  memoryCost: 4,
  timeCost: 3,
});

// Bcrypt options
const hash = await Bun.password.hash("pw", {
  algorithm: "bcrypt",
  cost: 12,
});

// Verify
const valid = await Bun.password.verify("my-password", hash);

// Sync variants
Bun.password.hashSync("pw");
Bun.password.verifySync("pw", hash);
```

Salt auto-generated and embedded in hash string. Passwords >72 bytes pre-hashed via SHA-512 before bcrypt.

### Cryptographic Hashing (Bun.CryptoHasher)

```ts
const hasher = new Bun.CryptoHasher("sha256");
hasher.update("data part 1");
hasher.update("data part 2");
const hex = hasher.digest("hex");      // or "base64", "base64url"
const bytes = hasher.digest();          // Uint8Array

// HMAC
const hmac = new Bun.CryptoHasher("sha256", secretKey);
hmac.update("message");
const sig = hmac.digest("hex");
```

**Algorithms:** blake2b, md4, md5, ripemd160, sha1, sha224, sha256, sha384, sha512, sha3-224, sha3-256, sha3-384, sha3-512, shake128, shake256

### Non-Cryptographic Hashing (Bun.hash)

```ts
Bun.hash("data");                    // wyhash (default)
Bun.hash("data", 1234);             // with seed
Bun.hash.wyhash("data");
Bun.hash.crc32("data");
Bun.hash.adler32("data");
Bun.hash.cityHash32("data");
Bun.hash.cityHash64("data");
Bun.hash.xxHash32("data");
Bun.hash.xxHash64("data");
Bun.hash.xxHash3("data");
Bun.hash.murmur32v2("data");
Bun.hash.murmur32v3("data");
Bun.hash.murmur64v2("data");
```

## Semver

```ts
import { semver } from "bun";

semver.satisfies("1.2.3", "^1.0.0");       // true
semver.satisfies("2.0.0", "^1.0.0");       // false
semver.satisfies("1.0.0", ">=1.0.0 <2.0.0"); // true
semver.satisfies("1.0.0", "1.0.0 - 2.0.0");  // true

// Ordering (-1, 0, 1)
semver.order("1.0.0", "2.0.0");  // -1
semver.order("2.0.0", "1.0.0");  // 1
semver.order("1.0.0", "1.0.0");  // 0

// Sort versions
const sorted = versions.sort((a, b) => semver.order(a, b));
```

~20x faster than npm's `node-semver`.
