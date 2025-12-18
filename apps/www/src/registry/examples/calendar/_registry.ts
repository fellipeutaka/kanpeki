import type { RegistryItem } from "shadcn/schema";

export const calendarExamples: RegistryItem[] = [
  {
    name: "calendar-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/calendar"],
    files: [
      {
        path: "src/registry/examples/calendar/calendar-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "calendar-range-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/calendar"],
    files: [
      {
        path: "src/registry/examples/calendar/calendar-range-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
