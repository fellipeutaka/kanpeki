import type { RegistryItem } from "shadcn/schema";

export const paginationExamples: RegistryItem[] = [
  {
    name: "pagination-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/pagination"],
    files: [
      {
        path: "src/registry/examples/pagination/pagination-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
