import type { RegistryItem } from "shadcn/schema";

export const chartExamples: RegistryItem[] = [
  {
    name: "chart-area-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/chart"],
    files: [
      {
        path: "src/registry/examples/chart/chart-area-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-bar-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/chart"],
    files: [
      {
        path: "src/registry/examples/chart/chart-bar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/chart"],
    files: [
      {
        path: "src/registry/examples/chart/chart-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "chart-line-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/chart"],
    files: [
      {
        path: "src/registry/examples/chart/chart-line-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
