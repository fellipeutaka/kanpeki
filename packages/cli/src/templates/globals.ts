export const cssGlobalsTemplate = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --bg: 0 0% 100%;
    --fg: 240 10% 3.9%;

    --card: 0 0% 100%;
    --card-fg: 240 10% 3.9%;

    --popover: 0 0% 100%;
    --popover-fg: 240 10% 3.9%;

    --primary: 240 5.9% 10%;
    --primary-fg: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;
    --secondary-fg: 240 5.9% 10%;

    --muted: 240 4.8% 95.9%;
    --muted-fg: 240 3.8% 46.1%;

    --accent: 240 4.8% 95.9%;
    --accent-fg: 240 5.9% 10%;

    --danger: 0 84.2% 60.2%;
    --danger-fg: 0 0% 98%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;

    --radius: 0.5rem;
  }

  .dark:root {
    --bg: 240 10% 3.9%;
    --fg: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-fg: 0 0% 98%;

    --popover: 240 10% 3.9%;
    --popover-fg: 0 0% 98%;

    --primary: 50 100% 50%;
    --primary-fg: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-fg: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-fg: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-fg: 0 0% 98%;

    --danger: 0 62.8% 30.6%;
    --danger-fg: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }

  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-feature-settings:
      "rlig" 1,
      "calt" 1;
  }

  ::-webkit-scrollbar {
    @apply size-1;
  }
  
  ::-webkit-scrollbar-thumb {
    @apply bg-fg/40 rounded-lg transition-colors;
  }
  
  ::-webkit-scdrollbar-thumb:hover,
  ::-webkit-scrollbar-thumb:active {
    @apply bg-fg/60;
  }
}

`;
