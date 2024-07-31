import { clsx } from "clsx";
import { chain } from "./chain";
import { mergeIds } from "./merge-ids";

// biome-ignore lint/suspicious/noExplicitAny: any is used to support any function signature
type SAFE_ANY = any;

// taken from: https://stackoverflow.com/questions/51603250/typescript-3-parameter-list-intersection-type/51604379#51604379
type TupleTypes<T> = { [P in keyof T]: T[P] } extends { [key: number]: infer V }
  ? NullToObject<V>
  : never;
type NullToObject<T> = T extends null | undefined ? NonNullable<unknown> : T;

type UnionToIntersection<U> = (
  U extends SAFE_ANY
    ? (k: U) => void
    : never
) extends (k: infer I) => void
  ? I
  : never;

type PropsArg = Record<string, SAFE_ANY> | null | undefined;

/**
 * Merges multiple props objects together. Event handlers are chained,
 * classNames are combined, and ids are deduplicated - different ids
 * will trigger a side-effect and re-render components hooked up with `useId`.
 * For all other props, the last prop object overrides all previous ones.
 * @param args - Multiple sets of props to merge together.
 */

// biome-ignore lint/complexity/noExcessiveCognitiveComplexity: This function is complex by nature
export function mergeProps<T extends PropsArg[]>(...args: T) {
  // Start with a base clone of the first argument. This is a lot faster than starting
  // with an empty object and adding properties as we go.
  const result = { ...args[0] };
  for (let i = 1; i < args.length; i++) {
    const props = args[i];
    for (const key in props) {
      const a = result[key];
      const b = props[key];

      // Chain events
      if (
        typeof a === "function" &&
        typeof b === "function" &&
        // This is a lot faster than a regex.
        key[0] === "o" &&
        key[1] === "n" &&
        key.charCodeAt(2) >= /* 'A' */ 65 &&
        key.charCodeAt(2) <= /* 'Z' */ 90
      ) {
        result[key] = chain(a, b);

        // Merge classnames, sometimes classNames are empty string which eval to false, so we just need to do a type check
      } else if (
        (key === "className" || key === "UNSAFE_className") &&
        typeof a === "string" &&
        typeof b === "string"
      ) {
        result[key] = clsx(a, b);
      } else if (key === "id" && a && b) {
        result.id = mergeIds(a, b);
        // Override others
      } else {
        result[key] = b !== undefined ? b : a;
      }
    }
  }

  return result as UnionToIntersection<TupleTypes<T>>;
}
