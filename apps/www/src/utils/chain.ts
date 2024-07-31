/**
 * Calls all functions in the order they were chained with the same arguments.
 */

// biome-ignore lint/suspicious/noExplicitAny: any is used to support any function signature
type SAFE_ANY = any;

export function chain(...callbacks: SAFE_ANY[]) {
  return (...args: SAFE_ANY[]) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
