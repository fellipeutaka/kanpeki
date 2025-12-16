import type { RegistryItem } from "shadcn/schema";

export const inputExamples: RegistryItem[] = [
  {
    name: "input-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input"],
    files: [
      {
        path: "src/registry/examples/input/input-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input"],
    files: [
      {
        path: "src/registry/examples/input/input-otp-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
