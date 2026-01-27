import type { RegistryItem } from "shadcn/schema";

export const aspectRatioExamples: RegistryItem[] = [
  {
    name: "aspect-ratio-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/aspect-ratio"],
    files: [
      {
        path: "src/registry/examples/aspect-ratio/aspect-ratio-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "aspect-ratio-square",
    type: "registry:example",
    registryDependencies: ["@kanpeki/aspect-ratio"],
    files: [
      {
        path: "src/registry/examples/aspect-ratio/aspect-ratio-square-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "aspect-ratio-portrait",
    type: "registry:example",
    registryDependencies: ["@kanpeki/aspect-ratio"],
    files: [
      {
        path: "src/registry/examples/aspect-ratio/aspect-ratio-portrait-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
