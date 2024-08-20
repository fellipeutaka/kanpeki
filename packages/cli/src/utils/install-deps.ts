import { spawn } from "cross-spawn";
import picocolors from "picocolors";
import { getIsOnline } from "./get-is-online";
import type { PackageManager } from "./get-pkg-manager";

export async function installDeps(
  packageManager: PackageManager,
  cwd: string,
  deps: string[] = [],
  flags: string[] = []
) {
  const useYarn = packageManager === "yarn";
  const isOnline = !useYarn || (await getIsOnline());
  const args = ["install", ...deps, ...flags];
  if (!isOnline) {
    console.info(
      picocolors.yellow(
        "You appear to be offline.\nFalling back to the local cache."
      )
    );
    args.push("--offline");
  }

  return new Promise<void>((resolve, reject) => {
    const child = spawn(packageManager, args, {
      stdio: "ignore",
      cwd,
      env: {
        ...process.env,
        ADBLOCK: "1",
        // we set NODE_ENV to development as pnpm skips dev
        // dependencies when production
        NODE_ENV: "development",
        DISABLE_OPENCOLLECTIVE: "1",
      },
    });
    child.on("close", (code) => {
      if (code !== 0) {
        reject({ command: `${packageManager} ${args.join(" ")}` });
        return;
      }
      resolve();
    });
  });
}
