import type { RegistryItem } from "shadcn/schema";

export const numberFieldExamples: RegistryItem[] = [
  {
    name: "number-field-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/number"],
    files: [
      {
        path: "src/registry/examples/number-field/number-field-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
