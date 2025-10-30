import type { Registry } from "shadcn/schema";

export const hooks: Registry["items"] = [
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
