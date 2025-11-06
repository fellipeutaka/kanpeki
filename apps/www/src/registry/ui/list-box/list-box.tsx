"use client";

import { CheckIcon } from "lucide-react";
import {
  composeRenderProps,
  Header,
  ListBox,
  ListBoxItem,
  ListBoxLoadMoreItem,
  ListBoxSection,
} from "react-aria-components";
import { ListboxStyles } from "./styles";

export interface ListboxRootProps<T extends object>
  extends React.ComponentProps<typeof ListBox<T>> {}

export function ListboxRoot<T extends object>({
  className,
  ...props
}: ListboxRootProps<T>) {
  return (
    <ListBox
      className={composeRenderProps(className, (className) =>
        ListboxStyles.Root({ className })
      )}
      data-slot="listbox-root"
      {...props}
    />
  );
}

export interface ListboxItemProps<T extends object>
  extends React.ComponentProps<typeof ListBoxItem<T>> {}

export function ListboxItem<T extends object>({
  className,
  children,
  textValue,
  ...props
}: ListboxItemProps<T>) {
  const _textValue =
    (textValue ?? typeof children === "string") ? String(children) : undefined;

  return (
    <ListBoxItem
      className={composeRenderProps(className, (className) =>
        ListboxStyles.Item({ className })
      )}
      data-slot="listbox-item"
      textValue={_textValue}
      {...props}
    >
      {composeRenderProps(children, (children, values) => (
        <>
          {values.isSelected && (
            <span className="absolute right-2 flex size-3.5 items-center justify-center">
              <CheckIcon className="size-4" />
            </span>
          )}

          {children}
        </>
      ))}
    </ListBoxItem>
  );
}

export interface ListboxEmptyProps extends React.ComponentProps<"div"> {}

export function ListboxEmpty({ className, ...props }: ListboxEmptyProps) {
  return (
    <div
      className={ListboxStyles.Empty({ className })}
      data-slot="listbox-empty"
      {...props}
    />
  );
}

export interface ListboxGroupProps<T extends object>
  extends React.ComponentProps<typeof ListBoxSection<T>> {}

export function ListboxGroup<T extends object>(props: ListboxGroupProps<T>) {
  return <ListBoxSection data-slot="listbox-group" {...props} />;
}

export interface ListboxLabelProps
  extends React.ComponentProps<typeof Header> {}

export function ListboxLabel({ className, ...props }: ListboxLabelProps) {
  return (
    <Header
      className={ListboxStyles.Label({ className })}
      data-slot="listbox-label"
      {...props}
    />
  );
}

export interface ListboxLoadMoreItemProps
  extends React.ComponentProps<typeof ListBoxLoadMoreItem> {}

export function ListboxLoadMoreItem({
  className,
  ...props
}: ListboxLoadMoreItemProps) {
  return (
    <ListBoxLoadMoreItem
      className={ListboxStyles.Item({
        className: ["justify-center px-0", className],
      })}
      data-slot="listbox-load-more-item"
      {...props}
    />
  );
}
