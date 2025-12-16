import type { RegistryItem } from "shadcn/schema";

export const drawerExamples: RegistryItem[] = [
  {
    name: "drawer-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/drawer"],
    files: [
      {
        path: "src/registry/examples/drawer/drawer-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
