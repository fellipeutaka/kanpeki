import type { RegistryItem } from "shadcn/schema";

export const resizableExamples: RegistryItem[] = [
  {
    name: "resizable-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/resizable"],
    files: [
      {
        path: "src/registry/examples/resizable/resizable-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
