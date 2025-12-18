import type { RegistryItem } from "shadcn/schema";

export const popoverExamples: RegistryItem[] = [
  {
    name: "popover-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/popover"],
    files: [
      {
        path: "src/registry/examples/popover/popover-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "popover-with-arrow-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/popover"],
    files: [
      {
        path: "src/registry/examples/popover/popover-with-arrow-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
