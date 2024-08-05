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
  "table-demo": {
    component: lazy(() => import("@kanpeki/demos/table-demo")),
  },
} as const satisfies Record<string, Registry>;

export interface Registry {
  component: React.LazyExoticComponent<React.ComponentType<unknown>>;
}

export type RegistryDemo = keyof typeof RegistryDemos;
