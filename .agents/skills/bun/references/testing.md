# Testing (bun:test)

## Table of Contents

- [Basics](#basics)
- [Test Modifiers](#test-modifiers)
- [Parametrized Tests](#parametrized-tests)
- [Matchers](#matchers)
- [Mocking](#mocking)
- [Module Mocking](#module-mocking)
- [Snapshots](#snapshots)
- [Lifecycle Hooks](#lifecycle-hooks)
- [Coverage](#coverage)
- [Type Testing](#type-testing)
- [DOM Testing](#dom-testing)
- [CLI Reference](#cli-reference)

## Basics

```ts
import { test, expect, describe } from "bun:test";

test("simple", () => {
  expect(2 + 2).toBe(4);
});

describe("group", () => {
  test("nested", () => {
    expect(true).toBeTruthy();
  });
});

// Async
test("async", async () => {
  const res = await fetch("http://localhost:3000");
  expect(res.ok).toBe(true);
});

// Timeout (3rd arg, ms)
test("slow", async () => { /* ... */ }, 10000);

// Retry on failure
test("flaky", () => { /* ... */ }, { retry: 3 });

// Repeat N times
test("stress", () => { /* ... */ }, { repeats: 100 });
```

File patterns: `*.test.{js,jsx,ts,tsx}`, `*_test.*`, `*.spec.*`, `*_spec.*`

## Test Modifiers

| Modifier | Purpose |
|----------|---------|
| `test.skip(name, fn)` | Skip test |
| `test.todo(name)` | Placeholder (no function) |
| `test.only(name, fn)` | Run only this test |
| `test.if(cond)(name, fn)` | Run if condition true |
| `test.skipIf(cond)(name, fn)` | Skip if condition true |
| `test.todoIf(cond)(name, fn)` | Todo if condition true |
| `test.failing(name, fn)` | Expected to fail (passes if it throws) |
| `test.concurrent(name, fn)` | Run in parallel |
| `test.serial(name, fn)` | Force sequential |

```ts
test.skipIf(process.platform === "win32")("unix only", () => { /* ... */ });
test.if(Bun.env.CI)("CI only", () => { /* ... */ });
```

## Parametrized Tests

### Array of Arrays

```ts
test.each([
  [1, 2, 3],
  [4, 5, 9],
  [10, -5, 5],
])("%i + %i = %i", (a, b, expected) => {
  expect(a + b).toBe(expected);
});
```

### Array of Objects

```ts
test.each([
  { a: 1, b: 2, expected: 3 },
  { a: 4, b: 5, expected: 9 },
])("$a + $b = $expected", ({ a, b, expected }) => {
  expect(a + b).toBe(expected);
});
```

### describe.each

```ts
describe.each([
  { name: "postgres", url: "postgres://..." },
  { name: "mysql", url: "mysql://..." },
])("database: $name", ({ url }) => {
  test("connects", async () => { /* ... */ });
});
```

### Format Specifiers

| Specifier | Meaning |
|-----------|---------|
| `%p` | Pretty-print |
| `%s` | String |
| `%d` / `%i` | Number / Integer |
| `%f` | Float |
| `%j` | JSON |
| `%#` | Test index |
| `$key` | Object property |

## Matchers

### Equality

| Matcher | Purpose |
|---------|---------|
| `.toBe(val)` | Strict equality (===) |
| `.toEqual(val)` | Deep equality |
| `.toStrictEqual(val)` | Deep + type equality |
| `.toContain(val)` | Array/string contains |
| `.toContainEqual(val)` | Array contains deep equal |
| `.toMatchObject(obj)` | Subset match |
| `.toHaveProperty(key, val?)` | Object property |
| `.toHaveLength(n)` | Array/string length |

### Numbers

| Matcher | Purpose |
|---------|---------|
| `.toBeGreaterThan(n)` | > |
| `.toBeGreaterThanOrEqual(n)` | >= |
| `.toBeLessThan(n)` | < |
| `.toBeLessThanOrEqual(n)` | <= |
| `.toBeCloseTo(n, digits?)` | Float comparison |
| `.toBeNaN()` | NaN check |
| `.toBeFinite()` | Finite check |

### Truthiness

| Matcher | Purpose |
|---------|---------|
| `.toBeTruthy()` | Truthy value |
| `.toBeFalsy()` | Falsy value |
| `.toBeNull()` | === null |
| `.toBeUndefined()` | === undefined |
| `.toBeDefined()` | !== undefined |

### Strings

| Matcher | Purpose |
|---------|---------|
| `.toMatch(regex)` | Regex match |
| `.toStartWith(str)` | Starts with |
| `.toEndWith(str)` | Ends with |

### Errors

| Matcher | Purpose |
|---------|---------|
| `.toThrow()` | Throws any error |
| `.toThrow(msg)` | Throws with message |
| `.toThrow(ErrorClass)` | Throws specific type |
| `.toBeInstanceOf(Class)` | instanceof check |

### Promises

```ts
await expect(Promise.resolve(42)).resolves.toBe(42);
await expect(Promise.reject("err")).rejects.toBe("err");
```

### Mock Matchers

| Matcher | Purpose |
|---------|---------|
| `.toHaveBeenCalled()` | Called at least once |
| `.toHaveBeenCalledTimes(n)` | Called exactly N times |
| `.toHaveBeenCalledWith(...args)` | Called with args |
| `.toHaveBeenLastCalledWith(...args)` | Last call args |
| `.toHaveBeenNthCalledWith(n, ...args)` | Nth call args |
| `.toHaveReturned()` | Returned (didn't throw) |
| `.toHaveReturnedWith(val)` | Returned specific value |

### Asymmetric Matchers

```ts
expect({ name: "Alice", age: 30 }).toEqual({
  name: expect.any(String),
  age: expect.any(Number),
});

expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 3]));
expect("hello world").toEqual(expect.stringContaining("world"));
expect("hello world").toEqual(expect.stringMatching(/^hello/));
expect({ a: 1, b: 2 }).toEqual(expect.objectContaining({ a: 1 }));
expect(null).toEqual(expect.anything()); // fails — anything excludes null/undefined
```

### Negation

```ts
expect(1).not.toBe(2);
expect([]).not.toContain(5);
```

## Mocking

### Mock Functions

```ts
import { mock, spyOn } from "bun:test";

const fn = mock((x: number) => x * 2);
fn(5);

fn.mock.calls;       // [[5]]
fn.mock.results;     // [{ type: "return", value: 10 }]
fn.mock.lastCall;    // [5]

expect(fn).toHaveBeenCalled();
expect(fn).toHaveBeenCalledWith(5);
```

### Mock Methods

| Method | Purpose |
|--------|---------|
| `.mockImplementation(fn)` | Replace implementation |
| `.mockImplementationOnce(fn)` | Replace for next call only |
| `.mockReturnValue(val)` | Always return val |
| `.mockReturnValueOnce(val)` | Return val once |
| `.mockResolvedValue(val)` | Return resolved promise |
| `.mockResolvedValueOnce(val)` | Resolved promise once |
| `.mockRejectedValue(err)` | Return rejected promise |
| `.mockClear()` | Reset call history |
| `.mockReset()` | Clear + remove implementation |
| `.mockRestore()` | Restore original |

### Spies

```ts
const spy = spyOn(console, "log");
console.log("test");
expect(spy).toHaveBeenCalledWith("test");
spy.mockRestore();
```

### Global Reset

```ts
import { afterEach } from "bun:test";

afterEach(() => {
  mock.restore();  // restore all mocks and spies
});
```

## Module Mocking

```ts
import { mock } from "bun:test";

// Mock entire module
mock.module("./api-client", () => ({
  fetchUser: mock(async (id: number) => ({ id, name: `User ${id}` })),
  fetchPosts: mock(async () => []),
}));

// Mock node built-in
mock.module("node:fs/promises", () => ({
  readFile: mock(async () => "mocked content"),
}));
```

If module already imported, `mock.module` updates the module cache in-place.

To mock before any imports, use `--preload`:

```bash
bun test --preload ./test-mocks.ts
```

## Snapshots

### File Snapshots

```ts
test("snapshot", () => {
  expect({ users: [{ id: 1, name: "Alice" }] }).toMatchSnapshot();
});
// Stored in __snapshots__/<file>.test.ts.snap
```

### Inline Snapshots

```ts
test("inline", () => {
  expect(42).toMatchInlineSnapshot(); // auto-populated on first run
  // After first run:
  expect(42).toMatchInlineSnapshot(`42`);
});
```

### Error Snapshots

```ts
expect(() => { throw new Error("boom"); }).toThrowErrorMatchingSnapshot();
expect(() => { throw new Error("boom"); }).toThrowErrorMatchingInlineSnapshot();
```

### Property Matchers

```ts
test("with dynamic fields", () => {
  expect({
    id: crypto.randomUUID(),
    createdAt: new Date(),
    name: "Alice",
  }).toMatchSnapshot({
    id: expect.any(String),
    createdAt: expect.any(Date),
  });
});
```

### Update Snapshots

```bash
bun test --update-snapshots
```

## Lifecycle Hooks

| Hook | Scope |
|------|-------|
| `beforeAll(fn)` | Once before all tests |
| `beforeEach(fn)` | Before each test |
| `afterEach(fn)` | After each test |
| `afterAll(fn)` | Once after all tests |

Hooks inside `describe()` are scoped to that block. Top-level hooks apply to entire file.

```ts
import { beforeAll, afterAll, beforeEach } from "bun:test";

let db: Database;

beforeAll(async () => {
  db = new Database(":memory:");
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT)");
});

beforeEach(() => {
  db.run("DELETE FROM users");
});

afterAll(() => {
  db.close();
});
```

### Per-Test Cleanup

```ts
test("with cleanup", () => {
  const server = Bun.serve({ fetch: () => new Response("OK") });
  onTestFinished(() => server.stop());
  // ... test the server
});
```

### Global Setup via Preload

```toml
# bunfig.toml
[test]
preload = ["./test-setup.ts"]
```

## Coverage

```bash
bun test --coverage
bun test --coverage --coverage-threshold 0.8
```

```toml
# bunfig.toml
[test]
coverage = true
coverageThreshold = 0.8
coverageSkipTestFiles = true
coverageReporter = ["text", "lcov"]
coverageDir = "coverage"
```

## Type Testing

```ts
import { expectTypeOf } from "bun:test";

expectTypeOf(123).toBeNumber();
expectTypeOf("hello").toBeString();
expectTypeOf(true).toBeBoolean();
expectTypeOf(null).toBeNull();
expectTypeOf(undefined).toBeUndefined();

// Function types
function greet(name: string): string { return `Hi ${name}`; }
expectTypeOf(greet).parameters.toEqualTypeOf<[string]>();
expectTypeOf(greet).returns.toBeString();
```

Requires `bunx tsc --noEmit` to actually validate types (runtime assertions are no-ops).

## DOM Testing

### Setup with happy-dom

```bash
bun add -d @happy-dom/global-registerer
```

```toml
# bunfig.toml
[test]
preload = ["@happy-dom/global-registerer"]
```

### With React Testing Library

```bash
bun add -d @testing-library/react @testing-library/jest-dom
```

```ts
import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "bun:test";

test("renders button", () => {
  render(<button>Click me</button>);
  expect(screen.getByText("Click me")).toBeDefined();
});
```

## CLI Reference

| Flag | Purpose |
|------|---------|
| `bun test` | Run all tests |
| `bun test file.test.ts` | Run specific file |
| `--watch` | Watch mode |
| `--bail [n]` | Stop after N failures (default 1) |
| `--timeout <ms>` | Per-test timeout (default 5000) |
| `--test-name-pattern <pat>` | Filter by test name |
| `--only` | Run only `test.only` tests |
| `--todo` | Include `test.todo` |
| `--coverage` | Enable coverage |
| `--update-snapshots` | Update snapshot files |
| `--preload <file>` | Preload setup script |
| `--concurrent` | Run tests in parallel |
| `--max-concurrency <n>` | Max parallel tests (default 20) |
| `--randomize` | Random execution order |
| `--seed <n>` | Seed for randomization |
| `--retry <n>` | Retry failed tests |
| `--rerun-each <n>` | Repeat each test N times |
| `--reporter=junit` | JUnit XML output |
| `--reporter-outfile <path>` | Output file for reporter |

GitHub Actions: auto-detects and emits annotations with no config.

AI agents: set `AGENT=1` to suppress passing test output, preserving only failures.
