import type { RegistryItem } from "shadcn/schema";

export const dropzoneExamples: RegistryItem[] = [
  {
    name: "dropzone-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/dropzone"],
    files: [
      {
        path: "src/registry/examples/dropzone/dropzone-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropzone-clickable-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/dropzone",
      "@kanpeki/button",
      "@kanpeki/toast",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/registry/examples/dropzone/dropzone-clickable-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "dropzone-with-file-trigger-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/dropzone",
      "@kanpeki/button",
      "@kanpeki/toast",
    ],
    dependencies: ["lucide-react"],
    files: [
      {
        path: "src/registry/examples/dropzone/dropzone-with-file-trigger-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
