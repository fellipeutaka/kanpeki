"use client";

import {
  Header,
  ListBoxItem as ListBoxItemPrimitive,
  ListBox as ListBoxPrimitive,
  ListBoxSection as ListBoxSectionPrimitive,
} from "react-aria-components";
import { ListBoxStyles } from "./styles";

export interface ListBoxRootProps<T extends object>
  extends React.ComponentProps<typeof ListBoxPrimitive<T>> {}

export function ListBoxRoot<T extends object>({
  className,
  ...props
}: ListBoxRootProps<T>) {
  return (
    <ListBoxPrimitive
      {...props}
      className={(values) =>
        ListBoxStyles.Root({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface ListBoxItemProps<T extends object>
  extends React.ComponentProps<typeof ListBoxItemPrimitive<T>> {}

export function ListBoxItem<T extends object>({
  className,
  ...props
}: ListBoxItemProps<T>) {
  return (
    <ListBoxItemPrimitive
      {...props}
      className={(values) =>
        ListBoxStyles.Item({
          isDisabled: values.isDisabled,
          isDragging: values.isDragging,
          isFocusVisible: values.isFocusVisible,
          isHovered: values.isHovered,
          isSelected: values.isSelected,
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface ListBoxPickerProps<T extends object>
  extends React.ComponentProps<typeof ListBoxPrimitive<T>> {}

export function ListBoxPicker<T extends object>({
  className,
  ...props
}: ListBoxPickerProps<T>) {
  return (
    <ListBoxPrimitive
      {...props}
      className={(values) =>
        ListBoxStyles.Picker({
          className:
            typeof className === "function" ? className(values) : className,
        })
      }
    />
  );
}

export interface ListBoxSectionProps<T extends object>
  extends React.ComponentProps<typeof ListBoxSectionPrimitive<T>> {}

export function ListBoxSection<T extends object>({
  className,
  ...props
}: ListBoxSectionProps<T>) {
  return (
    <ListBoxSectionPrimitive
      {...props}
      className={ListBoxStyles.Section({ className })}
    />
  );
}

export interface ListBoxSectionHeaderProps
  extends React.ComponentProps<typeof Header> {}

export function ListBoxSectionHeader({
  className,
  ...props
}: ListBoxSectionHeaderProps) {
  return (
    <Header {...props} className={ListBoxStyles.SectionHeader({ className })} />
  );
}
