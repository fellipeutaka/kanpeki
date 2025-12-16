import type { RegistryItem } from "shadcn/schema";

export const linkExamples: RegistryItem[] = [
  {
    name: "link-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/link"],
    files: [
      {
        path: "src/registry/examples/link/link-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
