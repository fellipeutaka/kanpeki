import type { Element, Text } from "hast";
import {
  getSingletonHighlighter,
  type Highlighter,
  type ShikiTransformer,
} from "shiki";

import { convertNpmCommands } from "~/utils/convert-npm-commands";

const highlighterCache = new Map<string, Promise<Highlighter>>();

export async function getHighlighter(
  options?: Parameters<typeof getSingletonHighlighter>[0]
) {
  const { themes, langs } = options || {};
  const key = [themes, langs].join("-");
  const highlighter = highlighterCache.get(key);
  if (highlighter) {
    return await highlighter;
  }

  const highlighterPromise = getSingletonHighlighter(options);

  highlighterCache.set(key, highlighterPromise);
  return await highlighterPromise;
}

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
