import type { RehypeCodeOptions } from "fumadocs-core/mdx-plugins";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { vercelDarkTheme } from "~/styles/vercel-dark";
import { vercelLightTheme } from "~/styles/vercel-light";
import { transformerNpmCommands } from "./shiki";

export const rehypeCodeOptions: RehypeCodeOptions = {
  icon: false,
  inline: "tailing-curly-colon",
  themes: {
    dark: vercelDarkTheme,
    light: vercelLightTheme,
  },
  transformers: [
    ...(rehypeCodeDefaultOptions.transformers ?? []),
    transformerNpmCommands(),
  ],
};
