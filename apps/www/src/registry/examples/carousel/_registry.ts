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
  {
    name: "carousel-size-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/carousel", "@kanpeki/card"],
    files: [
      {
        path: "src/registry/examples/carousel/carousel-size-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-spacing-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/carousel", "@kanpeki/card"],
    files: [
      {
        path: "src/registry/examples/carousel/carousel-spacing-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-orientation-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/carousel", "@kanpeki/card"],
    files: [
      {
        path: "src/registry/examples/carousel/carousel-orientation-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-api-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/carousel", "@kanpeki/card"],
    files: [
      {
        path: "src/registry/examples/carousel/carousel-api-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "carousel-plugin-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/carousel", "@kanpeki/card"],
    files: [
      {
        path: "src/registry/examples/carousel/carousel-plugin-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
