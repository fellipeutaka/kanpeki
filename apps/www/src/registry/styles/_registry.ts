import type { RegistryItem } from "shadcn/schema";

export const styles: RegistryItem[] = [
  {
    name: "custom-plugin",
    type: "registry:item",
    tailwind: {
      config: {
        plugins: ["tailwindcss-react-aria-components", "tailwindcss-motion"],
      },
    },
    css: {
      '@plugin "tailwindcss-react-aria-components"': {},
      '@plugin "tailwindcss-motion"': {},
    },
    devDependencies: [
      "tailwindcss-motion",
      "tailwindcss-react-aria-components",
    ],
  },
];
