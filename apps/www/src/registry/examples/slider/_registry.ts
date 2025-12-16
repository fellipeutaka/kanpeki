import type { RegistryItem } from "shadcn/schema";

export const sliderExamples: RegistryItem[] = [
  {
    name: "slider-custom-stepping-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/slider", "@kanpeki/label"],
    files: [
      {
        path: "src/registry/examples/slider/slider-custom-stepping-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/slider"],
    files: [
      {
        path: "src/registry/examples/slider/slider-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-multiple-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/slider"],
    files: [
      {
        path: "src/registry/examples/slider/slider-multiple-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-vertical-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/slider"],
    files: [
      {
        path: "src/registry/examples/slider/slider-vertical-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "slider-with-label-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/slider", "@kanpeki/label"],
    files: [
      {
        path: "src/registry/examples/slider/slider-with-label-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
