"use client";

import {
  Autocomplete as RACAutocomplete,
  useFilter,
} from "react-aria-components";

export interface AutocompleteProps<T extends object>
  extends React.ComponentProps<typeof RACAutocomplete<T>> {
  options?: Intl.CollatorOptions;
}

export function Autocomplete<T extends object>({
  filter,
  options,
  ...props
}: AutocompleteProps<T>) {
  const { contains } = useFilter({ sensitivity: "base", ...options });

  return <RACAutocomplete filter={filter ?? contains} {...props} />;
}
