import type { RegistryItem } from "shadcn/schema";

export const radioGroupExamples: RegistryItem[] = [
  {
    name: "radio-group-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/radio-group"],
    files: [
      {
        path: "src/registry/examples/radio-group/radio-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "radio-group-disabled-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/radio-group"],
    files: [
      {
        path: "src/registry/examples/radio-group/radio-group-disabled-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "radio-group-with-description-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/radio-group"],
    files: [
      {
        path: "src/registry/examples/radio-group/radio-group-with-description-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
