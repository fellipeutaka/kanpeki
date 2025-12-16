import type { RegistryItem } from "shadcn/schema";

export const aspectRatioExamples: RegistryItem[] = [
  {
    name: "aspect-ratio-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/aspect"],
    files: [
      {
        path: "src/registry/examples/aspect-ratio/aspect-ratio-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
