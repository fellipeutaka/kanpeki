import type { RegistryItem } from "shadcn/schema";

export const autocompleteExamples: RegistryItem[] = [
  {
    name: "autocomplete-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/autocomplete",
      "@kanpeki/dialog",
      "@kanpeki/keyboard",
      "@kanpeki/menu",
      "@kanpeki/search-field",
    ],
    files: [
      {
        path: "src/registry/examples/autocomplete/autocomplete-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "autocomplete-dialog-demo",
    type: "registry:example",
    registryDependencies: [
      "@kanpeki/autocomplete",
      "@kanpeki/dialog",
      "@kanpeki/keyboard",
      "@kanpeki/menu",
      "@kanpeki/search-field",
    ],
    files: [
      {
        path: "src/registry/examples/autocomplete/autocomplete-dialog-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
