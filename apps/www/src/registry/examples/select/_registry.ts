import type { RegistryItem } from "shadcn/schema";

export const selectExamples: RegistryItem[] = [
  {
    name: "select-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/select"],
    files: [
      {
        path: "src/registry/examples/select/select-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-infinite-scroll-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/select",
      "@kanpeki/label",
      "@kanpeki/list-box",
      "@kanpeki/popover",
      "@kanpeki/spinner",
      "@tanstack/react-query",
    ],
    files: [
      {
        path: "src/registry/examples/select/select-infinite-scroll-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-scrollable-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/select"],
    files: [
      {
        path: "src/registry/examples/select/select-scrollable-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "select-with-label-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/select", "@kanpeki/label"],
    files: [
      {
        path: "src/registry/examples/select/select-with-label-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
