# Databases

## Table of Contents

- [Bun.sql — Connection](#bunsql--connection)
- [Bun.sql — Queries](#bunsql--queries)
- [Bun.sql — Data Manipulation](#bunsql--data-manipulation)
- [Bun.sql — Transactions](#bunsql--transactions)
- [Bun.sql — MySQL Specifics](#bunsql--mysql-specifics)
- [Bun.sql — SQLite via SQL](#bunsql--sqlite-via-sql)
- [Bun.sql — Error Handling](#bunsql--error-handling)
- [bun:sqlite (Sync API)](#bunsqlite-sync-api)
- [Bun.redis](#bunredis)

## Bun.sql — Connection

```ts
import { sql, SQL } from "bun";

// Global singleton — reads env vars automatically
const rows = await sql`SELECT 1`;

// Explicit connection
const pg = new SQL("postgres://user:pass@localhost:5432/mydb");
const mysql = new SQL("mysql://user:pass@localhost:3306/mydb");
const sqlite = new SQL(":memory:");
const sqliteFile = new SQL("sqlite://app.db");
```

### Connection Options

```ts
const db = new SQL({
  url: "postgres://...",
  max: 20,                   // max pool connections
  idleTimeout: 30,           // seconds
  maxLifetime: 3600,         // seconds
  connectionTimeout: 10,     // seconds
  ssl: "prefer",             // "disable" | "require" | "verify-ca" | "verify-full"
  bigint: true,              // return large ints as BigInt
  prepare: false,            // disable prepared statements (for PGBouncer)
});
```

### Env Vars

**PostgreSQL:** `DATABASE_URL`, `POSTGRES_URL`, `PGHOST`, `PGPORT`, `PGUSERNAME`/`PGUSER`, `PGPASSWORD`, `PGDATABASE`

**MySQL:** `MYSQL_URL`, `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_USER`, `MYSQL_PASSWORD`, `MYSQL_DATABASE`

### Reserved Connections

```ts
const reserved = await sql.reserve();
try {
  await reserved`INSERT INTO users (name) VALUES ('Alice')`;
} finally {
  reserved.release();
}

// Or with using (auto-release)
{ using conn = await sql.reserve(); await conn`SELECT 1`; }
```

### Preconnect

```bash
bun --sql-preconnect index.js
```

### Close

```ts
await sql.close();  // graceful
```

## Bun.sql — Queries

```ts
// Array of objects (default)
const users = await sql`SELECT * FROM users`;

// Array of arrays
const rows = await sql`SELECT * FROM users`.values();

// Raw buffers
const raw = await sql`SELECT * FROM users`.raw();

// Multi-statement (no prepared statement)
await sql`SELECT 1; SELECT 2;`.simple();

// From .sql file
await sql.file("query.sql", [param1, param2]);

// Unsafe (dynamic column/table names — use sparingly)
await sql.unsafe(`SELECT ${col} FROM users WHERE id = $1`, [id]);
```

## Bun.sql — Data Manipulation

### Insert

```ts
// Single object
const [user] = await sql`INSERT INTO users ${sql({ name: "Alice", email: "a@b.com" })} RETURNING *`;

// Bulk insert (array of objects)
await sql`INSERT INTO users ${sql([
  { name: "Alice", email: "a@b.com" },
  { name: "Bob", email: "b@b.com" },
])}`;
```

### Update

```ts
// Pick specific columns from object
await sql`UPDATE users SET ${sql(user, "name", "email")} WHERE id = ${user.id}`;
```

### Dynamic Queries

```ts
// IN clause
await sql`SELECT * FROM users WHERE id IN ${sql([1, 2, 3])}`;

// Conditional fragments
const ageFilter = minAge ? sql`AND age > ${minAge}` : sql``;
await sql`SELECT * FROM users WHERE active = ${true} ${ageFilter}`;

// PostgreSQL arrays
await sql`INSERT INTO tags (items) VALUES (${sql.array(["red", "blue"])})`;
```

## Bun.sql — Transactions

```ts
// Basic
await sql.begin(async (tx) => {
  const [user] = await tx`INSERT INTO users (name) VALUES ('Alice') RETURNING *`;
  await tx`INSERT INTO accounts (user_id, balance) VALUES (${user.id}, 100)`;
});

// Savepoints
await sql.begin(async (tx) => {
  await tx`INSERT INTO users (name) VALUES ('Alice')`;
  await tx.savepoint(async (sp) => {
    await sp`UPDATE balances SET amount = 0`;
    if (condition) throw new Error("rollback savepoint only");
  });
  // Outer transaction continues
});

// Distributed
await sql.beginDistributed("tx-id-1", async (tx) => {
  await tx`UPDATE accounts SET balance = balance - 100 WHERE id = 1`;
});
await sql.commitDistributed("tx-id-1");
// or: await sql.rollbackDistributed("tx-id-1");
```

## Bun.sql — MySQL Specifics

```ts
const mysql = new SQL("mysql://user:pass@localhost:3306/mydb");

// Result metadata
const result = await mysql`INSERT INTO users (name) VALUES ('Alice')`;
result.lastInsertRowid;  // auto-increment ID
result.affectedRows;     // rows affected

// Stored procedures
await mysql`CALL GetUserStats(${userId}, @total_orders)`;
const [stats] = await mysql`SELECT @total_orders AS total`;
```

## Bun.sql — SQLite via SQL

```ts
const sqlite = new SQL(":memory:");
// or: new SQL({ adapter: "sqlite", filename: "app.db", readonly: false, create: true, strict: true })

await sqlite`PRAGMA journal_mode = WAL`;
await sqlite`PRAGMA foreign_keys = ON`;

await sqlite`CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)`;
await sqlite`INSERT INTO users (name) VALUES ('Alice')`;
const users = await sqlite`SELECT * FROM users`;
```

## Bun.sql — Error Handling

```ts
import { SQL } from "bun";

try {
  await sql`INSERT INTO users (email) VALUES ('duplicate@test.com')`;
} catch (err) {
  if (err instanceof SQL.PostgresError) {
    console.log(err.code);    // e.g. "23505" (unique violation)
    console.log(err.message);
  }
  if (err instanceof SQL.SQLiteError) { /* ... */ }
  if (err instanceof SQL.SQLError) { /* generic */ }
}
```

## bun:sqlite (Sync API)

Synchronous, embedded SQLite — no network, no async.

```ts
import { Database } from "bun:sqlite";

const db = new Database("app.db");
// Options: { readonly: true, create: true, safeIntegers: true, strict: true }
const db = new Database(":memory:");
```

### Query Methods

```ts
const stmt = db.query("SELECT * FROM users WHERE id = $id");

stmt.all({ $id: 42 });      // → object[]
stmt.get({ $id: 42 });      // → object | null
stmt.run({ $id: 42 });      // → { lastInsertRowid, changes }
stmt.values({ $id: 42 });   // → any[][] (array of arrays)

// Memory-efficient iteration
for (const row of stmt.iterate({ $id: 42 })) { }
```

### Parameter Styles

Named: `$param`, `:param`, `@param`
Positional: `?1`, `?2`, or just `?`

### Class Mapping

```ts
class User {
  id!: number;
  name!: string;
}
const users = db.query("SELECT * FROM users").as(User).all();
// → User[] (instances, not plain objects)
```

### Transactions

```ts
const insertMany = db.transaction((items: { name: string }[]) => {
  const insert = db.prepare("INSERT INTO items (name) VALUES ($name)");
  for (const item of items) insert.run(item);
});

insertMany([{ name: "a" }, { name: "b" }, { name: "c" }]);
// Automatic ROLLBACK on error
```

### WAL Mode

```ts
db.run("PRAGMA journal_mode = WAL;");
```

### Serialize / Deserialize

```ts
const snapshot = db.serialize();          // → Buffer
const restored = Database.deserialize(snapshot);
```

### Load Extensions

```ts
db.loadExtension("path/to/extension");
```

### Embed in Executable

```ts
import db from "./app.db" with { type: "sqlite", embed: "true" };
const users = db.query("SELECT * FROM users").all();
```

### Type Mapping

| JS Type | SQLite Type |
|---------|-------------|
| string | TEXT |
| number | INTEGER or DECIMAL |
| boolean | INTEGER (0/1) |
| Uint8Array | BLOB |
| bigint | INTEGER |
| null | NULL |

## Bun.redis

### Connection

```ts
import { redis, RedisClient } from "bun";

// Global singleton — reads REDIS_URL, VALKEY_URL, or defaults to localhost:6379
await redis.set("key", "value");

// Explicit client
const client = new RedisClient("redis://user:pass@localhost:6379/0");

// TLS
const tls = new RedisClient("rediss://host:6380");
// or: "redis+tls://host:6380"

// Unix socket
const unix = new RedisClient("redis+unix:///tmp/redis.sock");
```

### Client Options

```ts
new RedisClient(url, {
  connectionTimeout: 5000,
  idleTimeout: 30000,
  autoReconnect: true,
  maxRetries: 10,
  enableOfflineQueue: true,
  enableAutoPipelining: true,  // default: true, batches commands
  tls: true,
});
```

### String Operations

```ts
await redis.set("key", "value", { ex: 60 });   // expire in 60s
await redis.get("key");                          // string | null
await redis.getBuffer("key");                    // Buffer
await redis.del("key");
await redis.exists("key");                       // boolean
await redis.expire("key", 60);
await redis.ttl("key");
await redis.incr("counter");
await redis.decr("counter");
```

### Hash Operations

```ts
await redis.hmset("user:1", { name: "Alice", role: "admin" });
await redis.hmget("user:1", "name", "role");     // string[]
await redis.hget("user:1", "name");
await redis.hincrby("user:1", "loginCount", 1);
```

### Set Operations

```ts
await redis.sadd("tags", "red", "blue", "green");
await redis.srem("tags", "red");
await redis.sismember("tags", "blue");  // boolean
await redis.smembers("tags");           // string[]
await redis.spop("tags");               // random member
```

### Pub/Sub

```ts
// Listener (use .duplicate() if same client does pub+sub)
const listener = client.duplicate();
await listener.subscribe("events", (message, channel) => {
  console.log(`${channel}: ${message}`);
});

// Publisher
await client.publish("events", JSON.stringify({ type: "update" }));

// Unsubscribe
await listener.unsubscribe("events");
```

### Raw Commands

```ts
const info = await redis.send("INFO", []);
await redis.send("LPUSH", ["mylist", "val1", "val2"]);
await redis.send("LRANGE", ["mylist", "0", "-1"]);
```

### Lifecycle

```ts
await client.connect();
client.close();
client.onconnect = () => console.log("connected");
client.onclose = (err) => console.log("closed", err);
```
