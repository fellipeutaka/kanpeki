import rehypePrettyCode, {
  type Options as RehypePrettyCodeOptions,
} from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import { defineCollection, defineConfig, s } from "velite";
import { rehypeRawCommand } from "~/lib/rehype-command";
import { rehypeRawString } from "~/lib/rehype-raw-string";

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
        {
          theme: {
            light: "github-light-default",
            dark: "github-dark-default",
          },
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node?.properties.className?.push("line--highlighted");
          },
          onVisitHighlightedChars(node) {
            node.properties.className = ["word--highlighted"];
          },
        } satisfies RehypePrettyCodeOptions,
      ],
      rehypeRawString,
      rehypeRawCommand,
    ],
  },
});
