import { lazy } from "react";
import { ComponentWrapper } from "./_components/component-wrapper";

const SINK_COMPONENTS: [
  string,
  React.LazyExoticComponent<() => React.JSX.Element>,
][] = [
  [
    "chart",
    lazy(() =>
      import("./_components/demos/chart-demo").then((mod) => ({
        default: mod.ChartDemo,
      }))
    ),
  ],
  [
    "accordion",
    lazy(() =>
      import("./_components/demos/accordion-demo").then((mod) => ({
        default: mod.AccordionDemo,
      }))
    ),
  ],
  [
    "alert",
    lazy(() =>
      import("./_components/demos/alert-demo").then((mod) => ({
        default: mod.AlertDemo,
      }))
    ),
  ],
  [
    "alert-dialog",
    lazy(() =>
      import("./_components/demos/alert-dialog-demo").then((mod) => ({
        default: mod.AlertDialogDemo,
      }))
    ),
  ],
  [
    "aspect-ratio",
    lazy(() =>
      import("./_components/demos/aspect-ratio-demo").then((mod) => ({
        default: mod.AspectRatioDemo,
      }))
    ),
  ],
  [
    "avatar",
    lazy(() =>
      import("./_components/demos/avatar-demo").then((mod) => ({
        default: mod.AvatarDemo,
      }))
    ),
  ],
  [
    "badge",
    lazy(() =>
      import("./_components/demos/badge-demo").then((mod) => ({
        default: mod.BadgeDemo,
      }))
    ),
  ],
  [
    "breadcrumb",
    lazy(() =>
      import("./_components/demos/breadcrumb-demo").then((mod) => ({
        default: mod.BreadcrumbDemo,
      }))
    ),
  ],
  [
    "button",
    lazy(() =>
      import("./_components/demos/button-demo").then((mod) => ({
        default: mod.ButtonDemo,
      }))
    ),
  ],
  [
    "calendar",
    lazy(() =>
      import("./_components/demos/calendar-demo").then((mod) => ({
        default: mod.CalendarDemo,
      }))
    ),
  ],
  [
    "card",
    lazy(() =>
      import("./_components/demos/card-demo").then((mod) => ({
        default: mod.CardDemo,
      }))
    ),
  ],
  [
    "carousel",
    lazy(() =>
      import("./_components/demos/carousel-demo").then((mod) => ({
        default: mod.CarouselDemo,
      }))
    ),
  ],
  [
    "checkbox",
    lazy(() =>
      import("./_components/demos/checkbox-demo").then((mod) => ({
        default: mod.CheckboxDemo,
      }))
    ),
  ],
  [
    "collapsible",
    lazy(() =>
      import("./_components/demos/collapsible-demo").then((mod) => ({
        default: mod.CollapsibleDemo,
      }))
    ),
  ],
  [
    "combobox",
    lazy(() =>
      import("./_components/demos/combobox-demo").then((mod) => ({
        default: mod.ComboboxDemo,
      }))
    ),
  ],
  [
    "command",
    lazy(() =>
      import("./_components/demos/command-demo").then((mod) => ({
        default: mod.CommandDemo,
      }))
    ),
  ],
  // ["context-menu"],
  [
    "date-picker",
    lazy(() =>
      import("./_components/demos/date-picker-demo").then((mod) => ({
        default: mod.DatePickerDemo,
      }))
    ),
  ],
  [
    "dropzone",
    lazy(() =>
      import("./_components/demos/dropzone-demo").then((mod) => ({
        default: mod.DropzoneDemo,
      }))
    ),
  ],
  [
    "dialog",
    lazy(() =>
      import("./_components/demos/dialog-demo").then((mod) => ({
        default: mod.DialogDemo,
      }))
    ),
  ],
  [
    "drawer",
    lazy(() =>
      import("./_components/demos/drawer-demo").then((mod) => ({
        default: mod.DrawerDemo,
      }))
    ),
  ],
  [
    "dropdown-menu",
    lazy(() =>
      import("./_components/demos/dropdown-menu-demo").then((mod) => ({
        default: mod.DropdownMenuDemo,
      }))
    ),
  ],
  [
    "form",
    lazy(() =>
      import("./_components/demos/form-demo").then((mod) => ({
        default: mod.FormDemo,
      }))
    ),
  ],
  [
    "hover-card",
    lazy(() =>
      import("./_components/demos/hover-card-demo").then((mod) => ({
        default: mod.HoverCardDemo,
      }))
    ),
  ],
  [
    "input",
    lazy(() =>
      import("./_components/demos/input-demo").then((mod) => ({
        default: mod.InputDemo,
      }))
    ),
  ],
  [
    "input-otp",
    lazy(() =>
      import("./_components/demos/input-otp-demo").then((mod) => ({
        default: mod.InputOTPDemo,
      }))
    ),
  ],
  [
    "label",
    lazy(() =>
      import("./_components/demos/label-demo").then((mod) => ({
        default: mod.LabelDemo,
      }))
    ),
  ],
  [
    "link",
    lazy(() =>
      import("./_components/demos/link-demo").then((mod) => ({
        default: mod.LinkDemo,
      }))
    ),
  ],
  // ["menubar"],
  // ["navigation-menu"],
  [
    "number-field",
    lazy(() =>
      import("./_components/demos/number-field-demo").then((mod) => ({
        default: mod.NumberFieldDemo,
      }))
    ),
  ],
  [
    "pagination",
    lazy(() =>
      import("./_components/demos/pagination-demo").then((mod) => ({
        default: mod.PaginationDemo,
      }))
    ),
  ],
  [
    "popover",
    lazy(() =>
      import("./_components/demos/popover-demo").then((mod) => ({
        default: mod.PopoverDemo,
      }))
    ),
  ],
  [
    "progress",
    lazy(() =>
      import("./_components/demos/progress-demo").then((mod) => ({
        default: mod.ProgressDemo,
      }))
    ),
  ],
  [
    "radio-group",
    lazy(() =>
      import("./_components/demos/radio-group-demo").then((mod) => ({
        default: mod.RadioGroupDemo,
      }))
    ),
  ],
  [
    "resizable",
    lazy(() =>
      import("./_components/demos/resizable-demo").then((mod) => ({
        default: mod.ResizableDemo,
      }))
    ),
  ],
  [
    "scroll-area",
    lazy(() =>
      import("./_components/demos/scroll-area-demo").then((mod) => ({
        default: mod.ScrollAreaDemo,
      }))
    ),
  ],
  [
    "select",
    lazy(() =>
      import("./_components/demos/select-demo").then((mod) => ({
        default: mod.SelectDemo,
      }))
    ),
  ],
  [
    "separator",
    lazy(() =>
      import("./_components/demos/separator-demo").then((mod) => ({
        default: mod.SeparatorDemo,
      }))
    ),
  ],
  [
    "sheet",
    lazy(() =>
      import("./_components/demos/sheet-demo").then((mod) => ({
        default: mod.SheetDemo,
      }))
    ),
  ],
  [
    "skeleton",
    lazy(() =>
      import("./_components/demos/skeleton-demo").then((mod) => ({
        default: mod.SkeletonDemo,
      }))
    ),
  ],
  [
    "slider",
    lazy(() =>
      import("./_components/demos/slider-demo").then((mod) => ({
        default: mod.SliderDemo,
      }))
    ),
  ],
  [
    "sonner",
    lazy(() =>
      import("./_components/demos/sonner-demo").then((mod) => ({
        default: mod.SonnerDemo,
      }))
    ),
  ],
  [
    "spinner",
    lazy(() =>
      import("./_components/demos/spinner-demo").then((mod) => ({
        default: mod.SpinnerDemo,
      }))
    ),
  ],
  [
    "switch",
    lazy(() =>
      import("./_components/demos/switch-demo").then((mod) => ({
        default: mod.SwitchDemo,
      }))
    ),
  ],
  [
    "table",
    lazy(() =>
      import("./_components/demos/table-demo").then((mod) => ({
        default: mod.TableDemo,
      }))
    ),
  ],
  [
    "tabs",
    lazy(() =>
      import("./_components/demos/tabs-demo").then((mod) => ({
        default: mod.TabsDemo,
      }))
    ),
  ],
  [
    "textarea",
    lazy(() =>
      import("./_components/demos/textarea-demo").then((mod) => ({
        default: mod.TextareaDemo,
      }))
    ),
  ],
  [
    "toggle",
    lazy(() =>
      import("./_components/demos/toggle-demo").then((mod) => ({
        default: mod.ToggleDemo,
      }))
    ),
  ],
  [
    "toggle-group",
    lazy(() =>
      import("./_components/demos/toggle-group-demo").then((mod) => ({
        default: mod.ToggleGroupDemo,
      }))
    ),
  ],
  [
    "tooltip",
    lazy(() =>
      import("./_components/demos/tooltip-demo").then((mod) => ({
        default: mod.TooltipDemo,
      }))
    ),
  ],
];

export default function Page() {
  return (
    <main className="@container grid flex-1 gap-4 p-4">
      {SINK_COMPONENTS.map(([name, Component]) => (
        <ComponentWrapper key={name} name={name}>
          <Component />
        </ComponentWrapper>
      ))}
    </main>
  );
}
