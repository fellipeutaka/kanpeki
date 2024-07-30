import type { RehypeShikiOptions } from "@shikijs/rehype";
import { transformerMetaHighlight } from "@shikijs/transformers";

const titleRegex = /title="([^"]*)"/;

export const rehypeShikiOptions = {
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
} satisfies RehypeShikiOptions;
