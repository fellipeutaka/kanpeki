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
];
