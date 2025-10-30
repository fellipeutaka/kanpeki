export function convertNpmCommands(npmCommand: string) {
  if (npmCommand?.startsWith("npm install")) {
    return {
      bun: npmCommand.replace("npm install", "bun add"),
      npm: npmCommand,
      pnpm: npmCommand.replace("npm install", "pnpm add"),
      yarn: npmCommand.replace("npm install", "yarn add"),
    };
  }

  if (npmCommand?.startsWith("npx create-")) {
    return {
      bun: npmCommand.replace("npx create-", "bun create"),
      npm: npmCommand,
      pnpm: npmCommand.replace("npx create-", "pnpm create "),
      yarn: npmCommand.replace("npx create-", "yarn create "),
    };
  }

  if (npmCommand?.startsWith("npx") && !npmCommand?.startsWith("npx create-")) {
    return {
      bun: npmCommand.replace("npx", "bunx"),
      npm: npmCommand,
      pnpm: npmCommand.replace("npx", "pnpx"),
      yarn: npmCommand,
    };
  }
}
