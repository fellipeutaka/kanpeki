import type { RegistryItem } from "shadcn/schema";

export const listBoxExamples: RegistryItem[] = [
  {
    name: "list-box-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/list-box"],
    files: [
      {
        path: "src/registry/examples/list-box/list-box-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
