import type { RegistryItem } from "shadcn/schema";

export const skeletonExamples: RegistryItem[] = [
  {
    name: "skeleton-card-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/skeleton", "@kanpeki/card"],
    files: [
      {
        path: "src/registry/examples/skeleton/skeleton-card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "skeleton-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/skeleton"],
    files: [
      {
        path: "src/registry/examples/skeleton/skeleton-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
