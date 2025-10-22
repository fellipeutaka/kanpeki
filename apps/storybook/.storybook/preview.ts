import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export const decorators = [
  withThemeByClassName({
    defaultTheme: "light",
    themes: {
      dark: "dark",
      light: "light",
    },
  }),
];

export default preview;
