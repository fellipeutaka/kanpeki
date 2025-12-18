import type { RegistryItem } from "shadcn/schema";

export const toggleExamples: RegistryItem[] = [
  {
    name: "toggle-custom-fill-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/toggle"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/registry/examples/toggle/toggle-custom-fill-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/toggle"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/registry/examples/toggle/toggle-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-disabled-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/toggle"],
    files: [
      {
        path: "src/registry/examples/toggle/toggle-disabled-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-group-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/toggle"],
    files: [
      {
        path: "src/registry/examples/toggle/toggle-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-large-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/toggle"],
    files: [
      {
        path: "src/registry/examples/toggle/toggle-large-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-outline-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/toggle"],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/registry/examples/toggle/toggle-outline-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toggle-small-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/toggle"],
    files: [
      {
        path: "src/registry/examples/toggle/toggle-small-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
