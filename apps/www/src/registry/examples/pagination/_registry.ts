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
  {
    name: "pagination-simple-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/pagination"],
    files: [
      {
        path: "src/registry/examples/pagination/pagination-simple-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "pagination-icons-only-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/pagination"],
    files: [
      {
        path: "src/registry/examples/pagination/pagination-icons-only-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
