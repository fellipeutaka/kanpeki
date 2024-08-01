import { visit } from "unist-util-visit";

// biome-ignore lint/suspicious/noExplicitAny: any is required for unist-util-visit
type SAFE_ANY = any;

const visitCallback = (node: SAFE_ANY) => {
  if (node?.type === "element" && node?.tagName === "figure") {
    if (!("data-rehype-pretty-code-figure" in node.properties)) {
      return;
    }

    const childElement = node.children.at(0);

    childElement.properties.__rawString__ = node.__rawString__;

    if (node.__src__) {
      childElement.properties.__src__ = node.__src__;
    }

    if (node.__event__) {
      childElement.properties.__event__ = node.__event__;
    }

    if (node.__style__) {
      childElement.properties.__style__ = node.__style__;
    }
  }
};

export const rehypeFigureElement = () => (tree: SAFE_ANY) => {
  visit(tree, visitCallback);
};
