# Framework Usage Patterns

Per-framework code examples for using Denji-generated icons.

## React

### File Mode (default)

```tsx
import { Icons, type IconName, type IconProps } from "./icons";

// Basic usage
<Icons.Check className="size-4 text-green-500" />

// With forwardRef (requires react.forwardRef: true)
const ref = useRef<SVGSVGElement>(null);
<Icons.Check ref={ref} className="size-4" />

// Dynamic icon
function Icon({ name, ...props }: { name: IconName } & IconProps) {
  const Comp = Icons[name];
  return <Comp {...props} />;
}
```

### Folder Mode

```tsx
import { Icons } from "./icons";
// Or direct import for tree-shaking:
import { Check } from "./icons";

<Check className="size-4" />
```

## Preact

### File Mode (default)

```tsx
import { Icons, type IconName, type IconProps } from "./icons";

<Icons.Check className="size-4 text-green-500" />

// With forwardRef (requires preact.forwardRef: true, uses preact/compat)
const ref = useRef<SVGSVGElement>(null);
<Icons.Check ref={ref} className="size-4" />
```

### Folder Mode

```tsx
import { Icons } from "./icons";
import { Check } from "./icons";

<Check className="size-4" />
```

## Solid

### File Mode (default)

```tsx
import { Icons, type IconName, type IconProps } from "./icons";

<Icons.Check class="size-4 text-green-500" />

// Refs work natively as props
let ref: SVGSVGElement;
<Icons.Check ref={ref!} class="size-4" />

// Dynamic icon
function Icon(props: { name: IconName } & IconProps) {
  const Comp = Icons[props.name];
  return <Comp class={props.class} />;
}
```

### Folder Mode

```tsx
import { Icons } from "./icons";
import { Check } from "./icons";

<Check class="size-4" />
```

## Qwik

### File Mode (default)

```tsx
import { Icons, type IconProps } from "./icons";

<Icons.Check class="size-4 text-green-500" />
```

### Folder Mode

Uses `component$()` wrapper for each icon:

```tsx
import { Icons } from "./icons";
import { Check } from "./icons";

<Check class="size-4" />
```

## Vue

### File Mode (default)

Uses `h()` render functions with `FunctionalComponent` types.

```vue
<script setup lang="ts">
import { Icons, type IconName, type IconProps } from "./icons";
</script>

<template>
  <Icons.Check class="size-4 text-green-500" />
</template>
```

Dynamic icon in Vue:

```vue
<script setup lang="ts">
import { Icons, type IconName } from "./icons";

const props = defineProps<{ name: IconName }>();
const Icon = computed(() => Icons[props.name]);
</script>

<template>
  <component :is="Icon" class="size-4" />
</template>
```

### Folder Mode

```vue
<script setup lang="ts">
import { Icons } from "./icons";
</script>

<template>
  <Icons.Check class="size-4" />
</template>
```

## Svelte

Svelte uses folder mode only. Generates `.svelte` components with Svelte 5 `$props()` runes.

### Basic Usage

```svelte
<script lang="ts">
  import { Icons } from "./icons";
</script>

<Icons.Check class="size-4 text-green-500" />
```

### Direct Import

```svelte
<script lang="ts">
  import Check from "./icons/Check.svelte";
</script>

<Check class="size-4 text-green-500" />
```

## TypeScript Types

All frameworks generate these types (in file mode, exported from the icons file; in folder mode, from `index.ts` or `types.ts`):

| Type | Description |
|------|-------------|
| `IconProps` | SVG element props type for the framework |
| `Icon` | Icon component type |
| `IconName` | Union of all icon names (`"Check" \| "Home" \| ...`) |

```tsx
import { type IconName, type IconProps, type Icon } from "./icons";

// IconName for type-safe icon selection
const icon: IconName = "Check";

// IconProps for extending icon components
interface ButtonProps {
  icon: IconName;
  iconProps?: IconProps;
}
```

## Folder Mode File Structure

```
icons/
├── Check.tsx        # Individual icon component
├── Home.tsx
├── ArrowRight.tsx
├── index.ts         # Barrel export: export { Check } from "./Check"
└── types.ts         # Shared types (Svelte)
```
