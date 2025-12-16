import type { RegistryItem } from "shadcn/schema";

export const scrollAreaExamples: RegistryItem[] = [
  {
    name: "scroll-area-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/scroll-area"],
    files: [
      {
        path: "src/registry/examples/scroll-area/scroll-area-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "scroll-area-horizontal-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/scroll-area"],
    files: [
      {
        path: "src/registry/examples/scroll-area/scroll-area-horizontal-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
