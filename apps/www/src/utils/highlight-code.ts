import type { RehypeCodeOptions } from "fumadocs-core/mdx-plugins";
import { rehypeCodeOptions } from "~/lib/rehype";
import { getHighlighter } from "~/lib/shiki";

export async function highlightCode(
  code: string,
  language = "tsx",
  options?: RehypeCodeOptions
) {
  const highlighter = await getHighlighter({
    langs: ["typescript", "tsx"],
  });

  const html = highlighter.codeToHtml(code.trimEnd(), {
    ...rehypeCodeOptions,
    lang: language,
    transformers: [
      ...(rehypeCodeOptions.transformers ?? []),
      {
        pre(node) {
          node.properties.class = "py-4 shiki shiki-themes";
          node.properties.style = "py-4 shiki shiki-themes";
          node.properties.tabindex = "-1";
        },
      },
    ],
    ...options,
  });

  return html;
}
