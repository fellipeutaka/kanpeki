"use client";

import { createContext, useContext, useLayoutEffect, useState } from "react";
import { tv } from "tailwind-variants";

export const AvatarStyles = {
  Root: tv({
    base: ["relative flex size-10 shrink-0 overflow-hidden rounded-full"],
  }),
  Image: tv({
    base: ["aspect-square size-full"],
  }),
  Fallback: tv({
    base: [
      "grid size-full select-none place-content-center rounded-full bg-muted",
    ],
  }),
  Placeholder: tv({
    base: ["grid size-full animate-pulse place-content-center bg-muted"],
  }),
};

type Status = "idle" | "loading" | "success" | "error";
const AvatarContext = createContext<{
  status: Status;
  onStatusChange: (status: Status) => void;
} | null>(null);

function useAvatarContext() {
  const context = useContext(AvatarContext);
  if (!context) {
    throw new Error("Avatar components must be rendered within the AvatarRoot");
  }
  return context;
}

export type AvatarRootProps = React.ComponentProps<"span">;

export function AvatarRoot({ className, ...props }: AvatarRootProps) {
  const [status, setStatus] = useState<Status>("idle");

  return (
    <AvatarContext.Provider value={{ status, onStatusChange: setStatus }}>
      <span className={AvatarStyles.Root({ className })} {...props} />
    </AvatarContext.Provider>
  );
}

function useImageLoadingStatus(src?: string) {
  const [status, setStatus] = useState<Status>("idle");

  useLayoutEffect(() => {
    if (!src) {
      setStatus("error");
      return;
    }
    let isMounted = true;
    const image = new window.Image();
    const updateStatus = (status: Status) => () => {
      if (!isMounted) {
        return;
      }
      setStatus(status);
    };
    setStatus("loading");
    image.onload = updateStatus("success");
    image.onerror = updateStatus("error");
    image.src = src;
    return () => {
      isMounted = false;
    };
  }, [src]);

  return status;
}

export type AvatarImageProps = React.ComponentProps<"img">;

export function AvatarImage({ className, src, ...props }: AvatarImageProps) {
  const context = useAvatarContext();
  const status = useImageLoadingStatus(src);

  useLayoutEffect(() => {
    if (status !== "idle") {
      context.onStatusChange(status);
    }
  }, [status, context.onStatusChange]);

  if (status !== "success") {
    return null;
  }

  return (
    <img
      {...props}
      src={src}
      alt={props.alt}
      className={AvatarStyles.Image({ className })}
    />
  );
}

export type AvatarFallbackProps = React.ComponentProps<"span">;

export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
  const { status } = useAvatarContext();

  if (status !== "error") {
    return null;
  }

  return <span {...props} className={AvatarStyles.Fallback({ className })} />;
}

export type AvatarPlaceholderProps = React.ComponentProps<"span">;

export function AvatarPlaceholder({
  className,
  ...props
}: AvatarPlaceholderProps) {
  const { status } = useAvatarContext();

  if (status !== "idle" && status !== "loading") {
    return null;
  }

  return (
    <span {...props} className={AvatarStyles.Placeholder({ className })} />
  );
}

export const Avatar = Object.assign(
  {},
  {
    Root: AvatarRoot,
    Image: AvatarImage,
    Fallback: AvatarFallback,
    Placeholder: AvatarPlaceholder,
  }
);
