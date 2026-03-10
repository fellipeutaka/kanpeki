import type { RegistryItem } from "shadcn/schema";

export const emptyExamples: RegistryItem[] = [
  {
    name: "empty-avatar-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/empty",
      "@kanpeki/avatar",
      "@kanpeki/button",
    ],
    files: [
      {
        path: "src/registry/examples/empty/empty-avatar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "empty-avatar-group-demo",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "@kanpeki/empty",
      "@kanpeki/avatar",
      "@kanpeki/button",
    ],
    files: [
      {
        path: "src/registry/examples/empty/empty-avatar-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "empty-background-demo",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["@kanpeki/empty", "@kanpeki/button"],
    files: [
      {
        path: "src/registry/examples/empty/empty-background-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "empty-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/empty", "@kanpeki/button"],
    files: [
      {
        path: "src/registry/examples/empty/empty-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "empty-input-group-demo",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: [
      "@kanpeki/empty",
      "@kanpeki/input-group",
      "@kanpeki/keyboard",
    ],
    files: [
      {
        path: "src/registry/examples/empty/empty-input-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "empty-outline-demo",
    type: "registry:example",
    dependencies: ["lucide-react"],
    registryDependencies: ["@kanpeki/empty", "@kanpeki/button"],
    files: [
      {
        path: "src/registry/examples/empty/empty-outline-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
