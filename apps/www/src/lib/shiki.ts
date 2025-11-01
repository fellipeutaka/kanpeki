import type { Element, Text } from "hast";
import type { ShikiTransformer } from "shiki";
import { getSingletonHighlighter } from "shiki";

import { convertNpmCommands } from "~/utils/convert-npm-commands";
import { rehypeCodeOptions } from "./rehype";

function extractTextFromHast(node: Element): string {
  let text = "";

  for (const child of node.children) {
    if (child.type === "text") {
      text += (child as Text).value;
    } else if (child.type === "element") {
      text += extractTextFromHast(child as Element);
    }
  }

  return text;
}

export function transformerNpmCommands(): ShikiTransformer {
  return {
    name: "rehype-code:npm-commands",
    pre(node) {
      const lang = this.options.lang;

      // Extract cleaned text from AST (after notation transformers removed annotations)
      const cleanedSource = extractTextFromHast(node as Element);

      node.properties["data-language"] = lang;
      node.properties["data-raw"] = this.source;
      node.properties["data-raw"] = cleanedSource;

      const commands = convertNpmCommands(cleanedSource);
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

let singletonHighlighter: Awaited<
  ReturnType<typeof getSingletonHighlighter>
> | null = null;

async function getHighlighter(
  options?: Parameters<typeof getSingletonHighlighter>[0]
) {
  if (!singletonHighlighter) {
    singletonHighlighter = await getSingletonHighlighter(options);
  }

  return singletonHighlighter;
}

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
