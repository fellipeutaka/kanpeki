import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { z } from "zod";
import { rehypeComponent } from "~/lib/mdx-plugins/rehype-component";
import { transformerNpmCommands } from "~/lib/mdx-plugins/rehype-npm-commands";
import { vercelDarkTheme } from "~/styles/vercel-dark";
import { vercelLightTheme } from "~/styles/vercel-light";

export const docs = defineDocs({
  dir: "src/content/docs",
  docs: {
    async: true,
    schema: z.object({
      description: z.string().max(256),
      links: z
        .object({
          api: z.string().url(),
          docs: z.string().url(),
        })
        .partial()
        .optional(),
      title: z.string().max(32),
    }),
  },
});

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    rehypeCodeOptions: {
      icon: false,
      themes: {
        dark: vercelDarkTheme,
        light: vercelLightTheme,
      },
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerNpmCommands(),
      ],
    },
    rehypePlugins: (v) => [rehypeComponent, ...v],
  },
});
