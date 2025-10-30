import { defineConfig, defineDocs } from "fumadocs-mdx/config";
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
  },
});

export default defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    rehypeCodeOptions,
  },
});
