import type { RegistryItem } from "shadcn/schema";

export const tableExamples: RegistryItem[] = [
  {
    name: "table-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/table"],
    files: [
      {
        path: "src/registry/examples/table/table-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
