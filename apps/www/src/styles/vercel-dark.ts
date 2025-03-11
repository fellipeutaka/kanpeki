import type { ThemeRegistration } from "shiki";

export const vercelDarkTheme: ThemeRegistration = {
  type: "dark",
  settings: [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: "#a1a1a1",
      },
    },
    {
      scope: ["entity.name.type"],
      settings: {
        foreground: "#bf7af0",
      },
    },
    {
      scope: [
        "entity.other.attribute-name",
        "entity.name.function",
        "meta.function-call",
        "token.debug-token",
      ],
      settings: {
        foreground: "#c472fb",
      },
    },
    {
      scope: "meta.diff.range",
      settings: {
        foreground: "#c472fb",
        fontStyle: "bold",
      },
    },
    {
      scope: [
        "constant",
        "entity.name.constant",
        "variable.other.constant",
        "variable.language",
        "entity",
        "source.python",
        "entity.name",
        "meta.export.default",
        "meta.definition.variable",
        "support.class.component",
        "support.type.primitive",
        "support.type.builtin",
        "support.type.object.module",
        "variable.other.object",
        "support.type.property-name.css",
        "meta.property-name",
        "support.constant",
        "support.variable",
        "meta.module-reference",
        "string.regexp.character-class",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition",
        "string variable",
        "source.regexp",
        "string.regexp",
        "markup.quote",
        "markup.raw",
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted",
        "meta.diff.header",
        "meta.output",
      ],
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: [
        "markup.heading",
        "markup.heading entity.name",
        "string.regexp constant.character.escape",
        "meta.separator",
      ],
      settings: {
        foreground: "#52a8ff",
        fontStyle: "bold",
      },
    },
    {
      scope: ["constant.other.reference.link", "string.other.link"],
      settings: {
        foreground: "#52a8ff",
        fontStyle: "underline",
      },
    },
    {
      scope: [
        "variable.parameter.function",
        "meta.jsx.children",
        "meta.block",
        "meta.tag.attributes",
        "entity.name.constant",
        "meta.object.member",
        "meta.embedded.expression",
        "meta.template.expression",
        "string.other.begin.yaml",
        "string.other.end.yaml",
        "meta.function-call.arguments.python",
        "storage.modifier.package",
        "storage.modifier.import",
        "storage.type.java",
        "variable",
        "variable.other",
        "string source",
        "meta.export.default",
        "brackethighlighter.tag",
        "brackethighlighter.curly",
        "brackethighlighter.round",
        "brackethighlighter.square",
        "brackethighlighter.angle",
        "brackethighlighter.quote",
      ],
      settings: {
        foreground: "#ededed",
      },
    },
    {
      scope: "markup.italic",
      settings: {
        foreground: "#ededed",
        fontStyle: "italic",
      },
    },
    {
      scope: "markup.bold",
      settings: {
        foreground: "#ededed",
        fontStyle: "bold",
      },
    },
    {
      scope: [
        "keyword",
        "keyword.operator",
        "storage",
        "storage.type",
        "storage.type.function.arrow",
        "punctuation.separator.key-value",
        "entity.name.tag.yaml",
        "punctuation.separator.key-value.mapping.yaml",
        "support",
        "punctuation.definition.template-expression",
        "invalid.broken",
        "invalid.deprecated",
        "invalid.illegal",
        "invalid.unimplemented",
        "message.error",
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted",
        "brackethighlighter.unmatched",
        "token.error-token",
      ],
      settings: {
        foreground: "#f75f8f",
      },
    },
    {
      scope: [
        "string",
        "punctuation.definition.string",
        "string punctuation.section.embedded source",
        "entity.name.tag",
      ],
      settings: {
        foreground: "#62c073",
      },
    },
    {
      scope: "carriage-return",
      settings: {
        foreground: "#111111",
      },
    },
    {
      scope: [
        "punctuation.definition.list.begin.markdown",
        "markup.changed",
        "punctuation.definition.changed",
        "token.warn-token",
      ],
      settings: {
        foreground: "#ff9907",
      },
    },
    {
      scope: ["markup.ignored", "markup.untracked"],
      settings: {
        foreground: "#777777",
      },
    },
    {
      scope: "token.info-token",
      settings: {
        foreground: "#6796E6",
      },
    },
  ],
};
