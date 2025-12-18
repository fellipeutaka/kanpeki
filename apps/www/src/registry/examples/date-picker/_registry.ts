import type { RegistryItem } from "shadcn/schema";

export const datePickerExamples: RegistryItem[] = [
  {
    name: "date-picker-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/date-picker"],
    files: [
      {
        path: "src/registry/examples/date-picker/date-picker-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
