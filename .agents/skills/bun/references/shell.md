# Bun Shell ($)

## Table of Contents

- [Basics](#basics)
- [Output Methods](#output-methods)
- [Error Handling](#error-handling)
- [Piping & Redirection](#piping--redirection)
- [JS Object I/O](#js-object-io)
- [Environment & Config](#environment--config)
- [Builtins](#builtins)
- [Utilities](#utilities)
- [Security](#security)

## Basics

```ts
import { $ } from "bun";

// Run command, prints to stdout
await $`echo "Hello World"`;

// Capture output
const output = await $`ls -la`.text();
```

## Output Methods

| Method | Returns |
|--------|---------|
| `.text()` | `Promise<string>` — stdout as string |
| `.json()` | `Promise<any>` — stdout parsed as JSON |
| `.lines()` | `AsyncIterable<string>` — line-by-line |
| `.blob()` | `Promise<Blob>` — stdout as Blob |
| `.quiet()` | Suppresses stdout (returns shell output) |
| `await $\`...\`` | `ShellOutput` with `.stdout`, `.stderr` (Buffers), `.exitCode` |

```ts
const text = await $`cat data.json`.text();
const data = await $`cat data.json`.json();

for await (const line of $`cat large.txt`.lines()) {
  console.log(line);
}

const result = await $`echo hi`.quiet();
console.log(result.stdout.toString()); // "hi\n"
```

## Error Handling

Non-zero exit codes throw `ShellError` by default.

```ts
try {
  await $`exit 1`;
} catch (err) {
  err.exitCode; // 1
  err.stdout;   // Buffer
  err.stderr;   // Buffer
  err.message;  // includes command + stderr
}
```

### Suppress Errors

```ts
// Per-command
const result = await $`may-fail`.nothrow();
console.log(result.exitCode);

// Global
$.throws(false);
const result = await $`may-fail`;
```

## Piping & Redirection

```ts
// Pipe between commands
await $`cat file.txt | grep "pattern" | wc -l`;

// Redirect stdout to file
await $`echo "hello" > output.txt`;

// Append
await $`echo "more" >> output.txt`;

// Redirect stderr
await $`cmd 2> errors.txt`;

// Redirect both stdout and stderr
await $`cmd &> all.txt`;

// Redirect stderr to stdout
await $`cmd 2>&1`;

// Redirect stdout to stderr
await $`cmd 1>&2`;
```

## JS Object I/O

Redirect from/to JavaScript objects:

```ts
// Read from Response, Blob, Buffer, Bun.file(), TypedArray
const response = new Response("hello world");
const text = await $`cat < ${response}`.text(); // "hello world"

// Write to Bun.file
await $`echo "data" > ${Bun.file("output.txt")}`;

// Read from Bun.file
const content = await $`cat < ${Bun.file("input.txt")}`.text();

// Chain JS → shell → JS
const data = Buffer.from("hello");
const result = await $`cat < ${data} | wc -c`.text();
```

## Environment & Config

```ts
// Per-command
await $`echo $MY_VAR`.env({ MY_VAR: "hello" });
await $`ls`.cwd("/tmp");

// Global defaults (affects all subsequent commands)
$.cwd("/project");
$.env({ ...process.env, NODE_ENV: "production" });
```

## Builtins

Cross-platform shell builtins (work on all platforms):

`cd`, `ls`, `rm`, `echo`, `pwd`, `bun`, `cat`, `touch`, `mkdir`, `which`, `mv`, `exit`, `true`, `false`, `yes`, `seq`, `dirname`, `basename`

```ts
await $`cd /tmp && ls -la`;
await $`mkdir -p ./dist/assets`;
await $`rm -rf ./build`;
await $`which bun`;
```

### .sh File Loader

```bash
bun run script.sh  # cross-platform shell execution
```

## Utilities

### Brace Expansion

```ts
$.braces("file.{ts,js,json}");
// → ["file.ts", "file.js", "file.json"]

$.braces("{1..5}");
// → ["1", "2", "3", "4", "5"]
```

### Escape

```ts
$.escape("hello world; rm -rf /");
// → "hello\\ world\\;\\ rm\\ -rf\\ /"
```

### Raw (Unescaped) Interpolation

```ts
const cmd = "echo hello && echo world";
await $`${{ raw: cmd }}`; // NOT escaped — runs both commands
```

## Security

- **Auto-escaping:** All interpolated `${}` values are treated as literal strings. No shell injection possible.
- **No glob expansion** on interpolated values — only on static parts of the template.
- **Caveats with `bash -c`:** If you pass interpolated values into `bash -c "..."`, the inner shell re-interprets them. Avoid this pattern.

```ts
const userInput = "hello; rm -rf /";
await $`echo ${userInput}`; // Safe: prints literal "hello; rm -rf /"

// UNSAFE: don't do this
await $`bash -c "echo ${userInput}"`; // Inner bash re-parses the string
```
