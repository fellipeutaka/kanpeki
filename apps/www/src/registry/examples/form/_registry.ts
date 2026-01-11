import type { RegistryItem } from "shadcn/schema";

export const formExamples: RegistryItem[] = [
  {
    name: "tanstack-form-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/form"],
    files: [
      {
        path: "src/registry/examples/form/tanstack-form-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
