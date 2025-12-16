import type { RegistryItem } from "shadcn/schema";

export const formExamples: RegistryItem[] = [
  {
    name: "login-form",
    type: "registry:example",
    registryDependencies: ["@kanpeki/form"],
    files: [
      {
        path: "src/registry/examples/form/login-form.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tanstack-form",
    type: "registry:example",
    registryDependencies: ["@kanpeki/form"],
    files: [
      {
        path: "src/registry/examples/form/tanstack-form.tsx",
        type: "registry:example",
      },
    ],
  },
];
