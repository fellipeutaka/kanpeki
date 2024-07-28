import rehypeShiki, { type RehypeShikiOptions } from "@shikijs/rehype";
import { transformerMetaHighlight } from "@shikijs/transformers";
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

const titleRegex = /title="([^"]*)"/;

export default defineConfig({
  root: "src/content",
  collections: {
    docs,
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeShiki,
        {
          themes: {
            light: "github-light-default",
            dark: "github-dark-default",
          },
          defaultColor: false,
          transformers: [
            {
              /**
               * - Remove trailing newline
               * - Remove title from meta
               */
              preprocess: (code, { meta }) => {
                if (meta) {
                  meta.__raw = meta.__raw?.replace(titleRegex, "");
                }

                return code.replace(/\n$/, "");
              },
              root(hast) {
                const pre = hast.children[0];
                if (pre?.type !== "element") {
                  return;
                }

                hast.children = [
                  {
                    ...pre,
                    properties: {
                      ...pre.properties,
                      "data-lang": this.options.lang,
                    },
                  },
                ];
              },
            },
            transformerMetaHighlight({
              className: "w-full inline-block bg-primary/10",
            }),
          ],
          parseMetaString: (meta) => {
            const titleMatch = meta.match(titleRegex);
            const title = titleMatch?.[1] ?? null;

            return { title };
          },
        } satisfies RehypeShikiOptions,
      ],
      rehypeRawString,
      rehypeRawCommand,
    ],
  },
});
