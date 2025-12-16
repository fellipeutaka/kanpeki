import type { RegistryItem } from "shadcn/schema";

export const menuExamples: RegistryItem[] = [
  {
    name: "menu-checkboxes-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/menu"],
    files: [
      {
        path: "src/registry/examples/menu/menu-checkboxes-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "menu-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/menu"],
    files: [
      {
        path: "src/registry/examples/menu/menu-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "menu-radio-group-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/menu"],
    files: [
      {
        path: "src/registry/examples/menu/menu-radio-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
