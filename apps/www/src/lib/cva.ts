import { type ClassValue, defineConfig } from "cva";
import { twMerge } from "tailwind-merge";

export const {
  cva,
  cx: cn,
  compose,
} = defineConfig({
  hooks: {
    onComplete: (className) => twMerge(className),
  },
});

export { cx, cva as cv } from "cva";

export type { VariantProps } from "cva";

export type CVAClassProp =
  | {
      class?: ClassValue;
      className?: never;
    }
  | {
      class?: never;
      className?: ClassValue;
    };
