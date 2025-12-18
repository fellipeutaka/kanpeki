import type { RegistryItem } from "shadcn/schema";

export const buttonExamples: RegistryItem[] = [
  {
    name: "button-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/button"],
    files: [
      {
        path: "src/registry/examples/button/button-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-icon-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/button"],
    files: [
      {
        path: "src/registry/examples/button/button-icon-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-sizes-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/button", "lucide-react"],
    files: [
      {
        path: "src/registry/examples/button/button-sizes-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-variants-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/button"],
    files: [
      {
        path: "src/registry/examples/button/button-variants-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
