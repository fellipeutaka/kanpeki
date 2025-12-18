import { rehypeCodeOptions } from "~/lib/rehype";
import { getHighlighter } from "~/lib/shiki";

export async function highlightCode(code: string, language = "tsx") {
  const highlighter = await getHighlighter({
    langs: ["typescript", "tsx"],
  });

  const html = highlighter.codeToHtml(code.trimEnd(), {
    ...rehypeCodeOptions,
    lang: language,
    transformers: [
      {
        pre(node) {
          node.properties.class = "py-4 shiki shiki-themes";
          node.properties.style = "py-4 shiki shiki-themes";
          node.properties.tabindex = "-1";
        },
      },
    ],
  });

  return html;
}
