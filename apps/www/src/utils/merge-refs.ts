// biome-ignore lint/suspicious/noExplicitAny: This is a utility function that is meant to be used in a variety of contexts, so it's better to use `any` here.
export function mergeRefs<T = any>(
  refs: (React.MutableRefObject<T> | React.LegacyRef<T> | undefined)[],
): React.RefCallback<T> {
  return (value) => {
    for (const ref of refs) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = value;
      }
    }
  };
}
