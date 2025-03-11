import type { ShikiTransformer } from "shiki";
import { convertNpmCommands } from "~/utils/convert-npm-commands";

export function transformerNpmCommands(): ShikiTransformer {
  return {
    name: "rehype-code:npm-commands",
    pre(pre) {
      const lang = this.options.lang;

      pre.properties["data-language"] = lang;
      pre.properties["data-source"] = this.source;

      const commands = convertNpmCommands(this.source);
      if (commands) {
        pre.properties["data-npm"] = commands.npm;
        pre.properties["data-yarn"] = commands.yarn;
        pre.properties["data-pnpm"] = commands.pnpm;
        pre.properties["data-bun"] = commands.bun;
      }

      return pre;
    },
  };
}
