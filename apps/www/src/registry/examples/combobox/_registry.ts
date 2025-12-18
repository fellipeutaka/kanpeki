import type { RegistryItem } from "shadcn/schema";

export const comboboxExamples: RegistryItem[] = [
  {
    name: "combobox-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/combobox"],
    files: [
      {
        path: "src/registry/examples/combobox/combobox-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
