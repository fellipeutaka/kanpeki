import type { RegistryItem } from "shadcn/schema";

export const spinnerExamples: RegistryItem[] = [
  {
    name: "spinner-color-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/spinner"],
    files: [
      {
        path: "src/registry/examples/spinner/spinner-color-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "spinner-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/spinner", "@kanpeki/button"],
    files: [
      {
        path: "src/registry/examples/spinner/spinner-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "spinner-size-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/spinner"],
    files: [
      {
        path: "src/registry/examples/spinner/spinner-size-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
