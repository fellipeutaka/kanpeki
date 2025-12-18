import type { RegistryItem } from "shadcn/schema";

export const progressExamples: RegistryItem[] = [
  {
    name: "progress-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/progress"],
    files: [
      {
        path: "src/registry/examples/progress/progress-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
