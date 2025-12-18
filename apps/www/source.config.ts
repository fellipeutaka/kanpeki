import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import lastModified from "fumadocs-mdx/plugins/last-modified";
import { z } from "zod";
import { rehypeCodeOptions } from "~/lib/rehype";

export const docs = defineDocs({
  dir: "src/content/docs",
  docs: {
    async: true,
    schema: z.object({
      description: z.string().max(256),
      links: z
        .object({
          api: z.url(),
          docs: z.url(),
        })
        .partial()
        .optional(),
      title: z.string().max(32),
    }),
    files: ["**/*.mdx", "!CLAUDE.md"],
  },
});

export default defineConfig({
  plugins: [lastModified()],
  mdxOptions: {
    rehypeCodeOptions,
  },
});
