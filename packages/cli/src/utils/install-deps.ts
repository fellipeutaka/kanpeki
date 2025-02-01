import spawn from "nano-spawn";
import type { PackageManager } from "./get-package-manager";

type Dependencies = Array<string | null>;

type InstallDepsProps = {
  packageManager: PackageManager;
  cwd: string;
} & (
  | {
      dependencies: Dependencies;
      devDependencies?: Dependencies;
    }
  | {
      dependencies?: Dependencies;
      devDependencies: Dependencies;
    }
  | {
      dependencies: Dependencies;
      devDependencies: Dependencies;
    }
);

export async function installDeps({
  packageManager,
  cwd,
  dependencies,
  devDependencies,
}: InstallDepsProps) {
  if (dependencies && dependencies.length > 0) {
    await spawn(
      packageManager,
      [
        packageManager === "npm" ? "install" : "add",
        ...dependencies.filter((dep) => typeof dep === "string"),
      ],
      {
        cwd,
      }
    );
  }

  if (devDependencies && devDependencies.length > 0) {
    await spawn(
      packageManager,
      [
        packageManager === "npm" ? "install" : "add",
        ...devDependencies.filter((dep) => typeof dep === "string"),
        "-D",
      ],
      {
        cwd,
      }
    );
  }
}
