/**
 * Calls all functions in the order they were chained with the same arguments.
 */

// biome-ignore lint/suspicious/noExplicitAny: any is used to support any function signature
export function chain(...callbacks: any[]) {
  // biome-ignore lint/suspicious/noExplicitAny: any is used to support any function signature
  return (...args: any[]) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
