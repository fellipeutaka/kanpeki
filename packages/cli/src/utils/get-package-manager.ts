import { detect } from "@antfu/ni";

export type PackageManager = NonNullable<Awaited<ReturnType<typeof detect>>>;

export async function getPackageManager(
  targetDir: string,
  { withFallback }: { withFallback?: boolean } = {
    withFallback: false,
  }
): Promise<PackageManager> {
  const packageManager = await detect({ programmatic: true, cwd: targetDir });

  if (packageManager === "yarn@berry") {
    return "yarn";
  }
  if (packageManager === "pnpm@6") {
    return "pnpm";
  }
  if (packageManager === "bun") {
    return "bun";
  }

  if (!withFallback) {
    return packageManager ?? "npm";
  }

  const userAgent = process.env.npm_config_user_agent || "";

  if (userAgent.startsWith("yarn")) {
    return "yarn";
  }

  if (userAgent.startsWith("pnpm")) {
    return "pnpm";
  }

  if (userAgent.startsWith("bun")) {
    return "bun";
  }

  return "npm";
}

export async function getPackageRunner(cwd: string) {
  const packageManager = await getPackageManager(cwd);

  if (packageManager === "yarn") {
    return "yarn dlx";
  }

  if (packageManager === "pnpm") {
    return "pnpm dlx";
  }

  if (packageManager === "bun") {
    return "bunx";
  }

  return "npx";
}
