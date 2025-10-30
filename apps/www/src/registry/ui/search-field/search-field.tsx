"use client";

import { XIcon } from "lucide-react";
import {
  Button,
  composeRenderProps,
  Input,
  SearchField,
} from "react-aria-components";
import { SearchFieldStyles } from "./styles";

export interface SearchFieldRootProps
  extends React.ComponentProps<typeof SearchField> {}

export function SearchFieldRoot({ className, ...props }: SearchFieldRootProps) {
  return (
    <SearchField
      {...props}
      className={composeRenderProps(className, (className) =>
        SearchFieldStyles.Root({ className })
      )}
      data-slot="search-field-root"
    />
  );
}

export interface SearchFieldInputProps
  extends React.ComponentProps<typeof Input> {}

export function SearchFieldInput({
  className,
  ...props
}: SearchFieldInputProps) {
  return (
    <Input
      {...props}
      className={composeRenderProps(className, (className) =>
        SearchFieldStyles.Input({ className })
      )}
      data-slot="search-field-input"
    />
  );
}

export interface SearchFieldButtonProps
  extends Omit<React.ComponentProps<typeof Button>, "children"> {}

export function SearchFieldButton({
  className,
  ...props
}: SearchFieldButtonProps) {
  return (
    <Button
      {...props}
      className={composeRenderProps(className, (className) =>
        SearchFieldStyles.Close({ className })
      )}
      data-slot="search-field-input"
    >
      <XIcon />
    </Button>
  );
}
