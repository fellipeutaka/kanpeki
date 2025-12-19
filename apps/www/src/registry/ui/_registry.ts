import type { RegistryItem } from "shadcn/schema";

export const ui: RegistryItem[] = [
  {
    name: "accordion",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/accordion/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/accordion/accordion.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/accordion/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/accordion/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "alert",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/alert/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/alert/alert.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/alert/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/alert/namespace.ts",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "aspect-ratio",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/aspect-ratio/index.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "autocomplete",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/autocomplete/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
  },
  {
    name: "avatar",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/avatar/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/avatar/avatar.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/avatar/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/avatar/namespace.ts",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "badge",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/badge/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/badge/badge.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/badge/styles.ts",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "breadcrumb",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/breadcrumb/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/breadcrumb/breadcrumb.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/breadcrumb/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/breadcrumb/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "button",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/button/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/button/button.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/button/styles.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "button-group",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/button-group/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/button-group/button-group.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/button-group/namespace.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/button-group/styles.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["@base-ui/react", "react-aria-components"],
    registryDependencies: ["@kanpeki/separator"],
  },
  {
    name: "calendar",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/calendar/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/calendar/calendar.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/calendar/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/calendar/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "@internationalized/date"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "card",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/card/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/card/card.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/card/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/card/namespace.ts",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "carousel",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/carousel/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/carousel/carousel.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/carousel/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["embla-carousel-react", "lucide-react"],
    registryDependencies: [
      "@kanpeki/cva",
      "@kanpeki/custom-plugin",
      "@kanpeki/button",
    ],
  },
  {
    name: "chart",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/chart/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/chart/chart.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/chart/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/chart/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["recharts@2"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "checkbox",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/checkbox/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/checkbox/checkbox.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/checkbox/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/checkbox/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "collapsible",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/collapsible/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/collapsible/collapsible.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/collapsible/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/collapsible/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "combobox",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/combobox/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/combobox/combobox.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/combobox/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/combobox/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: [
      "@kanpeki/cva",
      "@kanpeki/custom-plugin",
      "@kanpeki/button",
    ],
  },
  {
    name: "date-field",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/date-field/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/date-field/date-field.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/date-field/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/date-field/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "date-picker",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/date-picker/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/date-picker/date-picker.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/date-picker/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/date-picker/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "dialog",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/dialog/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/dialog/dialog.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/dialog/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/dialog/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "drawer",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/drawer/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/drawer/drawer.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/drawer/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/drawer/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react", "motion"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "dropzone",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/dropzone/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/dropzone/dropzone.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/dropzone/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/dropzone/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "field",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/field/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/field/field.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/field/namespace.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/field/styles.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["@base-ui/react", "react-aria-components"],
    registryDependencies: ["@kanpeki/label", "@kanpeki/separator"],
  },
  {
    name: "form",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/form/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "input",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/input/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/input/input.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/input/styles.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "input-group",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/input-group/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/input-group/input-group.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/input-group/namespace.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/input-group/styles.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["@base-ui/react", "react-aria-components"],
    registryDependencies: [
      "@kanpeki/button",
      "@kanpeki/input",
      "@kanpeki/textarea",
    ],
  },
  {
    name: "input-otp",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/input-otp/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/input-otp/input-otp.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/input-otp/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/input-otp/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["input-otp", "lucide-react"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "keyboard",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/keyboard/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/keyboard/keyboard.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/keyboard/styles.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "label",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/label/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/label/label.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/label/styles.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "link",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/link/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/link/link.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/link/styles.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "link-button",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/link-button/index.tsx",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["@kanpeki/button"],
  },
  {
    name: "list-box",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/list-box/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/list-box/list-box.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/list-box/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/list-box/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "menu",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/menu/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/menu/menu.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/menu/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/menu/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "number-field",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/number-field/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "pagination",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/pagination/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/pagination/pagination.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/pagination/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/pagination/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["@kanpeki/button"],
  },
  {
    name: "popover",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/popover/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/popover/popover.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/popover/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/popover/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "progress",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/progress/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/progress/progress.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/progress/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/progress/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "radio-group",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/radio-group/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/radio-group/radio-group.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/radio-group/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/radio-group/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["@kanpeki/label"],
  },
  {
    name: "resizable",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/resizable/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/resizable/resizable.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/resizable/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/resizable/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-resizable-panels", "lucide-react"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "scroll-area",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/scroll-area/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/scroll-area/scroll-area.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/scroll-area/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/scroll-area/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["@base-ui/react"],
    registryDependencies: ["@kanpeki/cva"],
  },
  {
    name: "search-field",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/search-field/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/search-field/search-field.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/search-field/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/search-field/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "select",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/select/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/select/select.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/select/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/select/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "separator",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/separator/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/separator/separator.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/separator/styles.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "sheet",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/sheet/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/sheet/sheet.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/sheet/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/sheet/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components", "lucide-react"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "sidebar",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/sidebar/index.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/sidebar/sidebar.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/sidebar/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/sidebar/namespace.ts",
        type: "registry:ui",
      },
    ],
    registryDependencies: [
      "@kanpeki/use-is-mobile",
      "@kanpeki/button",
      "@kanpeki/input",
      "@kanpeki/separator",
      "@kanpeki/sheet",
      "@kanpeki/skeleton",
      "@kanpeki/tooltip",
    ],
  },
  {
    name: "skeleton",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/skeleton/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/skeleton/skeleton.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/skeleton/styles.ts",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "slider",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/slider/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/slider/slider.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/slider/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/slider/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "spinner",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/spinner/index.tsx",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "switch",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/switch/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/switch/switch.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/switch/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/switch/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "table",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/table/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/table/table.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/table/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/table/namespace.ts",
        type: "registry:ui",
      },
    ],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "tabs",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/tabs/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/tabs/tabs.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/tabs/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/tabs/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "textarea",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/textarea/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/textarea/textarea.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/textarea/styles.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "text-field",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/text-field/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "toast",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/toast/index.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["sonner", "next-themes"],
  },
  {
    name: "toggle",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/toggle/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/toggle/toggle.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/toggle/styles.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
  {
    name: "toggle-group",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/toggle-group/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/toggle-group/toggle-group.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/toggle-group/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/toggle-group/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/toggle"],
  },
  {
    name: "tooltip",
    type: "registry:ui",
    files: [
      {
        path: "src/registry/ui/tooltip/index.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/tooltip/tooltip.tsx",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/tooltip/styles.ts",
        type: "registry:ui",
      },
      {
        path: "src/registry/ui/tooltip/namespace.ts",
        type: "registry:ui",
      },
    ],
    dependencies: ["react-aria-components"],
    registryDependencies: ["@kanpeki/cva", "@kanpeki/custom-plugin"],
  },
];
