import type { RegistryItem } from "shadcn/schema";

export const textareaExamples: RegistryItem[] = [
  {
    name: "textarea-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/textarea"],
    files: [
      {
        path: "src/registry/examples/textarea/textarea-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
