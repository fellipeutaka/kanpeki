import type { RegistryItem } from "shadcn/schema";

export const tooltipExamples: RegistryItem[] = [
  {
    name: "tooltip-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/tooltip"],
    files: [
      {
        path: "src/registry/examples/tooltip/tooltip-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tooltip-hover-card-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/tooltip"],
    files: [
      {
        path: "src/registry/examples/tooltip/tooltip-hover-card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tooltip-positions-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/tooltip"],
    files: [
      {
        path: "src/registry/examples/tooltip/tooltip-positions-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tooltip-with-arrow-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/tooltip"],
    files: [
      {
        path: "src/registry/examples/tooltip/tooltip-with-arrow-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
