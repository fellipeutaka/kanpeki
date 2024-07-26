import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import { defineCollection, defineConfig, s } from "velite";

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
      slug: s.path(),
      // metadata: s.metadata(),
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
      [
        rehypePrettyCode,
        { theme: "github-dark-default" } satisfies Parameters<
          typeof rehypePrettyCode
        >[0],
      ],
    ],
  },
});
