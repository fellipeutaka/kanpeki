import fs from "node:fs";
import path from "node:path";
import type { Node } from "unist";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";
import type { UnistNode } from "~/@types/unist";

function replaceImports(source: string) {
  return source.replaceAll("export default", "export");
}

const COMPONENT_FILE_MATCHER = /\.tsx?$/; // .ts or .tsx

function processComponentSource(node: UnistNode) {
  if (node.name === "ComponentSource") {
    const name = getNodeAttributeByName(node, "name")?.value;

    if (!name) {
      return null;
    }

    try {
      const componentDir = path.resolve(`src/components/ui/${name}`);

      const componentFiles = fs
        .readdirSync(componentDir)
        .filter((file) => COMPONENT_FILE_MATCHER.test(file))
        .map((file) => ({
          name: file,
          path: path.join(componentDir, file),
        }));

      if (componentFiles.length === 0) {
        return;
      }

      const tabs = componentFiles.map((file) => {
        const source = replaceImports(fs.readFileSync(file.path, "utf8"));

        return u("element", {
          children: [
            u("element", {
              children: [
                u("element", {
                  children: [{ type: "text", value: source }],
                  properties: { className: ["language-tsx"] },
                  tagName: "code",
                }),
              ],
              properties: { __src__: file.path },
              tagName: "pre",
            }),
          ],
          properties: { className: "tab-pane" },
          tagName: "div",
        });
      });

      node.children?.push(
        u("element", {
          children: tabs,
          properties: { className: "tabs-container" },
          tagName: "div",
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
      const filePath = path.resolve(`src/demos/${name}.tsx`);
      const source = replaceImports(fs.readFileSync(filePath, "utf8"));

      node.children?.push(
        u("element", {
          children: [
            u("element", {
              children: [{ type: "text", value: source }],
              properties: { className: ["language-tsx"] },
              tagName: "code",
            }),
          ],
          properties: { __src__: filePath, className: ["bananninha"] },
          tagName: "pre",
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

export const rehypeComponent = () => (tree: Node) => {
  visit(tree, (node) => {
    processComponentSource(node);
    processComponentPreview(node);
  });
};
