import { defineConfig } from "cva";
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

export type { VariantProps } from "cva";
export { cva as cv, cx } from "cva";
