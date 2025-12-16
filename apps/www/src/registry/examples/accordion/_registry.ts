import type { RegistryItem } from "shadcn/schema";

export const accordionExamples: RegistryItem[] = [
  {
    name: "accordion-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/accordion"],
    files: [
      {
        path: "src/registry/examples/accordion/accordion-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
