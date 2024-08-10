import picocolors from "picocolors";

export const logger = {
  error(args: string) {
    console.info(picocolors.red(args));
  },
  warn(args: string) {
    console.info(picocolors.yellow(args));
  },
  info(args: string) {
    console.info(picocolors.cyan(args));
  },
  success(args: string) {
    console.info(picocolors.green(args));
  },
  break() {
    console.info("");
  },
};
