import type { RegistryItem } from "shadcn/schema";

export const badgeExamples: RegistryItem[] = [
  {
    name: "badge-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/badge"],
    files: [
      {
        path: "src/registry/examples/badge/badge-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-destructive-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/badge"],
    files: [
      {
        path: "src/registry/examples/badge/badge-destructive-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-outline-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/badge"],
    files: [
      {
        path: "src/registry/examples/badge/badge-outline-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-secondary-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/badge"],
    files: [
      {
        path: "src/registry/examples/badge/badge-secondary-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
