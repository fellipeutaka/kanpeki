import type { RegistryItem } from "shadcn/schema";

export const sheetExamples: RegistryItem[] = [
  {
    name: "sheet-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/sheet"],
    files: [
      {
        path: "src/registry/examples/sheet/sheet-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
