"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import type { VariantProps } from "cva";
import { use, useMemo } from "react";
import {
  FieldError as AriaFieldError,
  FieldErrorContext,
  Text,
} from "react-aria-components";
import { Label } from "~/registry/ui/label";
import { Separator } from "~/registry/ui/separator";
import { FieldStyles } from "./styles";

export interface FieldSetProps extends React.ComponentProps<"fieldset"> {}

export function FieldSet({ className, ...props }: FieldSetProps) {
  return (
    <fieldset
      className={FieldStyles.Set({ className })}
      data-slot="field-set"
      {...props}
    />
  );
}

export interface FieldLegendProps
  extends React.ComponentProps<"legend">,
    VariantProps<typeof FieldStyles.Legend> {}

export function FieldLegend({
  className,
  variant = "legend",
  ...props
}: FieldLegendProps) {
  return (
    <legend
      className={FieldStyles.Legend({ variant, className })}
      data-slot="field-legend"
      data-variant={variant}
      {...props}
    />
  );
}

export interface FieldGroupProps extends React.ComponentProps<"div"> {}

export function FieldGroup({ className, ...props }: FieldGroupProps) {
  return (
    <div
      className={FieldStyles.Group({ className })}
      data-slot="field-group"
      {...props}
    />
  );
}

export interface FieldRootProps
  extends useRender.ComponentProps<"div">,
    VariantProps<typeof FieldStyles.Root> {}

export function FieldRoot({
  render,
  className,
  orientation = "vertical",
  ...props
}: FieldRootProps) {
  const defaultProps: useRender.ElementProps<"div"> = {
    className: FieldStyles.Root({ orientation, className }),
    role: "group",
  };

  return useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(defaultProps, props),
    state: {
      orientation,
      slot: "field-root",
    },
  });
}

export interface FieldContentProps extends React.ComponentProps<"div"> {}

export function FieldContent({ className, ...props }: FieldContentProps) {
  return (
    <div
      className={FieldStyles.Content({ className })}
      data-slot="field-content"
      {...props}
    />
  );
}

export interface FieldLabelProps extends React.ComponentProps<typeof Label> {}

export function FieldLabel({ className, ...props }: FieldLabelProps) {
  return (
    <Label
      className={FieldStyles.Label({ className })}
      data-slot="field-label"
      {...props}
    />
  );
}

export interface FieldTitleProps extends React.ComponentProps<"div"> {}

export function FieldTitle({ className, ...props }: FieldTitleProps) {
  return (
    <div
      className={FieldStyles.Title({ className })}
      data-slot="field-title"
      {...props}
    />
  );
}

export interface FieldDescriptionProps
  extends React.ComponentProps<typeof Text> {}

export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  return (
    <Text
      className={FieldStyles.Description({ className })}
      data-slot="field-description"
      slot="description"
      {...props}
    />
  );
}

export interface FieldSeparatorProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}

export function FieldSeparator({
  children,
  className,
  ...props
}: FieldSeparatorProps) {
  return (
    <div
      className={FieldStyles.Separator({ className })}
      data-content={!!children}
      data-slot="field-separator"
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="relative mx-auto block w-fit bg-background px-2 text-muted-foreground"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  );
}

export interface FieldErrorProps
  extends React.ComponentProps<typeof AriaFieldError> {
  errors?: Array<{ message?: string } | undefined>;
}

export function FieldError({
  className,
  children,
  errors,
  ...props
}: FieldErrorProps) {
  const fieldErrorCtx = use(FieldErrorContext);
  const _errors =
    errors ?? fieldErrorCtx?.validationErrors.map((message) => ({ message }));

  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!_errors?.length) {
      return null;
    }

    const uniqueErrors = [
      ...new Map(
        _errors.map((error, index) => [error?.message, { ...error, id: index }])
      ).values(),
    ];

    if (uniqueErrors.length === 1) {
      return uniqueErrors.at(0)?.message;
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {uniqueErrors.map(
          (error) => error?.message && <li key={error.id}>{error.message}</li>
        )}
      </ul>
    );
  }, [children, _errors]);

  if (!content) {
    return null;
  }

  return (
    <AriaFieldError
      className={FieldStyles.Error({ className })}
      data-slot="field-error"
      // https://github.com/adobe/react-spectrum/issues/7525
      // elementType="div"
      {...props}
    >
      {content}
    </AriaFieldError>
  );
}
