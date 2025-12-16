import type { RegistryItem } from "shadcn/schema";

export const checkboxExamples: RegistryItem[] = [
  {
    name: "checkbox-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/checkbox"],
    files: [
      {
        path: "src/registry/examples/checkbox/checkbox-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-disabled-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/checkbox"],
    files: [
      {
        path: "src/registry/examples/checkbox/checkbox-disabled-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "checkbox-group-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/checkbox"],
    files: [
      {
        path: "src/registry/examples/checkbox/checkbox-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
