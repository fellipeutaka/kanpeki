import type { RegistryItem } from "shadcn/schema";

export const cardExamples: RegistryItem[] = [
  {
    name: "card-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/card"],
    files: [
      {
        path: "src/registry/examples/card/card-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
