import type { Registry } from "shadcn/schema";

export const examples: Registry["items"] = [
  {
    name: "accordion-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/accordion"],
    files: [
      {
        path: "src/registry/examples/accordion-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "alert-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/alert"],
    files: [
      {
        path: "src/registry/examples/alert-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "alert-destructive-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/alert"],
    files: [
      {
        path: "src/registry/examples/alert-destructive-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/avatar"],
    files: [
      {
        path: "src/registry/examples/avatar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "avatar-group-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/avatar"],
    files: [
      {
        path: "src/registry/examples/avatar-group-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/badge"],
    files: [
      {
        path: "src/registry/examples/badge-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-destructive-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/badge"],
    files: [
      {
        path: "src/registry/examples/badge-destructive-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-outline-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/badge"],
    files: [
      {
        path: "src/registry/examples/badge-outline-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "badge-secondary-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/badge"],
    files: [
      {
        path: "src/registry/examples/badge-secondary-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
