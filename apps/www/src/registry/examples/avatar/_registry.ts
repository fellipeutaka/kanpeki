import type { RegistryItem } from "shadcn/schema";

export const avatarExamples: RegistryItem[] = [
  {
    name: "avatar-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/avatar"],
    files: [
      {
        path: "src/registry/examples/avatar/avatar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-group-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/avatar"],
    files: [
      {
        path: "src/registry/examples/avatar/avatar-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
