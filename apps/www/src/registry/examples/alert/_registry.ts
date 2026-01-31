import type { RegistryItem } from "shadcn/schema";

export const alertExamples: RegistryItem[] = [
  {
    name: "alert-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/alert"],
    files: [
      {
        path: "src/registry/examples/alert/alert-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "alert-destructive-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/alert"],
    files: [
      {
        path: "src/registry/examples/alert/alert-destructive-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "alert-warning-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/alert"],
    files: [
      {
        path: "src/registry/examples/alert/alert-warning-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
