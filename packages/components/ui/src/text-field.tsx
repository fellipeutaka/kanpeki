"use client";

import { chain } from "@kanpeki/utils/chain";
import { tv } from "tailwind-variants";

export const TextFieldStyles = {
  Root: tv({
    base: [
      "relative flex h-9 w-full gap-2 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm outline-none ring-offset-2 ring-offset-background transition",
      "placeholder:text-muted-foreground",
      "has-[input:focus]:ring-1 has-[input:focus]:ring-ring",
    ],
  }),
  Input: tv({
    base: [
      "flex-1 bg-transparent outline-none",
      "disabled:cursor-not-allowed disabled:opacity-50",
    ],
  }),
  Slot: tv({
    base: ["relative z-10 flex shrink-0 items-center"],
  }),
};

export type TextFieldRootProps = React.ComponentProps<"div">;

export function TextFieldRoot({ className, ...props }: TextFieldRootProps) {
  function onPointerDown(event: React.PointerEvent<HTMLDivElement>) {
    props.onPointerDown?.(event);

    const target = event.target as HTMLElement;
    if (target.closest("input, button, a")) {
      return;
    }

    const input = event.currentTarget.querySelector("input");
    if (!input) {
      return;
    }

    const position = input.compareDocumentPosition(target);
    const targetIsBeforeTextFieldInput =
      (position & Node.DOCUMENT_POSITION_PRECEDING) !== 0;
    const cursorPosition = targetIsBeforeTextFieldInput
      ? 0
      : input.value.length;

    requestAnimationFrame(() => {
      // Only some input types support this, browsers will throw an error if not supported
      // See: https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange#:~:text=Note%20that%20according,not%20support%20selection%22.
      try {
        input.setSelectionRange(cursorPosition, cursorPosition);
      } catch {
        //
      }
      input.focus();
    });
  }

  return (
    <div
      {...props}
      onPointerDown={chain(onPointerDown, props.onPointerDown)}
      className={TextFieldStyles.Root({ className })}
    />
  );
}

export type TextFieldInputProps = React.ComponentProps<"input">;

export function TextFieldInput({ className, ...props }: TextFieldInputProps) {
  return <input {...props} className={TextFieldStyles.Input({ className })} />;
}

export type TextFieldSlotProps = React.ComponentProps<"div">;

export function TextFieldSlot({ className, ...props }: TextFieldSlotProps) {
  return <div {...props} className={TextFieldStyles.Slot({ className })} />;
}

export const TextField = Object.assign(
  {},
  {
    Root: TextFieldRoot,
    Input: TextFieldInput,
    Slot: TextFieldSlot,
  },
);
