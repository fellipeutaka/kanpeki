import type { RegistryItem } from "shadcn/schema";

export const dateFieldExamples: RegistryItem[] = [
  {
    name: "date-field-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/date-field", "@kanpeki/label"],
    files: [
      {
        path: "src/registry/examples/date-field/date-field-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "date-field-disabled-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/date-field", "@kanpeki/label"],
    files: [
      {
        path: "src/registry/examples/date-field/date-field-disabled-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
