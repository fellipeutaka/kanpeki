"use client";

import {
  Autocomplete as RACAutocomplete,
  useFilter,
} from "react-aria-components";

export interface AutocompleteProps
  extends React.ComponentProps<typeof RACAutocomplete> {
  options?: Intl.CollatorOptions;
}

export function Autocomplete({ filter, options, ...props }: AutocompleteProps) {
  const { contains } = useFilter({ sensitivity: "base", ...options });

  return <RACAutocomplete filter={filter ?? contains} {...props} />;
}
