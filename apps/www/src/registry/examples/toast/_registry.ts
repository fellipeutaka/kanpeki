import type { RegistryItem } from "shadcn/schema";

export const toastExamples: RegistryItem[] = [
  {
    name: "toast-custom-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/toast"],
    files: [
      {
        path: "src/registry/examples/toast/toast-custom-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/toast"],
    files: [
      {
        path: "src/registry/examples/toast/toast-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-promise-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/toast"],
    files: [
      {
        path: "src/registry/examples/toast/toast-promise-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-status-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/toast"],
    files: [
      {
        path: "src/registry/examples/toast/toast-status-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "toast-with-description-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/toast"],
    files: [
      {
        path: "src/registry/examples/toast/toast-with-description-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
