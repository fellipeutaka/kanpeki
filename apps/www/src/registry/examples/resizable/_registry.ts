import type { RegistryItem } from "shadcn/schema";

export const resizableExamples: RegistryItem[] = [
  {
    name: "resizable-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/resizable"],
    files: [
      {
        path: "src/registry/examples/resizable/resizable-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "resizable-vertical-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/resizable"],
    files: [
      {
        path: "src/registry/examples/resizable/resizable-vertical-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "resizable-handle-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/resizable"],
    files: [
      {
        path: "src/registry/examples/resizable/resizable-handle-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
