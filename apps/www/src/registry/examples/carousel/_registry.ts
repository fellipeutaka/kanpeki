import type { RegistryItem } from "shadcn/schema";

export const carouselExamples: RegistryItem[] = [
  {
    name: "carousel-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/carousel"],
    files: [
      {
        path: "src/registry/examples/carousel/carousel-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
