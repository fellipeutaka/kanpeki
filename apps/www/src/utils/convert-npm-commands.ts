export function convertNpmCommands(npmCommand: string) {
  if (npmCommand?.startsWith("npm install")) {
    return {
      npm: npmCommand,
      yarn: npmCommand.replace("npm install", "yarn add"),
      pnpm: npmCommand.replace("npm install", "pnpm add"),
      bun: npmCommand.replace("npm install", "bun add"),
    };
  }

  if (npmCommand?.startsWith("npx create-")) {
    return {
      npm: npmCommand,
      yarn: npmCommand.replace("npx create-", "yarn create "),
      pnpm: npmCommand.replace("npx create-", "pnpm create "),
      bun: npmCommand.replace("npx create-", "bun create"),
    };
  }

  if (npmCommand?.startsWith("npx") && !npmCommand?.startsWith("npx create-")) {
    return {
      npm: npmCommand,
      yarn: npmCommand,
      pnpm: npmCommand.replace("npx", "pnpx"),
      bun: npmCommand.replace("npx", "bunx"),
    };
  }
}
