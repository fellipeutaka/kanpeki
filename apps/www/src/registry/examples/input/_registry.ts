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
    name: "input-file",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input", "@kanpeki/label"],
    files: [
      {
        path: "src/registry/examples/input/input-file.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-disabled",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input"],
    files: [
      {
        path: "src/registry/examples/input/input-disabled.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-with-label",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input", "@kanpeki/label"],
    files: [
      {
        path: "src/registry/examples/input/input-with-label.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-with-button",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input", "@kanpeki/button"],
    files: [
      {
        path: "src/registry/examples/input/input-with-button.tsx",
        type: "registry:example",
      },
    ],
  },
];
