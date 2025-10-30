import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "accordion-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/accordion"],
    files: [
      {
        path: "src/registry/examples/accordion-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
