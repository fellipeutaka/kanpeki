"use client";

import { XIcon } from "lucide-react";
import { composeRenderProps, SearchField } from "react-aria-components";
import { InputGroupButton } from "../input-group";
import { SearchFieldStyles } from "./styles";

export interface SearchFieldRootProps
  extends React.ComponentProps<typeof SearchField> {}

export function SearchFieldRoot(props: SearchFieldRootProps) {
  return <SearchField {...props} data-slot="search-field-root" />;
}

export interface SearchFieldButtonProps
  extends React.ComponentProps<typeof InputGroupButton> {}

export function SearchFieldButton({
  className,
  size = "icon-xs",
  children,
  ...props
}: SearchFieldButtonProps) {
  return (
    <InputGroupButton
      {...props}
      className={composeRenderProps(className, (className) =>
        SearchFieldStyles.Close({ className })
      )}
      data-slot="search-field-button"
      size={size}
    >
      {composeRenderProps(children, (children) => children ?? <XIcon />)}
    </InputGroupButton>
  );
}
