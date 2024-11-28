import type { Theme } from "rehype-pretty-code";

export const vercelDarkTheme: Theme = {
  $schema: "vscode://schemas/color-theme",
  type: "dark",
  colors: {
    "activityBar.activeBorder": "#ededed",
    "activityBar.background": "#000000",
    "activityBar.border": "#242424",
    "activityBar.foreground": "#ededed",
    "activityBar.inactiveForeground": "#878787",
    "activityBarBadge.background": "#ededed",
    "activityBarBadge.foreground": "#000000",
    "badge.background": "#ededed",
    "badge.foreground": "#000000",
    "breadcrumb.activeSelectionForeground": "#ededed",
    "breadcrumb.focusForeground": "#ededed",
    "breadcrumb.foreground": "#a1a1a1",
    "breadcrumbPicker.background": "#000000",
    "button.background": "#ededed",
    "button.foreground": "#000000",
    "button.hoverBackground": "#ededed",
    "button.secondaryBackground": "#ffffff1a",
    "button.secondaryForeground": "#a1a1a1",
    "button.secondaryHoverBackground": "#333333",
    "checkbox.background": "#000000",
    "checkbox.border": "#333333",
    "commandCenter.background": "#0a0a0a",
    "commandCenter.border": "#242424",
    "commandCenter.activeBackground": "#ffffff1a",
    "commandCenter.activeBorder": "#242424",
    "commandCenter.inactiveBorder": "#ffffff1a",
    "commandCenter.debuggingBackground": "#ffffff1a",
    "debugToolBar.background": "#000000",
    descriptionForeground: "#ededed",
    "diffEditor.insertedTextBackground": "#62c07333",
    "diffEditor.removedTextBackground": "#f75f8f33",
    "dropdown.background": "#000000",
    "dropdown.border": "#333333",
    "dropdown.foreground": "#a1a1a1",
    "dropdown.listBackground": "#000000",
    "editor.background": "#0a0a0a",
    "editor.findMatchBackground": "#AAf75f8f",
    "editor.findMatchHighlightBackground": "#ff990722",
    "editor.focusedStackFrameHighlightBackground": "#333333",
    "editor.foldBackground": "#ffffff1a",
    "editor.foreground": "#ededed",
    "editor.inactiveSelectionBackground": "#ffffff1a",
    "editor.lineHighlightBackground": "#ffffff1a",
    "editor.linkedEditingBackground": "#ffffff1a",
    "editor.selectionBackground": "#ffffff1a",
    "editor.selectionHighlightBackground": "#ffffff1a",
    "editor.selectionHighlightBorder": "#ffffff1a",
    "editor.stackFrameHighlightBackground": "#ff990725",
    "editor.wordHighlightBackground": "#ffffff1a",
    "editor.wordHighlightBorder": "#00000000",
    "editor.wordHighlightStrongBackground": "#00000000",
    "editor.wordHighlightStrongBorder": "#00000000",
    "editorBracketMatch.background": "#ffffff1a",
    "editorBracketMatch.border": "#00000000",
    "editorCursor.foreground": "#ededed",
    "editorGroup.border": "#242424",
    "editorGroupHeader.tabsBackground": "#000000",
    "editorGroupHeader.tabsBorder": "#242424",
    "editorGutter.addedBackground": "#62c073",
    "editorGutter.deletedBackground": "#f75f8f",
    "editorGutter.modifiedBackground": "#ff9907",
    "editorIndentGuide.activeBackground1": "#242424",
    "editorIndentGuide.background1": "#242424",
    "editorInlayHint.background": "#0a0a0a",
    "editorInlayHint.foreground": "#a1a1a1",
    "editorLineNumber.activeForeground": "#a1a1a1",
    "editorLineNumber.foreground": "#878787",
    "editorOverviewRuler.border": "#000000",
    "editorOverviewRuler.errorForeground": "#f75f8f",
    "editorRuler.foreground": "#242424",
    "minimap.selectionHighlight": "#ffffff1a",
    "editorWhitespace.foreground": "#878787",
    "editorWidget.background": "#000000",
    "editorWidget.border": "#333333",
    errorForeground: "#f75f8f",
    "errorLens.errorBackground": "#f75f8f33",
    "errorLens.errorBackgroundLight": "#f75f8f33",
    "errorLens.errorForeground": "#f75f8f",
    "errorLens.errorForegroundLight": "#f75f8f",
    "errorLens.hintBackground": "#52a8ff33",
    "errorLens.hintBackgroundLight": "#52a8ff33",
    "errorLens.hintForeground": "#52a8ff",
    "errorLens.hintForegroundLight": "#52a8ff",
    "errorLens.infoBackground": "#52a8ff33",
    "errorLens.infoBackgroundLight": "#52a8ff33",
    "errorLens.infoForeground": "#52a8ff",
    "errorLens.infoForegroundLight": "#52a8ff",
    "errorLens.warningBackground": "#ff990733",
    "errorLens.warningBackgroundLight": "#ff990733",
    "errorLens.warningForeground": "#ff990733",
    "errorLens.warningForegroundLight": "#ff9907",
    focusBorder: "#00000000",
    foreground: "#a1a1a1",
    "gitDecoration.addedResourceForeground": "#62c073",
    "gitDecoration.conflictingResourceForeground": "#ff9907",
    "gitDecoration.deletedResourceForeground": "#f75f8f",
    "gitDecoration.ignoredResourceForeground": "#777777",
    "gitDecoration.modifiedResourceForeground": "#ff9907",
    "gitDecoration.submoduleResourceForeground": "#ededed",
    "gitDecoration.untrackedResourceForeground": "#62c073",
    "icon.foreground": "#a1a1a1",
    "input.background": "#000000",
    "input.border": "#333333",
    "input.foreground": "#a1a1a1",
    "input.placeholderForeground": "#a1a1a1",
    "list.activeSelectionBackground": "#ffffff1a",
    "list.activeSelectionForeground": "#ededed",
    "list.errorForeground": "#f75f8f",
    "list.focusBackground": "#ffffff1a",
    "list.focusForeground": "#ededed",
    "list.highlightForeground": "#ededed",
    "list.hoverBackground": "#ffffff1a",
    "list.hoverForeground": "#ededed",
    "list.inactiveFocusBackground": "#ffffff1a",
    "list.inactiveSelectionBackground": "#ffffff1a",
    "list.inactiveSelectionForeground": "#a1a1a1",
    "list.warningForeground": "#ff9907",
    "notificationCenterHeader.background": "#000000",
    "notificationCenterHeader.foreground": "#a1a1a1",
    "notifications.background": "#000000",
    "notifications.border": "#333333",
    "notifications.foreground": "#ededed",
    "notificationsErrorIcon.foreground": "#f75f8f",
    "notificationsInfoIcon.foreground": "#52a8ff",
    "notificationsWarningIcon.foreground": "#ff9907",
    "panel.background": "#000000",
    "panel.border": "#242424",
    "panelInput.border": "#333333",
    "panelTitle.activeBorder": "#ededed",
    "panelTitle.activeForeground": "#ededed",
    "panelTitle.inactiveForeground": "#a1a1a1",
    "peekViewEditor.background": "#000000",
    "peekViewEditor.matchHighlightBackground": "#ff990733",
    "peekViewResult.background": "#000000",
    "peekViewResult.matchHighlightBackground": "#ff990733",
    "peekView.border": "#333333",
    "peekViewTitle.background": "#000000",
    "pickerGroup.border": "#333333",
    "pickerGroup.foreground": "#ededed",
    "progressBar.background": "#ededed",
    "quickInput.background": "#000000",
    "quickInput.foreground": "#a1a1a1",
    "scrollbar.shadow": "#00000000",
    "scrollbarSlider.activeBackground": "#333333",
    "scrollbarSlider.background": "#333333",
    "scrollbarSlider.hoverBackground": "#333333",
    "selection.background": "#333333",
    "settings.headerForeground": "#ededed",
    "settings.modifiedItemIndicator": "#ededed",
    "sideBar.background": "#000000",
    "sideBar.border": "#242424",
    "sideBar.foreground": "#a1a1a1",
    "sideBarSectionHeader.background": "#000000",
    "sideBarSectionHeader.border": "#242424",
    "sideBarSectionHeader.foreground": "#a1a1a1",
    "sideBarTitle.foreground": "#a1a1a1",
    "statusBar.background": "#000000",
    "statusBar.border": "#242424",
    "statusBar.debuggingBackground": "#ededed",
    "statusBar.debuggingForeground": "#000000",
    "statusBar.foreground": "#a1a1a1",
    "statusBar.noFolderBackground": "#000000",
    "statusBarItem.prominentBackground": "#000000",
    "tab.activeBackground": "#0a0a0a",
    "tab.activeBorder": "#000000",
    "tab.activeBorderTop": "#ededed",
    "tab.activeForeground": "#a1a1a1",
    "tab.border": "#242424",
    "tab.hoverBackground": "#000000",
    "tab.inactiveBackground": "#000000",
    "tab.inactiveForeground": "#a1a1a1",
    "tab.unfocusedActiveBorder": "#000000",
    "tab.unfocusedActiveBorderTop": "#000000",
    "tab.unfocusedHoverBackground": "#000000",
    "terminal.ansiBlack": "#000000",
    "terminal.ansiBlue": "#52a8ff",
    "terminal.ansiBrightBlack": "#676767",
    "terminal.ansiBrightBlue": "#52a8ff",
    "terminal.ansiBrightCyan": "#1da9b0",
    "terminal.ansiBrightGreen": "#62c073",
    "terminal.ansiBrightMagenta": "#c472fb",
    "terminal.ansiBrightRed": "#f75f8f",
    "terminal.ansiBrightWhite": "#ededed",
    "terminal.ansiBrightYellow": "#ff9907",
    "terminal.ansiCyan": "#1da9b0",
    "terminal.ansiGreen": "#62c073",
    "terminal.ansiMagenta": "#c472fb",
    "terminal.ansiRed": "#f75f8f",
    "terminal.ansiWhite": "#a1a1a1",
    "terminal.ansiYellow": "#ff9907",
    "terminal.foreground": "#ededed",
    "terminal.selectionBackground": "#333333",
    "textBlockQuote.background": "#000000",
    "textBlockQuote.border": "#ededed",
    "textCodeBlock.background": "#000000",
    "textLink.activeForeground": "#52a8ff",
    "textLink.foreground": "#52a8ff",
    "textPreformat.foreground": "#ededed",
    "textSeparator.foreground": "#a1a1a1",
    "titleBar.activeBackground": "#000000",
    "titleBar.activeForeground": "#a1a1a1",
    "titleBar.border": "#242424",
    "titleBar.inactiveBackground": "#000000",
    "titleBar.inactiveForeground": "#a1a1a1",
    "tree.indentGuidesStroke": "#242424",
    "editorHoverWidget.background": "#000000",
    "editorHoverWidget.foreground": "#a1a1a1",
  },
  settings: [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: {
        foreground: "#a1a1a1",
      },
    },
    {
      scope: ["entity.other.attribute-name"],
      settings: {
        foreground: "#c472fb",
      },
    },
    {
      scope: [
        "constant",
        "entity.name.constant",
        "variable.other.constant",
        "variable.language",
        "entity",
      ],
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: ["entity.name", "meta.export.default", "meta.definition.variable"],
      settings: {
        foreground: "#52a8ff",
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
      ],
      settings: {
        foreground: "#ededed",
      },
    },
    {
      scope: ["entity.name.function", "support.type.primitive"],
      settings: {
        foreground: "#c472fb",
      },
    },
    {
      scope: ["support.class.component"],
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: "keyword",
      settings: {
        foreground: "#f75f8f",
      },
    },
    {
      scope: [
        "keyword.operator",
        "storage.type.function.arrow",
        "punctuation.separator.key-value.css",
        "entity.name.tag.yaml",
        "punctuation.separator.key-value.mapping.yaml",
      ],
      settings: {
        foreground: "#f75f8f",
      },
    },
    {
      scope: ["storage", "storage.type"],
      settings: {
        foreground: "#f75f8f",
      },
    },
    {
      scope: [
        "storage.modifier.package",
        "storage.modifier.import",
        "storage.type.java",
      ],
      settings: {
        foreground: "#ededed",
      },
    },
    {
      scope: ["entity.name.type"],
      settings: {
        foreground: "#BF7AF0",
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
      scope: "support",
      settings: {
        foreground: "#f75f8f",
      },
    },
    {
      scope: [
        "support.type.object.module",
        "variable.other.object",
        "support.type.property-name.css",
      ],
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: "meta.property-name",
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: "variable",
      settings: {
        foreground: "#ededed",
      },
    },
    {
      scope: "variable.other",
      settings: {
        foreground: "#ededed",
      },
    },
    {
      scope: "invalid.broken",
      settings: {
        foreground: "#f75f8f",
      },
    },
    {
      scope: "invalid.deprecated",
      settings: {
        foreground: "#f75f8f",
      },
    },
    {
      scope: "invalid.illegal",
      settings: {
        foreground: "#f75f8f",
      },
    },
    {
      scope: "invalid.unimplemented",
      settings: {
        foreground: "#f75f8f",
      },
    },
    {
      scope: "carriage-return",
      settings: {
        foreground: "#111111",
      },
    },
    {
      scope: "message.error",
      settings: {
        foreground: "#f75f8f",
      },
    },
    {
      scope: "string source",
      settings: {
        foreground: "#ededed",
      },
    },
    {
      scope: "string variable",
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: ["source.regexp", "string.regexp"],
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escape",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition",
      ],
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: {
        foreground: "#52a8ff",
        fontStyle: "bold",
      },
    },
    {
      scope: "support.constant",
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: "support.variable",
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: "meta.module-reference",
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: "punctuation.definition.list.begin.markdown",
      settings: {
        foreground: "#ff9907",
      },
    },
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      settings: {
        foreground: "#52a8ff",
        fontStyle: "bold",
      },
    },
    {
      scope: "markup.quote",
      settings: {
        foreground: "#52a8ff",
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
      scope: "markup.raw",
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: [
        "markup.deleted",
        "meta.diff.header.from-file",
        "punctuation.definition.deleted",
      ],
      settings: {
        foreground: "#f75f8f",
      },
    },
    {
      scope: [
        "markup.inserted",
        "meta.diff.header.to-file",
        "punctuation.definition.inserted",
      ],
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: ["markup.changed", "punctuation.definition.changed"],
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
      scope: "meta.diff.range",
      settings: {
        foreground: "#c472fb",
        fontStyle: "bold",
      },
    },
    {
      scope: "meta.diff.header",
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: "meta.separator",
      settings: {
        foreground: "#52a8ff",
        fontStyle: "bold",
      },
    },
    {
      scope: "meta.output",
      settings: {
        foreground: "#52a8ff",
      },
    },
    {
      scope: "meta.export.default",
      settings: {
        foreground: "#ededed",
      },
    },
    {
      scope: [
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
      scope: "brackethighlighter.unmatched",
      settings: {
        foreground: "#f75f8f",
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
      scope: "token.info-token",
      settings: {
        foreground: "#6796E6",
      },
    },
    {
      scope: "token.warn-token",
      settings: {
        foreground: "#ff9907",
      },
    },
    {
      scope: "token.error-token",
      settings: {
        foreground: "#f75f8f",
      },
    },
    {
      scope: "token.debug-token",
      settings: {
        foreground: "#c472fb",
      },
    },
  ],
};
