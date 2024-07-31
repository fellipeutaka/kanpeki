export function mergeRefs<T>(
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
