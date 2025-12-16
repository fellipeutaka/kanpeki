import type { RegistryItem } from "shadcn/schema";

export const separatorExamples: RegistryItem[] = [
  {
    name: "separator-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/separator"],
    files: [
      {
        path: "src/registry/examples/separator/separator-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "separator-vertical-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/separator"],
    files: [
      {
        path: "src/registry/examples/separator/separator-vertical-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
