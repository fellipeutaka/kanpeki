import type { RegistryItem } from "shadcn/schema";
import { reactAriaFormExamples } from "./react-aria/_registry";
import { reactHookFormExamples } from "./react-hook-form/_registry";
import { tanstackFormExamples } from "./tanstack-form/_registry";

export const formExamples: RegistryItem[] = [
  ...tanstackFormExamples,
  ...reactAriaFormExamples,
  ...reactHookFormExamples,
];
