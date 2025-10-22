"use client";

import {
  Header,
  Keyboard,
  Menu,
  MenuItem,
  MenuSection,
  MenuTrigger,
  Separator,
  SubmenuTrigger,
  Text,
} from "react-aria-components";
import { DropdownMenuStyles } from "./styles";

const Icons = {
  Check: (props) => (
    <svg
      aria-hidden="true"
      height={32}
      viewBox="0 0 15 15"
      width={32}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 01-.944.12l-2.75-2.5a.625.625 0 01.841-.925l2.208 2.007 3.849-5.886a.625.625 0 01.865-.181"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
  ChevronRight: (props) => (
    <svg
      aria-hidden="true"
      fill="none"
      height={24}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  ),
  DotFilled: (props) => (
    <svg
      aria-hidden="true"
      height="32"
      viewBox="0 0 15 15"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
        fill="currentColor"
      />
    </svg>
  ),
} as const satisfies Record<
  string,
  (props: React.ComponentProps<"svg">) => React.JSX.Element
>;

export interface DropdownMenuRootProps
  extends React.ComponentProps<typeof MenuTrigger> {}
export const DropdownMenuRoot = MenuTrigger;

export interface DropdownMenuContentProps<T extends object>
  extends React.ComponentProps<typeof Menu<T>> {}

export function DropdownMenuContent<T extends object>({
  className,
  ...props
}: DropdownMenuContentProps<T>) {
  return (
    <Menu
      {...props}
      className={DropdownMenuStyles.Content({
        className,
      })}
    />
  );
}

export interface DropdownMenuItemProps<T extends object>
  extends React.ComponentProps<typeof MenuItem<T>> {
  isDanger?: boolean;
  type?: "default" | "checkbox" | "radio";
}

export function DropdownMenuItem<T extends object>({
  className,
  children,
  textValue,
  isDanger,
  type = "default",
  ...props
}: DropdownMenuItemProps<T>) {
  const _textValue =
    textValue ?? (typeof children === "string" ? children : undefined);

  if (!_textValue) {
    console.warn(
      'DropdownMenuItem: "textValue" is required when "children" is not a string'
    );
  }

  return (
    <MenuItem
      {...props}
      className={(values) =>
        DropdownMenuStyles.Item({
          className:
            typeof className === "function" ? className(values) : className,
          type,
        })
      }
      data-danger={isDanger}
      textValue={_textValue}
    >
      {(values) => (
        <>
          {type === "checkbox" && (
            <Icons.Check className={DropdownMenuStyles.CheckboxIcon()} />
          )}
          {type === "radio" && (
            <Icons.DotFilled className={DropdownMenuStyles.CheckboxIcon()} />
          )}
          {typeof children === "function" ? children(values) : children}
          {values.hasSubmenu && (
            <Icons.ChevronRight className="ml-auto size-3.5" />
          )}
        </>
      )}
    </MenuItem>
  );
}

export interface DropdownMenuHeaderProps
  extends React.ComponentProps<typeof Header> {}

export function DropdownMenuHeader({
  className,
  ...props
}: DropdownMenuHeaderProps) {
  return (
    <Header {...props} className={DropdownMenuStyles.Header({ className })} />
  );
}

export interface DropdownMenuGroupProps
  extends React.ComponentProps<typeof MenuSection> {}
export const DropdownMenuGroup = MenuSection;

export interface DropdownMenuShortcutProps
  extends React.ComponentProps<typeof Keyboard> {}

export function DropdownMenuShortcut({
  className,
  ...props
}: DropdownMenuShortcutProps) {
  return (
    <Keyboard
      {...props}
      className={DropdownMenuStyles.Shortcut({ className })}
    />
  );
}

export interface DropdownMenuSeparatorProps
  extends React.ComponentProps<typeof Separator> {}

export function DropdownMenuSeparator({
  className,
  orientation = "horizontal",
  ...props
}: DropdownMenuSeparatorProps) {
  return (
    <Separator
      {...props}
      className={DropdownMenuStyles.Separator({
        className,
        orientation,
      })}
      orientation={orientation}
    />
  );
}

export interface DropdownMenuLabelProps
  extends Omit<React.ComponentProps<typeof Text>, "slot"> {}

export function DropdownMenuLabel(props: DropdownMenuLabelProps) {
  return <Text {...props} slot="label" />;
}

export interface DropdownMenuDescriptionProps extends DropdownMenuLabelProps {}

export function DropdownMenuDescription(props: DropdownMenuDescriptionProps) {
  return <Text {...props} slot="description" />;
}

export interface DropdownMenuItemDetailsProps
  extends React.ComponentProps<"div"> {}

export function DropdownMenuItemDetails({
  className,
  ...props
}: DropdownMenuItemDetailsProps) {
  return (
    <div {...props} className={DropdownMenuStyles.ItemDetails({ className })} />
  );
}

export interface DropdownMenuSubProps
  extends React.ComponentProps<typeof SubmenuTrigger> {}
export const DropdownMenuSub = SubmenuTrigger;
