import type { RegistryItem } from "shadcn/schema";

export const switchExamples: RegistryItem[] = [
  {
    name: "switch-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/switch"],
    files: [
      {
        path: "src/registry/examples/switch/switch-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "switch-group-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/switch"],
    files: [
      {
        path: "src/registry/examples/switch/switch-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
