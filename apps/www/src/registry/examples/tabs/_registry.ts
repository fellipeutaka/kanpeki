import type { RegistryItem } from "shadcn/schema";

export const tabsExamples: RegistryItem[] = [
  {
    name: "tabs-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/button",
      "@kanpeki/card",
      "@kanpeki/input",
      "@kanpeki/label",
      "@kanpeki/textfield",
      "@kanpeki/tabs",
    ],
    files: [
      {
        path: "src/registry/examples/tabs/tabs-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-disabled-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/tabs"],
    files: [
      {
        path: "src/registry/examples/tabs/tabs-disabled-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "tabs-vertical-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/tabs"],
    files: [
      {
        path: "src/registry/examples/tabs/tabs-vertical-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
