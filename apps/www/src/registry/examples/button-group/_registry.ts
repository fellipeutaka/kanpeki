import type { RegistryItem } from "shadcn/schema";

export const buttonGroupExamples: RegistryItem[] = [
  {
    name: "button-group-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/button-group",
      "@kanpeki/button",
      "@kanpeki/menu",
    ],
    files: [
      {
        path: "src/registry/examples/button-group/button-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-orientation-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/button-group",
      "@kanpeki/button",
      "lucide-react",
    ],
    files: [
      {
        path: "src/registry/examples/button-group/button-group-orientation-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-size-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/button-group",
      "@kanpeki/button",
      "lucide-react",
    ],
    files: [
      {
        path: "src/registry/examples/button-group/button-group-size-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-nested-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/button-group",
      "@kanpeki/button",
      "@kanpeki/input",
      "@kanpeki/input-group",
      "@kanpeki/tooltip",
      "lucide-react",
    ],
    files: [
      {
        path: "src/registry/examples/button-group/button-group-nested-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-separator-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/button-group", "@kanpeki/button"],
    files: [
      {
        path: "src/registry/examples/button-group/button-group-separator-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-split-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/button-group",
      "@kanpeki/button",
      "lucide-react",
    ],
    files: [
      {
        path: "src/registry/examples/button-group/button-group-split-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-input-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/button-group",
      "@kanpeki/button",
      "@kanpeki/input",
      "lucide-react",
    ],
    files: [
      {
        path: "src/registry/examples/button-group/button-group-input-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-input-group-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/button-group",
      "@kanpeki/button",
      "@kanpeki/input-group",
      "@kanpeki/tooltip",
      "lucide-react",
    ],
    files: [
      {
        path: "src/registry/examples/button-group/button-group-input-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-dropdown-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/button-group",
      "@kanpeki/button",
      "@kanpeki/menu",
      "lucide-react",
    ],
    files: [
      {
        path: "src/registry/examples/button-group/button-group-dropdown-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-select-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/button-group",
      "@kanpeki/button",
      "@kanpeki/input",
      "@kanpeki/select",
      "lucide-react",
    ],
    files: [
      {
        path: "src/registry/examples/button-group/button-group-select-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "button-group-popover-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/button-group",
      "@kanpeki/button",
      "@kanpeki/field",
      "@kanpeki/popover",
      "@kanpeki/textarea",
      "lucide-react",
    ],
    files: [
      {
        path: "src/registry/examples/button-group/button-group-popover-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
