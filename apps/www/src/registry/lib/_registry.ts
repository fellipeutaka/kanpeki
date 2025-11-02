import type { RegistryItem } from "shadcn/schema";

export const lib: RegistryItem[] = [
  {
    name: "cva",
    type: "registry:lib",
    files: [
      {
        path: "src/registry/lib/cva.ts",
        type: "registry:lib",
      },
    ],
    dependencies: ["cva@beta", "tailwind-merge"],
  },
];
