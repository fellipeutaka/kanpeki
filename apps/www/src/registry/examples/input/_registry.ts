import type { RegistryItem } from "shadcn/schema";

export const inputExamples: RegistryItem[] = [
  {
    name: "input-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input"],
    files: [
      {
        path: "src/registry/examples/input/input-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-file-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input", "@kanpeki/label"],
    files: [
      {
        path: "src/registry/examples/input/input-file-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-disabled-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input"],
    files: [
      {
        path: "src/registry/examples/input/input-disabled-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-with-label-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input", "@kanpeki/label"],
    files: [
      {
        path: "src/registry/examples/input/input-with-label-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-with-button-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input", "@kanpeki/button"],
    files: [
      {
        path: "src/registry/examples/input/input-with-button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
