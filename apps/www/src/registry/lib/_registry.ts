import type { Registry } from "shadcn/schema";

export const lib: Registry["items"] = [
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
