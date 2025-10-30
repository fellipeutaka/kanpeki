import type { ShikiTransformer } from "shiki";
import { getSingletonHighlighter } from "shiki";

import { convertNpmCommands } from "~/utils/convert-npm-commands";
import { rehypeCodeOptions } from "./rehype";

export function transformerNpmCommands(): ShikiTransformer {
  return {
    name: "rehype-code:npm-commands",
    pre(node) {
      const lang = this.options.lang;

      node.properties["data-language"] = lang;
      node.properties["data-raw"] = this.source;

      const commands = convertNpmCommands(this.source);
      if (commands) {
        node.properties["data-npm"] = commands.npm;
        node.properties["data-yarn"] = commands.yarn;
        node.properties["data-pnpm"] = commands.pnpm;
        node.properties["data-bun"] = commands.bun;
      }

      return node;
    },
  };
}

export async function highlightCode(code: string, language = "tsx") {
  const highlighter = await getSingletonHighlighter({
    langs: ["typescript", "tsx", "css", "json", "bash"],
  });

  const html = highlighter.codeToHtml(code, {
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
