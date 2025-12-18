import type { RegistryItem } from "shadcn/schema";

export const hoverCardExamples: RegistryItem[] = [
  {
    name: "hover-card-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/hover"],
    files: [
      {
        path: "src/registry/examples/hover-card/hover-card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
