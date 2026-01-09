import type { RegistryItem } from "shadcn/schema";

export const inputOtpExamples: RegistryItem[] = [
  {
    name: "input-otp-controlled-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input-otp"],
    files: [
      {
        path: "src/registry/examples/input-otp/input-otp-controlled-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input-otp"],
    files: [
      {
        path: "src/registry/examples/input-otp/input-otp-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-pattern-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input-otp"],
    files: [
      {
        path: "src/registry/examples/input-otp/input-otp-pattern-demo.tsx",
        type: "registry:example",
      },
    ],
  },
  {
    name: "input-otp-separator-demo",
    type: "registry:example",
    registryDependencies: ["@kanpeki/input-otp"],
    files: [
      {
        path: "src/registry/examples/input-otp/input-otp-separator-demo.tsx",
        type: "registry:example",
      },
    ],
  },
];
