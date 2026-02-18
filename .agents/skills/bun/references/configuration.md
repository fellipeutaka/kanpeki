# Configuration (bunfig.toml)

Optional config file at project root or `$HOME/.bunfig.toml` (global). Local overrides global.

## Runtime

```toml
preload = ["./setup.ts"]           # scripts to run before entry
logLevel = "warn"                  # "debug" | "warn" | "error"
smol = true                        # reduce memory at cost of speed
telemetry = false                  # disable analytics/crash reports

[console]
depth = 4                          # console.log object depth (default: 2)
```

### JSX

```toml
jsx = "react-jsx"                  # "react" | "react-jsx" | "react-jsxdev"
jsxFactory = "h"                   # custom createElement
jsxFragment = "Fragment"           # custom fragment
jsxImportSource = "preact"         # import source
```

### Define & Loaders

```toml
[define]
"process.env.NODE_ENV" = "'production'"

[loader]
".bagel" = "tsx"
".yaml" = "toml"
```

### Environment

```toml
# Disable automatic .env loading
env = false

# Or configure specific behavior
[env]
prefix = "PUBLIC_"                 # only expose vars with prefix
```

## [run]

```toml
[run]
shell = "bun"                      # "bun" | "system" — shell for package.json scripts
bun = true                         # alias node → bun in scripts
silent = false                     # suppress command echo
```

## [test]

```toml
[test]
root = "."                         # test root directory
preload = ["./test-setup.ts"]      # test-specific preload
smol = true                        # reduce memory in tests
retry = 2                          # default retry count
randomize = true                   # random execution order
seed = 42                          # reproducible randomization

# Coverage
coverage = true
coverageThreshold = 0.8            # 0-1, fail below threshold
coverageSkipTestFiles = true
coveragePathIgnorePatterns = ["node_modules", "dist"]
coverageReporter = ["text", "lcov"]
coverageDir = "coverage"

# Reporting
[test.reporter]
dots = true                        # compact dot output
junit = "./test-results.xml"       # JUnit XML file

# Concurrent test patterns
concurrentTestGlob = "**/*.concurrent.test.ts"
```

## [install]

```toml
[install]
optional = true                    # install optionalDependencies
dev = true                         # install devDependencies
peer = true                        # install peerDependencies
production = false                 # skip devDependencies
exact = true                       # pin exact versions in package.json
frozenLockfile = true              # fail if lockfile out of date (CI)
saveTextLockfile = true            # generate text lockfile alongside bun.lock
auto = "fallback"                  # "auto" | "force" | "disable" | "fallback"
dryRun = false                     # simulate without writing
linkWorkspacePackages = true       # link monorepo packages

# Registry
registry = "https://registry.npmjs.org/"

# With auth
[install.registry]
url = "https://registry.npmjs.org/"
token = "$NPM_TOKEN"

# Scoped registries
[install.scopes]
"@mycompany" = { url = "https://npm.mycompany.com/", token = "$COMPANY_TOKEN" }

# Cache
[install.cache]
dir = "~/.bun/install/cache"
disable = false                    # disable global cache
disableManifest = false            # always resolve latest

# Lockfile
[install.lockfile]
save = true
print = "yarn"                     # also generate yarn.lock

# Linker
linker = "isolated"                # "isolated" | "hoisted"

# Security
minimumReleaseAge = 604800         # 7 days in seconds
minimumReleaseAgeExcludes = ["my-trusted-pkg"]

[install.security]
scanner = "bun-security-scanner"
```

### TLS / CA

```toml
[install]
ca = "-----BEGIN CERTIFICATE-----\n..."
cafile = "/path/to/ca.pem"
```

## Global Config

Global config at `$HOME/.bunfig.toml` or `$XDG_CONFIG_HOME/.bunfig.toml`:

```toml
[install]
globalDir = "~/.bun/install/global"
globalBinDir = "~/.bun/bin"

[install.cache]
dir = "~/.bun/install/cache"
```
