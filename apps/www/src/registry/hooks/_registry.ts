import type { RegistryItem } from "shadcn/schema";

export const hooks: RegistryItem[] = [
  {
    name: "use-is-mobile",
    type: "registry:hook",
    files: [
      {
        path: "src/registry/hooks/use-is-mobile.ts",
        type: "registry:hook",
      },
    ],
  },
];
