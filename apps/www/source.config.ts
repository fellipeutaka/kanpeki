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
    schema: z.object({
      title: z.string().max(32),
      description: z.string().max(256),
      links: z
        .object({
          docs: z.string().url(),
          api: z.string().url(),
        })
        .partial()
        .optional(),
    }),
    async: true,
  },
});

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: vercelLightTheme,
        dark: vercelDarkTheme,
      },
      icon: false,
      transformers: [
        ...(rehypeCodeDefaultOptions.transformers ?? []),
        transformerNpmCommands(),
      ],
    },
    rehypePlugins: (v) => [rehypeComponent, ...v],
  },
});
