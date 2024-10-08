import { lazy } from "react";

export const RegistryDemos = {
  "alert-dialog-demo": {
    component: lazy(() => import("@kanpeki/demos/alert-dialog-demo")),
  },
  "alert-demo": {
    component: lazy(() => import("@kanpeki/demos/alert-demo")),
  },
  "alert-destructive": {
    component: lazy(() => import("@kanpeki/demos/alert-destructive")),
  },
  "alert-warning": {
    component: lazy(() => import("@kanpeki/demos/alert-warning")),
  },
  "avatar-demo": {
    component: lazy(() => import("@kanpeki/demos/avatar-demo")),
  },
  "avatar-group": {
    component: lazy(() => import("@kanpeki/demos/avatar-group")),
  },
  "badge-demo": {
    component: lazy(() => import("@kanpeki/demos/badge-demo")),
  },
  "badge-destructive": {
    component: lazy(() => import("@kanpeki/demos/badge-destructive")),
  },
  "badge-outline": {
    component: lazy(() => import("@kanpeki/demos/badge-outline")),
  },
  "badge-secondary": {
    component: lazy(() => import("@kanpeki/demos/badge-secondary")),
  },
  "button-demo": {
    component: lazy(() => import("@kanpeki/demos/button-demo")),
  },
  "button-destructive": {
    component: lazy(() => import("@kanpeki/demos/button-destructive")),
  },
  "button-ghost": {
    component: lazy(() => import("@kanpeki/demos/button-ghost")),
  },
  "button-icon": {
    component: lazy(() => import("@kanpeki/demos/button-icon")),
  },
  "button-outline": {
    component: lazy(() => import("@kanpeki/demos/button-outline")),
  },
  "button-secondary": {
    component: lazy(() => import("@kanpeki/demos/button-secondary")),
  },
  "button-with-icon": {
    component: lazy(() => import("@kanpeki/demos/button-with-icon")),
  },
  "card-demo": {
    component: lazy(() => import("@kanpeki/demos/card-demo")),
  },
  "checkbox-demo": {
    component: lazy(() => import("@kanpeki/demos/checkbox-demo")),
  },
  "checkbox-disabled": {
    component: lazy(() => import("@kanpeki/demos/checkbox-disabled")),
  },
  "command-demo": {
    component: lazy(() => import("@kanpeki/demos/command-demo")),
  },
  "dialog-demo": {
    component: lazy(() => import("@kanpeki/demos/dialog-demo")),
  },
  "dialog-sheet-bottom": {
    component: lazy(() => import("@kanpeki/demos/dialog-sheet-bottom")),
  },
  "dialog-sheet-left": {
    component: lazy(() => import("@kanpeki/demos/dialog-sheet-left")),
  },
  "dialog-sheet-right": {
    component: lazy(() => import("@kanpeki/demos/dialog-sheet-right")),
  },
  "dialog-sheet-top": {
    component: lazy(() => import("@kanpeki/demos/dialog-sheet-top")),
  },
  "label-demo": {
    component: lazy(() => import("@kanpeki/demos/label-demo")),
  },
  "scroll-area-demo": {
    component: lazy(() => import("@kanpeki/demos/scroll-area-demo")),
  },
  "scroll-area-horizontal": {
    component: lazy(() => import("@kanpeki/demos/scroll-area-horizontal")),
  },
  "separator-demo": {
    component: lazy(() => import("@kanpeki/demos/separator-demo")),
  },
  "separator-vertical": {
    component: lazy(() => import("@kanpeki/demos/separator-vertical")),
  },
  "skeleton-card": {
    component: lazy(() => import("@kanpeki/demos/skeleton-card")),
  },
  "skeleton-demo": {
    component: lazy(() => import("@kanpeki/demos/skeleton-demo")),
  },
  "switch-demo": {
    component: lazy(() => import("@kanpeki/demos/switch-demo")),
  },
  "table-demo": {
    component: lazy(() => import("@kanpeki/demos/table-demo")),
  },
  "tabs-demo": {
    component: lazy(() => import("@kanpeki/demos/tabs-demo")),
  },
  "text-area-auto-resize": {
    component: lazy(() => import("@kanpeki/demos/text-area-auto-resize")),
  },
  "text-area-demo": {
    component: lazy(() => import("@kanpeki/demos/text-area-demo")),
  },
  "text-area-disabled": {
    component: lazy(() => import("@kanpeki/demos/text-area-disabled")),
  },
  "text-area-with-label": {
    component: lazy(() => import("@kanpeki/demos/text-area-with-label")),
  },
  "text-field-demo": {
    component: lazy(() => import("@kanpeki/demos/text-field-demo")),
  },
  "text-field-with-icon": {
    component: lazy(() => import("@kanpeki/demos/text-field-with-icon")),
  },
  "text-field-password": {
    component: lazy(() => import("@kanpeki/demos/text-field-password")),
  },
} as const satisfies Record<string, Registry>;

export interface Registry {
  component: React.LazyExoticComponent<React.ComponentType<unknown>>;
}

export type RegistryDemo = keyof typeof RegistryDemos;
