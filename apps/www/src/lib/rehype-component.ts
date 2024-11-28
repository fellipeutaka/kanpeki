import fs from "node:fs";
import path from "node:path";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";
import type { UnistNode, UnistTree } from "~/@types/unist";

function replaceImports(source: string) {
  return source.replaceAll("export default", "export");
}

function processComponentSource(node: UnistNode) {
  if (node.name === "ComponentSource") {
    const name = getNodeAttributeByName(node, "name")?.value;

    if (!name) {
      return null;
    }

    try {
      // Read the source file.
      const filePath = path.resolve(`src/components/ui/${name}.tsx`);
      const source = replaceImports(fs.readFileSync(filePath, "utf8"));

      // Add code as children so that rehype can take over at build time.
      node.children?.push(
        u("element", {
          tagName: "pre",
          properties: {
            __src__: filePath,
          },
          children: [
            u("element", {
              tagName: "code",
              properties: {
                className: ["language-tsx"],
              },
              children: [
                {
                  type: "text",
                  value: source,
                },
              ],
            }),
          ],
        })
      );
    } catch (error) {
      console.error(error);
    }
  }
}

function processComponentPreview(node: UnistNode) {
  if (node.name === "ComponentPreview") {
    const name = getNodeAttributeByName(node, "name")?.value;

    if (!name) {
      return null;
    }

    try {
      // Read the source file.
      const filePath = path.resolve(`src/demos/${name}.tsx`);
      const source = replaceImports(fs.readFileSync(filePath, "utf8"));

      node.children?.push(
        u("element", {
          tagName: "pre",
          properties: {
            __src__: filePath,
          },
          children: [
            u("element", {
              tagName: "code",
              properties: {
                className: ["language-tsx"],
              },
              children: [
                {
                  type: "text",
                  value: source,
                },
              ],
            }),
          ],
        })
      );
    } catch (error) {
      console.error(error);
    }
  }
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

export const rehypeComponent = () => (tree: UnistTree) => {
  visit(tree, (node: UnistNode) => {
    processComponentSource(node);
    processComponentPreview(node);
  });
};
