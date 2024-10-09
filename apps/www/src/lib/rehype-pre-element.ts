import { visit } from "unist-util-visit";

// biome-ignore lint/suspicious/noExplicitAny: any is required for unist-util-visit
type SAFE_ANY = any;

const EVENT_REGEX = /event="([^"]*)"/;

const visitCallback = (node: SAFE_ANY) => {
  if (node?.type === "element" && node?.tagName === "pre") {
    const [codeEl] = node.children;
    if (codeEl.tagName !== "code") {
      return;
    }

    if (codeEl.data?.meta) {
      const match = codeEl.data?.meta.match(EVENT_REGEX);
      if (match) {
        node.__event__ = match ? match[1] : null;
        codeEl.data.meta = codeEl.data.meta.replace(EVENT_REGEX, "");
      }
    }

    node.__rawString__ = codeEl.children?.[0].value;
    node.__src__ = node.properties?.__src__;
    node.__style__ = node.properties?.__style__;
  }
};

export const rehypePreElement = () => (tree: SAFE_ANY) => {
  visit(tree, visitCallback);
};
