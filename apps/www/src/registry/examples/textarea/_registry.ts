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
  {
    name: "textarea-disabled-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/textarea"],
    files: [
      {
        path: "src/registry/examples/textarea/textarea-disabled-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-with-label-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/textarea", "@kanpeki/label"],
    files: [
      {
        path: "src/registry/examples/textarea/textarea-with-label-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-with-text-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/textarea", "@kanpeki/label"],
    files: [
      {
        path: "src/registry/examples/textarea/textarea-with-text-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "textarea-auto-resize-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/textarea"],
    files: [
      {
        path: "src/registry/examples/textarea/textarea-auto-resize-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
