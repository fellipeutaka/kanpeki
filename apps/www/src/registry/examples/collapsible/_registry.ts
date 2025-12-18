import type { RegistryItem } from "shadcn/schema";

export const collapsibleExamples: RegistryItem[] = [
  {
    name: "collapsible-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/collapsible"],
    files: [
      {
        path: "src/registry/examples/collapsible/collapsible-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
