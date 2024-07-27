import { toText } from "hast-util-to-text";
import { visit } from "unist-util-visit";

// biome-ignore lint/suspicious/noExplicitAny: Banana
export const rehypeRawString = () => (tree: any) => {
  visit(tree, (node) => {
    if (node.type === "element" && node.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") {
        return;
      }

      const raw = toText(codeEl.children[0]);

      node.properties.rawString = raw;
    }
  });
};
