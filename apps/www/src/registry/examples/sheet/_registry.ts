import type { RegistryItem } from "shadcn/schema";

export const sheetExamples: RegistryItem[] = [
  {
    name: "sheet-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/sheet",
      "@kanpeki/button",
      "@kanpeki/text-field",
      "@kanpeki/field",
      "@kanpeki/input",
    ],
    files: [
      {
        path: "src/registry/examples/sheet/sheet-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "sheet-side-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/sheet",
      "@kanpeki/button",
      "@kanpeki/text-field",
      "@kanpeki/field",
      "@kanpeki/input",
    ],
    files: [
      {
        path: "src/registry/examples/sheet/sheet-side-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
