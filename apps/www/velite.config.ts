import rehypeShiki from "@shikijs/rehype";
import rehypeSlug from "rehype-slug";

import { defineCollection, defineConfig, s } from "velite";
import { rehypeCommand } from "~/lib/rehype-command";
import { rehypeComponent } from "~/lib/rehype-component";
import { rehypeRawString } from "~/lib/rehype-raw-string";
import { rehypeShikiOptions } from "~/lib/rehype-shiki";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const docs = defineCollection({
  name: "Docs",
  pattern: "docs/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(99),
      description: s.string().max(256),
      links: s
        .object({
          docs: s.string().url(),
          api: s.string().url(),
        })
        .partial()
        .optional(),
      slug: s.path(),
      toc: s.toc(),
      content: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "src/content",
  collections: {
    docs,
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypeShiki, rehypeShikiOptions],
      rehypeRawString,
      rehypeCommand,
      rehypeComponent,
    ],
  },
});
