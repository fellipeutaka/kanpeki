import type { RegistryItem } from "shadcn/schema";

export const dialogExamples: RegistryItem[] = [
  {
    name: "dialog-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/dialog"],
    files: [
      {
        path: "src/registry/examples/dialog/dialog-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dialog-scrollable-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/dialog"],
    files: [
      {
        path: "src/registry/examples/dialog/dialog-scrollable-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "alert-dialog-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/dialog"],
    files: [
      {
        path: "src/registry/examples/dialog/alert-dialog-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
