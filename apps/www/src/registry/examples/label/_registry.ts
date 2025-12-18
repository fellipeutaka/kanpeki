import type { RegistryItem } from "shadcn/schema";

export const labelExamples: RegistryItem[] = [
  {
    name: "label-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/label"],
    files: [
      {
        path: "src/registry/examples/label/label-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
