import { lazy } from "react";

export const RegistryDemos = {
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
} as const satisfies Record<string, Registry>;

export interface Registry {
  component: React.LazyExoticComponent<React.ComponentType<unknown>>;
}

export type RegistryDemo = keyof typeof RegistryDemos;
