"use client"

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/button.tsx
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        icon: "size-8",
        "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ui/kbd.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
function Kbd({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "kbd",
    {
      "data-slot": "kbd",
      className: cn(
        "inline-flex h-5 min-w-5 items-center justify-center rounded-sm border-b-2 border-b-input bg-muted px-1.5 font-mono text-2xs font-medium text-muted-foreground select-none",
        className
      ),
      ...props
    }
  );
}
function KbdGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "span",
    {
      "data-slot": "kbd-group",
      className: cn("inline-flex items-center gap-1", className),
      ...props
    }
  );
}

// src/components/ui/segmented-control.tsx
import * as React from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var SegmentedControlContext = React.createContext(null);
function useSegmentedControlContext() {
  const ctx = React.useContext(SegmentedControlContext);
  if (!ctx) {
    throw new Error(
      "SegmentedControlItem must be used within a SegmentedControl"
    );
  }
  return ctx;
}
function SegmentedControl({
  className,
  value,
  onChange,
  label,
  fill = false,
  children,
  ...props
}) {
  const contextValue = React.useMemo(
    () => ({ value, onChange, fill }),
    [value, onChange, fill]
  );
  const handleKeyDown = (event) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") {
      return;
    }
    const items = Array.from(
      event.currentTarget.querySelectorAll(
        '[role="radio"]:not(:disabled)'
      )
    );
    if (items.length === 0) return;
    const currentIndex = items.findIndex(
      (item) => item.dataset.value === value
    );
    let nextIndex = currentIndex;
    if (event.key === "ArrowRight") {
      nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    } else if (event.key === "ArrowLeft") {
      nextIndex = currentIndex <= 0 ? items.length - 1 : currentIndex - 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = items.length - 1;
    }
    const next = items[nextIndex];
    if (next) {
      event.preventDefault();
      next.focus();
      onChange(next.dataset.value);
    }
  };
  return /* @__PURE__ */ jsx3(SegmentedControlContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "segmented-control",
      role: "radiogroup",
      "aria-label": label,
      onKeyDown: handleKeyDown,
      className: cn(
        "inline-flex items-center gap-0.5 rounded-lg bg-muted p-0.5",
        fill && "flex w-full",
        className
      ),
      ...props,
      children
    }
  ) });
}
function SegmentedControlItem({
  className,
  value: itemValue,
  disabled = false,
  children,
  ...props
}) {
  const ctx = useSegmentedControlContext();
  const isSelected = ctx.value === itemValue;
  return /* @__PURE__ */ jsx3(
    "button",
    {
      type: "button",
      "data-slot": "segmented-control-item",
      role: "radio",
      "aria-checked": isSelected,
      "data-value": itemValue,
      "data-state": isSelected ? "active" : "inactive",
      disabled,
      tabIndex: isSelected ? 0 : -1,
      onClick: () => {
        if (!disabled && !isSelected) ctx.onChange(itemValue);
      },
      className: cn(
        "inline-flex h-7 items-center justify-center gap-1.5 rounded-md px-2.5 text-sm font-medium whitespace-nowrap text-muted-foreground transition-all outline-none focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50",
        ctx.fill && "flex-1",
        isSelected ? "bg-background text-foreground shadow-sm" : "hover:text-foreground",
        className
      ),
      ...props,
      children
    }
  );
}

// src/components/ui/toggle.tsx
import { cva as cva2 } from "class-variance-authority";
import { Toggle as TogglePrimitive } from "radix-ui";
import { jsx as jsx4 } from "react/jsx-runtime";
var toggleVariants = cva2(
  "group/toggle inline-flex items-center justify-center gap-1 rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 aria-pressed:bg-muted data-[state=on]:bg-muted dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent hover:bg-muted"
      },
      size: {
        default: "h-8 min-w-8 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        sm: "h-7 min-w-7 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 min-w-9 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Toggle({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx4(
    TogglePrimitive.Root,
    {
      "data-slot": "toggle",
      className: cn(toggleVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ui/toggle-group.tsx
import * as React2 from "react";
import { ToggleGroup as ToggleGroupPrimitive } from "radix-ui";
import { jsx as jsx5 } from "react/jsx-runtime";
var ToggleGroupContext = React2.createContext({
  size: "default",
  variant: "default",
  spacing: 2,
  orientation: "horizontal"
});
function ToggleGroup({
  className,
  variant,
  size,
  spacing = 2,
  orientation = "horizontal",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
    ToggleGroupPrimitive.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size,
      "data-spacing": spacing,
      "data-orientation": orientation,
      style: { "--gap": spacing },
      className: cn(
        "group/toggle-group flex w-fit flex-row items-center gap-[--spacing(var(--gap))] rounded-lg data-[size=sm]:rounded-[min(var(--radius-md),10px)] data-vertical:flex-col data-vertical:items-stretch",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx5(
        ToggleGroupContext.Provider,
        {
          value: { variant, size, spacing, orientation },
          children
        }
      )
    }
  );
}
function ToggleGroupItem({
  className,
  children,
  variant = "default",
  size = "default",
  ...props
}) {
  const context = React2.useContext(ToggleGroupContext);
  return /* @__PURE__ */ jsx5(
    ToggleGroupPrimitive.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": context.variant || variant,
      "data-size": context.size || size,
      "data-spacing": context.spacing,
      className: cn(
        "shrink-0 group-data-[spacing=0]/toggle-group:rounded-none group-data-[spacing=0]/toggle-group:px-2 focus:z-10 focus-visible:z-10 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-end]:pr-1.5 group-data-[spacing=0]/toggle-group:has-data-[icon=inline-start]:pl-1.5 group-data-horizontal/toggle-group:data-[spacing=0]:first:rounded-l-lg group-data-vertical/toggle-group:data-[spacing=0]:first:rounded-t-lg group-data-horizontal/toggle-group:data-[spacing=0]:last:rounded-r-lg group-data-vertical/toggle-group:data-[spacing=0]:last:rounded-b-lg group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:border-l-0 group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:border-t-0 group-data-horizontal/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-l group-data-vertical/toggle-group:data-[spacing=0]:data-[variant=outline]:first:border-t",
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        className
      ),
      ...props,
      children
    }
  );
}

// src/components/ui/toolbar.tsx
import * as React3 from "react";
import { Toolbar as ToolbarPrimitive } from "radix-ui";
import { jsx as jsx6 } from "react/jsx-runtime";
var ToolbarContext = React3.createContext({
  orientation: "horizontal"
});
function Toolbar({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx6(ToolbarContext.Provider, { value: { orientation }, children: /* @__PURE__ */ jsx6(
    ToolbarPrimitive.Root,
    {
      "data-slot": "toolbar",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "flex w-fit items-center gap-0.5 rounded-lg border border-input bg-card p-1 shadow-xs data-vertical:flex-col",
        className
      ),
      ...props
    }
  ) });
}
function ToolbarGroup({ className, ...props }) {
  const { orientation } = React3.useContext(ToolbarContext);
  return /* @__PURE__ */ jsx6(
    "div",
    {
      role: "group",
      "data-slot": "toolbar-group",
      "data-orientation": orientation,
      className: cn(
        "flex items-center gap-0.5 data-vertical:flex-col",
        className
      ),
      ...props
    }
  );
}
function ToolbarButton({
  className,
  variant = "ghost",
  size = "sm",
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    ToolbarPrimitive.Button,
    {
      "data-slot": "toolbar-button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size }), className),
      ...props
    }
  );
}
function ToolbarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    ToolbarPrimitive.Separator,
    {
      "data-slot": "toolbar-separator",
      className: cn(
        "mx-0.5 shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:h-4 data-vertical:w-px",
        className
      ),
      ...props
    }
  );
}
function ToolbarLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    ToolbarPrimitive.Link,
    {
      "data-slot": "toolbar-link",
      className: cn(
        "flex h-7 items-center rounded-[min(var(--radius-md),12px)] px-2 text-sm font-medium outline-none underline-offset-4 hover:bg-muted hover:underline focus-visible:ring-3 focus-visible:ring-ring/50 [&_svg:not([class*='size-'])]:size-3.5",
        className
      ),
      ...props
    }
  );
}
function ToolbarToggleGroup({
  className,
  ...props
}) {
  const { orientation } = React3.useContext(ToolbarContext);
  return /* @__PURE__ */ jsx6(
    ToolbarPrimitive.ToggleGroup,
    {
      "data-slot": "toolbar-toggle-group",
      "data-orientation": orientation,
      className: cn(
        "flex items-center gap-0.5 data-vertical:flex-col",
        className
      ),
      ...props
    }
  );
}
function ToolbarToggleItem({
  className,
  variant = "outline",
  size = "sm",
  ...props
}) {
  return /* @__PURE__ */ jsx6(
    ToolbarPrimitive.ToggleItem,
    {
      "data-slot": "toolbar-toggle-item",
      "data-variant": variant,
      "data-size": size,
      className: cn(toggleVariants({ variant, size }), className),
      ...props
    }
  );
}

// src/components/ui/calendar.tsx
import * as React4 from "react";
import {
  DayPicker,
  getDefaultClassNames
} from "react-day-picker";
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react";
import { jsx as jsx7 } from "react/jsx-runtime";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  locale,
  formatters,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsx7(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "group/calendar bg-background p-2 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(7)] in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      locale,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col gap-4 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "flex h-(--cell-size) w-full items-center justify-center gap-1.5 text-sm font-medium",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative rounded-(--cell-radius)",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute inset-0 bg-popover opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "font-medium select-none",
          captionLayout === "label" ? "text-sm" : "flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground",
          defaultClassNames.caption_label
        ),
        month_grid: cn("w-full border-collapse", defaultClassNames.month_grid),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 rounded-(--cell-radius) text-[0.8rem] font-normal text-muted-foreground select-none",
          defaultClassNames.weekday
        ),
        week: cn("mt-2 flex w-full", defaultClassNames.week),
        week_number_header: cn(
          "w-(--cell-size) select-none",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] text-muted-foreground select-none",
          defaultClassNames.week_number
        ),
        day: cn(
          "group/day relative aspect-square h-full w-full rounded-(--cell-radius) p-0 text-center select-none [&:last-child[data-selected=true]_button]:rounded-r-(--cell-radius)",
          props.showWeekNumber ? "[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)" : "[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)",
          defaultClassNames.day
        ),
        range_start: cn(
          "relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-muted",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn(
          "relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-muted",
          defaultClassNames.range_end
        ),
        today: cn(
          "rounded-(--cell-radius) bg-muted text-foreground data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsx7(
            "div",
            {
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2),
              ...props2
            }
          );
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsx7(ChevronLeftIcon, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsx7(ChevronRightIcon, { className: cn("size-4", className2), ...props2 });
          }
          return /* @__PURE__ */ jsx7(ChevronDownIcon, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: ({ ...props2 }) => /* @__PURE__ */ jsx7(CalendarDayButton, { locale, ...props2 }),
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsx7("td", { ...props2, children: /* @__PURE__ */ jsx7("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  locale,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React4.useRef(null);
  React4.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsx7(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(locale?.code),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-[3px] group-data-[focused=true]/day:ring-ring/50 data-[range-end=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:rounded-none data-[range-middle=true]:bg-muted data-[range-middle=true]:text-foreground data-[range-start=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground dark:hover:text-foreground [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}

// src/components/ui/checkbox.tsx
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { CheckIcon } from "lucide-react";
import { jsx as jsx8 } from "react/jsx-runtime";
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx8(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx8(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none [&>svg]:size-3.5",
          children: /* @__PURE__ */ jsx8(
            CheckIcon,
            {}
          )
        }
      )
    }
  );
}

// src/components/ui/color-picker.tsx
import * as React5 from "react";
import { HexAlphaColorPicker, HexColorPicker } from "react-colorful";
import { ChevronDownIcon as ChevronDownIcon2 } from "lucide-react";

// src/components/ui/input.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx9(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/popover.tsx
import { Popover as PopoverPrimitive } from "radix-ui";
import { jsx as jsx10 } from "react/jsx-runtime";
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsx10(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx10(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx10(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx10(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "z-50 flex w-72 origin-(--radix-popover-content-transform-origin) flex-col gap-2.5 rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      ),
      ...props
    }
  ) });
}
function PopoverAnchor({
  ...props
}) {
  return /* @__PURE__ */ jsx10(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ...props });
}
function PopoverHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx10(
    "div",
    {
      "data-slot": "popover-header",
      className: cn("flex flex-col gap-0.5 text-sm", className),
      ...props
    }
  );
}
function PopoverTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx10(
    "div",
    {
      "data-slot": "popover-title",
      className: cn("font-medium", className),
      ...props
    }
  );
}
function PopoverDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    "p",
    {
      "data-slot": "popover-description",
      className: cn("text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/color-picker.tsx
import { jsx as jsx11, jsxs } from "react/jsx-runtime";
function parseHex(raw, allowAlpha) {
  const bare = raw.replace(/^#+/, "").replace(/[^0-9a-fA-F]/g, "").slice(0, allowAlpha ? 8 : 6);
  const isValid = allowAlpha ? bare.length === 6 || bare.length === 8 : bare.length === 6;
  if (!isValid) return null;
  return `#${bare.toLowerCase()}`;
}
function ColorPicker({
  value: controlledValue,
  defaultValue = "#000000",
  onValueChange,
  presets,
  enableAlpha = false,
  disabled = false,
  className,
  ...props
}) {
  const isControlled = controlledValue !== void 0;
  const [internalValue, setInternalValue] = React5.useState(defaultValue);
  const current = isControlled ? controlledValue : internalValue;
  const [hexDraft, setHexDraft] = React5.useState(null);
  React5.useEffect(() => {
    setHexDraft(null);
  }, [current]);
  const commit = React5.useCallback(
    (next) => {
      if (!isControlled) setInternalValue(next);
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );
  const Picker = enableAlpha ? HexAlphaColorPicker : HexColorPicker;
  const bareHex = current.replace(/^#/, "").toUpperCase();
  const shownHex = hexDraft ?? bareHex;
  return /* @__PURE__ */ jsx11(
    "div",
    {
      "data-slot": "color-picker",
      className: cn("inline-flex", className),
      ...props,
      children: /* @__PURE__ */ jsxs(Popover, { children: [
        /* @__PURE__ */ jsx11(PopoverTrigger, { asChild: true, disabled, children: /* @__PURE__ */ jsxs(
          Button,
          {
            type: "button",
            variant: "outline",
            "data-slot": "color-picker-trigger",
            "aria-label": `Color: ${current}`,
            children: [
              /* @__PURE__ */ jsx11(
                "span",
                {
                  "aria-hidden": "true",
                  "data-slot": "color-picker-swatch",
                  className: "size-4 shrink-0 rounded-sm border border-border",
                  style: { backgroundColor: current }
                }
              ),
              /* @__PURE__ */ jsx11("span", { className: "font-normal text-muted-foreground tabular-nums", children: current }),
              /* @__PURE__ */ jsx11(ChevronDownIcon2, { className: "text-muted-foreground" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs(PopoverContent, { className: "w-64", "data-slot": "color-picker-content", children: [
          /* @__PURE__ */ jsx11(
            Picker,
            {
              color: current,
              onChange: commit,
              className: "w-full",
              "aria-label": "Color saturation and brightness"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx11(
              "span",
              {
                "aria-hidden": "true",
                className: "text-sm text-muted-foreground",
                children: "#"
              }
            ),
            /* @__PURE__ */ jsx11(
              Input,
              {
                "data-slot": "color-picker-hex-input",
                value: shownHex,
                maxLength: enableAlpha ? 8 : 6,
                spellCheck: false,
                className: "font-mono uppercase",
                onChange: (event) => {
                  const bare = event.target.value.replace(/^#+/, "").replace(/[^0-9a-fA-F]/g, "").slice(0, enableAlpha ? 8 : 6);
                  setHexDraft(bare);
                  const parsed = parseHex(bare, enableAlpha);
                  if (parsed) commit(parsed);
                },
                onBlur: () => setHexDraft(null)
              }
            )
          ] }),
          presets && presets.length > 0 && /* @__PURE__ */ jsx11(
            "div",
            {
              "data-slot": "color-picker-presets",
              className: "flex flex-wrap gap-1",
              children: presets.map((preset) => /* @__PURE__ */ jsx11(
                "button",
                {
                  type: "button",
                  "data-slot": "color-picker-preset",
                  "aria-label": `Use color ${preset}`,
                  title: preset,
                  className: "size-6 shrink-0 rounded-md border border-border outline-none transition-transform hover:scale-110 focus-visible:ring-3 focus-visible:ring-ring/50",
                  style: { backgroundColor: preset },
                  onClick: () => commit(preset)
                },
                preset
              ))
            }
          )
        ] })
      ] })
    }
  );
}

// src/components/ui/combobox.tsx
import * as React6 from "react";
import { CheckIcon as CheckIcon3, ChevronDownIcon as ChevronDownIcon3, XIcon as XIcon2 } from "lucide-react";

// src/components/ui/badge.tsx
import { cva as cva3 } from "class-variance-authority";
import { Slot as Slot2 } from "radix-ui";
import { jsx as jsx12 } from "react/jsx-runtime";
var badgeVariants = cva3(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
        warning: "bg-warning/10 text-warning focus-visible:ring-warning/20 dark:bg-warning/20 dark:focus-visible:ring-warning/40 [a]:hover:bg-warning/20",
        outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        link: "text-primary underline-offset-4 hover:underline"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot2.Root : "span";
  return /* @__PURE__ */ jsx12(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}

// src/components/ui/command.tsx
import { Command as CommandPrimitive } from "cmdk";

// src/components/ui/dialog.tsx
import { Dialog as DialogPrimitive } from "radix-ui";
import { XIcon } from "lucide-react";
import { jsx as jsx13, jsxs as jsxs2 } from "react/jsx-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx13(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx13(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx13(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ jsx13(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(DialogPortal, { children: [
    /* @__PURE__ */ jsx13(DialogOverlay, {}),
    /* @__PURE__ */ jsxs2(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsx13(DialogPrimitive.Close, { "data-slot": "dialog-close", asChild: true, children: /* @__PURE__ */ jsxs2(
            Button,
            {
              variant: "ghost",
              className: "absolute top-2 right-2",
              size: "icon-sm",
              children: [
                /* @__PURE__ */ jsx13(
                  XIcon,
                  {}
                ),
                /* @__PURE__ */ jsx13("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx13(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ jsx13(DialogPrimitive.Close, { asChild: true, children: /* @__PURE__ */ jsx13(Button, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn(
        "font-heading text-base leading-none font-medium",
        className
      ),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx13(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/input-group.tsx
import { cva as cva4 } from "class-variance-authority";

// src/components/ui/textarea.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx14(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "flex field-sizing-content min-h-16 w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/input-group.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx15(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: cn(
        "group/input-group relative flex h-8 w-full min-w-0 items-center rounded-lg border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5",
        className
      ),
      ...props
    }
  );
}
var inputGroupAddonVariants = cva4(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
        "inline-end": "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
        "block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
        "block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return /* @__PURE__ */ jsx15(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        if (e.target.closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...props
    }
  );
}
var inputGroupButtonVariants = cva4(
  "flex items-center gap-2 text-sm shadow-none",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 rounded-[calc(var(--radius)-3px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
        sm: "",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-3px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0"
      }
    },
    defaultVariants: {
      size: "xs"
    }
  }
);
function InputGroupButton({
  className,
  type = "button",
  variant = "ghost",
  size = "xs",
  ...props
}) {
  return /* @__PURE__ */ jsx15(
    Button,
    {
      type,
      "data-size": size,
      variant,
      className: cn(inputGroupButtonVariants({ size }), className),
      ...props
    }
  );
}
function InputGroupText({ className, ...props }) {
  return /* @__PURE__ */ jsx15(
    "span",
    {
      className: cn(
        "flex items-center gap-2 text-sm text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function InputGroupInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx15(
    Input,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
        className
      ),
      ...props
    }
  );
}
function InputGroupTextarea({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx15(
    Textarea,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/command.tsx
import { SearchIcon, CheckIcon as CheckIcon2 } from "lucide-react";
import { jsx as jsx16, jsxs as jsxs3 } from "react/jsx-runtime";
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx16(
    CommandPrimitive,
    {
      "data-slot": "command",
      className: cn(
        "flex size-full flex-col overflow-hidden rounded-xl! bg-popover p-1 text-popover-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  className,
  showCloseButton = false,
  ...props
}) {
  return /* @__PURE__ */ jsxs3(Dialog, { ...props, children: [
    /* @__PURE__ */ jsxs3(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ jsx16(DialogTitle, { children: title }),
      /* @__PURE__ */ jsx16(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ jsx16(
      DialogContent,
      {
        className: cn(
          "top-1/3 translate-y-0 overflow-hidden rounded-xl! p-0",
          className
        ),
        showCloseButton,
        children
      }
    )
  ] });
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx16("div", { "data-slot": "command-input-wrapper", className: "p-1 pb-0", children: /* @__PURE__ */ jsxs3(InputGroup, { className: "h-8! rounded-lg! border-input/30 bg-input/30 shadow-none! *:data-[slot=input-group-addon]:pl-2!", children: [
    /* @__PURE__ */ jsx16(
      CommandPrimitive.Input,
      {
        "data-slot": "command-input",
        className: cn(
          "w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    ),
    /* @__PURE__ */ jsx16(InputGroupAddon, { children: /* @__PURE__ */ jsx16(SearchIcon, { className: "size-4 shrink-0 opacity-50" }) })
  ] }) });
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx16(
    CommandPrimitive.List,
    {
      "data-slot": "command-list",
      className: cn(
        "no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx16(
    CommandPrimitive.Empty,
    {
      "data-slot": "command-empty",
      className: cn("py-6 text-center text-sm", className),
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx16(
    CommandPrimitive.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "overflow-hidden p-1 text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-medium **:[[cmdk-group-heading]]:text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function CommandSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx16(
    CommandPrimitive.Separator,
    {
      "data-slot": "command-separator",
      className: cn("-mx-1 h-px bg-border", className),
      ...props
    }
  );
}
function CommandItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs3(
    CommandPrimitive.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "group/command-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-muted data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx16(CheckIcon2, { className: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })
      ]
    }
  );
}
function CommandShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx16(
    "span",
    {
      "data-slot": "command-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-data-selected/command-item:text-foreground",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/combobox.tsx
import { jsx as jsx17, jsxs as jsxs4 } from "react/jsx-runtime";
var ComboboxContext = React6.createContext(null);
function useCombobox(part) {
  const context = React6.useContext(ComboboxContext);
  if (!context) {
    throw new Error(`<${part}> must be used within <Combobox>`);
  }
  return context;
}
function toArray(value) {
  if (value === null || value === void 0) return [];
  return Array.isArray(value) ? value : [value];
}
function Combobox(props) {
  const {
    multiple = false,
    options,
    disabled = false,
    placeholder,
    children
  } = props;
  const [open, setOpen] = React6.useState(false);
  const [internalValue, setInternalValue] = React6.useState(
    () => toArray(props.defaultValue)
  );
  const labelsRef = React6.useRef(/* @__PURE__ */ new Map());
  const [, bumpLabels] = React6.useReducer((count) => count + 1, 0);
  const selected = props.value !== void 0 ? toArray(props.value) : internalValue;
  const setSelected = (next) => {
    if (props.value === void 0) {
      setInternalValue(next);
    }
    if (props.multiple) {
      props.onValueChange?.(next);
    } else {
      props.onValueChange?.(next[0] ?? null);
    }
  };
  const toggle = (value) => {
    if (!multiple) {
      setSelected([value]);
      setOpen(false);
      return;
    }
    setSelected(
      selected.includes(value) ? selected.filter((item) => item !== value) : [...selected, value]
    );
  };
  const remove = (value) => {
    setSelected(selected.filter((item) => item !== value));
  };
  const removeLast = () => {
    if (selected.length > 0) {
      setSelected(selected.slice(0, -1));
    }
  };
  const clear = () => {
    setSelected([]);
  };
  const registerLabel = React6.useCallback(
    (value, label) => {
      if (labelsRef.current.get(value) === label) return;
      labelsRef.current.set(value, label);
      bumpLabels();
    },
    [bumpLabels]
  );
  const getLabel = (value) => {
    const registered = labelsRef.current.get(value);
    if (registered !== void 0) return registered;
    return options?.find((option) => option.value === value)?.label ?? value;
  };
  return /* @__PURE__ */ jsx17(
    ComboboxContext.Provider,
    {
      value: {
        multiple,
        disabled,
        selected,
        options,
        placeholder,
        toggle,
        remove,
        removeLast,
        clear,
        close: () => setOpen(false),
        registerLabel,
        getLabel
      },
      children: /* @__PURE__ */ jsx17(Popover, { open, onOpenChange: setOpen, children })
    }
  );
}
function ComboboxTrigger({
  className,
  children,
  disabled,
  ...props
}) {
  const {
    multiple,
    disabled: rootDisabled,
    selected,
    placeholder,
    getLabel,
    remove
  } = useCombobox("ComboboxTrigger");
  const isEmpty = selected.length === 0;
  return /* @__PURE__ */ jsx17(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs4(
    Button,
    {
      type: "button",
      variant: "outline",
      disabled: disabled || rootDisabled,
      "data-slot": "combobox-trigger",
      "data-placeholder": isEmpty || void 0,
      className: cn(
        "min-h-9 w-full justify-between px-3 font-normal data-placeholder:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx17("span", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1 text-left", children: multiple ? isEmpty ? /* @__PURE__ */ jsx17("span", { className: "min-w-0 truncate text-muted-foreground", children: placeholder }) : selected.map((itemValue) => {
          const label = getLabel(itemValue);
          return /* @__PURE__ */ jsxs4(Badge, { variant: "secondary", children: [
            label,
            /* @__PURE__ */ jsx17(
              "span",
              {
                role: "button",
                tabIndex: -1,
                "aria-label": `Remove ${typeof label === "string" ? label : itemValue}`,
                "data-slot": "combobox-badge-remove",
                onClick: (event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  remove(itemValue);
                },
                className: "flex size-3.5 items-center justify-center rounded-sm transition-colors hover:bg-foreground/20",
                children: /* @__PURE__ */ jsx17(XIcon2, { className: "size-3" })
              }
            )
          ] }, itemValue);
        }) : /* @__PURE__ */ jsx17("span", { className: "min-w-0 truncate", children: isEmpty ? placeholder : getLabel(selected[0] ?? "") }) }),
        children,
        /* @__PURE__ */ jsx17(ChevronDownIcon3, { className: "pointer-events-none size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/button:rotate-180" })
      ]
    }
  ) });
}
function ComboboxContent({
  className,
  searchPlaceholder = "Search...",
  children,
  ...props
}) {
  const { multiple, selected, options, removeLast } = useCombobox(
    "ComboboxContent"
  );
  return /* @__PURE__ */ jsx17(
    PopoverContent,
    {
      "data-slot": "combobox-content",
      className: cn(
        "w-(--radix-popover-trigger-width) min-w-(--radix-popover-trigger-width) p-0",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxs4(Command, { children: [
        /* @__PURE__ */ jsx17(
          CommandInput,
          {
            placeholder: searchPlaceholder,
            onKeyDown: (event) => {
              if (event.key === "Backspace" && event.currentTarget.value === "" && multiple && selected.length > 0) {
                event.preventDefault();
                removeLast();
              }
            }
          }
        ),
        /* @__PURE__ */ jsxs4(CommandList, { children: [
          /* @__PURE__ */ jsx17(CommandEmpty, { children: "No results found." }),
          options?.map((option) => /* @__PURE__ */ jsx17(
            ComboboxItem,
            {
              value: option.value,
              disabled: option.disabled,
              children: option.label
            },
            option.value
          )),
          children
        ] })
      ] })
    }
  );
}
function ComboboxItem({
  value,
  children,
  disabled = false,
  className,
  onSelect,
  ...props
}) {
  const { selected, disabled: rootDisabled, toggle, registerLabel } = useCombobox("ComboboxItem");
  const isSelected = selected.includes(value);
  React6.useEffect(() => {
    registerLabel(value, children);
  }, [value, children, registerLabel]);
  return /* @__PURE__ */ jsxs4(
    CommandItem,
    {
      value,
      disabled: disabled || rootDisabled,
      "data-slot": "combobox-item",
      "data-state": isSelected ? "checked" : "unchecked",
      onSelect: () => {
        onSelect?.(value);
        toggle(value);
      },
      className: cn("gap-0 data-[state=checked]:bg-muted/50", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx17(
          "span",
          {
            "data-slot": "combobox-item-indicator",
            className: "mr-2 flex size-4 shrink-0 items-center justify-center",
            children: isSelected && /* @__PURE__ */ jsx17(CheckIcon3, { className: "size-4" })
          }
        ),
        children
      ]
    }
  );
}
function ComboboxClear({ className, ...props }) {
  const { selected, disabled, clear } = useCombobox("ComboboxClear");
  if (disabled || selected.length === 0) return null;
  return /* @__PURE__ */ jsx17(
    "span",
    {
      role: "button",
      tabIndex: -1,
      "data-slot": "combobox-clear",
      "aria-label": "Clear selection",
      onClick: (event) => {
        event.stopPropagation();
        event.preventDefault();
        clear();
      },
      className: cn(
        "flex size-4 shrink-0 items-center justify-center rounded-sm text-muted-foreground transition-colors hover:text-foreground",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx17(XIcon2, { className: "size-3.5" })
    }
  );
}

// src/components/ui/date-picker-field.tsx
import { useId, useState as useState3 } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

// src/components/ui/label.tsx
import { Label as LabelPrimitive } from "radix-ui";
import { jsx as jsx18 } from "react/jsx-runtime";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx18(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/date-picker-field.tsx
import { jsx as jsx19, jsxs as jsxs5 } from "react/jsx-runtime";
function DatePickerField({ className, ...props }) {
  const id = useId();
  const [date, setDate] = useState3();
  return /* @__PURE__ */ jsxs5("div", { "data-slot": "date-picker-field", className, ...props, children: [
    /* @__PURE__ */ jsxs5("div", { className: "*:not-first:mt-2", children: [
      /* @__PURE__ */ jsx19(Label, { htmlFor: id, children: "Date picker" }),
      /* @__PURE__ */ jsxs5(Popover, { children: [
        /* @__PURE__ */ jsx19(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs5(
          Button,
          {
            id,
            variant: "outline",
            className: "group bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]",
            children: [
              /* @__PURE__ */ jsx19(
                "span",
                {
                  className: cn("truncate", !date && "text-muted-foreground"),
                  children: date ? format(date, "PPP") : "Pick a date"
                }
              ),
              /* @__PURE__ */ jsx19(
                CalendarIcon,
                {
                  size: 16,
                  className: "text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors",
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx19(PopoverContent, { className: "w-auto p-2", align: "start", children: /* @__PURE__ */ jsx19(Calendar, { mode: "single", selected: date, onSelect: setDate }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs5(
      "p",
      {
        className: "text-muted-foreground mt-2 text-xs",
        role: "region",
        "aria-live": "polite",
        children: [
          "Built with",
          " ",
          /* @__PURE__ */ jsx19(
            "a",
            {
              className: "hover:text-foreground underline",
              href: "https://daypicker.dev/",
              target: "_blank",
              rel: "noopener nofollow",
              children: "React DayPicker"
            }
          )
        ]
      }
    )
  ] });
}

// src/components/ui/date-range-picker-field.tsx
import { useId as useId2, useState as useState4 } from "react";
import { format as format2 } from "date-fns";
import { CalendarIcon as CalendarIcon2 } from "lucide-react";
import { Fragment, jsx as jsx20, jsxs as jsxs6 } from "react/jsx-runtime";
function DateRangePickerField({
  className,
  ...props
}) {
  const id = useId2();
  const [date, setDate] = useState4();
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      "data-slot": "date-range-picker-field",
      className,
      ...props,
      children: [
        /* @__PURE__ */ jsxs6("div", { className: "*:not-first:mt-2", children: [
          /* @__PURE__ */ jsx20(Label, { htmlFor: id, children: "Date range picker" }),
          /* @__PURE__ */ jsxs6(Popover, { children: [
            /* @__PURE__ */ jsx20(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs6(
              Button,
              {
                id,
                variant: "outline",
                className: "group bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]",
                children: [
                  /* @__PURE__ */ jsx20(
                    "span",
                    {
                      className: cn("truncate", !date && "text-muted-foreground"),
                      children: date?.from ? date.to ? /* @__PURE__ */ jsxs6(Fragment, { children: [
                        format2(date.from, "LLL dd, y"),
                        " -",
                        " ",
                        format2(date.to, "LLL dd, y")
                      ] }) : format2(date.from, "LLL dd, y") : "Pick a date range"
                    }
                  ),
                  /* @__PURE__ */ jsx20(
                    CalendarIcon2,
                    {
                      size: 16,
                      className: "text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors",
                      "aria-hidden": "true"
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsx20(PopoverContent, { className: "w-auto p-2", align: "start", children: /* @__PURE__ */ jsx20(Calendar, { mode: "range", selected: date, onSelect: setDate }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs6(
          "p",
          {
            className: "text-muted-foreground mt-2 text-xs",
            role: "region",
            "aria-live": "polite",
            children: [
              "Built with",
              " ",
              /* @__PURE__ */ jsx20(
                "a",
                {
                  className: "hover:text-foreground underline",
                  href: "https://daypicker.dev/",
                  target: "_blank",
                  rel: "noopener nofollow",
                  children: "React DayPicker"
                }
              )
            ]
          }
        )
      ]
    }
  );
}

// src/components/ui/dropzone.tsx
import * as React7 from "react";
import { FileIcon, UploadCloudIcon, XIcon as XIcon3 } from "lucide-react";
import { jsx as jsx21, jsxs as jsxs7 } from "react/jsx-runtime";
function formatBytes(bytes, decimals = 1) {
  if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB"];
  const exponent = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1
  );
  const unit = units[exponent] ?? "B";
  const value = bytes / 1024 ** exponent;
  return `${value.toFixed(exponent === 0 ? 0 : decimals)} ${unit}`;
}
function matchesAccept(file, accept) {
  const patterns = accept.split(",").map((pattern) => pattern.trim().toLowerCase()).filter((pattern) => pattern.length > 0);
  if (patterns.length === 0) return true;
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();
  return patterns.some((pattern) => {
    if (pattern.startsWith(".")) return name.endsWith(pattern);
    if (pattern.endsWith("/*")) return type.startsWith(pattern.slice(0, -1));
    return type === pattern;
  });
}
function Dropzone({
  accept,
  maxSize,
  maxFiles,
  multiple = true,
  disabled = false,
  hint,
  onFilesAdded,
  className,
  ...props
}) {
  const inputRef = React7.useRef(null);
  const dragDepth = React7.useRef(0);
  const itemsRef = React7.useRef([]);
  const [items, setItems] = React7.useState([]);
  const [rejections, setRejections] = React7.useState([]);
  const [isDragging, setIsDragging] = React7.useState(false);
  itemsRef.current = items;
  React7.useEffect(() => {
    return () => {
      for (const item of itemsRef.current) {
        if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
      }
    };
  }, []);
  const addFiles = React7.useCallback(
    (fileList) => {
      if (disabled) return;
      const incoming = Array.from(fileList);
      if (incoming.length === 0) return;
      const accepted = [];
      const rejected = [];
      for (const file of incoming) {
        if (accept !== void 0 && !matchesAccept(file, accept)) {
          rejected.push({
            id: crypto.randomUUID(),
            name: file.name,
            reason: "File type not accepted"
          });
        } else if (maxSize !== void 0 && file.size > maxSize) {
          rejected.push({
            id: crypto.randomUUID(),
            name: file.name,
            reason: `Exceeds ${formatBytes(maxSize)} limit`
          });
        } else {
          accepted.push(file);
        }
      }
      const capacity = maxFiles !== void 0 ? Math.max(0, maxFiles - itemsRef.current.length) : Number.POSITIVE_INFINITY;
      const taken = accepted.slice(0, capacity);
      const overflow = accepted.slice(capacity);
      for (const file of overflow) {
        rejected.push({
          id: crypto.randomUUID(),
          name: file.name,
          reason: `Maximum of ${maxFiles} file${maxFiles === 1 ? "" : "s"} exceeded`
        });
      }
      const nextItems = taken.map((file) => ({
        id: crypto.randomUUID(),
        file,
        previewUrl: file.type.startsWith("image/") ? URL.createObjectURL(file) : null
      }));
      setItems((prev) => {
        itemsRef.current = [...prev, ...nextItems];
        return [...prev, ...nextItems];
      });
      setRejections(rejected);
      if (taken.length > 0) onFilesAdded?.(taken);
    },
    [accept, maxSize, maxFiles, disabled, onFilesAdded]
  );
  const removeItem = React7.useCallback((id) => {
    setItems((prev) => {
      const target = prev.find((item) => item.id === id);
      if (target?.previewUrl) URL.revokeObjectURL(target.previewUrl);
      itemsRef.current = prev.filter((item) => item.id !== id);
      return prev.filter((item) => item.id !== id);
    });
  }, []);
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      "data-slot": "dropzone",
      className: cn("flex flex-col gap-3", className),
      ...props,
      children: [
        /* @__PURE__ */ jsxs7(
          "div",
          {
            role: "button",
            tabIndex: disabled ? -1 : 0,
            "aria-disabled": disabled || void 0,
            "aria-label": "Upload files",
            "data-slot": "dropzone-area",
            "data-dragging": isDragging || void 0,
            onClick: () => inputRef.current?.click(),
            onKeyDown: (event) => {
              if (disabled) return;
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                inputRef.current?.click();
              }
            },
            onDragEnter: (event) => {
              event.preventDefault();
              dragDepth.current += 1;
              setIsDragging(true);
            },
            onDragLeave: (event) => {
              event.preventDefault();
              dragDepth.current -= 1;
              if (dragDepth.current <= 0) {
                dragDepth.current = 0;
                setIsDragging(false);
              }
            },
            onDragOver: (event) => event.preventDefault(),
            onDrop: (event) => {
              event.preventDefault();
              dragDepth.current = 0;
              setIsDragging(false);
              addFiles(event.dataTransfer.files);
            },
            className: cn(
              "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
              disabled ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-muted/50 data-dragging:border-primary data-dragging:bg-accent/50"
            ),
            children: [
              /* @__PURE__ */ jsx21(
                UploadCloudIcon,
                {
                  "aria-hidden": "true",
                  className: "size-8 text-muted-foreground"
                }
              ),
              /* @__PURE__ */ jsxs7("div", { className: "flex flex-col gap-0.5", children: [
                /* @__PURE__ */ jsx21("p", { className: "text-sm font-medium", children: "Drag & drop files here, or click to browse" }),
                /* @__PURE__ */ jsx21("p", { "data-slot": "dropzone-hint", className: "text-xs text-muted-foreground", children: hint ?? `Up to ${maxFiles ?? "unlimited"} files${maxSize !== void 0 ? ` \xB7 max ${formatBytes(maxSize)} each` : ""}` })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx21(
          "input",
          {
            ref: inputRef,
            type: "file",
            accept,
            multiple,
            disabled,
            tabIndex: -1,
            "aria-hidden": "true",
            className: "sr-only",
            onChange: (event) => {
              if (event.target.files) addFiles(event.target.files);
              event.target.value = "";
            }
          }
        ),
        rejections.length > 0 && /* @__PURE__ */ jsx21("ul", { "data-slot": "dropzone-rejections", className: "flex flex-col gap-1", children: rejections.map((rejection) => /* @__PURE__ */ jsxs7(
          "li",
          {
            className: "text-xs text-destructive",
            "data-slot": "dropzone-rejection",
            children: [
              /* @__PURE__ */ jsx21("span", { className: "font-medium", children: rejection.name }),
              " ",
              /* @__PURE__ */ jsxs7("span", { children: [
                "\u2014 ",
                rejection.reason
              ] })
            ]
          },
          rejection.id
        )) }),
        items.length > 0 && /* @__PURE__ */ jsx21("ul", { "data-slot": "dropzone-files", className: "flex flex-col gap-2", children: items.map((item) => /* @__PURE__ */ jsxs7(
          "li",
          {
            "data-slot": "dropzone-file",
            className: "flex items-center gap-3 rounded-lg border border-border bg-background p-2",
            children: [
              item.previewUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                /* @__PURE__ */ jsx21(
                  "img",
                  {
                    src: item.previewUrl,
                    alt: "",
                    "aria-hidden": "true",
                    className: "size-10 shrink-0 rounded-md border border-border object-cover"
                  }
                )
              ) : /* @__PURE__ */ jsx21(
                "span",
                {
                  "aria-hidden": "true",
                  className: "flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground",
                  children: /* @__PURE__ */ jsx21(FileIcon, { className: "size-5" })
                }
              ),
              /* @__PURE__ */ jsxs7("div", { className: "flex min-w-0 flex-1 flex-col", children: [
                /* @__PURE__ */ jsx21("span", { className: "truncate text-sm", children: item.file.name }),
                /* @__PURE__ */ jsx21("span", { className: "text-xs text-muted-foreground", children: formatBytes(item.file.size) })
              ] }),
              /* @__PURE__ */ jsx21(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon-xs",
                  "aria-label": `Remove ${item.file.name}`,
                  onClick: () => removeItem(item.id),
                  children: /* @__PURE__ */ jsx21(XIcon3, {})
                }
              )
            ]
          },
          item.id
        )) })
      ]
    }
  );
}

// src/components/ui/editor.tsx
import * as React8 from "react";
import {
  Bold,
  Code,
  Italic,
  Link2,
  List,
  ListOrdered,
  Redo2,
  Strikethrough,
  TextQuote,
  Undo2
} from "lucide-react";
import {
  EditorContent,
  useEditor,
  useEditorState
} from "@tiptap/react";
import { Placeholder } from "@tiptap/extension-placeholder";
import { StarterKit } from "@tiptap/starter-kit";

// src/components/ui/select.tsx
import { Select as SelectPrimitive } from "radix-ui";
import { ChevronDownIcon as ChevronDownIcon4, CheckIcon as CheckIcon4, ChevronUpIcon } from "lucide-react";
import { jsx as jsx22, jsxs as jsxs8 } from "react/jsx-runtime";
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx22(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx22(
    SelectPrimitive.Group,
    {
      "data-slot": "select-group",
      className: cn("scroll-my-1 p-1", className),
      ...props
    }
  );
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx22(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs8(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "flex w-fit items-center justify-between gap-1.5 rounded-lg border border-input bg-transparent py-2 pr-2 pl-2.5 text-sm whitespace-nowrap transition-colors outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-placeholder:text-muted-foreground data-[size=default]:h-8 data-[size=sm]:h-7 data-[size=sm]:rounded-[min(var(--radius-md),10px)] *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-1.5 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx22(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx22(ChevronDownIcon4, { className: "pointer-events-none size-4 text-muted-foreground" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "item-aligned",
  align = "center",
  ...props
}) {
  return /* @__PURE__ */ jsx22(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs8(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      "data-align-trigger": position === "item-aligned",
      className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ jsx22(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx22(
          SelectPrimitive.Viewport,
          {
            "data-position": position,
            className: cn(
              "data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)",
              position === "popper" && ""
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx22(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx22(
    SelectPrimitive.Label,
    {
      "data-slot": "select-label",
      className: cn("px-1.5 py-1 text-xs text-muted-foreground", className),
      ...props
    }
  );
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs8(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx22("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ jsx22(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx22(CheckIcon4, { className: "pointer-events-none" }) }) }),
        /* @__PURE__ */ jsx22(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx22(
    SelectPrimitive.Separator,
    {
      "data-slot": "select-separator",
      className: cn("pointer-events-none -mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx22(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx22(
        ChevronUpIcon,
        {}
      )
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx22(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx22(
        ChevronDownIcon4,
        {}
      )
    }
  );
}

// src/components/ui/separator.tsx
import { Separator as SeparatorPrimitive } from "radix-ui";
import { jsx as jsx23 } from "react/jsx-runtime";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx23(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/tooltip.tsx
import { Tooltip as TooltipPrimitive } from "radix-ui";
import { jsx as jsx24, jsxs as jsxs9 } from "react/jsx-runtime";
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx24(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip({
  ...props
}) {
  return /* @__PURE__ */ jsx24(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx24(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx24(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs9(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx24(TooltipPrimitive.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })
      ]
    }
  ) });
}

// src/components/ui/editor.tsx
import { jsx as jsx25, jsxs as jsxs10 } from "react/jsx-runtime";
var headingLevels = [1, 2, 3];
function ToolbarToggle({
  label,
  pressed,
  disabled,
  onPressedChange,
  children
}) {
  return /* @__PURE__ */ jsxs10(Tooltip, { children: [
    /* @__PURE__ */ jsx25(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx25(
      Toggle,
      {
        size: "sm",
        "aria-label": label,
        pressed,
        disabled,
        onPressedChange,
        children
      }
    ) }),
    /* @__PURE__ */ jsx25(TooltipContent, { side: "bottom", children: label })
  ] });
}
function LinkToolbarItem({
  editor,
  active
}) {
  const [open, setOpen] = React8.useState(false);
  const [url, setUrl] = React8.useState("");
  const handleOpenChange = (nextOpen) => {
    setOpen(nextOpen);
    if (nextOpen) {
      const href = editor.getAttributes("link").href;
      setUrl(typeof href === "string" ? href : "");
    }
  };
  const applyLink = () => {
    const value = url.trim();
    if (value) {
      editor.chain().focus().extendMarkRange("link").setLink({ href: value }).run();
    } else {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    }
    setOpen(false);
  };
  const removeLink = () => {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    setOpen(false);
  };
  return /* @__PURE__ */ jsxs10(Popover, { open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsxs10(Tooltip, { children: [
      /* @__PURE__ */ jsx25(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx25(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx25(Toggle, { size: "sm", "aria-label": "Link", pressed: active || open, children: /* @__PURE__ */ jsx25(Link2, {}) }) }) }),
      /* @__PURE__ */ jsx25(TooltipContent, { side: "bottom", children: "Link" })
    ] }),
    /* @__PURE__ */ jsxs10(PopoverContent, { align: "start", className: "flex-row items-center gap-2", children: [
      /* @__PURE__ */ jsx25(
        Input,
        {
          value: url,
          onChange: (event) => setUrl(event.target.value),
          onKeyDown: (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              applyLink();
            }
          },
          placeholder: "https://example.com",
          className: "flex-1"
        }
      ),
      /* @__PURE__ */ jsx25(Button, { size: "sm", onClick: applyLink, children: "Set" }),
      /* @__PURE__ */ jsx25(Button, { size: "sm", variant: "outline", onClick: removeLink, children: "Remove" })
    ] })
  ] });
}
function EditorToolbar({ editor }) {
  const state = useEditorState({
    editor,
    selector: ({ editor: instance }) => instance ? {
      bold: instance.isActive("bold"),
      italic: instance.isActive("italic"),
      strike: instance.isActive("strike"),
      code: instance.isActive("code"),
      h1: instance.isActive("heading", { level: 1 }),
      h2: instance.isActive("heading", { level: 2 }),
      h3: instance.isActive("heading", { level: 3 }),
      bulletList: instance.isActive("bulletList"),
      orderedList: instance.isActive("orderedList"),
      blockquote: instance.isActive("blockquote"),
      link: instance.isActive("link"),
      canUndo: instance.can().undo(),
      canRedo: instance.can().redo()
    } : null
  });
  if (!editor || !state) return null;
  const headingValue = state.h1 ? "h1" : state.h2 ? "h2" : state.h3 ? "h3" : "paragraph";
  const applyHeading = (value) => {
    if (value === "paragraph") {
      editor.chain().focus().setParagraph().run();
      return;
    }
    const level = Number.parseInt(value.slice(1), 10);
    editor.chain().focus().setHeading({ level }).run();
  };
  return /* @__PURE__ */ jsxs10(
    "div",
    {
      "data-slot": "editor-toolbar",
      className: "sticky top-0 z-10 flex flex-wrap items-center gap-0.5 border-b bg-muted/50 p-1",
      children: [
        /* @__PURE__ */ jsx25(
          ToolbarToggle,
          {
            label: "Bold",
            pressed: state.bold,
            onPressedChange: () => editor.chain().focus().toggleBold().run(),
            children: /* @__PURE__ */ jsx25(Bold, {})
          }
        ),
        /* @__PURE__ */ jsx25(
          ToolbarToggle,
          {
            label: "Italic",
            pressed: state.italic,
            onPressedChange: () => editor.chain().focus().toggleItalic().run(),
            children: /* @__PURE__ */ jsx25(Italic, {})
          }
        ),
        /* @__PURE__ */ jsx25(
          ToolbarToggle,
          {
            label: "Strikethrough",
            pressed: state.strike,
            onPressedChange: () => editor.chain().focus().toggleStrike().run(),
            children: /* @__PURE__ */ jsx25(Strikethrough, {})
          }
        ),
        /* @__PURE__ */ jsx25(
          ToolbarToggle,
          {
            label: "Code",
            pressed: state.code,
            onPressedChange: () => editor.chain().focus().toggleCode().run(),
            children: /* @__PURE__ */ jsx25(Code, {})
          }
        ),
        /* @__PURE__ */ jsx25(Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ jsxs10(Select, { value: headingValue, onValueChange: applyHeading, children: [
          /* @__PURE__ */ jsxs10(Tooltip, { children: [
            /* @__PURE__ */ jsx25(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx25(SelectTrigger, { size: "sm", className: "w-28", "aria-label": "Text style", children: /* @__PURE__ */ jsx25(SelectValue, {}) }) }),
            /* @__PURE__ */ jsx25(TooltipContent, { side: "bottom", children: "Text style" })
          ] }),
          /* @__PURE__ */ jsxs10(SelectContent, { position: "popper", align: "start", children: [
            /* @__PURE__ */ jsx25(SelectItem, { value: "paragraph", children: "Paragraph" }),
            headingLevels.map((level) => /* @__PURE__ */ jsxs10(SelectItem, { value: `h${level}`, children: [
              "Heading ",
              level
            ] }, level))
          ] })
        ] }),
        /* @__PURE__ */ jsx25(Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ jsx25(
          ToolbarToggle,
          {
            label: "Bullet list",
            pressed: state.bulletList,
            onPressedChange: () => editor.chain().focus().toggleBulletList().run(),
            children: /* @__PURE__ */ jsx25(List, {})
          }
        ),
        /* @__PURE__ */ jsx25(
          ToolbarToggle,
          {
            label: "Ordered list",
            pressed: state.orderedList,
            onPressedChange: () => editor.chain().focus().toggleOrderedList().run(),
            children: /* @__PURE__ */ jsx25(ListOrdered, {})
          }
        ),
        /* @__PURE__ */ jsx25(
          ToolbarToggle,
          {
            label: "Blockquote",
            pressed: state.blockquote,
            onPressedChange: () => editor.chain().focus().toggleBlockquote().run(),
            children: /* @__PURE__ */ jsx25(TextQuote, {})
          }
        ),
        /* @__PURE__ */ jsx25(Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ jsx25(LinkToolbarItem, { editor, active: state.link }),
        /* @__PURE__ */ jsx25(Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ jsx25(
          ToolbarToggle,
          {
            label: "Undo",
            pressed: false,
            disabled: !state.canUndo,
            onPressedChange: () => editor.chain().focus().undo().run(),
            children: /* @__PURE__ */ jsx25(Undo2, {})
          }
        ),
        /* @__PURE__ */ jsx25(
          ToolbarToggle,
          {
            label: "Redo",
            pressed: false,
            disabled: !state.canRedo,
            onPressedChange: () => editor.chain().focus().redo().run(),
            children: /* @__PURE__ */ jsx25(Redo2, {})
          }
        )
      ]
    }
  );
}
function Editor({
  content,
  onValueChange,
  onEditorReady,
  editable = true,
  placeholder = "Write something \u2026",
  toolbar = true,
  className,
  editorProps
}) {
  const onValueChangeRef = React8.useRef(onValueChange);
  onValueChangeRef.current = onValueChange;
  const onEditorReadyRef = React8.useRef(onEditorReady);
  onEditorReadyRef.current = onEditorReady;
  const editor = useEditor({
    immediatelyRender: false,
    editable,
    content,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        link: { openOnClick: false, autolink: true }
      }),
      Placeholder.configure({ placeholder })
    ],
    editorProps,
    onCreate: ({ editor: instance }) => onEditorReadyRef.current?.(instance),
    onUpdate: ({ editor: instance }) => onValueChangeRef.current?.(instance.getHTML())
  });
  React8.useEffect(() => {
    if (editor && editor.isEditable !== editable) {
      editor.setEditable(editable);
    }
  }, [editor, editable]);
  return /* @__PURE__ */ jsx25(TooltipProvider, { children: /* @__PURE__ */ jsxs10(
    "div",
    {
      "data-slot": "editor",
      className: cn(
        "rounded-md border border-input bg-background transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
        className
      ),
      children: [
        toolbar && /* @__PURE__ */ jsx25(EditorToolbar, { editor }),
        /* @__PURE__ */ jsx25(
          EditorContent,
          {
            editor,
            className: "[&_.tiptap]:min-h-24 [&_.tiptap]:p-3 [&_.tiptap]:outline-none [&_.tiptap_p]:my-1 [&_.tiptap_p:first-child]:mt-0 [&_.tiptap_p:last-child]:mb-0 [&_.tiptap_h1]:mt-3 [&_.tiptap_h1]:mb-1.5 [&_.tiptap_h1]:text-xl [&_.tiptap_h1]:font-bold [&_.tiptap_h2]:mt-3 [&_.tiptap_h2]:mb-1.5 [&_.tiptap_h2]:text-lg [&_.tiptap_h2]:font-semibold [&_.tiptap_h3]:mt-3 [&_.tiptap_h3]:mb-1.5 [&_.tiptap_h3]:text-base [&_.tiptap_h3]:font-semibold [&_.tiptap_h1:first-child]:mt-0 [&_.tiptap_h2:first-child]:mt-0 [&_.tiptap_h3:first-child]:mt-0 [&_.tiptap_ul]:my-1.5 [&_.tiptap_ul]:list-disc [&_.tiptap_ul]:pl-6 [&_.tiptap_ol]:my-1.5 [&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:pl-6 [&_.tiptap_li]:my-0.5 [&_.tiptap_li>p]:my-0 [&_.tiptap_blockquote]:my-2 [&_.tiptap_blockquote]:border-l-2 [&_.tiptap_blockquote]:border-border [&_.tiptap_blockquote]:pl-3 [&_.tiptap_blockquote]:italic [&_.tiptap_blockquote]:text-muted-foreground [&_.tiptap_pre]:my-2 [&_.tiptap_pre]:overflow-x-auto [&_.tiptap_pre]:rounded-md [&_.tiptap_pre]:bg-muted [&_.tiptap_pre]:p-3 [&_.tiptap_pre]:font-mono [&_.tiptap_pre]:text-sm [&_.tiptap_code]:rounded-sm [&_.tiptap_code]:bg-muted [&_.tiptap_code]:px-1 [&_.tiptap_code]:py-0.5 [&_.tiptap_code]:font-mono [&_.tiptap_code]:text-[0.85em] [&_.tiptap_pre_code]:bg-transparent [&_.tiptap_pre_code]:p-0 [&_.tiptap_hr]:my-3 [&_.tiptap_hr]:border-border [&_.tiptap_a]:font-medium [&_.tiptap_a]:text-primary [&_.tiptap_a]:underline [&_.tiptap_a]:underline-offset-2 [&_.tiptap_.is-empty:first-child]:before:pointer-events-none [&_.tiptap_.is-empty:first-child]:before:float-left [&_.tiptap_.is-empty:first-child]:before:h-0 [&_.tiptap_.is-empty:first-child]:before:content-[attr(data-placeholder)] [&_.tiptap_.is-empty:first-child]:before:text-muted-foreground"
          }
        )
      ]
    }
  ) });
}

// src/components/ui/input-otp.tsx
import * as React9 from "react";
import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import { jsx as jsx26, jsxs as jsxs11 } from "react/jsx-runtime";
function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ jsx26(
    OTPInput,
    {
      "data-slot": "input-otp",
      containerClassName: cn(
        "cn-input-otp flex items-center has-disabled:opacity-50",
        containerClassName
      ),
      spellCheck: false,
      className: cn("disabled:cursor-not-allowed", className),
      ...props
    }
  );
}
function InputOTPGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    "div",
    {
      "data-slot": "input-otp-group",
      className: cn(
        "flex items-center rounded-lg has-aria-invalid:border-destructive has-aria-invalid:ring-3 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
function InputOTPSlot({
  index,
  className,
  ...props
}) {
  const inputOTPContext = React9.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  return /* @__PURE__ */ jsxs11(
    "div",
    {
      "data-slot": "input-otp-slot",
      "data-active": isActive,
      className: cn(
        "relative flex size-8 items-center justify-center border-y border-r border-input text-sm transition-all outline-none first:rounded-l-lg first:border-l last:rounded-r-lg aria-invalid:border-destructive data-[active=true]:z-10 data-[active=true]:border-ring data-[active=true]:ring-3 data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:border-destructive data-[active=true]:aria-invalid:ring-destructive/20 dark:bg-input/30 dark:data-[active=true]:aria-invalid:ring-destructive/40",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsx26("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx26("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ jsx26(
    "div",
    {
      "data-slot": "input-otp-separator",
      className: "flex items-center [&_svg:not([class*='size-'])]:size-4",
      role: "separator",
      ...props,
      children: /* @__PURE__ */ jsx26(
        MinusIcon,
        {}
      )
    }
  );
}

// src/components/ui/number-field.tsx
import * as React10 from "react";
import { MinusIcon as MinusIcon2, PlusIcon } from "lucide-react";
import { jsx as jsx27, jsxs as jsxs12 } from "react/jsx-runtime";
var NumberFieldContext = React10.createContext(
  null
);
function useNumberFieldContext(consumer) {
  const context = React10.useContext(NumberFieldContext);
  if (!context) {
    throw new Error(`<${consumer}> must be used within <NumberField>`);
  }
  return context;
}
function clamp(value, min2, max) {
  return Math.min(max, Math.max(min2, value));
}
function snap(value) {
  return Number(value.toPrecision(12));
}
function NumberField({
  value: valueProp,
  defaultValue,
  onValueChange,
  min: min2 = Number.NEGATIVE_INFINITY,
  max = Number.POSITIVE_INFINITY,
  step = 1,
  size = "default",
  disabled = false,
  readOnly = false,
  name,
  format: format4 = (value) => value.toLocaleString(),
  children
}) {
  const safeMax = Math.max(min2, max);
  const isControlled = valueProp !== void 0;
  const [internalValue, setInternalValue] = React10.useState(
    defaultValue
  );
  const value = isControlled ? valueProp : internalValue;
  const [text, setText] = React10.useState(
    () => value === void 0 ? "" : format4(value)
  );
  const lastSeen = React10.useRef(value);
  const update = React10.useCallback(
    (next) => {
      if (!isControlled) {
        setInternalValue(next);
      }
      lastSeen.current = next;
      onValueChange?.(next);
    },
    [isControlled, onValueChange]
  );
  React10.useEffect(() => {
    if (value !== lastSeen.current) {
      lastSeen.current = value;
      setText(value === void 0 ? "" : format4(value));
    }
  }, [value, format4]);
  const commit = React10.useCallback(
    (raw) => {
      const trimmed = raw.trim();
      if (trimmed === "" || trimmed === "-" || trimmed === ".") {
        setText("");
        update(void 0);
        return;
      }
      const parsed = Number(trimmed);
      if (!Number.isFinite(parsed)) {
        setText(value === void 0 ? "" : format4(value));
        return;
      }
      const next = snap(clamp(parsed, min2, safeMax));
      setText(format4(next));
      update(next);
    },
    [format4, min2, safeMax, update, value]
  );
  const stepBy = React10.useCallback(
    (direction) => {
      if (disabled || readOnly) {
        return;
      }
      const base = value ?? clamp(0, min2, safeMax);
      const next = snap(clamp(base + direction * step, min2, safeMax));
      if (next === value) {
        return;
      }
      setText(format4(next));
      update(next);
    },
    [disabled, format4, min2, safeMax, readOnly, step, update, value]
  );
  return /* @__PURE__ */ jsxs12(
    NumberFieldContext.Provider,
    {
      value: {
        value,
        text,
        size,
        disabled,
        readOnly,
        min: min2,
        max: safeMax,
        setText,
        commit,
        step: stepBy
      },
      children: [
        name != null && /* @__PURE__ */ jsx27(
          "input",
          {
            type: "hidden",
            name,
            value: value === void 0 ? "" : String(value),
            disabled
          }
        ),
        children
      ]
    }
  );
}
function NumberFieldGroup({
  className,
  ...props
}) {
  const { size, disabled } = useNumberFieldContext("NumberFieldGroup");
  return /* @__PURE__ */ jsx27(
    "div",
    {
      role: "group",
      "data-slot": "number-field-group",
      "data-size": size,
      "data-disabled": disabled ? "" : void 0,
      className: cn(
        "group/number-field flex h-8 w-full min-w-0 items-center gap-0.5 rounded-lg border border-input px-1 transition-colors outline-none focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 data-disabled:bg-input/50 data-disabled:opacity-50 dark:bg-input/30 dark:data-disabled:bg-input/80 data-[size=sm]:h-7 data-[size=lg]:h-9",
        className
      ),
      ...props
    }
  );
}
function NumberFieldStepper({
  direction,
  className,
  children,
  ...props
}) {
  const { step, disabled, readOnly, value, min: min2, max } = useNumberFieldContext(
    "NumberFieldStepper"
  );
  const outOfRange = direction === -1 ? value !== void 0 && value <= min2 : value !== void 0 && value >= max;
  return /* @__PURE__ */ jsx27(
    Button,
    {
      type: "button",
      variant: "ghost",
      size: "icon-xs",
      disabled: disabled || readOnly || outOfRange,
      "aria-label": direction === -1 ? "Decrease" : "Increase",
      onClick: () => step(direction),
      className: cn("shrink-0 text-muted-foreground hover:text-foreground", className),
      ...props,
      children: children ?? (direction === -1 ? /* @__PURE__ */ jsx27(MinusIcon2, {}) : /* @__PURE__ */ jsx27(PlusIcon, {}))
    }
  );
}
function NumberFieldDecrement(props) {
  return /* @__PURE__ */ jsx27(NumberFieldStepper, { direction: -1, ...props });
}
function NumberFieldIncrement(props) {
  return /* @__PURE__ */ jsx27(NumberFieldStepper, { direction: 1, ...props });
}
function NumberFieldInput({
  className,
  ...props
}) {
  const { text, setText, commit, step, disabled } = useNumberFieldContext(
    "NumberFieldInput"
  );
  return /* @__PURE__ */ jsx27(
    Input,
    {
      type: "text",
      inputMode: "decimal",
      "data-slot": "number-field-input",
      value: text,
      disabled,
      onChange: (event) => setText(event.target.value),
      onBlur: (event) => commit(event.target.value),
      onKeyDown: (event) => {
        if (event.key === "ArrowUp") {
          event.preventDefault();
          step(1);
        } else if (event.key === "ArrowDown") {
          event.preventDefault();
          step(-1);
        }
      },
      className: cn(
        "h-full flex-1 border-0 bg-transparent px-1 text-center text-sm tabular-nums shadow-none ring-0 focus-visible:border-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/password-strength-input.tsx
import { useId as useId3, useMemo as useMemo2, useState as useState8 } from "react";
import { CheckIcon as CheckIcon5, EyeIcon, EyeOffIcon, XIcon as XIcon4 } from "lucide-react";
import { jsx as jsx28, jsxs as jsxs13 } from "react/jsx-runtime";
function PasswordStrengthInput({
  className,
  ...props
}) {
  const id = useId3();
  const [password, setPassword] = useState8("");
  const [isVisible, setIsVisible] = useState8(false);
  const toggleVisibility = () => setIsVisible((prevState) => !prevState);
  const checkStrength = (pass) => {
    const requirements = [
      { regex: /.{8,}/, text: "At least 8 characters" },
      { regex: /[0-9]/, text: "At least 1 number" },
      { regex: /[a-z]/, text: "At least 1 lowercase letter" },
      { regex: /[A-Z]/, text: "At least 1 uppercase letter" }
    ];
    return requirements.map((req) => ({
      met: req.regex.test(pass),
      text: req.text
    }));
  };
  const strength = checkStrength(password);
  const strengthScore = useMemo2(() => {
    return strength.filter((req) => req.met).length;
  }, [strength]);
  const getStrengthColor = (score) => {
    if (score === 0) return "bg-border";
    if (score <= 1) return "bg-red-500";
    if (score <= 2) return "bg-orange-500";
    if (score === 3) return "bg-amber-500";
    return "bg-emerald-500";
  };
  const getStrengthText = (score) => {
    if (score === 0) return "Enter a password";
    if (score <= 2) return "Weak password";
    if (score === 3) return "Medium password";
    return "Strong password";
  };
  return /* @__PURE__ */ jsxs13("div", { "data-slot": "password-strength-input", className, ...props, children: [
    /* @__PURE__ */ jsxs13("div", { className: "*:not-first:mt-2", children: [
      /* @__PURE__ */ jsx28(Label, { htmlFor: id, children: "Input with password strength indicator" }),
      /* @__PURE__ */ jsxs13("div", { className: "relative", children: [
        /* @__PURE__ */ jsx28(
          Input,
          {
            id,
            className: "pe-9",
            placeholder: "Password",
            type: isVisible ? "text" : "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            "aria-describedby": `${id}-description`
          }
        ),
        /* @__PURE__ */ jsx28(
          "button",
          {
            "data-slot": "password-strength-toggle",
            className: "text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            type: "button",
            onClick: toggleVisibility,
            "aria-label": isVisible ? "Hide password" : "Show password",
            "aria-pressed": isVisible,
            "aria-controls": id,
            children: isVisible ? /* @__PURE__ */ jsx28(EyeOffIcon, { size: 16, "aria-hidden": "true" }) : /* @__PURE__ */ jsx28(EyeIcon, { size: 16, "aria-hidden": "true" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx28(
      "div",
      {
        "data-slot": "password-strength-progress",
        className: "bg-border mt-3 mb-4 h-1 w-full overflow-hidden rounded-full",
        role: "progressbar",
        "aria-valuenow": strengthScore,
        "aria-valuemin": 0,
        "aria-valuemax": 4,
        "aria-label": "Password strength",
        children: /* @__PURE__ */ jsx28(
          "div",
          {
            className: cn(
              "h-full transition-all duration-500 ease-out",
              getStrengthColor(strengthScore)
            ),
            style: { width: `${strengthScore / 4 * 100}%` }
          }
        )
      }
    ),
    /* @__PURE__ */ jsxs13(
      "p",
      {
        id: `${id}-description`,
        className: "text-foreground mb-2 text-sm font-medium",
        children: [
          getStrengthText(strengthScore),
          ". Must contain:"
        ]
      }
    ),
    /* @__PURE__ */ jsx28(
      "ul",
      {
        "data-slot": "password-strength-requirements",
        className: "space-y-1.5",
        "aria-label": "Password requirements",
        children: strength.map((req, index) => /* @__PURE__ */ jsxs13("li", { className: "flex items-center gap-2", children: [
          req.met ? /* @__PURE__ */ jsx28(
            CheckIcon5,
            {
              size: 16,
              className: "text-emerald-500",
              "aria-hidden": "true"
            }
          ) : /* @__PURE__ */ jsx28(
            XIcon4,
            {
              size: 16,
              className: "text-muted-foreground/80",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxs13(
            "span",
            {
              className: cn(
                "text-xs",
                req.met ? "text-emerald-600" : "text-muted-foreground"
              ),
              children: [
                req.text,
                /* @__PURE__ */ jsx28("span", { className: "sr-only", children: req.met ? " - Requirement met" : " - Requirement not met" })
              ]
            }
          )
        ] }, index))
      }
    )
  ] });
}

// src/components/ui/radio-group.tsx
import { RadioGroup as RadioGroupPrimitive } from "radix-ui";
import { jsx as jsx29 } from "react/jsx-runtime";
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx29(
    RadioGroupPrimitive.Root,
    {
      "data-slot": "radio-group",
      className: cn("grid w-full gap-2", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx29(
    RadioGroupPrimitive.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx29(
        RadioGroupPrimitive.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "flex size-4 items-center justify-center",
          children: /* @__PURE__ */ jsx29("span", { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" })
        }
      )
    }
  );
}

// src/components/ui/rating-input.tsx
import { useId as useId4 } from "react";
import { jsx as jsx30, jsxs as jsxs14 } from "react/jsx-runtime";
var defaultItems = [
  { value: "1", label: "Angry", icon: "\u{1F620}" },
  { value: "2", label: "Sad", icon: "\u{1F641}" },
  { value: "3", label: "Neutral", icon: "\u{1F610}" },
  { value: "4", label: "Happy", icon: "\u{1F642}" },
  { value: "5", label: "Laughing", icon: "\u{1F600}" }
];
function RatingInput({
  items = defaultItems,
  legend = "How did it go?",
  defaultValue = "3",
  className,
  ...props
}) {
  const id = useId4();
  return /* @__PURE__ */ jsxs14(
    "fieldset",
    {
      "data-slot": "rating-input",
      className: cn("space-y-4", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx30("legend", { className: "text-foreground text-sm leading-none font-medium", children: legend }),
        /* @__PURE__ */ jsx30(RadioGroup, { className: "flex gap-1.5", defaultValue, children: items.map((item) => /* @__PURE__ */ jsxs14(
          "label",
          {
            "data-slot": "rating-item",
            title: item.label,
            className: "border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border text-center text-xl shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50",
            children: [
              /* @__PURE__ */ jsx30(
                RadioGroupItem,
                {
                  id: `${id}-${item.value}`,
                  value: item.value,
                  className: "sr-only after:absolute after:inset-0"
                }
              ),
              item.icon
            ]
          },
          `${id}-${item.value}`
        )) })
      ]
    }
  );
}

// src/components/ui/slider.tsx
import * as React11 from "react";
import { Slider as SliderPrimitive } from "radix-ui";
import { jsx as jsx31, jsxs as jsxs15 } from "react/jsx-runtime";
function Slider({
  className,
  defaultValue,
  value,
  min: min2 = 0,
  max = 100,
  ...props
}) {
  const _values = React11.useMemo(
    () => Array.isArray(value) ? value : Array.isArray(defaultValue) ? defaultValue : [min2, max],
    [value, defaultValue, min2, max]
  );
  return /* @__PURE__ */ jsxs15(
    SliderPrimitive.Root,
    {
      "data-slot": "slider",
      defaultValue,
      value,
      min: min2,
      max,
      className: cn(
        "relative flex w-full touch-none items-center select-none data-disabled:opacity-50 data-vertical:h-full data-vertical:min-h-40 data-vertical:w-auto data-vertical:flex-col",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx31(
          SliderPrimitive.Track,
          {
            "data-slot": "slider-track",
            className: "relative grow overflow-hidden rounded-full bg-muted data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1",
            children: /* @__PURE__ */ jsx31(
              SliderPrimitive.Range,
              {
                "data-slot": "slider-range",
                className: "absolute bg-primary select-none data-horizontal:h-full data-vertical:w-full"
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ jsx31(
          SliderPrimitive.Thumb,
          {
            "data-slot": "slider-thumb",
            className: "relative block size-3 shrink-0 rounded-full border border-ring bg-white ring-ring/50 transition-[color,box-shadow] select-none after:absolute after:-inset-2 hover:ring-3 focus-visible:ring-3 focus-visible:outline-hidden active:ring-3 disabled:pointer-events-none disabled:opacity-50"
          },
          index
        ))
      ]
    }
  );
}

// src/components/ui/switch.tsx
import { Switch as SwitchPrimitive } from "radix-ui";
import { jsx as jsx32 } from "react/jsx-runtime";
function Switch({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx32(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      "data-size": size,
      className: cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx32(
        SwitchPrimitive.Thumb,
        {
          "data-slot": "switch-thumb",
          className: "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"
        }
      )
    }
  );
}

// src/components/ui/accordion.tsx
import { Accordion as AccordionPrimitive } from "radix-ui";
import { ChevronDownIcon as ChevronDownIcon5, ChevronUpIcon as ChevronUpIcon2 } from "lucide-react";
import { jsx as jsx33, jsxs as jsxs16 } from "react/jsx-runtime";
function Accordion({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx33(
    AccordionPrimitive.Root,
    {
      "data-slot": "accordion",
      className: cn("flex w-full flex-col", className),
      ...props
    }
  );
}
function AccordionItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx33(
    AccordionPrimitive.Item,
    {
      "data-slot": "accordion-item",
      className: cn("not-last:border-b", className),
      ...props
    }
  );
}
function AccordionTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx33(AccordionPrimitive.Header, { className: "flex", children: /* @__PURE__ */ jsxs16(
    AccordionPrimitive.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx33(ChevronDownIcon5, { "data-slot": "accordion-trigger-icon", className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" }),
        /* @__PURE__ */ jsx33(ChevronUpIcon2, { "data-slot": "accordion-trigger-icon", className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx33(
    AccordionPrimitive.Content,
    {
      "data-slot": "accordion-content",
      className: "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up",
      ...props,
      children: /* @__PURE__ */ jsx33(
        "div",
        {
          className: cn(
            "h-(--radix-accordion-content-height) pt-0 pb-2.5 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
            className
          ),
          children
        }
      )
    }
  );
}

// src/components/ui/bento-grid.tsx
import { ArrowRightIcon } from "lucide-react";
import { jsx as jsx34, jsxs as jsxs17 } from "react/jsx-runtime";
function BentoGrid({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx34(
    "div",
    {
      "data-slot": "bento-grid",
      className: cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      ),
      ...props
    }
  );
}
function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}) {
  return /* @__PURE__ */ jsxs17(
    "div",
    {
      "data-slot": "bento-card",
      className: cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transform-gpu",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx34("div", { children: background }),
        /* @__PURE__ */ jsxs17("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxs17("div", { className: "pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10", children: [
            /* @__PURE__ */ jsx34(Icon, { className: "h-12 w-12 origin-left transform-gpu text-foreground transition-all duration-300 ease-in-out group-hover:scale-75" }),
            /* @__PURE__ */ jsx34("h3", { className: "text-xl font-semibold text-foreground", children: name }),
            /* @__PURE__ */ jsx34("p", { className: "max-w-lg text-muted-foreground", children: description })
          ] }),
          /* @__PURE__ */ jsx34("div", { className: "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden", children: /* @__PURE__ */ jsx34(Button, { variant: "link", asChild: true, size: "sm", className: "pointer-events-auto p-0", children: /* @__PURE__ */ jsxs17("a", { href, children: [
            cta,
            /* @__PURE__ */ jsx34(ArrowRightIcon, { className: "ms-2 h-4 w-4 rtl:rotate-180" })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx34("div", { className: "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex", children: /* @__PURE__ */ jsx34(Button, { variant: "link", asChild: true, size: "sm", className: "pointer-events-auto p-0", children: /* @__PURE__ */ jsxs17("a", { href, children: [
          cta,
          /* @__PURE__ */ jsx34(ArrowRightIcon, { className: "ms-2 h-4 w-4 rtl:rotate-180" })
        ] }) }) }),
        /* @__PURE__ */ jsx34("div", { className: "pointer-events-none absolute inset-0 transform-gpu bg-transparent transition-all duration-300 group-hover:bg-foreground/3" })
      ]
    }
  );
}

// src/components/ui/card.tsx
import { jsx as jsx35 } from "react/jsx-runtime";
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx35(
    "div",
    {
      "data-slot": "card",
      "data-size": size,
      className: cn(
        "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx35(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx35(
    "div",
    {
      "data-slot": "card-title",
      className: cn(
        "font-heading text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
        className
      ),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx35(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx35(
    "div",
    {
      "data-slot": "card-action",
      className: cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      ),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx35(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-(--card-spacing)", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx35(
    "div",
    {
      "data-slot": "card-footer",
      className: cn(
        "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/collapsible.tsx
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import { jsx as jsx36 } from "react/jsx-runtime";
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ jsx36(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx36(
    CollapsiblePrimitive.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ jsx36(
    CollapsiblePrimitive.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}

// src/components/ui/direction-aware-tabs.tsx
import { useMemo as useMemo4, useState as useState9 } from "react";
import { AnimatePresence, motion, MotionConfig } from "motion/react";
import useMeasure from "react-use-measure";
import { jsx as jsx37, jsxs as jsxs18 } from "react/jsx-runtime";
function DirectionAwareTabs({
  tabs,
  className,
  rounded,
  roundedInner,
  onChange
}) {
  const [activeTab, setActiveTab] = useState9(0);
  const [direction, setDirection] = useState9(0);
  const [isAnimating, setIsAnimating] = useState9(false);
  const [ref, bounds] = useMeasure();
  const content = useMemo4(() => {
    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
    return activeTabContent || null;
  }, [activeTab, tabs]);
  const handleTabClick = (newTabId) => {
    if (newTabId !== activeTab && !isAnimating) {
      const newDirection = newTabId > activeTab ? 1 : -1;
      setDirection(newDirection);
      setActiveTab(newTabId);
      onChange ? onChange() : null;
    }
  };
  const variants = {
    initial: (direction2) => ({
      x: 300 * direction2,
      opacity: 0,
      filter: "blur(4px)"
    }),
    active: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)"
    },
    exit: (direction2) => ({
      x: -300 * direction2,
      opacity: 0,
      filter: "blur(4px)"
    })
  };
  return /* @__PURE__ */ jsxs18(
    "div",
    {
      className: " flex flex-col items-center w-full",
      "data-slot": "direction-aware-tabs",
      children: [
        /* @__PURE__ */ jsx37(
          "div",
          {
            className: cn(
              "flex space-x-1 border border-none rounded-full cursor-pointer bg-neutral-600 px-[3px] py-[3.2px] shadow-[0px_1px_0px_0px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(1_0_0/0.25)]",
              className,
              rounded
            ),
            "data-slot": "direction-aware-tabs-list",
            children: tabs.map((tab) => /* @__PURE__ */ jsxs18(
              "button",
              {
                onClick: () => handleTabClick(tab.id),
                className: cn(
                  "relative rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium text-neutral-200  transition focus-visible:outline-1 focus-visible:ring-1  focus-visible:outline-none flex gap-2 items-center ",
                  activeTab === tab.id ? "text-white" : "hover:text-neutral-300/60  text-neutral-200/80",
                  rounded ? roundedInner : void 0
                ),
                "data-slot": "direction-aware-tabs-trigger",
                style: { WebkitTapHighlightColor: "transparent" },
                children: [
                  activeTab === tab.id && /* @__PURE__ */ jsx37(
                    motion.span,
                    {
                      layoutId: "bubble",
                      className: cn(
                        "absolute inset-0 z-10 bg-neutral-700 mix-blend-difference shadow-[0px_1px_0px_0px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(1_0_0/0.25)] border border-white/10",
                        rounded ? roundedInner : "rounded-full"
                      ),
                      "data-slot": "direction-aware-tabs-bubble",
                      transition: { type: "spring", bounce: 0.19, duration: 0.4 }
                    }
                  ),
                  tab.label
                ]
              },
              tab.id
            ))
          }
        ),
        /* @__PURE__ */ jsx37(MotionConfig, { transition: { duration: 0.4, type: "spring", bounce: 0.2 }, children: /* @__PURE__ */ jsx37(
          motion.div,
          {
            className: "relative mx-auto w-full h-full overflow-hidden",
            "data-slot": "direction-aware-tabs-content",
            initial: false,
            animate: { height: bounds.height },
            children: /* @__PURE__ */ jsx37("div", { className: "p-1", ref, children: /* @__PURE__ */ jsx37(
              AnimatePresence,
              {
                custom: direction,
                mode: "popLayout",
                onExitComplete: () => setIsAnimating(false),
                children: /* @__PURE__ */ jsx37(
                  motion.div,
                  {
                    variants,
                    initial: "initial",
                    animate: "active",
                    exit: "exit",
                    custom: direction,
                    onAnimationStart: () => setIsAnimating(true),
                    onAnimationComplete: () => setIsAnimating(false),
                    children: content
                  },
                  activeTab
                )
              }
            ) })
          }
        ) })
      ]
    }
  );
}

// src/components/ui/scroll-area.tsx
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";
import { jsx as jsx38, jsxs as jsxs19 } from "react/jsx-runtime";
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs19(
    ScrollAreaPrimitive.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx38(
          ScrollAreaPrimitive.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsx38(ScrollBar, {}),
        /* @__PURE__ */ jsx38(ScrollAreaPrimitive.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx38(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx38(
        ScrollAreaPrimitive.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "relative flex-1 rounded-full bg-border"
        }
      )
    }
  );
}

// src/components/ui/sortable-list.tsx
import {
  useState as useState10
} from "react";
import { Trash } from "lucide-react";
import {
  AnimatePresence as AnimatePresence2,
  LayoutGroup,
  motion as motion2,
  Reorder,
  useDragControls
} from "motion/react";
import useMeasure2 from "react-use-measure";
import { jsx as jsx39, jsxs as jsxs20 } from "react/jsx-runtime";
function SortableListItem({
  item,
  order,
  onCompleteItem,
  onRemoveItem,
  renderExtra,
  handleDrag,
  isExpanded,
  className
}) {
  let [ref, bounds] = useMeasure2();
  const [isDragging, setIsDragging] = useState10(false);
  const dragControls = useDragControls();
  const handleDragStart = (event) => {
    setIsDragging(true);
    dragControls.start(event, { snapToCursor: true });
    handleDrag();
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  return /* @__PURE__ */ jsx39(motion2.div, { className: cn("", className), "data-slot": "sortable-list-item", children: /* @__PURE__ */ jsxs20("div", { className: "flex w-full items-center", children: [
    /* @__PURE__ */ jsxs20(
      Reorder.Item,
      {
        value: item,
        className: cn(
          "relative z-auto grow",
          "h-full rounded-xl bg-primary dark:bg-primary-foreground",
          "shadow-[0px_1px_0px_0px_hsla(0,0%,100%,.03)_inset,0px_0px_0px_1px_hsla(0,0%,100%,.03)_inset,0px_0px_0px_1px_rgba(0,0,0,.1),0px_2px_2px_0px_rgba(0,0,0,.1),0px_4px_4px_0px_rgba(0,0,0,.1),0px_8px_8px_0px_rgba(0,0,0,.1)]",
          item.checked ? "cursor-not-allowed" : "cursor-grab",
          item.checked && !isDragging ? "w-7/10" : "w-full"
        ),
        "data-slot": "sortable-list-item-draggable",
        initial: { opacity: 0 },
        animate: {
          opacity: 1,
          height: bounds.height > 0 ? bounds.height : void 0,
          transition: {
            type: "spring",
            bounce: 0,
            duration: 0.4
          }
        },
        exit: {
          opacity: 0,
          transition: {
            duration: 0.05,
            type: "spring",
            bounce: 0.1
          }
        },
        layout: true,
        layoutId: `item-${item.id}`,
        dragListener: !item.checked,
        dragControls,
        onDragEnd: handleDragEnd,
        style: isExpanded ? {
          zIndex: 9999,
          marginTop: 10,
          marginBottom: 10,
          position: "relative",
          overflow: "hidden"
        } : {
          position: "relative",
          overflow: "hidden"
        },
        whileDrag: { zIndex: 9999 },
        children: [
          /* @__PURE__ */ jsx39("div", { ref, className: cn(isExpanded ? "" : "", "z-20 "), children: /* @__PURE__ */ jsxs20(
            motion2.div,
            {
              layout: "position",
              className: "flex items-center justify-center ",
              children: [
                /* @__PURE__ */ jsx39(AnimatePresence2, { children: !isExpanded ? /* @__PURE__ */ jsxs20(
                  motion2.div,
                  {
                    initial: { opacity: 0, filter: "blur(4px)" },
                    animate: { opacity: 1, filter: "blur(0px)" },
                    exit: { opacity: 0, filter: "blur(4px)" },
                    transition: { duration: 1e-3 },
                    className: "flex  items-center space-x-2 ",
                    children: [
                      /* @__PURE__ */ jsx39("div", { className: "pl-3 pt-1", children: /* @__PURE__ */ jsx39(
                        Checkbox,
                        {
                          checked: item.checked,
                          id: `checkbox-${item.id}`,
                          "aria-label": "Mark to delete",
                          onCheckedChange: () => onCompleteItem(item.id),
                          className: "h-5 w-5 rounded-md border-border bg-muted/30 data-[state=checked]:bg-foreground data-[state=checked]:text-red-200"
                        }
                      ) }),
                      /* @__PURE__ */ jsx39("p", { className: "font-mono text-xs pl-1 text-muted-foreground", children: order + 1 }),
                      /* @__PURE__ */ jsx39(
                        motion2.div,
                        {
                          className: " px-1 min-w-[150px]",
                          initial: {
                            opacity: 0,
                            filter: "blur(4px)"
                          },
                          animate: { opacity: 1, filter: "blur(0px)" },
                          transition: {
                            bounce: 0.2,
                            delay: item.checked ? 0.2 : 0,
                            type: "spring"
                          },
                          children: /* @__PURE__ */ jsx39(
                            "h4",
                            {
                              className: cn(
                                "tracking-tighter text-base md:text-lg ",
                                item.checked ? "text-red-400" : "text-foreground/70"
                              ),
                              children: item.checked ? "Delete" : ` ${item.text}`
                            }
                          )
                        },
                        `${item.checked}`
                      )
                    ]
                  }
                ) : null }),
                renderExtra && renderExtra(item)
              ]
            }
          ) }),
          /* @__PURE__ */ jsx39(
            "div",
            {
              onPointerDown: handleDragStart,
              style: { touchAction: "none" }
            }
          )
        ]
      },
      item.id
    ),
    /* @__PURE__ */ jsx39(AnimatePresence2, { mode: "popLayout", children: item.checked ? /* @__PURE__ */ jsx39(
      motion2.div,
      {
        layout: true,
        initial: { opacity: 0, x: -10 },
        animate: {
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.17,
            duration: 0.17,
            type: "spring",
            bounce: 0.6
          },
          zIndex: 5
        },
        exit: {
          opacity: 0,
          x: -5,
          transition: {
            delay: 0,
            duration: 0,
            type: "spring",
            bounce: 0
          }
        },
        className: "-ml-[1px] h-[1.5rem] w-3 rounded-l-none  rounded-r-none border-y border-y-border/50 border-r-border bg-muted "
      }
    ) : null }),
    /* @__PURE__ */ jsx39(AnimatePresence2, { mode: "popLayout", children: item.checked ? /* @__PURE__ */ jsx39(
      motion2.div,
      {
        layout: true,
        initial: { opacity: 0, x: -5, filter: "blur(4px)" },
        animate: {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          transition: {
            delay: 0.3,
            duration: 0.15,
            type: "spring",
            bounce: 0.9
          }
        },
        exit: {
          opacity: 0,
          filter: "blur(4px)",
          x: -10,
          transition: { delay: 0, duration: 0.12 }
        },
        className: "inset-0 z-0 border-spacing-1  rounded-r-xl rounded-l-sm border-r-2 border-r-red-300/60 bg-muted/80 shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)] dark:bg-muted/50",
        children: /* @__PURE__ */ jsx39(
          "button",
          {
            type: "button",
            className: "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium  transition-colors duration-150   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            onClick: () => onRemoveItem(item.id),
            children: /* @__PURE__ */ jsx39(Trash, { className: "h-4 w-4 text-red-400 transition-colors duration-150 fill-red-400/60 " })
          }
        )
      }
    ) : null })
  ] }) }, item.id);
}
SortableListItem.displayName = "SortableListItem";
function SortableList({
  items,
  setItems,
  onCompleteItem,
  renderItem
}) {
  if (items) {
    return /* @__PURE__ */ jsx39(LayoutGroup, { children: /* @__PURE__ */ jsx39(
      Reorder.Group,
      {
        axis: "y",
        values: items,
        onReorder: setItems,
        className: "flex flex-col",
        "data-slot": "sortable-list",
        children: /* @__PURE__ */ jsx39(AnimatePresence2, { children: items?.map(
          (item, index) => renderItem(
            item,
            index,
            onCompleteItem,
            (id) => setItems((items2) => items2.filter((item2) => item2.id !== id))
          )
        ) })
      }
    ) });
  }
  return null;
}
SortableList.displayName = "SortableList";

// src/components/ui/table.tsx
import { jsx as jsx40 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx40(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsx40(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx40(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx40(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx40(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: cn(
        "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
        className
      ),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx40(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "border-b transition-colors hover:bg-muted/50 has-aria-expanded:bg-muted/50 data-[state=selected]:bg-muted",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx40(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "h-10 px-2 text-left align-middle font-medium whitespace-nowrap text-foreground [&:has([role=checkbox])]:pr-0",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx40(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0",
        className
      ),
      ...props
    }
  );
}
function TableCaption({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx40(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("mt-4 text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/tabs.tsx
import { cva as cva5 } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui";
import { jsx as jsx41 } from "react/jsx-runtime";
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx41(
    TabsPrimitive.Root,
    {
      "data-slot": "tabs",
      "data-orientation": orientation,
      className: cn(
        "group/tabs flex gap-2 data-horizontal:flex-col",
        className
      ),
      ...props
    }
  );
}
var tabsListVariants = cva5(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx41(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn(tabsListVariants({ variant }), className),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx41(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-1.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx41(
    TabsPrimitive.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 text-sm outline-none", className),
      ...props
    }
  );
}

// src/components/ui/tree.tsx
import * as React12 from "react";
import { ChevronRightIcon as ChevronRightIcon2, FileIcon as FileIcon2, FolderIcon, FolderOpenIcon } from "lucide-react";
import { AnimatePresence as AnimatePresence3, motion as motion3, useReducedMotion } from "motion/react";
import { jsx as jsx42, jsxs as jsxs21 } from "react/jsx-runtime";
var TreeContext = React12.createContext(null);
function useTree(componentName) {
  const context = React12.useContext(TreeContext);
  if (!context) {
    throw new Error(`<${componentName}> must be used within <Tree>`);
  }
  return context;
}
function Tree({
  data,
  expandedIds: expandedIdsProp,
  defaultExpandedIds,
  onExpandedChange,
  selectedId: selectedIdProp,
  defaultSelectedId = null,
  onSelectionChange,
  className,
  ...props
}) {
  const isExpandedControlled = expandedIdsProp !== void 0;
  const [uncontrolledExpanded, setUncontrolledExpanded] = React12.useState(
    () => new Set(defaultExpandedIds)
  );
  const isSelectionControlled = selectedIdProp !== void 0;
  const [uncontrolledSelected, setUncontrolledSelected] = React12.useState(defaultSelectedId);
  const expandedIds = isExpandedControlled ? new Set(expandedIdsProp) : uncontrolledExpanded;
  const selectedId = isSelectionControlled ? selectedIdProp : uncontrolledSelected;
  const toggleExpanded = React12.useCallback(
    (id) => {
      const next = new Set(isExpandedControlled ? expandedIdsProp : uncontrolledExpanded);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      const nextIds = Array.from(next);
      if (!isExpandedControlled) {
        setUncontrolledExpanded(next);
      }
      onExpandedChange?.(nextIds);
    },
    [
      isExpandedControlled,
      expandedIdsProp,
      uncontrolledExpanded,
      onExpandedChange
    ]
  );
  const changeSelection = React12.useCallback(
    (id) => {
      const next = isSelectionControlled ? selectedIdProp : uncontrolledSelected;
      const nextId = next === id ? null : id;
      if (!isSelectionControlled) {
        setUncontrolledSelected(nextId);
      }
      onSelectionChange?.(nextId);
    },
    [isSelectionControlled, selectedIdProp, uncontrolledSelected, onSelectionChange]
  );
  const contextValue = React12.useMemo(
    () => ({ expandedIds, toggleExpanded, selectedId, changeSelection }),
    [expandedIds, toggleExpanded, selectedId, changeSelection]
  );
  return /* @__PURE__ */ jsx42(TreeContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx42(
    "ul",
    {
      role: "tree",
      "data-slot": "tree",
      className: cn("flex flex-col gap-0.5 text-sm", className),
      ...props,
      children: data.map((node) => /* @__PURE__ */ jsx42(TreeNode, { node, depth: 0 }, node.id))
    }
  ) });
}
function TreeNode({ node, depth = 0 }) {
  const { expandedIds, toggleExpanded, selectedId, changeSelection } = useTree("TreeNode");
  const reducedMotion = useReducedMotion();
  const children = node.children;
  const isFolder = children != null && children.length > 0;
  const isExpanded = isFolder && expandedIds.has(node.id);
  const isSelectable = !isFolder;
  const isSelected = isSelectable && selectedId === node.id;
  const DefaultIcon = isFolder ? isExpanded ? FolderOpenIcon : FolderIcon : FileIcon2;
  return /* @__PURE__ */ jsxs21("li", { role: "presentation", "data-slot": "tree-node", children: [
    /* @__PURE__ */ jsxs21(
      "button",
      {
        type: "button",
        role: "treeitem",
        "aria-selected": isFolder ? void 0 : isSelected,
        "aria-expanded": isFolder ? isExpanded : void 0,
        "data-slot": "tree-node-row",
        "data-expanded": isExpanded || void 0,
        "data-selected": isSelected || void 0,
        onClick: () => isFolder ? toggleExpanded(node.id) : changeSelection(node.id),
        className: cn(
          "flex h-8 w-full items-center gap-1.5 rounded-lg px-2 text-left text-sm outline-none select-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 aria-selected:bg-accent",
          depth > 0 && "pl-0"
        ),
        children: [
          Array.from({ length: depth }).map((_, index) => /* @__PURE__ */ jsx42(
            "span",
            {
              "aria-hidden": "true",
              className: "h-full w-4 shrink-0 self-stretch border-l border-border"
            },
            index
          )),
          isFolder ? /* @__PURE__ */ jsx42(
            ChevronRightIcon2,
            {
              "aria-hidden": "true",
              "data-expanded": isExpanded || void 0,
              className: "size-4 shrink-0 text-muted-foreground transition-transform duration-200 data-expanded:rotate-90"
            }
          ) : /* @__PURE__ */ jsx42("span", { "aria-hidden": "true", className: "size-4 shrink-0" }),
          /* @__PURE__ */ jsx42(
            "span",
            {
              "aria-hidden": "true",
              className: "flex size-4 shrink-0 items-center justify-center text-muted-foreground [&>svg]:size-4",
              children: node.icon ?? /* @__PURE__ */ jsx42(DefaultIcon, {})
            }
          ),
          /* @__PURE__ */ jsx42("span", { className: "truncate", children: node.label })
        ]
      }
    ),
    isFolder ? /* @__PURE__ */ jsx42(AnimatePresence3, { initial: false, children: isExpanded && /* @__PURE__ */ jsx42(
      motion3.ul,
      {
        role: "group",
        "data-slot": "tree-node-children",
        className: "flex flex-col gap-0.5 overflow-hidden",
        initial: reducedMotion ? false : { height: 0, opacity: 0 },
        animate: reducedMotion ? void 0 : { height: "auto", opacity: 1 },
        exit: reducedMotion ? void 0 : { height: 0, opacity: 0 },
        transition: { duration: 0.2, ease: "easeInOut" },
        children: children.map((child) => /* @__PURE__ */ jsx42(TreeNode, { node: child, depth: depth + 1 }, child.id))
      },
      "tree-node-children"
    ) }) : null
  ] });
}

// src/components/ui/alert-dialog.tsx
import { AlertDialog as AlertDialogPrimitive } from "radix-ui";
import { jsx as jsx43, jsxs as jsxs22 } from "react/jsx-runtime";
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsx43(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx43(AlertDialogPrimitive.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx43(AlertDialogPrimitive.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    AlertDialogPrimitive.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsxs22(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsx43(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsx43(
      AlertDialogPrimitive.Content,
      {
        "data-slot": "alert-dialog-content",
        "data-size": size,
        className: cn(
          "group/alert-dialog-content fixed top-1/2 left-1/2 z-50 grid w-full -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none data-[size=default]:max-w-xs data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn(
        "grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-4 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]",
        className
      ),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogMedia({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    "div",
    {
      "data-slot": "alert-dialog-media",
      className: cn(
        "mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    AlertDialogPrimitive.Title,
    {
      "data-slot": "alert-dialog-title",
      className: cn(
        "font-heading text-base font-medium sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2",
        className
      ),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx43(
    AlertDialogPrimitive.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn(
        "text-sm text-balance text-muted-foreground md:text-pretty *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      ),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx43(Button, { variant, size, asChild: true, children: /* @__PURE__ */ jsx43(
    AlertDialogPrimitive.Action,
    {
      "data-slot": "alert-dialog-action",
      className: cn(className),
      ...props
    }
  ) });
}
function AlertDialogCancel({
  className,
  variant = "outline",
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx43(Button, { variant, size, asChild: true, children: /* @__PURE__ */ jsx43(
    AlertDialogPrimitive.Cancel,
    {
      "data-slot": "alert-dialog-cancel",
      className: cn(className),
      ...props
    }
  ) });
}

// src/components/ui/context-menu.tsx
import { ContextMenu as ContextMenuPrimitive } from "radix-ui";
import { ChevronRightIcon as ChevronRightIcon3, CheckIcon as CheckIcon6 } from "lucide-react";
import { jsx as jsx44, jsxs as jsxs23 } from "react/jsx-runtime";
function ContextMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx44(ContextMenuPrimitive.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx44(
    ContextMenuPrimitive.Trigger,
    {
      "data-slot": "context-menu-trigger",
      className: cn("select-none", className),
      ...props
    }
  );
}
function ContextMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx44(ContextMenuPrimitive.Group, { "data-slot": "context-menu-group", ...props });
}
function ContextMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx44(ContextMenuPrimitive.Portal, { "data-slot": "context-menu-portal", ...props });
}
function ContextMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsx44(ContextMenuPrimitive.Sub, { "data-slot": "context-menu-sub", ...props });
}
function ContextMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx44(
    ContextMenuPrimitive.RadioGroup,
    {
      "data-slot": "context-menu-radio-group",
      ...props
    }
  );
}
function ContextMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx44(ContextMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx44(
    ContextMenuPrimitive.Content,
    {
      "data-slot": "context-menu-content",
      className: cn("z-50 max-h-(--radix-context-menu-content-available-height) min-w-36 origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
      ...props
    }
  ) });
}
function ContextMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx44(
    ContextMenuPrimitive.Item,
    {
      "data-slot": "context-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "group/context-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus:*:[svg]:text-accent-foreground data-[variant=destructive]:*:[svg]:text-destructive",
        className
      ),
      ...props
    }
  );
}
function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs23(
    ContextMenuPrimitive.SubTrigger,
    {
      "data-slot": "context-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx44(ChevronRightIcon3, { className: "ml-auto" })
      ]
    }
  );
}
function ContextMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx44(
    ContextMenuPrimitive.SubContent,
    {
      "data-slot": "context-menu-sub-content",
      className: cn("z-50 min-w-32 origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-lg border bg-popover p-1 text-popover-foreground shadow-lg duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
      ...props
    }
  );
}
function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs23(
    ContextMenuPrimitive.CheckboxItem,
    {
      "data-slot": "context-menu-checkbox-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx44("span", { className: "pointer-events-none absolute right-2", children: /* @__PURE__ */ jsx44(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx44(
          CheckIcon6,
          {}
        ) }) }),
        children
      ]
    }
  );
}
function ContextMenuRadioItem({
  className,
  children,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs23(
    ContextMenuPrimitive.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx44("span", { className: "pointer-events-none absolute right-2", children: /* @__PURE__ */ jsx44(ContextMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx44(
          CheckIcon6,
          {}
        ) }) }),
        children
      ]
    }
  );
}
function ContextMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx44(
    ContextMenuPrimitive.Label,
    {
      "data-slot": "context-menu-label",
      "data-inset": inset,
      className: cn(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
        className
      ),
      ...props
    }
  );
}
function ContextMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx44(
    ContextMenuPrimitive.Separator,
    {
      "data-slot": "context-menu-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function ContextMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx44(
    "span",
    {
      "data-slot": "context-menu-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/context-menu-item:text-accent-foreground",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/drawer.tsx
import { Drawer as DrawerPrimitive } from "vaul";
import { jsx as jsx45, jsxs as jsxs24 } from "react/jsx-runtime";
function Drawer({
  ...props
}) {
  return /* @__PURE__ */ jsx45(DrawerPrimitive.Root, { "data-slot": "drawer", ...props });
}
function DrawerTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx45(DrawerPrimitive.Trigger, { "data-slot": "drawer-trigger", ...props });
}
function DrawerPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx45(DrawerPrimitive.Portal, { "data-slot": "drawer-portal", ...props });
}
function DrawerClose({
  ...props
}) {
  return /* @__PURE__ */ jsx45(DrawerPrimitive.Close, { "data-slot": "drawer-close", ...props });
}
function DrawerOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx45(
    DrawerPrimitive.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/10 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function DrawerContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs24(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ jsx45(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs24(
      DrawerPrimitive.Content,
      {
        "data-slot": "drawer-content",
        className: cn(
          "group/drawer-content fixed z-50 flex h-auto flex-col bg-popover text-sm text-popover-foreground data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ jsx45("div", { className: "mx-auto mt-4 hidden h-1 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          children
        ]
      }
    )
  ] });
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx45(
    "div",
    {
      "data-slot": "drawer-header",
      className: cn(
        "flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-0.5 md:text-left",
        className
      ),
      ...props
    }
  );
}
function DrawerFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx45(
    "div",
    {
      "data-slot": "drawer-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function DrawerTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx45(
    DrawerPrimitive.Title,
    {
      "data-slot": "drawer-title",
      className: cn(
        "font-heading text-base font-medium text-foreground",
        className
      ),
      ...props
    }
  );
}
function DrawerDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx45(
    DrawerPrimitive.Description,
    {
      "data-slot": "drawer-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/dropdown-menu.tsx
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { CheckIcon as CheckIcon7, ChevronRightIcon as ChevronRightIcon4 } from "lucide-react";
import { jsx as jsx46, jsxs as jsxs25 } from "react/jsx-runtime";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx46(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx46(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx46(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx46(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx46(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      align,
      className: cn("z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx46(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx46(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs25(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx46(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-checkbox-item-indicator",
            children: /* @__PURE__ */ jsx46(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx46(
              CheckIcon7,
              {}
            ) })
          }
        ),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx46(
    DropdownMenuPrimitive.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs25(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx46(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-radio-item-indicator",
            children: /* @__PURE__ */ jsx46(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx46(
              CheckIcon7,
              {}
            ) })
          }
        ),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx46(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx46(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx46(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ jsx46(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs25(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx46(ChevronRightIcon4, { className: "ml-auto" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx46(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
      ...props
    }
  );
}

// src/components/ui/dynamic-island.tsx
import {
  createContext as createContext7,
  useCallback as useCallback6,
  useContext as useContext8,
  useEffect as useEffect7,
  useReducer as useReducer2,
  useRef as useRef6,
  useState as useState12
} from "react";
import { AnimatePresence as AnimatePresence4, motion as motion4, useWillChange } from "motion/react";
import { jsx as jsx47 } from "react/jsx-runtime";
var stiffness = 400;
var damping = 30;
var MIN_WIDTH = 691;
var MAX_HEIGHT_MOBILE_ULTRA = 400;
var MAX_HEIGHT_MOBILE_MASSIVE = 700;
var min = (a, b) => a < b ? a : b;
var SIZE_PRESETS = {
  RESET: "reset",
  EMPTY: "empty",
  DEFAULT: "default",
  COMPACT: "compact",
  COMPACT_LONG: "compactLong",
  LARGE: "large",
  LONG: "long",
  MINIMAL_LEADING: "minimalLeading",
  MINIMAL_TRAILING: "minimalTrailing",
  COMPACT_MEDIUM: "compactMedium",
  MEDIUM: "medium",
  TALL: "tall",
  ULTRA: "ultra",
  MASSIVE: "massive"
};
var DynamicIslandSizePresets = {
  [SIZE_PRESETS.RESET]: {
    width: 150,
    aspectRatio: 1,
    borderRadius: 20
  },
  [SIZE_PRESETS.EMPTY]: {
    width: 0,
    aspectRatio: 0,
    borderRadius: 0
  },
  [SIZE_PRESETS.DEFAULT]: {
    width: 150,
    aspectRatio: 44 / 150,
    borderRadius: 46
  },
  [SIZE_PRESETS.MINIMAL_LEADING]: {
    width: 52.33,
    aspectRatio: 44 / 52.33,
    borderRadius: 22
  },
  [SIZE_PRESETS.MINIMAL_TRAILING]: {
    width: 52.33,
    aspectRatio: 44 / 52.33,
    borderRadius: 22
  },
  [SIZE_PRESETS.COMPACT]: {
    width: 235,
    aspectRatio: 44 / 235,
    borderRadius: 46
  },
  [SIZE_PRESETS.COMPACT_LONG]: {
    width: 300,
    aspectRatio: 44 / 235,
    borderRadius: 46
  },
  [SIZE_PRESETS.COMPACT_MEDIUM]: {
    width: 351,
    aspectRatio: 64 / 371,
    borderRadius: 44
  },
  [SIZE_PRESETS.LONG]: {
    width: 371,
    aspectRatio: 84 / 371,
    borderRadius: 42
  },
  [SIZE_PRESETS.MEDIUM]: {
    width: 371,
    aspectRatio: 210 / 371,
    borderRadius: 22
  },
  [SIZE_PRESETS.LARGE]: {
    width: 371,
    aspectRatio: 84 / 371,
    borderRadius: 42
  },
  [SIZE_PRESETS.TALL]: {
    width: 371,
    aspectRatio: 210 / 371,
    borderRadius: 42
  },
  [SIZE_PRESETS.ULTRA]: {
    width: 630,
    aspectRatio: 630 / 800,
    borderRadius: 42
  },
  [SIZE_PRESETS.MASSIVE]: {
    width: 891,
    height: 1900,
    aspectRatio: 891 / 891,
    borderRadius: 42
  }
};
var BlobContext = createContext7(void 0);
var blobReducer = (state, action) => {
  switch (action.type) {
    case "SET_SIZE":
      return {
        ...state,
        size: action.newSize,
        previousSize: state.size,
        isAnimating: false
        // Only set isAnimating to true if there are more steps
      };
    case "SCHEDULE_ANIMATION":
      return {
        ...state,
        animationQueue: action.animationSteps,
        isAnimating: action.animationSteps.length > 0
      };
    case "INITIALIZE":
      return {
        ...state,
        size: action.firstState,
        previousSize: SIZE_PRESETS.EMPTY,
        isAnimating: false
      };
    case "ANIMATION_END":
      return {
        ...state,
        isAnimating: false
      };
    default:
      return state;
  }
};
var DynamicIslandProvider = ({
  children,
  initialSize = SIZE_PRESETS.DEFAULT,
  initialAnimation = []
}) => {
  const initialState = {
    size: initialSize,
    previousSize: SIZE_PRESETS.EMPTY,
    animationQueue: initialAnimation,
    isAnimating: initialAnimation.length > 0
  };
  const [state, dispatch] = useReducer2(blobReducer, initialState);
  useEffect7(() => {
    const processQueue = async () => {
      for (const step of state.animationQueue) {
        await new Promise((resolve) => setTimeout(resolve, step.delay));
        dispatch({ type: "SET_SIZE", newSize: step.size });
      }
      dispatch({ type: "ANIMATION_END" });
    };
    if (state.animationQueue.length > 0) {
      processQueue();
    }
  }, [state.animationQueue]);
  const setSize = useCallback6(
    (newSize) => {
      if (state.previousSize !== newSize && newSize !== state.size) {
        dispatch({ type: "SET_SIZE", newSize });
      }
    },
    [state.previousSize, state.size, dispatch]
  );
  const scheduleAnimation = useCallback6(
    (animationSteps) => {
      dispatch({ type: "SCHEDULE_ANIMATION", animationSteps });
    },
    [dispatch]
  );
  const contextValue = {
    state,
    dispatch,
    setSize,
    scheduleAnimation,
    presets: DynamicIslandSizePresets
  };
  return /* @__PURE__ */ jsx47(BlobContext.Provider, { value: contextValue, children });
};
var useDynamicIslandSize = () => {
  const context = useContext8(BlobContext);
  if (!context) {
    throw new Error(
      "useDynamicIslandSize must be used within a DynamicIslandProvider"
    );
  }
  return context;
};
var useScheduledAnimations = (animations) => {
  const { scheduleAnimation } = useDynamicIslandSize();
  const animationsRef = useRef6(animations);
  useEffect7(() => {
    scheduleAnimation(animationsRef.current);
  }, [scheduleAnimation]);
};
var DynamicIslandContainer = ({ children }) => {
  return /* @__PURE__ */ jsx47(
    "div",
    {
      className: "z-10 flex h-full w-full items-end justify-center bg-transparent",
      "data-slot": "dynamic-island-container",
      children
    }
  );
};
var DynamicIsland = ({
  children,
  id,
  ...props
}) => {
  const willChange = useWillChange();
  const [screenSize, setScreenSize] = useState12("desktop");
  useEffect7(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setScreenSize("mobile");
      } else if (window.innerWidth <= 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return /* @__PURE__ */ jsx47(DynamicIslandContainer, { children: /* @__PURE__ */ jsx47(
    DynamicIslandContent,
    {
      id,
      willChange,
      screenSize,
      ...props,
      children
    }
  ) });
};
var calculateDimensions = (size, screenSize, currentSize) => {
  const isMassiveOnMobile = size === "massive" && screenSize === "mobile";
  const isUltraOnMobile = size === "ultra" && screenSize === "mobile";
  if (isMassiveOnMobile) {
    return { width: "350px", height: MAX_HEIGHT_MOBILE_MASSIVE };
  }
  if (isUltraOnMobile) {
    return { width: "350px", height: MAX_HEIGHT_MOBILE_ULTRA };
  }
  const width = min(currentSize.width, MIN_WIDTH);
  return { width: `${width}px`, height: currentSize.aspectRatio * width };
};
var DynamicIslandContent = ({
  children,
  id,
  willChange,
  screenSize,
  ...props
}) => {
  const { state, presets } = useDynamicIslandSize();
  const currentSize = presets[state.size];
  const dimensions = calculateDimensions(state.size, screenSize, currentSize);
  return /* @__PURE__ */ jsx47(
    motion4.div,
    {
      id,
      className: "mx-auto h-0 w-0 items-center justify-center border border-black/10 bg-black text-center text-black transition duration-300 ease-in-out focus-within:bg-neutral-900 hover:shadow-md dark:border dark:border-white/5 dark:focus-within:bg-black",
      "data-slot": "dynamic-island",
      animate: {
        width: dimensions.width,
        height: dimensions.height,
        borderRadius: currentSize.borderRadius,
        transition: {
          type: "spring",
          stiffness,
          damping
        },
        clipPath: `none`,
        transitionEnd: {
          clipPath: `url(#squircle-${state.size})`
        }
      },
      style: { willChange },
      ...props,
      children: /* @__PURE__ */ jsx47(AnimatePresence4, { children })
    }
  );
};
var DynamicContainer = ({ className, children }) => {
  const willChange = useWillChange();
  const { state } = useDynamicIslandSize();
  const { size, previousSize } = state;
  const isSizeChanged = size !== previousSize;
  const initialState = {
    opacity: size === previousSize ? 1 : 0,
    scale: size === previousSize ? 1 : 0.9,
    y: size === previousSize ? 0 : 5
  };
  const animateState = {
    opacity: 1,
    scale: 1,
    y: 0
  };
  const transition = {
    type: "spring",
    stiffness,
    damping,
    duration: isSizeChanged ? 0.5 : 0.8
  };
  return /* @__PURE__ */ jsx47(
    motion4.div,
    {
      initial: initialState,
      animate: animateState,
      transition,
      exit: { opacity: 0, filter: "blur(10px)", scale: 0.95, y: 20 },
      style: { willChange },
      className,
      "data-slot": "dynamic-container",
      children
    }
  );
};
var DynamicDiv = ({ className, children }) => {
  const { state } = useDynamicIslandSize();
  const { size, previousSize } = state;
  const willChange = useWillChange();
  return /* @__PURE__ */ jsx47(
    motion4.div,
    {
      initial: {
        opacity: size === previousSize ? 1 : 0,
        scale: size === previousSize ? 1 : 0.9
      },
      animate: {
        opacity: size === previousSize ? 0 : 1,
        scale: size === previousSize ? 0.9 : 1,
        transition: {
          type: "spring",
          stiffness,
          damping
        }
      },
      exit: { opacity: 0, filter: "blur(10px)", scale: 0 },
      style: { willChange },
      className,
      "data-slot": "dynamic-div",
      children
    }
  );
};
var DynamicTitle = ({ className, children }) => {
  const { state } = useDynamicIslandSize();
  const { size, previousSize } = state;
  const willChange = useWillChange();
  return /* @__PURE__ */ jsx47(
    motion4.h3,
    {
      className,
      initial: { opacity: 0, scale: 0 },
      animate: {
        opacity: size === previousSize ? 0 : 1,
        scale: size === previousSize ? 0.9 : 1,
        transition: { type: "spring", stiffness, damping }
      },
      style: { willChange },
      "data-slot": "dynamic-title",
      children
    }
  );
};
var DynamicDescription = ({ className, children }) => {
  const { state } = useDynamicIslandSize();
  const { size, previousSize } = state;
  const willChange = useWillChange();
  return /* @__PURE__ */ jsx47(
    motion4.p,
    {
      className,
      initial: { opacity: 0, scale: 0 },
      animate: {
        opacity: size === previousSize ? 0 : 1,
        scale: size === previousSize ? 0.9 : 1,
        transition: { type: "spring", stiffness, damping }
      },
      style: { willChange },
      "data-slot": "dynamic-description",
      children
    }
  );
};

// src/components/ui/hover-card.tsx
import { HoverCard as HoverCardPrimitive } from "radix-ui";
import { jsx as jsx48 } from "react/jsx-runtime";
function HoverCard({
  ...props
}) {
  return /* @__PURE__ */ jsx48(HoverCardPrimitive.Root, { "data-slot": "hover-card", ...props });
}
function HoverCardTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx48(HoverCardPrimitive.Trigger, { "data-slot": "hover-card-trigger", ...props });
}
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx48(HoverCardPrimitive.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ jsx48(
    HoverCardPrimitive.Content,
    {
      "data-slot": "hover-card-content",
      align,
      sideOffset,
      className: cn(
        "z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-lg bg-popover p-2.5 text-sm text-popover-foreground shadow-md ring-1 ring-foreground/10 outline-hidden duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      ),
      ...props
    }
  ) });
}

// src/components/ui/image-zoom.tsx
import { motion as motion5, useReducedMotion as useReducedMotion2 } from "motion/react";
import { jsx as jsx49, jsxs as jsxs26 } from "react/jsx-runtime";
function ImageZoom({ alt, src, className, zoomClassName, ...props }) {
  const reducedMotion = useReducedMotion2();
  return /* @__PURE__ */ jsxs26(Dialog, { children: [
    /* @__PURE__ */ jsx49(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs26(
      "button",
      {
        type: "button",
        "data-slot": "image-zoom-trigger",
        className: "block cursor-zoom-in rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        children: [
          /* @__PURE__ */ jsx49(
            "img",
            {
              "data-slot": "image-zoom-thumbnail",
              alt,
              src,
              className: cn("rounded-lg", className),
              ...props
            }
          ),
          /* @__PURE__ */ jsx49("span", { className: "sr-only", children: "Zoom image" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs26(
      DialogContent,
      {
        "aria-describedby": void 0,
        className: "w-fit max-w-[calc(100%-2rem)] bg-transparent p-0 ring-0",
        children: [
          /* @__PURE__ */ jsx49(DialogTitle, { className: "sr-only", children: alt }),
          /* @__PURE__ */ jsx49(
            motion5.div,
            {
              "data-slot": "image-zoom-content",
              initial: reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 },
              animate: reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 },
              transition: { duration: reducedMotion ? 0.15 : 0.2, ease: "easeOut" },
              children: /* @__PURE__ */ jsx49(
                "img",
                {
                  "data-slot": "image-zoom-image",
                  alt,
                  src,
                  className: cn(
                    "max-h-[85vh] w-auto max-w-full rounded-lg object-contain",
                    zoomClassName
                  )
                }
              )
            }
          )
        ]
      }
    )
  ] });
}

// src/components/ui/menubar.tsx
import { Menubar as MenubarPrimitive } from "radix-ui";
import { CheckIcon as CheckIcon8, ChevronRightIcon as ChevronRightIcon5 } from "lucide-react";
import { jsx as jsx50, jsxs as jsxs27 } from "react/jsx-runtime";
function Menubar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx50(
    MenubarPrimitive.Root,
    {
      "data-slot": "menubar",
      className: cn(
        "flex h-8 items-center gap-0.5 rounded-lg border p-[3px]",
        className
      ),
      ...props
    }
  );
}
function MenubarMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx50(MenubarPrimitive.Menu, { "data-slot": "menubar-menu", ...props });
}
function MenubarGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx50(MenubarPrimitive.Group, { "data-slot": "menubar-group", ...props });
}
function MenubarPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx50(MenubarPrimitive.Portal, { "data-slot": "menubar-portal", ...props });
}
function MenubarRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx50(MenubarPrimitive.RadioGroup, { "data-slot": "menubar-radio-group", ...props });
}
function MenubarTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx50(
    MenubarPrimitive.Trigger,
    {
      "data-slot": "menubar-trigger",
      className: cn(
        "flex items-center rounded-sm px-1.5 py-[2px] text-sm font-medium outline-hidden select-none hover:bg-muted aria-expanded:bg-muted",
        className
      ),
      ...props
    }
  );
}
function MenubarContent({
  className,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}) {
  return /* @__PURE__ */ jsx50(MenubarPortal, { children: /* @__PURE__ */ jsx50(
    MenubarPrimitive.Content,
    {
      "data-slot": "menubar-content",
      align,
      alignOffset,
      sideOffset,
      className: cn("z-50 min-w-36 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95", className),
      ...props
    }
  ) });
}
function MenubarItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx50(
    MenubarPrimitive.Item,
    {
      "data-slot": "menubar-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "group/menubar-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive!",
        className
      ),
      ...props
    }
  );
}
function MenubarCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs27(
    MenubarPrimitive.CheckboxItem,
    {
      "data-slot": "menubar-checkbox-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ jsx50("span", { className: "pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4", children: /* @__PURE__ */ jsx50(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx50(
          CheckIcon8,
          {}
        ) }) }),
        children
      ]
    }
  );
}
function MenubarRadioItem({
  className,
  children,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsxs27(
    MenubarPrimitive.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx50("span", { className: "pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4", children: /* @__PURE__ */ jsx50(MenubarPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx50(
          CheckIcon8,
          {}
        ) }) }),
        children
      ]
    }
  );
}
function MenubarLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx50(
    MenubarPrimitive.Label,
    {
      "data-slot": "menubar-label",
      "data-inset": inset,
      className: cn(
        "px-1.5 py-1 text-sm font-medium data-inset:pl-7",
        className
      ),
      ...props
    }
  );
}
function MenubarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx50(
    MenubarPrimitive.Separator,
    {
      "data-slot": "menubar-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function MenubarShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx50(
    "span",
    {
      "data-slot": "menubar-shortcut",
      className: cn(
        "ml-auto text-xs tracking-widest text-muted-foreground group-focus/menubar-item:text-accent-foreground",
        className
      ),
      ...props
    }
  );
}
function MenubarSub({
  ...props
}) {
  return /* @__PURE__ */ jsx50(MenubarPrimitive.Sub, { "data-slot": "menubar-sub", ...props });
}
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs27(
    MenubarPrimitive.SubTrigger,
    {
      "data-slot": "menubar-sub-trigger",
      "data-inset": inset,
      className: cn(
        "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-none select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-open:bg-accent data-open:text-accent-foreground [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx50(ChevronRightIcon5, { className: "ml-auto size-4" })
      ]
    }
  );
}
function MenubarSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx50(
    MenubarPrimitive.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: cn("z-50 min-w-32 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
      ...props
    }
  );
}

// src/components/ui/sheet.tsx
import { Dialog as SheetPrimitive } from "radix-ui";
import { XIcon as XIcon5 } from "lucide-react";
import { jsx as jsx51, jsxs as jsxs28 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx51(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx51(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ jsx51(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx51(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx51(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs28(SheetPortal, { children: [
    /* @__PURE__ */ jsx51(SheetOverlay, {}),
    /* @__PURE__ */ jsxs28(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        "data-side": side,
        className: cn(
          "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsx51(SheetPrimitive.Close, { "data-slot": "sheet-close", asChild: true, children: /* @__PURE__ */ jsxs28(
            Button,
            {
              variant: "ghost",
              className: "absolute top-3 right-3",
              size: "icon-sm",
              children: [
                /* @__PURE__ */ jsx51(
                  XIcon5,
                  {}
                ),
                /* @__PURE__ */ jsx51("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx51(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-0.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx51(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx51(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn(
        "font-heading text-base font-medium text-foreground",
        className
      ),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx51(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/sticky-banner.tsx
import { useState as useState13 } from "react";
import { jsx as jsx52, jsxs as jsxs29 } from "react/jsx-runtime";
function StickyBanner({
  dismissible = true,
  onDismiss,
  children,
  className,
  ...props
}) {
  const [open, setOpen] = useState13(true);
  if (!open) return null;
  return /* @__PURE__ */ jsxs29(
    "div",
    {
      ...props,
      "data-slot": "sticky-banner",
      className: cn(
        "sticky top-0 z-60 flex items-center justify-center gap-3 bg-gradient-to-r from-primary via-primary to-primary/75 px-4 py-2.5 text-center text-sm text-primary-foreground",
        className
      ),
      children: [
        /* @__PURE__ */ jsx52("div", { "data-slot": "sticky-banner-content", className: "flex-1", children }),
        dismissible && /* @__PURE__ */ jsx52(
          "button",
          {
            type: "button",
            "data-slot": "sticky-banner-dismiss",
            "aria-label": "Dismiss announcement",
            onClick: () => {
              setOpen(false);
              onDismiss?.();
            },
            className: "-mr-1 shrink-0 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
            children: /* @__PURE__ */ jsx52(
              "svg",
              {
                width: "14",
                height: "14",
                viewBox: "0 0 14 14",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.75",
                strokeLinecap: "round",
                "aria-hidden": true,
                children: /* @__PURE__ */ jsx52("path", { d: "M3 3l8 8M11 3l-8 8" })
              }
            )
          }
        )
      ]
    }
  );
}

// src/components/ui/breadcrumb.tsx
import { Slot as Slot3 } from "radix-ui";
import { ChevronRightIcon as ChevronRightIcon6, MoreHorizontalIcon } from "lucide-react";
import { jsx as jsx53, jsxs as jsxs30 } from "react/jsx-runtime";
function Breadcrumb({ className, ...props }) {
  return /* @__PURE__ */ jsx53(
    "nav",
    {
      "aria-label": "breadcrumb",
      "data-slot": "breadcrumb",
      className: cn(className),
      ...props
    }
  );
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx53(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsx53(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot3.Root : "a";
  return /* @__PURE__ */ jsx53(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx53(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("font-normal text-foreground", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx53(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ jsx53(ChevronRightIcon6, {})
    }
  );
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs30(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn(
        "flex size-5 items-center justify-center [&>svg]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx53(
          MoreHorizontalIcon,
          {}
        ),
        /* @__PURE__ */ jsx53("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}

// src/components/ui/dock.tsx
import { createContext as createContext8, useContext as useContext9, useRef as useRef7 } from "react";
import {
  motion as motion6,
  useMotionValue,
  useReducedMotion as useReducedMotion3,
  useSpring,
  useTransform
} from "motion/react";
import { jsx as jsx54 } from "react/jsx-runtime";
var DockContext = createContext8(null);
function Dock({
  children,
  className,
  baseSize = 40,
  magnification = 64,
  distance = 140
}) {
  const mouseX = useMotionValue(Infinity);
  return /* @__PURE__ */ jsx54(DockContext.Provider, { value: { mouseX, baseSize, magnification, distance }, children: /* @__PURE__ */ jsx54(
    motion6.div,
    {
      "data-slot": "dock",
      onMouseMove: (e) => mouseX.set(e.clientX),
      onMouseLeave: () => mouseX.set(Infinity),
      className: cn(
        "mx-auto flex h-16 w-fit items-end gap-2 rounded-2xl border bg-card/70 px-3 pb-2 backdrop-blur-xl",
        className
      ),
      children
    }
  ) });
}
function DockIcon({ children, className, label }) {
  const ref = useRef7(null);
  const reducedMotion = useReducedMotion3();
  const fallbackX = useMotionValue(Infinity);
  const ctx = useContext9(DockContext);
  const mouseX = ctx?.mouseX ?? fallbackX;
  const baseSize = ctx?.baseSize ?? 40;
  const magnification = ctx?.magnification ?? 64;
  const distance = ctx?.distance ?? 140;
  const distanceFromCursor = useTransform(mouseX, (x) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return x - bounds.x - bounds.width / 2;
  });
  const sizeTarget = useTransform(
    distanceFromCursor,
    [-distance, 0, distance],
    [baseSize, magnification, baseSize]
  );
  const size = useSpring(sizeTarget, {
    mass: 0.1,
    stiffness: 160,
    damping: 13
  });
  return /* @__PURE__ */ jsx54(
    motion6.div,
    {
      ref,
      "data-slot": "dock-icon",
      "aria-label": label,
      style: reducedMotion ? { width: baseSize, height: baseSize } : { width: size, height: size },
      className: cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:text-foreground",
        className
      ),
      children
    }
  );
}

// src/components/ui/navigation-menu.tsx
import { cva as cva6 } from "class-variance-authority";
import { NavigationMenu as NavigationMenuPrimitive } from "radix-ui";
import { ChevronDownIcon as ChevronDownIcon6 } from "lucide-react";
import { jsx as jsx55, jsxs as jsxs31 } from "react/jsx-runtime";
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs31(
    NavigationMenuPrimitive.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx55(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    NavigationMenuPrimitive.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn(
        "group flex flex-1 list-none items-center justify-center gap-0",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    NavigationMenuPrimitive.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
var navigationMenuTriggerStyle = cva6(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs31(
    NavigationMenuPrimitive.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ jsx55(ChevronDownIcon6, { className: "relative top-px ml-1 size-3 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180", "aria-hidden": "true" })
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    NavigationMenuPrimitive.Content,
    {
      "data-slot": "navigation-menu-content",
      className: cn(
        "top-0 left-0 w-full p-1 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:ring-foreground/10 group-data-[viewport=false]/navigation-menu:duration-300 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none md:absolute md:w-auto group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ jsx55(
        NavigationMenuPrimitive.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: cn(
            "origin-top-center relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 duration-100 md:w-(--radix-navigation-menu-viewport-width) data-open:animate-in data-open:zoom-in-90 data-closed:animate-out data-closed:zoom-out-90",
            className
          ),
          ...props
        }
      )
    }
  );
}
function NavigationMenuLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    NavigationMenuPrimitive.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn(
        "flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function NavigationMenuIndicator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx55(
    NavigationMenuPrimitive.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: cn(
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx55("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
    }
  );
}

// src/components/ui/onboarding.tsx
import {
  Children,
  createContext as createContext9,
  useCallback as useCallback7,
  useContext as useContext10,
  useId as useId5,
  useMemo as useMemo6
} from "react";
import { useControllableState } from "@radix-ui/react-use-controllable-state";
import { cva as cva7 } from "class-variance-authority";
import { jsx as jsx56, jsxs as jsxs32 } from "react/jsx-runtime";
var stepIndicatorVariants = cva7("flex items-center justify-center gap-2", {
  variants: {
    variant: {
      dots: "",
      pills: ""
    }
  },
  defaultVariants: {
    variant: "dots"
  }
});
var stepDotVariants = cva7("rounded-full transition-all duration-200", {
  variants: {
    variant: {
      dots: "size-2 data-[state=active]:size-2.5 data-[state=active]:bg-foreground data-[state=completed]:bg-foreground/60 data-[state=inactive]:bg-muted-foreground/30",
      pills: "h-1 max-w-8 flex-1 rounded-full data-[state=active]:bg-foreground data-[state=completed]:bg-foreground/60 data-[state=inactive]:bg-muted-foreground/30"
    }
  },
  defaultVariants: {
    variant: "dots"
  }
});
function StepIndicator({
  currentStep,
  totalSteps,
  variant = "dots",
  className,
  dotClassName,
  ...props
}) {
  return /* @__PURE__ */ jsx56(
    "div",
    {
      "aria-label": `Step ${currentStep} of ${totalSteps}`,
      "aria-valuemax": totalSteps,
      "aria-valuemin": 1,
      "aria-valuenow": currentStep,
      className: cn(stepIndicatorVariants({ variant }), className),
      "data-slot": "onboarding-step-indicator",
      role: "progressbar",
      ...props,
      children: Array.from({ length: totalSteps }, (_, i) => {
        const stepNumber = i + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;
        let stepState = "inactive";
        if (isActive) {
          stepState = "active";
        } else if (isCompleted) {
          stepState = "completed";
        }
        return /* @__PURE__ */ jsx56(
          "div",
          {
            "aria-current": isActive ? "step" : void 0,
            className: cn(stepDotVariants({ variant }), dotClassName),
            "data-slot": "onboarding-step-dot",
            "data-state": stepState
          },
          stepNumber
        );
      })
    }
  );
}
var OnboardingContext = createContext9(null);
function useOnboarding() {
  const ctx = useContext10(OnboardingContext);
  if (!ctx) {
    throw new Error("Onboarding components must be used within Onboarding.Root");
  }
  return ctx;
}
function OnboardingRoot({
  value: controlledValue,
  defaultValue = 1,
  onValueChange,
  stepValue: controlledStepValue,
  defaultStepValue = 0,
  onStepValueChange,
  totalSteps,
  maxStepValue: controlledMaxStepValue = 0,
  onComplete,
  canGoNext: canGoNextFn,
  children,
  className,
  ...props
}) {
  const [currentStep, setCurrentStep] = useControllableState({
    prop: controlledValue,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const [stepValue, setStepValueState] = useControllableState({
    prop: controlledStepValue,
    defaultProp: defaultStepValue,
    onChange: onStepValueChange
  });
  const maxStepValue = controlledMaxStepValue ?? 0;
  const canGoNext = canGoNextFn ? canGoNextFn(currentStep, stepValue) : true;
  const canGoBack = currentStep > 1 || stepValue > 0;
  const handleNext = useCallback7(() => {
    if (currentStep === 1 && stepValue < maxStepValue) {
      setStepValueState((prev) => prev + 1);
    } else if (currentStep < totalSteps) {
      setStepValueState(0);
      setCurrentStep((prev) => prev + 1);
    }
  }, [
    currentStep,
    stepValue,
    maxStepValue,
    totalSteps,
    setStepValueState,
    setCurrentStep
  ]);
  const handleBack = useCallback7(() => {
    if (currentStep === 1 && stepValue > 0) {
      setStepValueState((prev) => prev - 1);
    } else if (currentStep === 2) {
      setCurrentStep(1);
      setStepValueState(maxStepValue);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep, stepValue, maxStepValue, setStepValueState, setCurrentStep]);
  const handleComplete = useCallback7(() => {
    onComplete?.();
  }, [onComplete]);
  const contextValue = useMemo6(
    () => ({
      currentStep,
      totalSteps,
      stepValue,
      setStep: setCurrentStep,
      setStepValue: setStepValueState,
      maxStepValue,
      canGoNext,
      canGoBack,
      handleBack,
      handleNext,
      handleComplete,
      onComplete
    }),
    [
      currentStep,
      totalSteps,
      stepValue,
      setCurrentStep,
      setStepValueState,
      maxStepValue,
      canGoNext,
      canGoBack,
      handleBack,
      handleNext,
      handleComplete,
      onComplete
    ]
  );
  return /* @__PURE__ */ jsx56(OnboardingContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx56(
    "div",
    {
      className: cn(
        "flex flex-col rounded-xl border bg-background p-6 shadow-sm",
        className
      ),
      "data-slot": "onboarding",
      "data-state": `step-${currentStep}`,
      ...props,
      children
    }
  ) });
}
function OnboardingStep({
  step,
  children,
  className,
  ...props
}) {
  const { currentStep } = useOnboarding();
  const isActive = currentStep === step;
  if (!isActive) {
    return null;
  }
  return /* @__PURE__ */ jsx56(
    "div",
    {
      className: cn(className),
      "data-slot": "onboarding-step",
      "data-state": "active",
      ...props,
      children
    }
  );
}
function OnboardingStepIndicator(props) {
  const { currentStep, totalSteps } = useOnboarding();
  return /* @__PURE__ */ jsx56(
    StepIndicator,
    {
      currentStep,
      totalSteps,
      ...props
    }
  );
}
function OnboardingHeader({
  title,
  description,
  children,
  className,
  ...props
}) {
  if (children) {
    return /* @__PURE__ */ jsx56(
      "div",
      {
        className: cn("text-center", className),
        "data-slot": "onboarding-header",
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ jsxs32(
    "div",
    {
      className: cn(
        "flex flex-col gap-1 text-center",
        "[&_[data-slot=onboarding-title]]:font-normal [&_[data-slot=onboarding-title]]:font-serif [&_[data-slot=onboarding-title]]:text-3xl [&_[data-slot=onboarding-title]]:text-foreground",
        "[&_[data-slot=onboarding-description]]:text-base [&_[data-slot=onboarding-description]]:text-muted-foreground",
        className
      ),
      "data-slot": "onboarding-header",
      ...props,
      children: [
        title != null && /* @__PURE__ */ jsx56("h2", { "data-slot": "onboarding-title", children: title }),
        description && /* @__PURE__ */ jsx56("p", { "data-slot": "onboarding-description", children: description })
      ]
    }
  );
}
function OnboardingNavigation({
  backLabel = "Back",
  nextLabel = "Next",
  completeLabel = "Start Creating",
  canGoNext: canGoNextOverride,
  children,
  className,
  ...props
}) {
  const {
    currentStep,
    totalSteps,
    canGoNext: contextCanGoNext,
    canGoBack,
    handleBack,
    handleNext,
    handleComplete
  } = useOnboarding();
  const canGoNext = canGoNextOverride ?? contextCanGoNext;
  const isLastStep = currentStep === totalSteps;
  if (children) {
    return /* @__PURE__ */ jsx56(
      "fieldset",
      {
        className: cn("flex gap-3", className),
        "data-slot": "onboarding-navigation",
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ jsxs32(
    "fieldset",
    {
      "aria-label": "Onboarding navigation",
      className: cn("flex gap-3", className),
      "data-slot": "onboarding-navigation",
      ...props,
      children: [
        /* @__PURE__ */ jsx56(
          Button,
          {
            "aria-label": backLabel,
            className: "flex-1 rounded-xl py-5",
            "data-slot": "onboarding-back",
            disabled: !canGoBack,
            onClick: handleBack,
            variant: "outline",
            children: backLabel
          }
        ),
        isLastStep ? /* @__PURE__ */ jsx56(
          Button,
          {
            "aria-label": completeLabel,
            className: "flex-1 rounded-xl bg-foreground py-5 text-background hover:bg-foreground/90",
            "data-slot": "onboarding-complete",
            onClick: handleComplete,
            children: completeLabel
          }
        ) : /* @__PURE__ */ jsx56(
          Button,
          {
            "aria-label": nextLabel,
            className: "flex-1 rounded-xl bg-foreground py-5 text-background hover:bg-foreground/90",
            "data-slot": "onboarding-next",
            disabled: !canGoNext,
            onClick: handleNext,
            children: nextLabel
          }
        )
      ]
    }
  );
}
var ChoiceGroupContext = createContext9(null);
function useChoiceGroup() {
  const ctx = useContext10(ChoiceGroupContext);
  if (!ctx) {
    throw new Error("ChoiceGroup.Item must be used within ChoiceGroup");
  }
  return ctx;
}
function ChoiceGroupRoot({
  value: controlledValue,
  defaultValue = null,
  onValueChange,
  name,
  orientation = "grid",
  children,
  className,
  ...props
}) {
  const [value, setValueState] = useControllableState({
    prop: controlledValue ?? void 0,
    defaultProp: defaultValue ?? null,
    onChange: (v) => v !== null && onValueChange?.(v)
  });
  const setValue = useCallback7(
    (v) => {
      setValueState(v);
    },
    [setValueState]
  );
  const contextValue = useMemo6(
    () => ({
      value,
      setValue,
      name,
      orientation
    }),
    [value, setValue, name, orientation]
  );
  return /* @__PURE__ */ jsx56(ChoiceGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx56(
    "div",
    {
      "aria-label": name,
      className: cn(className),
      "data-orientation": orientation,
      "data-slot": "choice-group",
      role: "radiogroup",
      ...props,
      children
    }
  ) });
}
function ChoiceGroupItemComponent({
  value: itemValue,
  children,
  className,
  ...props
}) {
  const { value, setValue, name } = useChoiceGroup();
  const isSelected = value === itemValue;
  const handleChange = useCallback7(
    (e) => {
      if (e.currentTarget.checked) {
        setValue(itemValue);
      }
    },
    [itemValue, setValue]
  );
  return /* @__PURE__ */ jsxs32(
    "label",
    {
      className: cn(className),
      "data-slot": "choice-group-item",
      "data-state": isSelected ? "selected" : "unselected",
      ...props,
      children: [
        /* @__PURE__ */ jsx56(
          "input",
          {
            checked: isSelected,
            className: "sr-only",
            name,
            onChange: handleChange,
            type: "radio",
            value: itemValue
          }
        ),
        children
      ]
    }
  );
}
ChoiceGroupItemComponent.displayName = "ChoiceGroupItem";
var ChoiceGroup = Object.assign(ChoiceGroupRoot, {
  Item: ChoiceGroupItemComponent
});
var FeatureCarouselContext = createContext9(null);
function useFeatureCarousel() {
  const ctx = useContext10(FeatureCarouselContext);
  if (!ctx) {
    throw new Error("FeatureCarousel.Item must be used within FeatureCarousel");
  }
  return ctx;
}
function FeatureCarouselRoot({
  value: controlledValue,
  defaultValue = 0,
  onValueChange,
  totalItems: totalItemsProp,
  children,
  className,
  ...props
}) {
  const [value, setValue] = useControllableState({
    prop: controlledValue,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const totalItems = totalItemsProp ?? Children.count(children);
  const isActive = useCallback7((index) => value === index, [value]);
  const contextValue = useMemo6(
    () => ({
      value,
      setValue,
      totalItems,
      isActive
    }),
    [value, setValue, totalItems, isActive]
  );
  return /* @__PURE__ */ jsx56(FeatureCarouselContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx56(
    "div",
    {
      "aria-label": "Features",
      className: cn(className),
      "data-slot": "feature-carousel",
      role: "tablist",
      ...props,
      children
    }
  ) });
}
function FeatureCarouselItemComponent({
  index,
  children,
  className,
  onClick,
  ...props
}) {
  const { setValue, isActive, totalItems } = useFeatureCarousel();
  const active = isActive(index);
  const handleClick = useCallback7(
    (e) => {
      setValue(index);
      onClick?.(e);
    },
    [index, setValue, onClick]
  );
  const handleKeyDown = useCallback7(
    (e) => {
      if (totalItems <= 1) {
        return;
      }
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        setValue((prev) => Math.min(prev + 1, totalItems - 1));
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        setValue((prev) => Math.max(prev - 1, 0));
      }
    },
    [totalItems, setValue]
  );
  return /* @__PURE__ */ jsx56(
    "button",
    {
      "aria-selected": active,
      className: cn(className),
      "data-slot": "feature-carousel-item",
      "data-state": active ? "active" : "inactive",
      onClick: handleClick,
      onKeyDown: handleKeyDown,
      role: "tab",
      tabIndex: active ? 0 : -1,
      type: "button",
      ...props,
      children
    }
  );
}
FeatureCarouselItemComponent.displayName = "FeatureCarouselItem";
var FeatureCarousel = Object.assign(FeatureCarouselRoot, {
  Item: FeatureCarouselItemComponent
});
function TipsListRoot({ title, children, className, ...props }) {
  const titleId = useId5();
  return /* @__PURE__ */ jsxs32("div", { className: cn(className), "data-slot": "tips-list", ...props, children: [
    title && /* @__PURE__ */ jsx56("p", { className: "sr-only", "data-slot": "tips-list-title", id: titleId, children: title }),
    /* @__PURE__ */ jsx56(
      "ol",
      {
        "aria-label": title ? void 0 : "Tips",
        "aria-labelledby": title ? titleId : void 0,
        "data-slot": "tips-list-items",
        children
      }
    )
  ] });
}
function TipsListItemComponent({
  number,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs32(
    "li",
    {
      className: cn(className),
      "data-number": number,
      "data-slot": "tips-list-item",
      ...props,
      children: [
        number != null && /* @__PURE__ */ jsx56("span", { "aria-hidden": true, "data-slot": "tips-list-item-number", children: number }),
        children
      ]
    }
  );
}
var TipsList = Object.assign(TipsListRoot, {
  Item: TipsListItemComponent
});
var Onboarding = Object.assign(OnboardingRoot, {
  Step: OnboardingStep,
  StepIndicator: OnboardingStepIndicator,
  Header: OnboardingHeader,
  Navigation: OnboardingNavigation
});

// src/components/ui/pagination.tsx
import { ChevronLeftIcon as ChevronLeftIcon2, ChevronRightIcon as ChevronRightIcon7, MoreHorizontalIcon as MoreHorizontalIcon2 } from "lucide-react";
import { jsx as jsx57, jsxs as jsxs33 } from "react/jsx-runtime";
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ jsx57(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className),
      ...props
    }
  );
}
function PaginationContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx57(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex items-center gap-0.5", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ jsx57("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return /* @__PURE__ */ jsx57(
    Button,
    {
      asChild: true,
      variant: isActive ? "outline" : "ghost",
      size,
      className: cn(className),
      children: /* @__PURE__ */ jsx57(
        "a",
        {
          "aria-current": isActive ? "page" : void 0,
          "data-slot": "pagination-link",
          "data-active": isActive,
          ...props
        }
      )
    }
  );
}
function PaginationPrevious({
  className,
  text = "Previous",
  ...props
}) {
  return /* @__PURE__ */ jsxs33(
    PaginationLink,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("pl-1.5!", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx57(ChevronLeftIcon2, { "data-icon": "inline-start" }),
        /* @__PURE__ */ jsx57("span", { className: "hidden sm:block", children: text })
      ]
    }
  );
}
function PaginationNext({
  className,
  text = "Next",
  ...props
}) {
  return /* @__PURE__ */ jsxs33(
    PaginationLink,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: cn("pr-1.5!", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx57("span", { className: "hidden sm:block", children: text }),
        /* @__PURE__ */ jsx57(ChevronRightIcon7, { "data-icon": "inline-end" })
      ]
    }
  );
}
function PaginationEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs33(
    "span",
    {
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: cn(
        "flex size-8 items-center justify-center [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx57(
          MoreHorizontalIcon2,
          {}
        ),
        /* @__PURE__ */ jsx57("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}

// src/components/ui/stepper.tsx
import { useReducedMotion as useReducedMotion4, motion as motion7 } from "motion/react";
import { jsx as jsx58, jsxs as jsxs34 } from "react/jsx-runtime";
function Stepper({ steps, current, onStepClick, className }) {
  const reducedMotion = useReducedMotion4();
  const progress = steps.length > 1 ? current / (steps.length - 1) : 0;
  return /* @__PURE__ */ jsxs34(
    "ol",
    {
      "data-slot": "stepper",
      className: cn("relative flex w-full justify-between", className),
      children: [
        /* @__PURE__ */ jsx58(
          "div",
          {
            "aria-hidden": true,
            "data-slot": "stepper-track",
            className: "absolute top-4 right-4 left-4 -z-10 h-0.5 bg-border",
            children: /* @__PURE__ */ jsx58(
              motion7.div,
              {
                "data-slot": "stepper-track-fill",
                initial: false,
                animate: { scaleX: progress },
                transition: { duration: reducedMotion ? 0 : 0.4, ease: "easeOut" },
                className: "h-full origin-left bg-gradient-to-r from-primary to-primary/60"
              }
            )
          }
        ),
        steps.map((step, i) => {
          const done = i < current;
          const active = i === current;
          const interactive = Boolean(onStepClick) && done;
          return /* @__PURE__ */ jsxs34(
            "li",
            {
              "data-slot": "stepper-step",
              className: "flex flex-col items-center gap-2",
              children: [
                /* @__PURE__ */ jsx58(
                  "button",
                  {
                    type: "button",
                    "data-slot": "stepper-step-trigger",
                    disabled: !interactive,
                    onClick: () => onStepClick?.(i),
                    "aria-current": active ? "step" : void 0,
                    className: cn(
                      "grid size-8 place-items-center rounded-full border-2 bg-background text-xs font-medium transition-colors",
                      done && "border-primary bg-primary text-primary-foreground",
                      active && "border-primary text-primary",
                      !done && !active && "border-border text-muted-foreground",
                      interactive && "cursor-pointer"
                    ),
                    children: done ? /* @__PURE__ */ jsx58(
                      "svg",
                      {
                        width: "13",
                        height: "13",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.25",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": true,
                        children: /* @__PURE__ */ jsx58("path", { d: "M2.5 7.5l3 3 6-6" })
                      }
                    ) : i + 1
                  }
                ),
                /* @__PURE__ */ jsx58(
                  "span",
                  {
                    "data-slot": "stepper-step-label",
                    className: cn(
                      "text-xs whitespace-nowrap",
                      active ? "font-medium text-foreground" : "text-muted-foreground"
                    ),
                    children: step
                  }
                )
              ]
            },
            step
          );
        })
      ]
    }
  );
}

// src/components/ui/browser-mockup.tsx
import { jsx as jsx59, jsxs as jsxs35 } from "react/jsx-runtime";
function BrowserMockup({
  url = "velora.dev",
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs35(
    "div",
    {
      "data-slot": "browser-mockup",
      className: cn(
        "overflow-hidden rounded-2xl border bg-card/80 shadow-2xl backdrop-blur",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs35(
          "div",
          {
            "data-slot": "browser-mockup-toolbar",
            className: "flex items-center gap-3 border-b border-border/60 px-4 py-3",
            children: [
              /* @__PURE__ */ jsxs35("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsx59("span", { className: "size-3 rounded-full bg-red-500/70" }),
                /* @__PURE__ */ jsx59("span", { className: "size-3 rounded-full bg-yellow-500/70" }),
                /* @__PURE__ */ jsx59("span", { className: "size-3 rounded-full bg-green-500/70" })
              ] }),
              /* @__PURE__ */ jsx59(
                "div",
                {
                  "data-slot": "browser-mockup-url",
                  className: "mx-auto flex h-7 w-64 items-center justify-center rounded-md bg-muted/60 text-xs text-muted-foreground",
                  children: url
                }
              ),
              /* @__PURE__ */ jsx59("div", { className: "w-14" })
            ]
          }
        ),
        children
      ]
    }
  );
}

// src/components/ui/code-block.tsx
import { useCallback as useCallback8, useLayoutEffect, useMemo as useMemo7, useRef as useRef8, useState as useState14 } from "react";
import { Check, Copy } from "lucide-react";
import { AnimatePresence as AnimatePresence5, motion as motion8 } from "motion/react";
import { jsx as jsx60, jsxs as jsxs36 } from "react/jsx-runtime";
function CodeBlock({
  tabs,
  code,
  language = "bash",
  className
}) {
  const [activeTab, setActiveTab] = useState14(0);
  const [copied, setCopied] = useState14(false);
  const [direction, setDirection] = useState14(0);
  const preRef = useRef8(null);
  const tabsContainerRef = useRef8(null);
  const tabRefs = useRef8([]);
  const [hasOverflow, setHasOverflow] = useState14(false);
  const [indicator, setIndicator] = useState14(null);
  const measureIndicator = useCallback8(() => {
    const container = tabsContainerRef.current;
    const activeEl = tabRefs.current[activeTab];
    if (!container || !activeEl) {
      return;
    }
    const containerRect = container.getBoundingClientRect();
    const tabRect = activeEl.getBoundingClientRect();
    setIndicator({
      left: tabRect.left - containerRect.left,
      width: tabRect.width
    });
  }, [activeTab]);
  const codeContent = useMemo7(() => {
    if (tabs && tabs.length > 0) {
      return tabs;
    }
    if (code) {
      return [{ label: language, code, language }];
    }
    return [];
  }, [tabs, code, language]);
  const currentCode = codeContent[activeTab]?.code || "";
  useLayoutEffect(() => {
    const checkOverflow = () => {
      if (preRef.current) {
        const hasHorizontalOverflow = preRef.current.scrollWidth > preRef.current.clientWidth;
        setHasOverflow(hasHorizontalOverflow);
      }
    };
    checkOverflow();
    const resizeObserver = new ResizeObserver(checkOverflow);
    if (preRef.current) {
      resizeObserver.observe(preRef.current);
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [activeTab]);
  useLayoutEffect(() => {
    measureIndicator();
    const resizeObserver = new ResizeObserver(measureIndicator);
    const container = tabsContainerRef.current;
    if (container) {
      resizeObserver.observe(container);
    }
    for (const tab of tabRefs.current) {
      if (tab) {
        resizeObserver.observe(tab);
      }
    }
    return () => {
      resizeObserver.disconnect();
    };
  }, [measureIndicator]);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  const handleTabChange = (index) => {
    setDirection(index > activeTab ? 1 : -1);
    setActiveTab(index);
  };
  if (codeContent.length === 0) return null;
  return /* @__PURE__ */ jsxs36(
    "div",
    {
      className: cn(
        "group relative overflow-hidden rounded-2xl border p-0.5",
        "border-border",
        "bg-muted/50 dark:bg-foreground/5",
        "text-foreground",
        className
      ),
      "data-slot": "code-block",
      children: [
        codeContent.length > 1 && /* @__PURE__ */ jsx60("div", { className: "flex items-center relative pr-2.5", "data-slot": "code-block-tab-bar", children: /* @__PURE__ */ jsx60(
          "div",
          {
            role: "tablist",
            className: cn(
              "flex-1 min-w-0 text-xs leading-6 rounded-tl-xl gap-1 flex",
              "overflow-x-auto overflow-y-hidden",
              "scrollbar-thin scrollbar-thumb-rounded",
              "scrollbar-thumb-black/15 hover:scrollbar-thumb-black/20",
              "dark:scrollbar-thumb-white/20 dark:hover:scrollbar-thumb-white/25"
            ),
            "data-slot": "code-block-tablist",
            children: /* @__PURE__ */ jsxs36("div", { ref: tabsContainerRef, className: "relative flex gap-1", children: [
              codeContent.map((tab, index) => /* @__PURE__ */ jsx60(
                "button",
                {
                  ref: (element) => {
                    tabRefs.current[index] = element;
                  },
                  type: "button",
                  role: "tab",
                  "aria-selected": activeTab === index,
                  onClick: () => handleTabChange(index),
                  className: cn(
                    "flex items-center relative gap-1.5 my-1 mb-1.5 outline-0",
                    "whitespace-nowrap font-medium transition-colors duration-150",
                    "px-1.5 rounded-lg",
                    "first:ml-2.5",
                    "hover:bg-muted dark:hover:bg-muted/50",
                    activeTab === index ? "text-foreground" : "text-muted-foreground"
                  ),
                  "data-slot": "code-block-tab",
                  children: tab.label
                },
                `${tab.label}-${index}`
              )),
              indicator && /* @__PURE__ */ jsx60(
                motion8.div,
                {
                  "aria-hidden": "true",
                  className: "pointer-events-none absolute bottom-0 h-0.5 rounded-full bg-foreground",
                  "data-slot": "code-block-indicator",
                  initial: false,
                  animate: {
                    left: indicator.left,
                    width: indicator.width
                  },
                  transition: {
                    type: "spring",
                    stiffness: 500,
                    damping: 35
                  }
                }
              )
            ] })
          }
        ) }),
        /* @__PURE__ */ jsxs36("div", { className: "relative overflow-hidden", "data-slot": "code-block-content", children: [
          /* @__PURE__ */ jsxs36(
            motion8.button,
            {
              onClick: handleCopy,
              whileTap: { scale: 0.95 },
              className: cn(
                "absolute top-2 right-2 z-10",
                "flex items-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded-lg",
                "text-muted-foreground",
                "bg-background/80 backdrop-blur-sm",
                "border border-border/50",
                "opacity-70 group-hover:opacity-100",
                "hover:bg-muted dark:hover:bg-muted/50",
                "hover:text-foreground",
                "transition-all duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              ),
              "aria-label": "Copy code",
              "data-slot": "code-block-copy",
              children: [
                /* @__PURE__ */ jsxs36("span", { className: "relative size-3.5", children: [
                  /* @__PURE__ */ jsx60(
                    motion8.div,
                    {
                      initial: false,
                      animate: {
                        scale: copied ? 0 : 1,
                        opacity: copied ? 0 : 1,
                        rotate: copied ? 90 : 0
                      },
                      transition: { duration: 0.2 },
                      className: "absolute inset-0",
                      children: /* @__PURE__ */ jsx60(Copy, { className: "size-full" })
                    }
                  ),
                  /* @__PURE__ */ jsx60(
                    motion8.div,
                    {
                      initial: false,
                      animate: {
                        scale: copied ? 1 : 0,
                        opacity: copied ? 1 : 0,
                        rotate: copied ? 0 : -90
                      },
                      transition: { duration: 0.2 },
                      className: "absolute inset-0",
                      children: /* @__PURE__ */ jsx60(Check, { className: "size-full" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx60("span", { children: copied ? "Copied" : "Copy" })
              ]
            }
          ),
          /* @__PURE__ */ jsx60(
            "pre",
            {
              ref: preRef,
              className: cn(
                "p-4 text-sm leading-relaxed m-0",
                "bg-background dark:bg-background/50",
                codeContent.length > 1 ? "rounded-b-2xl" : "rounded-2xl",
                hasOverflow ? "overflow-x-auto" : "overflow-x-hidden",
                hasOverflow && "scrollbar-thin scrollbar-thumb-rounded",
                hasOverflow && "scrollbar-thumb-black/15 hover:scrollbar-thumb-black/20",
                hasOverflow && "dark:scrollbar-thumb-white/20 dark:hover:scrollbar-thumb-white/25",
                hasOverflow && "[&::-webkit-scrollbar]:h-2",
                hasOverflow && "[&::-webkit-scrollbar-thumb]:rounded-full",
                hasOverflow && "[&::-webkit-scrollbar-thumb]:bg-border",
                hasOverflow && "[&::-webkit-scrollbar-thumb:hover]:bg-foreground/20",
                hasOverflow && "[&::-webkit-scrollbar-track]:bg-transparent"
              ),
              "data-slot": "code-block-pre",
              children: /* @__PURE__ */ jsx60(AnimatePresence5, { mode: "wait", initial: false, custom: direction, children: /* @__PURE__ */ jsx60(
                motion8.code,
                {
                  custom: direction,
                  initial: {
                    opacity: 0,
                    x: direction > 0 ? 20 : -20,
                    filter: "blur(4px)"
                  },
                  animate: {
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)"
                  },
                  exit: {
                    opacity: 0,
                    x: direction > 0 ? -20 : 20,
                    filter: "blur(4px)"
                  },
                  transition: {
                    duration: 0.15,
                    ease: "easeOut"
                  },
                  className: "font-mono text-foreground block whitespace-pre",
                  "data-slot": "code-block-code",
                  children: currentCode
                },
                activeTab
              ) })
            }
          )
        ] })
      ]
    }
  );
}

// src/components/ui/compare-slider.tsx
import { useRef as useRef9, useState as useState15 } from "react";
import { jsx as jsx61, jsxs as jsxs37 } from "react/jsx-runtime";
function CompareSlider({
  before,
  after,
  initial = 50,
  label = "Compare before and after",
  className
}) {
  const [position, setPosition] = useState15(initial);
  const ref = useRef9(null);
  const moveTo = (clientX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const next = (clientX - rect.left) / rect.width * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };
  return /* @__PURE__ */ jsxs37(
    "div",
    {
      ref,
      "data-slot": "compare-slider",
      onPointerMove: (event) => {
        if (event.buttons === 1) moveTo(event.clientX);
      },
      className: cn(
        "relative aspect-video w-full touch-none overflow-hidden rounded-2xl border select-none",
        className
      ),
      children: [
        /* @__PURE__ */ jsx61("div", { "data-slot": "compare-slider-after", className: "absolute inset-0", children: after }),
        /* @__PURE__ */ jsx61(
          "div",
          {
            "data-slot": "compare-slider-before",
            className: "absolute inset-0",
            style: { clipPath: `inset(0 ${100 - position}% 0 0)` },
            children: before
          }
        ),
        /* @__PURE__ */ jsx61(
          "div",
          {
            "aria-hidden": true,
            "data-slot": "compare-slider-divider",
            style: { left: `${position}%` },
            className: "absolute inset-y-0 w-px -translate-x-1/2 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.35)]",
            children: /* @__PURE__ */ jsx61(
              "span",
              {
                "data-slot": "compare-slider-handle",
                className: "absolute top-1/2 left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-white/20 backdrop-blur-sm",
                children: /* @__PURE__ */ jsx61(
                  "svg",
                  {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    stroke: "white",
                    strokeWidth: "1.75",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: /* @__PURE__ */ jsx61("path", { d: "M6 4L2.5 8 6 12M10 4l3.5 4-3.5 4" })
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsx61(
          "input",
          {
            type: "range",
            "data-slot": "compare-slider-range",
            min: 0,
            max: 100,
            value: position,
            "aria-label": label,
            onChange: (event) => setPosition(Number(event.target.value)),
            className: "absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
          }
        )
      ]
    }
  );
}

// src/components/ui/contribution-graph.tsx
import * as React14 from "react";
import {
  addDays,
  differenceInCalendarWeeks,
  format as format3,
  getMonth,
  max as maxDate,
  min as minDate,
  parseISO,
  startOfWeek
} from "date-fns";
import { jsx as jsx62, jsxs as jsxs38 } from "react/jsx-runtime";
var LEVEL_ALPHAS = [0, 25, 50, 75, 100];
var WEEKDAY_LABELS = [
  null,
  "Mon",
  null,
  "Wed",
  null,
  "Fri",
  null
];
function toLevel(count, max) {
  if (max <= 0 || count <= 0) return 0;
  return Math.min(4, Math.max(1, Math.ceil(count / max * 4)));
}
function ContributionGraph({
  data,
  max: maxProp,
  monthLabels: showMonthLabels = true,
  weekdayLabels = "left",
  className,
  ...props
}) {
  const countByDate = React14.useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    for (const point of data) map.set(point.date, point.count);
    return map;
  }, [data]);
  const { firstWeek, weeks, resolvedMax } = React14.useMemo(() => {
    const dates = data.map((point) => parseISO(point.date)).filter((date) => !Number.isNaN(date.getTime()));
    const earliest = dates.length > 0 ? minDate(dates) : /* @__PURE__ */ new Date();
    const latest = dates.length > 0 ? maxDate(dates) : /* @__PURE__ */ new Date();
    const start = startOfWeek(earliest);
    const derivedMax = data.reduce(
      (acc, point) => Math.max(acc, point.count),
      0
    );
    return {
      firstWeek: start,
      weeks: Math.max(
        1,
        dates.length > 0 ? differenceInCalendarWeeks(startOfWeek(latest), start) + 1 : 1
      ),
      resolvedMax: maxProp ?? Math.max(1, derivedMax)
    };
  }, [data, maxProp]);
  const cells = [];
  for (let i = 0; i < weeks * 7; i++) {
    const date = addDays(firstWeek, i);
    const key = format3(date, "yyyy-MM-dd");
    const count = countByDate.get(key) ?? 0;
    const level = toLevel(count, resolvedMax);
    const alpha = LEVEL_ALPHAS[level] ?? 0;
    cells.push(
      /* @__PURE__ */ jsx62(
        "div",
        {
          "data-slot": "contribution-graph-cell",
          "data-level": level,
          title: `${count} ${count === 1 ? "contribution" : "contributions"} on ${format3(date, "MMM d, yyyy")}`,
          className: "size-3 rounded-sm",
          style: {
            backgroundColor: `color-mix(in oklab, var(--color-primary) ${alpha}%, var(--color-muted))`,
            gridColumn: Math.floor(i / 7) + 1,
            gridRow: i % 7 + 2
          }
        },
        key
      )
    );
  }
  const monthSpans = [];
  if (showMonthLabels) {
    let previousMonth = -1;
    for (let w = 0; w < weeks; w++) {
      const weekStart = addDays(firstWeek, w * 7);
      const currentMonth = getMonth(weekStart);
      if (currentMonth !== previousMonth) {
        monthSpans.push({ column: w, label: format3(weekStart, "MMM") });
        previousMonth = currentMonth;
      }
    }
  }
  return /* @__PURE__ */ jsxs38(
    "div",
    {
      "data-slot": "contribution-graph",
      className: cn("flex w-full text-[0.6rem]", className),
      ...props,
      children: [
        weekdayLabels === "left" && /* @__PURE__ */ jsx62(
          "div",
          {
            "aria-hidden": "true",
            "data-slot": "contribution-graph-weekdays",
            className: "mr-1.5 flex shrink-0 flex-col gap-[3px]",
            style: showMonthLabels ? { paddingTop: "calc(1rem + 3px)" } : void 0,
            children: WEEKDAY_LABELS.map((label, index) => /* @__PURE__ */ jsx62(
              "div",
              {
                className: "flex h-3 items-center text-muted-foreground",
                children: label
              },
              index
            ))
          }
        ),
        /* @__PURE__ */ jsx62("div", { "data-slot": "contribution-graph-scroll", className: "overflow-x-auto pb-1", children: /* @__PURE__ */ jsxs38(
          "div",
          {
            "data-slot": "contribution-graph-grid",
            className: "grid w-max gap-[3px]",
            style: {
              gridTemplateColumns: `repeat(${weeks}, 0.75rem)`,
              gridTemplateRows: showMonthLabels ? "1rem repeat(7, 0.75rem)" : "repeat(7, 0.75rem)"
            },
            children: [
              showMonthLabels && monthSpans.map(({ column, label }) => /* @__PURE__ */ jsx62(
                "div",
                {
                  "data-slot": "contribution-graph-month",
                  className: "text-muted-foreground",
                  style: { gridColumn: column + 1, gridRow: 1 },
                  children: label
                },
                `${column}-${label}`
              )),
              cells
            ]
          }
        ) })
      ]
    }
  );
}

// src/components/ui/flag.tsx
import { jsx as jsx63 } from "react/jsx-runtime";
var devWarnedInvalidCode = false;
function Flag({
  country,
  ratio = "4x3",
  decorative = false,
  alt,
  rounded = false,
  className,
  ...props
}) {
  const code = country.trim().toLowerCase();
  if (process.env.NODE_ENV !== "production" && !devWarnedInvalidCode && !/^[a-z]{2}$/.test(code)) {
    devWarnedInvalidCode = true;
    console.warn(
      `<Flag> expected a 2-letter ISO 3166-1 alpha-2 code, got "${country}" \u2014 the flag will render blank.`
    );
  }
  return /* @__PURE__ */ jsx63(
    "span",
    {
      role: decorative ? void 0 : "img",
      "aria-hidden": decorative || void 0,
      "aria-label": decorative ? void 0 : alt ?? `${code.toUpperCase()} flag`,
      className: cn(
        "fi",
        `fi-${code}`,
        ratio === "1x1" && "fis",
        rounded && "overflow-hidden rounded-sm",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/iphone-mockup.tsx
import { jsx as jsx64, jsxs as jsxs39 } from "react/jsx-runtime";
function IPhoneMockup({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs39(
    "div",
    {
      "data-slot": "iphone-mockup",
      className: cn("relative mx-auto w-70", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx64("span", { className: "absolute top-24 -left-0.75 h-8 w-1 rounded-l-md bg-neutral-700" }),
        /* @__PURE__ */ jsx64("span", { className: "absolute top-36 -left-0.75 h-12 w-1 rounded-l-md bg-neutral-700" }),
        /* @__PURE__ */ jsx64("span", { className: "absolute top-52 -left-0.75 h-12 w-1 rounded-l-md bg-neutral-700" }),
        /* @__PURE__ */ jsx64("span", { className: "absolute top-32 -right-0.75 h-16 w-1 rounded-r-md bg-neutral-700" }),
        /* @__PURE__ */ jsxs39(
          "div",
          {
            "data-slot": "iphone-mockup-frame",
            className: "relative aspect-[9/19] overflow-hidden rounded-[3rem] border-10 border-neutral-800 bg-background shadow-2xl",
            children: [
              /* @__PURE__ */ jsx64(
                "span",
                {
                  "data-slot": "iphone-mockup-dynamic-island",
                  className: "absolute top-2.5 left-1/2 z-20 h-6.5 w-24 -translate-x-1/2 rounded-full bg-neutral-900"
                }
              ),
              /* @__PURE__ */ jsx64("div", { "data-slot": "iphone-mockup-screen", className: "absolute inset-0", children })
            ]
          }
        )
      ]
    }
  );
}

// src/components/ui/qr-code.tsx
import * as React15 from "react";
import { toString as qrToString } from "qrcode";
import { jsx as jsx65 } from "react/jsx-runtime";
function applyThemeColors(svg, fg, bg) {
  return svg.replace(
    /(fill|stroke)="#(?:000000|000)"/gi,
    (_match, attr) => `${attr}="${fg}"`
  ).replace(
    /(fill|stroke)="#(?:ffffff|fff)"/gi,
    (_match, attr) => `${attr}="${bg}"`
  );
}
function QRCode({
  value,
  size = 160,
  level = "M",
  marginSize = 0,
  fgColor,
  bgColor,
  className,
  style,
  ...props
}) {
  const [svg, setSvg] = React15.useState(null);
  const svgOptions = React15.useMemo(
    () => ({
      type: "svg",
      width: size,
      margin: marginSize,
      errorCorrectionLevel: level
    }),
    [size, marginSize, level]
  );
  React15.useEffect(() => {
    let cancelled = false;
    qrToString(value, svgOptions).then((raw) => {
      if (cancelled) return;
      setSvg(
        applyThemeColors(
          raw,
          fgColor ?? "currentColor",
          bgColor ?? "transparent"
        )
      );
    }).catch(() => {
      if (!cancelled) setSvg(null);
    });
    return () => {
      cancelled = true;
    };
  }, [value, svgOptions, fgColor, bgColor]);
  return /* @__PURE__ */ jsx65(
    "div",
    {
      "data-slot": "qr-code",
      role: "img",
      "aria-label": `QR code for ${value}`,
      className: cn(
        "inline-block text-foreground [&_svg]:block [&_svg]:size-full",
        className
      ),
      style: { width: size, height: size, ...style },
      dangerouslySetInnerHTML: { __html: svg ?? "" },
      ...props
    }
  );
}

// src/components/ui/snippet.tsx
import * as React16 from "react";
import { CheckIcon as CheckIcon9, CopyIcon } from "lucide-react";
import { jsx as jsx66, jsxs as jsxs40 } from "react/jsx-runtime";
var COPY_RESET_DELAY_MS = 2e3;
function Snippet({
  code,
  children,
  label,
  showPrompt = false,
  className,
  ...props
}) {
  const lines = React16.useMemo(() => {
    if (code == null) return null;
    return Array.isArray(code) ? code : [code];
  }, [code]);
  const copyText = React16.useMemo(() => {
    if (lines) return lines.join("\n");
    return typeof children === "string" ? children : "";
  }, [lines, children]);
  const [copied, setCopied] = React16.useState(false);
  const timeoutRef = React16.useRef(null);
  React16.useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);
  const handleCopy = React16.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setCopied(false);
        timeoutRef.current = null;
      }, COPY_RESET_DELAY_MS);
    } catch {
      setCopied(false);
    }
  }, [copyText]);
  const showCopy = copyText.length > 0;
  const showHeader = showCopy || label != null;
  return /* @__PURE__ */ jsxs40(
    "figure",
    {
      "data-slot": "snippet",
      className: cn(
        "flex flex-col gap-1 overflow-hidden rounded-xl border border-border bg-muted py-3 text-sm",
        className
      ),
      ...props,
      children: [
        showHeader && /* @__PURE__ */ jsxs40(
          "figcaption",
          {
            "data-slot": "snippet-header",
            className: cn(
              "flex items-center gap-2 px-4",
              label == null && "justify-end"
            ),
            children: [
              label != null && /* @__PURE__ */ jsx66(
                "span",
                {
                  "data-slot": "snippet-label",
                  className: "min-w-0 truncate font-mono text-xs text-muted-foreground",
                  children: label
                }
              ),
              showCopy && /* @__PURE__ */ jsx66(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon-xs",
                  "aria-label": copied ? "Copied to clipboard" : "Copy to clipboard",
                  onClick: () => void handleCopy(),
                  className: "ml-auto",
                  children: copied ? /* @__PURE__ */ jsx66(CheckIcon9, { className: "text-primary", "aria-hidden": "true" }) : /* @__PURE__ */ jsx66(CopyIcon, { "aria-hidden": "true" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx66(
          "pre",
          {
            "data-slot": "snippet-code",
            className: "overflow-x-auto px-4 font-mono text-sm leading-relaxed text-foreground",
            children: /* @__PURE__ */ jsx66("code", { children: lines ? lines.map((line, index) => /* @__PURE__ */ jsxs40("span", { className: "block whitespace-pre", children: [
              showPrompt && /* @__PURE__ */ jsx66(
                "span",
                {
                  "aria-hidden": "true",
                  className: "mr-2 inline-block select-none text-muted-foreground",
                  children: "$"
                }
              ),
              line.length > 0 ? line : "\xA0"
            ] }, index)) : children })
          }
        )
      ]
    }
  );
}

// src/components/ui/terminal.tsx
import { useEffect as useEffect10, useRef as useRef11, useState as useState18 } from "react";
import { useInView, useReducedMotion as useReducedMotion5 } from "motion/react";
import { Fragment as Fragment2, jsx as jsx67, jsxs as jsxs41 } from "react/jsx-runtime";
function Terminal({
  lines,
  title = "bash",
  speed = 18,
  className
}) {
  const ref = useRef11(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reducedMotion = useReducedMotion5();
  const [progress, setProgress] = useState18({ line: 0, char: 0 });
  const done = reducedMotion || progress.line >= lines.length - 1 && progress.char >= (lines[lines.length - 1]?.length ?? 0);
  useEffect10(() => {
    if (!inView || reducedMotion || done) return;
    const current = lines[progress.line] ?? "";
    const timeout = setTimeout(
      () => setProgress(
        (p) => p.char < current.length ? { ...p, char: p.char + 1 } : { line: p.line + 1, char: 0 }
      ),
      progress.char === 0 ? 260 : speed
    );
    return () => clearTimeout(timeout);
  }, [inView, reducedMotion, done, progress, lines, speed]);
  const visibleLines = reducedMotion ? lines : lines.slice(0, progress.line + 1).map((l, i) => i === progress.line ? l.slice(0, progress.char) : l);
  return /* @__PURE__ */ jsxs41(
    "div",
    {
      ref,
      "data-slot": "terminal",
      className: cn(
        "w-full overflow-hidden rounded-xl border bg-neutral-950 font-mono text-sm shadow-xl",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs41(
          "div",
          {
            "data-slot": "terminal-titlebar",
            className: "flex items-center gap-3 border-b border-white/10 px-4 py-2.5",
            children: [
              /* @__PURE__ */ jsxs41("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ jsx67("span", { className: "size-3 rounded-full bg-red-500/80" }),
                /* @__PURE__ */ jsx67("span", { className: "size-3 rounded-full bg-yellow-500/80" }),
                /* @__PURE__ */ jsx67("span", { className: "size-3 rounded-full bg-green-500/80" })
              ] }),
              /* @__PURE__ */ jsx67("span", { className: "text-xs text-neutral-500", children: title })
            ]
          }
        ),
        /* @__PURE__ */ jsx67(
          "div",
          {
            "data-slot": "terminal-body",
            className: "min-h-32 space-y-1.5 p-4 text-neutral-300",
            children: visibleLines.map((line, i) => {
              const isCommand = lines[i]?.startsWith("$ ");
              const isLast = i === visibleLines.length - 1;
              return /* @__PURE__ */ jsxs41("p", { "data-slot": "terminal-line", className: "leading-relaxed", children: [
                isCommand ? /* @__PURE__ */ jsxs41(Fragment2, { children: [
                  /* @__PURE__ */ jsx67("span", { className: "text-emerald-400", children: "$ " }),
                  /* @__PURE__ */ jsx67("span", { className: "text-neutral-100", children: line.slice(2) })
                ] }) : /* @__PURE__ */ jsx67("span", { className: "text-neutral-400", children: line }),
                isLast && !done && /* @__PURE__ */ jsx67("span", { className: "animate-pulse text-neutral-100", children: "\u258D" })
              ] }, i);
            })
          }
        )
      ]
    }
  );
}

// src/components/ui/timeline.tsx
import * as React17 from "react";
import { Slot as Slot4 } from "radix-ui";
import { jsx as jsx68 } from "react/jsx-runtime";
var TimelineContext = React17.createContext(
  void 0
);
var useTimeline = () => {
  const context = React17.useContext(TimelineContext);
  if (!context) {
    throw new Error("useTimeline must be used within a Timeline");
  }
  return context;
};
function Timeline({
  defaultValue = 1,
  value,
  onValueChange,
  orientation = "vertical",
  className,
  ...props
}) {
  const [activeStep, setInternalStep] = React17.useState(defaultValue);
  const setActiveStep = React17.useCallback(
    (step) => {
      if (value === void 0) {
        setInternalStep(step);
      }
      onValueChange?.(step);
    },
    [value, onValueChange]
  );
  const currentStep = value ?? activeStep;
  return /* @__PURE__ */ jsx68(
    TimelineContext.Provider,
    {
      value: { activeStep: currentStep, setActiveStep },
      children: /* @__PURE__ */ jsx68(
        "div",
        {
          "data-slot": "timeline",
          className: cn(
            "group/timeline flex data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-row data-[orientation=vertical]:flex-col",
            className
          ),
          "data-orientation": orientation,
          ...props
        }
      )
    }
  );
}
function TimelineContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx68(
    "div",
    {
      "data-slot": "timeline-content",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function TimelineDate({
  asChild = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot4.Root : "time";
  return /* @__PURE__ */ jsx68(
    Comp,
    {
      "data-slot": "timeline-date",
      className: cn(
        "text-muted-foreground mb-1 block text-xs font-medium group-data-[orientation=vertical]/timeline:max-sm:h-4",
        className
      ),
      ...props
    }
  );
}
function TimelineHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx68("div", { "data-slot": "timeline-header", className: cn(className), ...props });
}
function TimelineIndicator({
  asChild = false,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx68(
    "div",
    {
      "data-slot": "timeline-indicator",
      className: cn(
        "border-primary/20 group-data-completed/timeline-item:border-primary absolute size-4 rounded-full border-2 group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:left-0 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:top-0 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:-translate-x-1/2",
        className
      ),
      "aria-hidden": "true",
      ...props,
      children
    }
  );
}
function TimelineItem({ step, className, ...props }) {
  const { activeStep } = useTimeline();
  return /* @__PURE__ */ jsx68(
    "div",
    {
      "data-slot": "timeline-item",
      className: cn(
        "group/timeline-item has-[+[data-completed]]:[&_[data-slot=timeline-separator]]:bg-primary relative flex flex-1 flex-col gap-0.5 group-data-[orientation=horizontal]/timeline:mt-8 group-data-[orientation=horizontal]/timeline:not-last:pe-8 group-data-[orientation=vertical]/timeline:ms-8 group-data-[orientation=vertical]/timeline:not-last:pb-12",
        className
      ),
      "data-completed": step <= activeStep || void 0,
      ...props
    }
  );
}
function TimelineSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx68(
    "div",
    {
      "data-slot": "timeline-separator",
      className: cn(
        "bg-primary/10 absolute self-start group-last/timeline-item:hidden group-data-[orientation=horizontal]/timeline:-top-6 group-data-[orientation=horizontal]/timeline:h-0.5 group-data-[orientation=horizontal]/timeline:w-[calc(100%-1rem-0.25rem)] group-data-[orientation=horizontal]/timeline:translate-x-4.5 group-data-[orientation=horizontal]/timeline:-translate-y-1/2 group-data-[orientation=vertical]/timeline:-left-6 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem-0.25rem)] group-data-[orientation=vertical]/timeline:w-0.5 group-data-[orientation=vertical]/timeline:-translate-x-1/2 group-data-[orientation=vertical]/timeline:translate-y-4.5",
        className
      ),
      "aria-hidden": "true",
      ...props
    }
  );
}
function TimelineTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx68(
    "h3",
    {
      "data-slot": "timeline-title",
      className: cn("text-sm font-medium", className),
      ...props
    }
  );
}

// src/components/ui/alert.tsx
import { cva as cva8 } from "class-variance-authority";
import { jsx as jsx69 } from "react/jsx-runtime";
var alertVariants = cva8(
  "group/alert relative grid w-full gap-0.5 rounded-lg border px-2.5 py-2 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current",
        warning: "bg-warning/10 text-warning border-warning/20 *:data-[slot=alert-description]:text-warning/90 *:[svg]:text-current"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx69(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  );
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx69(
    "div",
    {
      "data-slot": "alert-title",
      className: cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      ),
      ...props
    }
  );
}
function AlertDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx69(
    "div",
    {
      "data-slot": "alert-description",
      className: cn(
        "text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        className
      ),
      ...props
    }
  );
}
function AlertAction({ className, ...props }) {
  return /* @__PURE__ */ jsx69(
    "div",
    {
      "data-slot": "alert-action",
      className: cn("absolute top-2 right-2", className),
      ...props
    }
  );
}

// src/components/ui/animated-circular-progress-bar.tsx
import { jsx as jsx70, jsxs as jsxs42 } from "react/jsx-runtime";
function AnimatedCircularProgressBar({
  max = 100,
  min: min2 = 0,
  value = 0,
  gaugePrimaryColor,
  gaugeSecondaryColor,
  className
}) {
  const circumference = 2 * Math.PI * 45;
  const percentPx = circumference / 100;
  const currentPercent = Math.round((value - min2) / (max - min2) * 100);
  return /* @__PURE__ */ jsxs42(
    "div",
    {
      "data-slot": "animated-circular-progress-bar",
      className: cn("relative size-40 text-2xl font-semibold", className),
      style: {
        "--circle-size": "100px",
        "--circumference": circumference,
        "--percent-to-px": `${percentPx}px`,
        "--gap-percent": "5",
        "--offset-factor": "0",
        "--transition-length": "1s",
        "--transition-step": "200ms",
        "--delay": "0s",
        "--percent-to-deg": "3.6deg",
        transform: "translateZ(0)"
      },
      children: [
        /* @__PURE__ */ jsxs42(
          "svg",
          {
            "data-slot": "animated-circular-progress-bar-gauge",
            fill: "none",
            className: "size-full",
            strokeWidth: "2",
            viewBox: "0 0 100 100",
            children: [
              currentPercent <= 90 && currentPercent >= 0 && /* @__PURE__ */ jsx70(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: "45",
                  strokeWidth: "10",
                  strokeDashoffset: "0",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "opacity-100",
                  style: {
                    stroke: gaugeSecondaryColor,
                    "--stroke-percent": 90 - currentPercent,
                    "--offset-factor-secondary": "calc(1 - var(--offset-factor))",
                    strokeDasharray: "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
                    transform: "rotate(calc(1turn - 90deg - (var(--gap-percent) * var(--percent-to-deg) * var(--offset-factor-secondary)))) scaleY(-1)",
                    transition: "all var(--transition-length) ease var(--delay)",
                    transformOrigin: "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)"
                  }
                }
              ),
              /* @__PURE__ */ jsx70(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: "45",
                  strokeWidth: "10",
                  strokeDashoffset: "0",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  className: "opacity-100",
                  style: {
                    stroke: gaugePrimaryColor,
                    "--stroke-percent": currentPercent,
                    strokeDasharray: "calc(var(--stroke-percent) * var(--percent-to-px)) var(--circumference)",
                    transition: "var(--transition-length) ease var(--delay),stroke var(--transition-length) ease var(--delay)",
                    transitionProperty: "stroke-dasharray,transform",
                    transform: "rotate(calc(-90deg + var(--gap-percent) * var(--offset-factor) * var(--percent-to-deg)))",
                    transformOrigin: "calc(var(--circle-size) / 2) calc(var(--circle-size) / 2)"
                  }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx70(
          "span",
          {
            "data-slot": "animated-circular-progress-bar-value",
            "data-current-value": currentPercent,
            className: "animate-in fade-in absolute inset-0 m-auto size-fit delay-(--delay) duration-(--transition-length) ease-linear",
            children: currentPercent
          }
        )
      ]
    }
  );
}

// src/components/ui/avatar.tsx
import { Avatar as AvatarPrimitive } from "radix-ui";
import { jsx as jsx71 } from "react/jsx-runtime";
function Avatar({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx71(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      "data-size": size,
      className: cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx71(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn(
        "aspect-square size-full rounded-full object-cover",
        className
      ),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx71(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      ),
      ...props
    }
  );
}
function AvatarBadge({ className, ...props }) {
  return /* @__PURE__ */ jsx71(
    "span",
    {
      "data-slot": "avatar-badge",
      className: cn(
        "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background select-none",
        "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
        "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
        "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
        className
      ),
      ...props
    }
  );
}
function AvatarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx71(
    "div",
    {
      "data-slot": "avatar-group",
      className: cn(
        "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
        className
      ),
      ...props
    }
  );
}
function AvatarGroupCount({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx71(
    "div",
    {
      "data-slot": "avatar-group-count",
      className: cn(
        "relative flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/avatar-circles.tsx
import { jsx as jsx72, jsxs as jsxs43 } from "react/jsx-runtime";
var AvatarCircles = ({
  numPeople,
  className,
  avatarUrls
}) => {
  return /* @__PURE__ */ jsxs43(
    "div",
    {
      "data-slot": "avatar-circles",
      className: cn("z-10 flex -space-x-4 rtl:space-x-reverse", className),
      children: [
        avatarUrls.map((url, index) => /* @__PURE__ */ jsx72(
          "a",
          {
            "data-slot": "avatar-circles-item",
            href: url.profileUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ jsx72(
              "img",
              {
                "data-slot": "avatar-circles-image",
                className: "h-10 w-10 rounded-full border-2 border-background",
                src: url.imageUrl,
                width: 40,
                height: 40,
                alt: `Avatar ${index + 1}`
              },
              index
            )
          },
          index
        )),
        (numPeople ?? 0) > 0 && /* @__PURE__ */ jsxs43(
          "a",
          {
            "data-slot": "avatar-circles-more",
            className: "flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-foreground text-center text-xs font-medium text-background hover:bg-muted-foreground",
            href: "",
            children: [
              "+",
              numPeople
            ]
          }
        )
      ]
    }
  );
};

// src/components/ui/empty-state.tsx
import { jsx as jsx73, jsxs as jsxs44 } from "react/jsx-runtime";
function EmptyState({
  className,
  title,
  description,
  icon,
  actions,
  ...props
}) {
  return /* @__PURE__ */ jsxs44(
    "div",
    {
      "data-slot": "empty-state",
      role: "status",
      className: cn(
        "flex flex-col items-center justify-center gap-4 px-6 py-8 text-center",
        className
      ),
      ...props,
      children: [
        icon != null && /* @__PURE__ */ jsx73(
          "div",
          {
            "data-slot": "empty-state-icon",
            "aria-hidden": "true",
            className: "text-muted-foreground [&>svg]:size-10",
            children: icon
          }
        ),
        /* @__PURE__ */ jsxs44("div", { className: "flex max-w-90 flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsx73("h3", { "data-slot": "empty-state-title", className: "font-heading text-base font-medium text-foreground", children: title }),
          description != null && /* @__PURE__ */ jsx73("p", { "data-slot": "empty-state-description", className: "text-sm text-muted-foreground", children: description })
        ] }),
        actions != null && /* @__PURE__ */ jsx73("div", { "data-slot": "empty-state-actions", className: "mt-1 flex flex-row items-center gap-2", children: actions })
      ]
    }
  );
}

// src/components/ui/meter.tsx
import * as React18 from "react";
import { jsx as jsx74 } from "react/jsx-runtime";
var MeterContext = React18.createContext(null);
function useMeterContext(consumer) {
  const context = React18.useContext(MeterContext);
  if (!context) {
    throw new Error(`<${consumer}> must be used within <Meter>`);
  }
  return context;
}
function Meter({
  className,
  value,
  min: min2 = 0,
  max = 100,
  format: format4 = (formatted) => formatted.toLocaleString(),
  ...props
}) {
  const safeMax = Math.max(min2, max);
  const clamped = Math.min(safeMax, Math.max(min2, value));
  const percent = safeMax === min2 ? 0 : (clamped - min2) / (safeMax - min2) * 100;
  return /* @__PURE__ */ jsx74(
    MeterContext.Provider,
    {
      value: { min: min2, max: safeMax, value: clamped, percent, format: format4 },
      children: /* @__PURE__ */ jsx74(
        "div",
        {
          role: "meter",
          "aria-valuemin": min2,
          "aria-valuemax": safeMax,
          "aria-valuenow": clamped,
          "data-slot": "meter",
          className: cn("flex w-full min-w-0 flex-col gap-1.5", className),
          ...props
        }
      )
    }
  );
}
function MeterLabel({
  className,
  ...props
}) {
  const id = React18.useId();
  return /* @__PURE__ */ jsx74(
    "span",
    {
      id,
      "data-slot": "meter-label",
      className: cn("text-sm font-medium text-foreground", className),
      ...props
    }
  );
}
function MeterValue({
  className,
  children,
  ...props
}) {
  const { value, format: format4 } = useMeterContext("MeterValue");
  return /* @__PURE__ */ jsx74(
    "span",
    {
      "data-slot": "meter-value",
      className: cn("text-sm text-muted-foreground tabular-nums", className),
      ...props,
      children: children ?? format4(value)
    }
  );
}
function MeterTrack({ className, ...props }) {
  return /* @__PURE__ */ jsx74(
    "div",
    {
      "data-slot": "meter-track",
      className: cn(
        "relative h-1.5 w-full overflow-hidden rounded-full bg-muted",
        className
      ),
      ...props
    }
  );
}
function MeterIndicator({ className, ...props }) {
  const { percent } = useMeterContext("MeterIndicator");
  return /* @__PURE__ */ jsx74(
    "div",
    {
      "data-slot": "meter-indicator",
      className: cn(
        "absolute inset-y-0 left-0 rounded-full bg-primary transition-all",
        className
      ),
      style: { width: `${percent}%` },
      ...props
    }
  );
}

// src/components/ui/progress.tsx
import { Progress as ProgressPrimitive } from "radix-ui";
import { jsx as jsx75 } from "react/jsx-runtime";
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsx75(
    ProgressPrimitive.Root,
    {
      "data-slot": "progress",
      className: cn(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx75(
        ProgressPrimitive.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "size-full flex-1 bg-primary transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}

// src/components/ui/relative-time.tsx
import * as React19 from "react";
import { formatDistanceToNow } from "date-fns";
import { jsxs as jsxs45 } from "react/jsx-runtime";
function RelativeTime({
  date,
  interval = 6e4,
  prefix,
  suffix,
  className,
  ...props
}) {
  const [now, setNow] = React19.useState(() => Date.now());
  React19.useEffect(() => {
    let intervalId;
    const start = () => {
      if (intervalId === void 0 && interval > 0) {
        intervalId = window.setInterval(() => setNow(Date.now()), interval);
      }
    };
    const stop = () => {
      if (intervalId !== void 0) {
        window.clearInterval(intervalId);
        intervalId = void 0;
      }
    };
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        setNow(Date.now());
        start();
      }
    };
    start();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [interval]);
  const dateObject = React19.useMemo(() => new Date(date), [date]);
  const isValid = !Number.isNaN(dateObject.getTime());
  return /* @__PURE__ */ jsxs45(
    "time",
    {
      "data-slot": "relative-time",
      dateTime: isValid ? dateObject.toISOString() : void 0,
      title: isValid ? dateObject.toLocaleString() : void 0,
      className: cn("whitespace-nowrap text-sm text-muted-foreground", className),
      ...props,
      children: [
        prefix,
        isValid ? formatDistanceToNow(dateObject, { addSuffix: true }) : null,
        suffix
      ]
    }
  );
}

// src/components/ui/skeleton.tsx
import { jsx as jsx76 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx76(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("animate-pulse rounded-md bg-muted", className),
      ...props
    }
  );
}

// src/components/ui/sonner.tsx
import { Toaster as Sonner } from "sonner";
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react";
import { jsx as jsx77 } from "react/jsx-runtime";
var Toaster = ({ theme = "system", ...props }) => {
  return /* @__PURE__ */ jsx77(
    Sonner,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsx77(CircleCheckIcon, { className: "size-4" }),
        info: /* @__PURE__ */ jsx77(InfoIcon, { className: "size-4" }),
        warning: /* @__PURE__ */ jsx77(TriangleAlertIcon, { className: "size-4" }),
        error: /* @__PURE__ */ jsx77(OctagonXIcon, { className: "size-4" }),
        loading: /* @__PURE__ */ jsx77(Loader2Icon, { className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      toastOptions: {
        classNames: {
          toast: "cn-toast"
        }
      },
      ...props
    }
  );
};

// src/components/ui/spinner.tsx
import { cva as cva9 } from "class-variance-authority";
import { jsx as jsx78, jsxs as jsxs46 } from "react/jsx-runtime";
var spinnerVariants = cva9(
  "inline-flex shrink-0 items-center justify-center text-primary",
  {
    variants: {
      size: {
        sm: "size-4",
        default: "size-6",
        lg: "size-8"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
function Spinner({
  className,
  size,
  ...props
}) {
  return /* @__PURE__ */ jsxs46(
    "span",
    {
      role: "status",
      "data-slot": "spinner",
      "data-size": size,
      className: cn(spinnerVariants({ size, className })),
      ...props,
      children: [
        /* @__PURE__ */ jsx78(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            className: "size-full animate-spin",
            children: /* @__PURE__ */ jsx78(
              "circle",
              {
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeDasharray: "44 63"
              }
            )
          }
        ),
        /* @__PURE__ */ jsx78("span", { className: "sr-only", children: "Loading" })
      ]
    }
  );
}

// src/components/ui/timer.tsx
import React20, { useCallback as useCallback11, useEffect as useEffect12, useRef as useRef12, useState as useState21 } from "react";
import { cva as cva10 } from "class-variance-authority";
import { Clock } from "lucide-react";
import { jsx as jsx79, jsxs as jsxs47 } from "react/jsx-runtime";
var timerVariants = cva10(
  [
    "inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200",
    ""
  ],
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border border-border shadow-[0_2px_4px_rgba(0,0,0,0.02),_0px_1px_2px_rgba(0,0,0,0.04)] shadow-[inset_0px_-2.10843px_0px_0px_var(--color-muted),_0px_1.20482px_6.3253px_0px_var(--color-muted)]",
        outline: "border border-input bg-background text-foreground  shadow-[0px_1px_0px_0px_hsla(0,_0%,_0%,_0.02)_inset,_0px_0px_0px_1px_hsla(0,_0%,_0%,_0.02)_inset,_0px_0px_0px_1px_rgba(255,_255,_255,_0.25)]",
        ghost: "bg-transparent text-foreground ",
        destructive: "bg-destructive/10 text-destructive border border-destructive/20"
      },
      size: {
        sm: "text-xs px-2 py-1 h-6 gap-1.5",
        md: "text-sm px-2.5 py-1.5 h-7 gap-2",
        lg: "text-base px-3 py-2 h-8 gap-2.5"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var timerIconVariants = cva10("transition-transform duration-[2000ms]", {
  variants: {
    size: {
      sm: "w-3 h-3",
      md: "w-3.5 h-3.5",
      lg: "w-4 h-4"
    },
    loading: {
      true: "animate-spin",
      false: ""
    }
  },
  defaultVariants: {
    size: "md",
    loading: false
  }
});
var timerDisplayVariants = cva10("font-mono tabular-nums tracking-tight", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var TimerRoot = React20.forwardRef(
  ({ variant, size, loading, className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx79(
      "div",
      {
        ref,
        className: cn(timerVariants({ variant, size }), className),
        "data-slot": "timer",
        role: "timer",
        "aria-live": "polite",
        "aria-atomic": "true",
        ...props,
        children
      }
    );
  }
);
TimerRoot.displayName = "TimerRoot";
var TimerIcon = React20.forwardRef(
  ({ size, loading, icon: Icon = Clock, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx79(
      "div",
      {
        ref,
        className: cn(timerIconVariants({ size, loading }), className),
        "data-slot": "timer-icon",
        ...props,
        children: /* @__PURE__ */ jsx79(Icon, { className: "w-full h-full" })
      }
    );
  }
);
TimerIcon.displayName = "TimerIcon";
var TimerDisplay = React20.forwardRef(
  ({ size, time, label, className, ...props }, ref) => {
    return /* @__PURE__ */ jsx79(
      "div",
      {
        ref,
        className: cn(timerDisplayVariants({ size }), className),
        "data-slot": "timer-display",
        "aria-label": label || `Timer: ${time}`,
        ...props,
        children: time
      }
    );
  }
);
TimerDisplay.displayName = "TimerDisplay";
var Timer = React20.forwardRef(
  ({
    loading = false,
    onTick,
    resetOnLoadingChange = true,
    format: format4 = "SS.MS",
    variant,
    size,
    className,
    ...props
  }, ref) => {
    const { formattedTime } = useTimer({
      loading,
      onTick,
      resetOnLoadingChange,
      format: format4
    });
    return /* @__PURE__ */ jsxs47(
      TimerRoot,
      {
        ref,
        variant,
        size,
        loading,
        className,
        ...props,
        children: [
          /* @__PURE__ */ jsx79(TimerIcon, { size, loading }),
          /* @__PURE__ */ jsx79(TimerDisplay, { size, time: formattedTime.display })
        ]
      }
    );
  }
);
Timer.displayName = "Timer";
function useTimer({
  loading = false,
  onTick,
  resetOnLoadingChange = true,
  format: format4 = "SS.MS"
} = {}) {
  const [elapsedTime, setElapsedTime] = useState21(0);
  const [milliseconds, setMilliseconds] = useState21(0);
  const [isRunning, setIsRunning] = useState21(false);
  const startTimeRef = useRef12(0);
  const rafRef = useRef12(null);
  const reset = useCallback11(() => {
    setElapsedTime(0);
    setMilliseconds(0);
    startTimeRef.current = 0;
  }, []);
  const start = useCallback11(() => {
    setIsRunning(true);
    startTimeRef.current = performance.now();
  }, []);
  const stop = useCallback11(() => {
    setIsRunning(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, []);
  useEffect12(() => {
    if (!isRunning) return;
    const updateTimer = () => {
      const now = performance.now();
      const elapsed = now - startTimeRef.current;
      const newElapsedTime = Math.floor(elapsed / 1e3);
      const newMilliseconds = Math.floor(elapsed % 1e3);
      setElapsedTime(newElapsedTime);
      setMilliseconds(newMilliseconds);
      rafRef.current = requestAnimationFrame(updateTimer);
    };
    rafRef.current = requestAnimationFrame(updateTimer);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isRunning]);
  useEffect12(() => {
    if (loading) {
      if (resetOnLoadingChange) {
        reset();
      }
      start();
    } else {
      stop();
    }
  }, [loading, resetOnLoadingChange, reset, start, stop]);
  useEffect12(() => {
    if (onTick) {
      onTick(elapsedTime, milliseconds);
    }
  }, [elapsedTime, milliseconds, onTick]);
  const formatTime = useCallback11(
    (totalSeconds, ms) => {
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor(totalSeconds % 3600 / 60);
      const seconds = totalSeconds % 60;
      switch (format4) {
        case "HH:MM:SS":
          return {
            seconds: seconds.toString().padStart(2, "0"),
            milliseconds: Math.floor(ms / 10).toString().padStart(2, "0"),
            display: `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
          };
        case "MM:SS":
          const totalMinutes = Math.floor(totalSeconds / 60);
          const remainingSeconds = totalSeconds % 60;
          return {
            seconds: remainingSeconds.toString().padStart(2, "0"),
            milliseconds: Math.floor(ms / 10).toString().padStart(2, "0"),
            display: `${totalMinutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
          };
        case "SS.MS":
        default:
          return {
            seconds: totalSeconds.toString().padStart(2, "0"),
            milliseconds: Math.floor(ms / 10).toString().padStart(2, "0"),
            display: `${totalSeconds.toString().padStart(2, "0")}.${Math.floor(
              ms / 10
            ).toString().padStart(2, "0")}`
          };
      }
    },
    [format4]
  );
  const formattedTime = formatTime(elapsedTime, milliseconds);
  return {
    elapsedTime,
    milliseconds,
    formattedTime,
    isRunning,
    reset,
    start,
    stop
  };
}

// src/components/ui/animated-beam.tsx
import { useEffect as useEffect13, useId as useId7, useState as useState22 } from "react";
import { motion as motion9 } from "motion/react";
import { jsx as jsx80, jsxs as jsxs48 } from "react/jsx-runtime";
function AnimatedBeam({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 5,
  delay = 0,
  pathColor = "var(--color-border)",
  pathWidth = 2,
  pathOpacity = 0.4,
  gradientStartColor = "var(--color-primary)",
  gradientStopColor = "var(--color-ring)",
  repeat = Infinity,
  repeatDelay = 0,
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0
}) {
  const id = useId7();
  const [pathD, setPathD] = useState22("");
  const [svgDimensions, setSvgDimensions] = useState22({ width: 0, height: 0 });
  const gradientCoordinates = reverse ? {
    x1: ["90%", "-10%"],
    x2: ["100%", "0%"],
    y1: ["0%", "0%"],
    y2: ["0%", "0%"]
  } : {
    x1: ["10%", "110%"],
    x2: ["0%", "100%"],
    y1: ["0%", "0%"],
    y2: ["0%", "0%"]
  };
  useEffect13(() => {
    const updatePath = () => {
      if (containerRef.current && fromRef.current && toRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const rectA = fromRef.current.getBoundingClientRect();
        const rectB = toRef.current.getBoundingClientRect();
        const svgWidth = containerRect.width;
        const svgHeight = containerRect.height;
        setSvgDimensions({ width: svgWidth, height: svgHeight });
        const startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
        const startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
        const endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
        const endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;
        const controlY = startY - curvature;
        const d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
        setPathD(d);
      }
    };
    const resizeObserver = new ResizeObserver(() => {
      updatePath();
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    updatePath();
    return () => {
      resizeObserver.disconnect();
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset
  ]);
  return /* @__PURE__ */ jsxs48(
    "svg",
    {
      "data-slot": "animated-beam",
      fill: "none",
      width: svgDimensions.width,
      height: svgDimensions.height,
      xmlns: "http://www.w3.org/2000/svg",
      className: cn(
        "pointer-events-none absolute top-0 left-0 transform-gpu stroke-2",
        className
      ),
      viewBox: `0 0 ${svgDimensions.width} ${svgDimensions.height}`,
      children: [
        /* @__PURE__ */ jsx80(
          "path",
          {
            d: pathD,
            stroke: pathColor,
            strokeWidth: pathWidth,
            strokeOpacity: pathOpacity,
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx80(
          "path",
          {
            d: pathD,
            strokeWidth: pathWidth,
            stroke: `url(#${id})`,
            strokeOpacity: "1",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsx80("defs", { children: /* @__PURE__ */ jsxs48(
          motion9.linearGradient,
          {
            className: "transform-gpu",
            id,
            gradientUnits: "userSpaceOnUse",
            initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
            animate: {
              x1: gradientCoordinates.x1,
              x2: gradientCoordinates.x2,
              y1: gradientCoordinates.y1,
              y2: gradientCoordinates.y2
            },
            transition: {
              delay,
              duration,
              ease: [0.16, 1, 0.3, 1],
              repeat,
              repeatDelay
            },
            children: [
              /* @__PURE__ */ jsx80("stop", { stopColor: gradientStartColor, stopOpacity: "0" }),
              /* @__PURE__ */ jsx80("stop", { stopColor: gradientStartColor }),
              /* @__PURE__ */ jsx80("stop", { offset: "32.5%", stopColor: gradientStopColor }),
              /* @__PURE__ */ jsx80("stop", { offset: "100%", stopColor: gradientStopColor, stopOpacity: "0" })
            ]
          }
        ) })
      ]
    }
  );
}

// src/components/ui/animated-grid-pattern.tsx
import {
  useCallback as useCallback12,
  useEffect as useEffect14,
  useId as useId8,
  useRef as useRef13,
  useState as useState23
} from "react";
import { motion as motion10 } from "motion/react";
import { jsx as jsx81, jsxs as jsxs49 } from "react/jsx-runtime";
function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}) {
  const id = useId8();
  const containerRef = useRef13(null);
  const [dimensions, setDimensions] = useState23({ width: 0, height: 0 });
  const [squares, setSquares] = useState23([]);
  const getPos = useCallback12(() => {
    return [
      Math.floor(Math.random() * dimensions.width / width),
      Math.floor(Math.random() * dimensions.height / height)
    ];
  }, [dimensions.height, dimensions.width, height, width]);
  const generateSquares = useCallback12(
    (count) => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        pos: getPos(),
        iteration: 0
      }));
    },
    [getPos]
  );
  const updateSquarePosition = useCallback12(
    (squareId) => {
      setSquares((currentSquares) => {
        const current = currentSquares[squareId];
        if (!current || current.id !== squareId) return currentSquares;
        const nextSquares = currentSquares.slice();
        nextSquares[squareId] = {
          ...current,
          pos: getPos(),
          iteration: current.iteration + 1
        };
        return nextSquares;
      });
    },
    [getPos]
  );
  useEffect14(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions.width, dimensions.height, generateSquares, numSquares]);
  useEffect14(() => {
    const element = containerRef.current;
    let resizeObserver = null;
    if (element) {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          setDimensions((currentDimensions) => {
            const nextWidth = entry.contentRect.width;
            const nextHeight = entry.contentRect.height;
            if (currentDimensions.width === nextWidth && currentDimensions.height === nextHeight) {
              return currentDimensions;
            }
            return { width: nextWidth, height: nextHeight };
          });
        }
      });
      resizeObserver.observe(element);
    }
    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, []);
  return /* @__PURE__ */ jsxs49(
    "svg",
    {
      ref: containerRef,
      "data-slot": "animated-grid-pattern",
      "aria-hidden": "true",
      className: cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-muted-foreground/30 stroke-muted-foreground/30",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx81("defs", { children: /* @__PURE__ */ jsx81(
          "pattern",
          {
            id,
            width,
            height,
            patternUnits: "userSpaceOnUse",
            x,
            y,
            children: /* @__PURE__ */ jsx81(
              "path",
              {
                d: `M.5 ${height}V.5H${width}`,
                fill: "none",
                strokeDasharray
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx81("rect", { width: "100%", height: "100%", fill: `url(#${id})` }),
        /* @__PURE__ */ jsx81("svg", { x, y, className: "overflow-visible", children: squares.map(({ pos: [squareX, squareY], id: id2, iteration }, index) => /* @__PURE__ */ jsx81(
          motion10.rect,
          {
            initial: { opacity: 0 },
            animate: { opacity: maxOpacity },
            transition: {
              duration,
              repeat: 1,
              delay: index * 0.1,
              repeatType: "reverse",
              repeatDelay
            },
            onAnimationComplete: () => updateSquarePosition(id2),
            width: width - 1,
            height: height - 1,
            x: squareX * width + 1,
            y: squareY * height + 1,
            fill: "currentColor",
            strokeWidth: "0"
          },
          `${id2}-${iteration}`
        )) })
      ]
    }
  );
}

// src/components/ui/animated-list.tsx
import React21, {
  useEffect as useEffect15,
  useMemo as useMemo12,
  useState as useState24
} from "react";
import { AnimatePresence as AnimatePresence6, motion as motion11 } from "motion/react";
import { jsx as jsx82 } from "react/jsx-runtime";
function AnimatedListItem({ children }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 }
  };
  return /* @__PURE__ */ jsx82(
    motion11.div,
    {
      "data-slot": "animated-list-item",
      ...animations,
      layout: true,
      className: "mx-auto w-full",
      children
    }
  );
}
var AnimatedList = React21.memo(
  ({ children, className, delay = 1e3, ...props }) => {
    const [index, setIndex] = useState24(0);
    const childrenArray = useMemo12(
      () => React21.Children.toArray(children),
      [children]
    );
    useEffect15(() => {
      let timeout = null;
      if (index < childrenArray.length - 1) {
        timeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
        }, delay);
      }
      return () => {
        if (timeout !== null) {
          clearTimeout(timeout);
        }
      };
    }, [index, delay, childrenArray.length]);
    const itemsToShow = useMemo12(() => {
      const result = childrenArray.slice(0, index + 1).reverse();
      return result;
    }, [index, childrenArray]);
    return /* @__PURE__ */ jsx82(
      "div",
      {
        "data-slot": "animated-list",
        className: cn(`flex flex-col items-center gap-4`, className),
        ...props,
        children: /* @__PURE__ */ jsx82(AnimatePresence6, { children: itemsToShow.map((item) => /* @__PURE__ */ jsx82(AnimatedListItem, { children: item }, item.key)) })
      }
    );
  }
);
AnimatedList.displayName = "AnimatedList";

// src/components/ui/animated-shiny-text.tsx
import { jsx as jsx83 } from "react/jsx-runtime";
var AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return /* @__PURE__ */ jsx83(
    "span",
    {
      "data-slot": "animated-shiny-text",
      style: {
        "--shiny-width": `${shimmerWidth}px`
      },
      className: cn(
        "mx-auto max-w-md text-muted-foreground",
        // Shine effect
        "animate-shiny-text bg-size-[var(--shiny-width)_100%] bg-clip-text bg-position-[0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",
        // Shine gradient
        "bg-linear-to-r from-transparent via-foreground/80 via-50% to-transparent",
        className
      ),
      ...props,
      children
    }
  );
};

// src/components/ui/aurora-text.tsx
import { memo } from "react";
import { jsx as jsx84, jsxs as jsxs50 } from "react/jsx-runtime";
var AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    speed = 1
  }) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`
    };
    return /* @__PURE__ */ jsxs50("span", { "data-slot": "aurora-text", className: cn("relative inline-block", className), children: [
      /* @__PURE__ */ jsx84("span", { className: "sr-only", children }),
      /* @__PURE__ */ jsx84(
        "span",
        {
          "data-slot": "aurora-text-gradient",
          className: "animate-aurora relative bg-size-[200%_auto] bg-clip-text text-transparent",
          style: gradientStyle,
          "aria-hidden": "true",
          children
        }
      )
    ] });
  }
);
AuroraText.displayName = "AuroraText";

// src/components/ui/blur-fade.tsx
import { useRef as useRef14 } from "react";
import {
  AnimatePresence as AnimatePresence7,
  motion as motion12,
  useInView as useInView2
} from "motion/react";
import { jsx as jsx85 } from "react/jsx-runtime";
var getFilter = (v) => typeof v === "function" ? void 0 : v?.filter;
function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  ...props
}) {
  const ref = useRef14(null);
  const inViewResult = useInView2(ref, { once: true, margin: inViewMargin });
  const isInView = !inView || inViewResult;
  const defaultVariants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]: direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: `blur(0px)`
    }
  };
  const combinedVariants = variant ?? defaultVariants;
  const hiddenFilter = getFilter(combinedVariants.hidden);
  const visibleFilter = getFilter(combinedVariants.visible);
  const shouldTransitionFilter = hiddenFilter != null && visibleFilter != null && hiddenFilter !== visibleFilter;
  return /* @__PURE__ */ jsx85(AnimatePresence7, { children: /* @__PURE__ */ jsx85(
    motion12.div,
    {
      ref,
      "data-slot": "blur-fade",
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      exit: "hidden",
      variants: combinedVariants,
      transition: {
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
        ...shouldTransitionFilter ? { filter: { duration } } : {}
      },
      className,
      ...props,
      children
    }
  ) });
}

// src/components/ui/border-beam.tsx
import { motion as motion13 } from "motion/react";
import { jsx as jsx86 } from "react/jsx-runtime";
function BorderBeam({
  className,
  size = 50,
  delay = 0,
  duration = 6,
  colorFrom = "var(--color-primary)",
  colorTo = "var(--color-ring)",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 1
}) {
  return /* @__PURE__ */ jsx86(
    "div",
    {
      "data-slot": "border-beam",
      className: "pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]",
      style: { "--border-beam-width": `${borderWidth}px` },
      children: /* @__PURE__ */ jsx86(
        motion13.div,
        {
          className: cn(
            "absolute aspect-square bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
            className
          ),
          style: {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            ...style
          },
          initial: { offsetDistance: `${initialOffset}%` },
          animate: {
            offsetDistance: reverse ? [`${100 - initialOffset}%`, `${-initialOffset}%`] : [`${initialOffset}%`, `${100 + initialOffset}%`]
          },
          transition: {
            repeat: Infinity,
            ease: "linear",
            duration,
            delay: -delay,
            ...transition
          }
        }
      )
    }
  );
}

// src/components/ui/confetti.tsx
import {
  createContext as createContext12,
  useCallback as useCallback13,
  useEffect as useEffect16,
  useImperativeHandle,
  useMemo as useMemo13,
  useRef as useRef15
} from "react";
import confetti from "canvas-confetti";
import { jsx as jsx87, jsxs as jsxs51 } from "react/jsx-runtime";
var ConfettiContext = createContext12({});
function Confetti({
  ref,
  options,
  globalOptions = { resize: true, useWorker: true },
  manualstart = false,
  children,
  ...props
}) {
  const instanceRef = useRef15(null);
  const canvasRef = useCallback13(
    (node) => {
      if (node !== null) {
        if (instanceRef.current) return;
        instanceRef.current = confetti.create(node, {
          ...globalOptions,
          resize: true
        });
      } else {
        if (instanceRef.current) {
          instanceRef.current.reset();
          instanceRef.current = null;
        }
      }
    },
    [globalOptions]
  );
  const fire = useCallback13(
    async (opts = {}) => {
      try {
        await instanceRef.current?.({ ...options, ...opts });
      } catch (error) {
        console.error("Confetti error:", error);
      }
    },
    [options]
  );
  const api = useMemo13(() => ({ fire }), [fire]);
  useImperativeHandle(ref, () => api, [api]);
  useEffect16(() => {
    if (!manualstart) {
      ;
      (async () => {
        try {
          await fire();
        } catch (error) {
          console.error("Confetti effect error:", error);
        }
      })();
    }
  }, [manualstart, fire]);
  return /* @__PURE__ */ jsxs51(ConfettiContext.Provider, { value: api, children: [
    /* @__PURE__ */ jsx87("canvas", { "data-slot": "confetti", ref: canvasRef, ...props }),
    children
  ] });
}
function ConfettiButton({
  options,
  children,
  ...props
}) {
  const handleClick = async (event) => {
    try {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      await confetti({
        ...options,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight
        }
      });
    } catch (error) {
      console.error("Confetti button error:", error);
    }
  };
  return /* @__PURE__ */ jsx87(Button, { "data-slot": "confetti-button", onClick: handleClick, ...props, children });
}

// src/components/ui/dot-pattern.tsx
import { useEffect as useEffect17, useId as useId9, useRef as useRef16, useState as useState25 } from "react";
import { motion as motion14 } from "motion/react";
import { jsx as jsx88, jsxs as jsxs52 } from "react/jsx-runtime";
function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}) {
  const id = useId9();
  const containerRef = useRef16(null);
  const [dimensions, setDimensions] = useState25({ width: 0, height: 0 });
  useEffect17(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width: width2, height: height2 } = containerRef.current.getBoundingClientRect();
        setDimensions({ width: width2, height: height2 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const dots = Array.from(
    {
      length: Math.ceil(dimensions.width / width) * Math.ceil(dimensions.height / height)
    },
    (_, i) => {
      const col = i % Math.ceil(dimensions.width / width);
      const row = Math.floor(i / Math.ceil(dimensions.width / width));
      return {
        x: col * width + cx + x,
        y: row * height + cy + y,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2
      };
    }
  );
  return /* @__PURE__ */ jsxs52(
    "svg",
    {
      ref: containerRef,
      "data-slot": "dot-pattern",
      "aria-hidden": "true",
      className: cn(
        "pointer-events-none absolute inset-0 h-full w-full text-muted-foreground/80",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx88("defs", { children: /* @__PURE__ */ jsxs52("radialGradient", { id: `${id}-gradient`, children: [
          /* @__PURE__ */ jsx88("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "1" }),
          /* @__PURE__ */ jsx88("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0" })
        ] }) }),
        dots.map((dot) => /* @__PURE__ */ jsx88(
          motion14.circle,
          {
            cx: dot.x,
            cy: dot.y,
            r: cr,
            fill: glow ? `url(#${id}-gradient)` : "currentColor",
            initial: glow ? { opacity: 0.4, scale: 1 } : {},
            animate: glow ? {
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1]
            } : {},
            transition: glow ? {
              duration: dot.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: dot.delay,
              ease: "easeInOut"
            } : {}
          },
          `${dot.x}-${dot.y}`
        ))
      ]
    }
  );
}

// src/components/ui/grid-pattern.tsx
import { useId as useId10 } from "react";
import { jsx as jsx89, jsxs as jsxs53 } from "react/jsx-runtime";
function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}) {
  const id = useId10();
  return /* @__PURE__ */ jsxs53(
    "svg",
    {
      "data-slot": "grid-pattern",
      "aria-hidden": "true",
      className: cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-muted-foreground/30 stroke-muted-foreground/30",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx89("defs", { children: /* @__PURE__ */ jsx89(
          "pattern",
          {
            id,
            width,
            height,
            patternUnits: "userSpaceOnUse",
            x,
            y,
            children: /* @__PURE__ */ jsx89(
              "path",
              {
                d: `M.5 ${height}V.5H${width}`,
                fill: "none",
                strokeDasharray
              }
            )
          }
        ) }),
        /* @__PURE__ */ jsx89("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: `url(#${id})` }),
        squares && /* @__PURE__ */ jsx89("svg", { x, y, className: "overflow-visible", children: squares.map(([x2, y2]) => /* @__PURE__ */ jsx89(
          "rect",
          {
            strokeWidth: "0",
            width: width - 1,
            height: height - 1,
            x: x2 * width + 1,
            y: y2 * height + 1
          },
          `${x2}-${y2}`
        )) })
      ]
    }
  );
}

// src/components/ui/hyper-text.tsx
import {
  useEffect as useEffect18,
  useRef as useRef17,
  useState as useState26
} from "react";
import {
  AnimatePresence as AnimatePresence8,
  motion as motion15
} from "motion/react";
import { jsx as jsx90 } from "react/jsx-runtime";
var motionElements = {
  article: motion15.article,
  div: motion15.div,
  h1: motion15.h1,
  h2: motion15.h2,
  h3: motion15.h3,
  h4: motion15.h4,
  h5: motion15.h5,
  h6: motion15.h6,
  li: motion15.li,
  p: motion15.p,
  section: motion15.section,
  span: motion15.span
};
var DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
);
var getRandomInt = (max) => Math.floor(Math.random() * max);
function HyperText({
  children,
  className,
  duration = 800,
  delay = 0,
  as: Component = "div",
  startOnView = false,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET,
  ...props
}) {
  const MotionComponent = motionElements[Component];
  const [displayText, setDisplayText] = useState26(
    () => children.split("")
  );
  const [isAnimating, setIsAnimating] = useState26(false);
  const iterationCount = useRef17(0);
  const elementRef = useRef17(null);
  const handleAnimationTrigger = () => {
    if (animateOnHover && !isAnimating) {
      iterationCount.current = 0;
      setIsAnimating(true);
    }
  };
  useEffect18(() => {
    if (!startOnView) {
      const startTimeout = setTimeout(() => {
        setIsAnimating(true);
      }, delay);
      return () => clearTimeout(startTimeout);
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(() => {
            setIsAnimating(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-30% 0px -30% 0px" }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [delay, startOnView]);
  useEffect18(() => {
    let animationFrameId = null;
    if (isAnimating) {
      const maxIterations = children.length;
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        iterationCount.current = progress * maxIterations;
        setDisplayText(
          (currentText) => currentText.map(
            (letter, index) => letter === " " ? letter : index <= iterationCount.current ? children[index] ?? letter : characterSet[getRandomInt(characterSet.length)] ?? letter
          )
        );
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setIsAnimating(false);
        }
      };
      animationFrameId = requestAnimationFrame(animate);
    }
    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [children, duration, isAnimating, characterSet]);
  return /* @__PURE__ */ jsx90(
    MotionComponent,
    {
      ref: elementRef,
      "data-slot": "hyper-text",
      className: cn("overflow-hidden py-2 text-4xl font-bold", className),
      onMouseEnter: handleAnimationTrigger,
      ...props,
      children: /* @__PURE__ */ jsx90(AnimatePresence8, { children: displayText.map((letter, index) => /* @__PURE__ */ jsx90(
        motion15.span,
        {
          className: cn("font-mono", letter === " " ? "w-3" : ""),
          children: letter.toUpperCase()
        },
        index
      )) })
    }
  );
}

// src/components/ui/magic-card.tsx
import { useCallback as useCallback14, useEffect as useEffect19, useRef as useRef18 } from "react";
import {
  motion as motion16,
  useMotionTemplate,
  useMotionValue as useMotionValue2,
  useSpring as useSpring2
} from "motion/react";
import { jsx as jsx91, jsxs as jsxs54 } from "react/jsx-runtime";
function isOrbMode(props) {
  return props.mode === "orb";
}
function MagicCard(props) {
  const {
    children,
    className,
    gradientSize = 200,
    gradientColor = "#262626",
    gradientOpacity = 0.8,
    gradientFrom = "#9E7AFF",
    gradientTo = "#FE8BBB",
    mode = "gradient"
  } = props;
  const glowFrom = isOrbMode(props) ? props.glowFrom ?? "#ee4f27" : "#ee4f27";
  const glowTo = isOrbMode(props) ? props.glowTo ?? "#6b21ef" : "#6b21ef";
  const glowAngle = isOrbMode(props) ? props.glowAngle ?? 90 : 90;
  const glowSize = isOrbMode(props) ? props.glowSize ?? 420 : 420;
  const glowBlur = isOrbMode(props) ? props.glowBlur ?? 60 : 60;
  const glowOpacity = isOrbMode(props) ? props.glowOpacity ?? 0.9 : 0.9;
  const mouseX = useMotionValue2(-gradientSize);
  const mouseY = useMotionValue2(-gradientSize);
  const orbX = useSpring2(mouseX, { stiffness: 250, damping: 30, mass: 0.6 });
  const orbY = useSpring2(mouseY, { stiffness: 250, damping: 30, mass: 0.6 });
  const orbVisible = useSpring2(0, { stiffness: 300, damping: 35 });
  const modeRef = useRef18(mode);
  const glowOpacityRef = useRef18(glowOpacity);
  const gradientSizeRef = useRef18(gradientSize);
  useEffect19(() => {
    modeRef.current = mode;
  }, [mode]);
  useEffect19(() => {
    glowOpacityRef.current = glowOpacity;
  }, [glowOpacity]);
  useEffect19(() => {
    gradientSizeRef.current = gradientSize;
  }, [gradientSize]);
  const reset = useCallback14(
    (reason = "leave") => {
      const currentMode = modeRef.current;
      if (currentMode === "orb") {
        if (reason === "enter") orbVisible.set(glowOpacityRef.current);
        else orbVisible.set(0);
        return;
      }
      const off = -gradientSizeRef.current;
      mouseX.set(off);
      mouseY.set(off);
    },
    [mouseX, mouseY, orbVisible]
  );
  const handlePointerMove = useCallback14(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );
  useEffect19(() => {
    reset("init");
  }, [reset]);
  useEffect19(() => {
    const handleGlobalPointerOut = (e) => {
      if (!e.relatedTarget) reset("global");
    };
    const handleBlur = () => reset("global");
    const handleVisibility = () => {
      if (document.visibilityState !== "visible") reset("global");
    };
    window.addEventListener("pointerout", handleGlobalPointerOut);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      window.removeEventListener("pointerout", handleGlobalPointerOut);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [reset]);
  return /* @__PURE__ */ jsxs54(
    motion16.div,
    {
      "data-slot": "magic-card",
      className: cn(
        "group relative isolate overflow-hidden rounded-[inherit] border border-transparent",
        className
      ),
      onPointerMove: handlePointerMove,
      onPointerLeave: () => reset("leave"),
      onPointerEnter: () => reset("enter"),
      style: {
        background: useMotionTemplate`
          linear-gradient(var(--color-background) 0 0) padding-box,
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
            ${gradientFrom},
            ${gradientTo},
            var(--color-border) 100%
          ) border-box
        `
      },
      children: [
        /* @__PURE__ */ jsx91("div", { className: "bg-background absolute inset-px z-20 rounded-[inherit]" }),
        mode === "gradient" && /* @__PURE__ */ jsx91(
          motion16.div,
          {
            suppressHydrationWarning: true,
            className: "pointer-events-none absolute inset-px z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: useMotionTemplate`
              radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
                ${gradientColor},
                transparent 100%
              )
            `,
              opacity: gradientOpacity
            }
          }
        ),
        mode === "orb" && /* @__PURE__ */ jsx91(
          motion16.div,
          {
            suppressHydrationWarning: true,
            "aria-hidden": "true",
            className: "pointer-events-none absolute z-30 mix-blend-multiply dark:mix-blend-screen",
            style: {
              width: glowSize,
              height: glowSize,
              x: orbX,
              y: orbY,
              translateX: "-50%",
              translateY: "-50%",
              borderRadius: 9999,
              filter: `blur(${glowBlur}px)`,
              opacity: orbVisible,
              background: `linear-gradient(${glowAngle}deg, ${glowFrom}, ${glowTo})`,
              willChange: "transform, opacity"
            }
          }
        ),
        /* @__PURE__ */ jsx91("div", { "data-slot": "magic-card-content", className: "relative z-40", children })
      ]
    }
  );
}

// src/components/ui/marquee.tsx
import { jsx as jsx92 } from "react/jsx-runtime";
function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx92(
    "div",
    {
      "data-slot": "marquee",
      className: cn(
        "group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className
      ),
      ...props,
      children: Array.from({ length: repeat }).map((_, i) => /* @__PURE__ */ jsx92(
        "div",
        {
          className: cn(
            "flex shrink-0 justify-around gap-(--gap)",
            vertical ? "animate-marquee-vertical flex-col" : "animate-marquee flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]"
          ),
          children
        },
        i
      ))
    }
  );
}

// src/components/ui/meteors.tsx
import { useEffect as useEffect20, useState as useState27 } from "react";
import { Fragment as Fragment3, jsx as jsx93 } from "react/jsx-runtime";
var Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className
}) => {
  const [meteorStyles, setMeteorStyles] = useState27(
    []
  );
  useEffect20(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration: Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + "s"
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);
  return /* @__PURE__ */ jsx93(Fragment3, { children: [...meteorStyles].map((style, idx) => (
    // Meteor Head
    /* @__PURE__ */ jsx93(
      "span",
      {
        "data-slot": "meteors",
        style: { ...style },
        className: cn(
          "animate-meteor pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-muted-foreground shadow-[0_0_0_1px_#ffffff10]",
          className
        ),
        children: /* @__PURE__ */ jsx93(
          "div",
          {
            "data-slot": "meteor-tail",
            className: "pointer-events-none absolute top-1/2 -z-10 h-px w-12.5 -translate-y-1/2 bg-linear-to-r from-muted-foreground to-transparent"
          }
        )
      },
      idx
    )
  )) });
};

// src/components/ui/number-ticker.tsx
import { useEffect as useEffect21, useRef as useRef19 } from "react";
import { useInView as useInView3, useMotionValue as useMotionValue3, useSpring as useSpring3 } from "motion/react";
import { jsx as jsx94 } from "react/jsx-runtime";
function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}) {
  const ref = useRef19(null);
  const motionValue = useMotionValue3(direction === "down" ? value : startValue);
  const springValue = useSpring3(motionValue, {
    damping: 60,
    stiffness: 100
  });
  const isInView = useInView3(ref, { once: true, margin: "0px" });
  useEffect21(() => {
    let timer = null;
    if (isInView) {
      timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value);
      }, delay * 1e3);
    }
    return () => {
      if (timer !== null) {
        clearTimeout(timer);
      }
    };
  }, [motionValue, isInView, delay, value, direction, startValue]);
  useEffect21(
    () => springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces
        }).format(Number(latest.toFixed(decimalPlaces)));
      }
    }),
    [springValue, decimalPlaces]
  );
  return /* @__PURE__ */ jsx94(
    "span",
    {
      ref,
      "data-slot": "number-ticker",
      className: cn("inline-block tracking-wider text-foreground tabular-nums", className),
      ...props,
      children: startValue
    }
  );
}

// src/components/ui/orbiting-circles.tsx
import * as React23 from "react";
import { Fragment as Fragment4, jsx as jsx95, jsxs as jsxs55 } from "react/jsx-runtime";
function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}) {
  const calculatedDuration = duration / speed;
  return /* @__PURE__ */ jsxs55(Fragment4, { children: [
    path && /* @__PURE__ */ jsx95(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        "data-slot": "orbiting-circles-path",
        className: "pointer-events-none absolute inset-0 size-full",
        children: /* @__PURE__ */ jsx95(
          "circle",
          {
            className: "stroke-foreground/10 stroke-1",
            cx: "50%",
            cy: "50%",
            r: radius,
            fill: "none"
          }
        )
      }
    ),
    React23.Children.map(children, (child, index) => {
      const angle = 360 / React23.Children.count(children) * index;
      return /* @__PURE__ */ jsx95(
        "div",
        {
          "data-slot": "orbiting-circle",
          style: {
            "--duration": calculatedDuration,
            "--radius": radius,
            "--angle": angle,
            "--icon-size": `${iconSize}px`
          },
          className: cn(
            `animate-orbit absolute flex size-(--icon-size) transform-gpu items-center justify-center rounded-full`,
            { "[animation-direction:reverse]": reverse },
            className
          ),
          ...props,
          children: child
        }
      );
    })
  ] });
}

// src/components/ui/progressive-blur.tsx
import { jsx as jsx96, jsxs as jsxs56 } from "react/jsx-runtime";
function ProgressiveBlur({
  className,
  height = "30%",
  position = "bottom",
  blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64]
}) {
  const divElements = Array(blurLevels.length - 2).fill(null);
  return /* @__PURE__ */ jsxs56(
    "div",
    {
      "data-slot": "progressive-blur",
      className: cn(
        "gradient-blur pointer-events-none absolute inset-x-0 z-10",
        className,
        position === "top" ? "top-0" : position === "bottom" ? "bottom-0" : "inset-y-0"
      ),
      style: {
        height: position === "both" ? "100%" : height
      },
      children: [
        /* @__PURE__ */ jsx96(
          "div",
          {
            "data-slot": "progressive-blur-layer",
            className: "absolute inset-0",
            style: {
              zIndex: 1,
              backdropFilter: `blur(${blurLevels[0]}px)`,
              WebkitBackdropFilter: `blur(${blurLevels[0]}px)`,
              maskImage: position === "bottom" ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)` : position === "top" ? `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)` : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
              WebkitMaskImage: position === "bottom" ? `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)` : position === "top" ? `linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)` : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`
            }
          }
        ),
        divElements.map((_, index) => {
          const blurIndex = index + 1;
          const startPercent = blurIndex * 12.5;
          const midPercent = (blurIndex + 1) * 12.5;
          const endPercent = (blurIndex + 2) * 12.5;
          const maskGradient = position === "bottom" ? `linear-gradient(to bottom, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)` : position === "top" ? `linear-gradient(to top, rgba(0,0,0,0) ${startPercent}%, rgba(0,0,0,1) ${midPercent}%, rgba(0,0,0,1) ${endPercent}%, rgba(0,0,0,0) ${endPercent + 12.5}%)` : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`;
          return /* @__PURE__ */ jsx96(
            "div",
            {
              "data-slot": "progressive-blur-layer",
              className: "absolute inset-0",
              style: {
                zIndex: index + 2,
                backdropFilter: `blur(${blurLevels[blurIndex]}px)`,
                WebkitBackdropFilter: `blur(${blurLevels[blurIndex]}px)`,
                maskImage: maskGradient,
                WebkitMaskImage: maskGradient
              }
            },
            `blur-${index}`
          );
        }),
        /* @__PURE__ */ jsx96(
          "div",
          {
            "data-slot": "progressive-blur-layer",
            className: "absolute inset-0",
            style: {
              zIndex: blurLevels.length,
              backdropFilter: `blur(${blurLevels[blurLevels.length - 1]}px)`,
              WebkitBackdropFilter: `blur(${blurLevels[blurLevels.length - 1]}px)`,
              maskImage: position === "bottom" ? `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)` : position === "top" ? `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)` : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`,
              WebkitMaskImage: position === "bottom" ? `linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)` : position === "top" ? `linear-gradient(to top, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)` : `linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,1) 5%, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%)`
            }
          }
        )
      ]
    }
  );
}

// src/components/ui/ripple.tsx
import * as React24 from "react";
import { jsx as jsx97 } from "react/jsx-runtime";
var Ripple = React24.memo(function Ripple2({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx97(
    "div",
    {
      "data-slot": "ripple",
      className: cn(
        "pointer-events-none absolute inset-0 mask-[linear-gradient(to_bottom,white,transparent)] select-none",
        className
      ),
      ...props,
      children: Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = "solid";
        return /* @__PURE__ */ jsx97(
          "div",
          {
            "data-slot": "ripple-circle",
            className: `animate-ripple bg-foreground/25 absolute rounded-full border shadow-xl`,
            style: {
              "--i": i,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              borderStyle,
              borderWidth: "1px",
              borderColor: `var(--foreground)`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)"
            }
          },
          i
        );
      })
    }
  );
});
Ripple.displayName = "Ripple";

// src/components/ui/scroll-progress.tsx
import { motion as motion17, useScroll } from "motion/react";
import { jsx as jsx98 } from "react/jsx-runtime";
function ScrollProgress({
  className,
  ref,
  ...props
}) {
  const { scrollYProgress } = useScroll();
  return /* @__PURE__ */ jsx98(
    motion17.div,
    {
      ref,
      "data-slot": "scroll-progress",
      className: cn(
        "fixed inset-x-0 top-0 z-50 h-px origin-left bg-linear-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
        className
      ),
      style: {
        scaleX: scrollYProgress
      },
      ...props
    }
  );
}

// src/components/ui/shimmer-button.tsx
import { jsx as jsx99, jsxs as jsxs57 } from "react/jsx-runtime";
function ShimmerButton({
  shimmerColor = "var(--color-primary-foreground)",
  shimmerSize = "0.05em",
  shimmerDuration = "3s",
  borderRadius = "var(--radius-4xl)",
  background = "var(--color-primary)",
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs57(
    "button",
    {
      "data-slot": "shimmer-button",
      style: {
        "--spread": "90deg",
        "--shimmer-color": shimmerColor,
        "--radius": borderRadius,
        "--speed": shimmerDuration,
        "--cut": shimmerSize,
        "--bg": background
      },
      className: cn(
        "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-white/10 px-6 py-3 text-sm font-medium whitespace-nowrap text-primary-foreground [background:var(--bg)]",
        "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx99("div", { className: "@container-[size] absolute inset-0 -z-30 overflow-visible blur-[2px]", children: /* @__PURE__ */ jsx99("div", { className: "animate-shimmer-slide absolute inset-0 aspect-square h-[100cqh] rounded-none [mask:none]", children: /* @__PURE__ */ jsx99("div", { className: "animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" }) }) }),
        children,
        /* @__PURE__ */ jsx99(
          "div",
          {
            className: cn(
              "absolute inset-0 size-full rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]",
              "transform-gpu transition-all duration-300 ease-in-out",
              "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",
              "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
            )
          }
        ),
        /* @__PURE__ */ jsx99("div", { className: "absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)]" })
      ]
    }
  );
}

// src/components/ui/typing-animation.tsx
import {
  useEffect as useEffect22,
  useMemo as useMemo14,
  useRef as useRef20,
  useState as useState28
} from "react";
import {
  motion as motion18,
  useInView as useInView4
} from "motion/react";
import { jsx as jsx100, jsxs as jsxs58 } from "react/jsx-runtime";
var motionElements2 = {
  article: motion18.article,
  div: motion18.div,
  h1: motion18.h1,
  h2: motion18.h2,
  h3: motion18.h3,
  h4: motion18.h4,
  h5: motion18.h5,
  h6: motion18.h6,
  li: motion18.li,
  p: motion18.p,
  section: motion18.section,
  span: motion18.span
};
function TypingAnimation({
  children,
  words,
  className,
  duration = 100,
  typeSpeed,
  deleteSpeed,
  delay = 0,
  pauseDelay = 1e3,
  loop = false,
  as: Component = "span",
  startOnView = true,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = "line",
  ...props
}) {
  const MotionComponent = motionElements2[Component];
  const [displayedText, setDisplayedText] = useState28("");
  const [currentWordIndex, setCurrentWordIndex] = useState28(0);
  const [currentCharIndex, setCurrentCharIndex] = useState28(0);
  const [phase, setPhase] = useState28("typing");
  const elementRef = useRef20(null);
  const isInView = useInView4(elementRef, {
    amount: 0.3,
    once: true
  });
  const wordsToAnimate = useMemo14(
    () => words ?? (children ? [children] : []),
    [words, children]
  );
  const hasMultipleWords = wordsToAnimate.length > 1;
  const typingSpeed = typeSpeed ?? duration;
  const deletingSpeed = deleteSpeed ?? typingSpeed / 2;
  const shouldStart = startOnView ? isInView : true;
  const animationSourceKey = useMemo14(
    () => words ? words.join("\0") : children ?? "",
    [words, children]
  );
  useEffect22(() => {
    setDisplayedText("");
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setPhase("typing");
  }, [animationSourceKey]);
  useEffect22(() => {
    let timeout = null;
    if (shouldStart && wordsToAnimate.length > 0) {
      const timeoutDelay = delay > 0 && displayedText === "" ? delay : phase === "typing" ? typingSpeed : phase === "deleting" ? deletingSpeed : pauseDelay;
      timeout = setTimeout(() => {
        const currentWord = wordsToAnimate[currentWordIndex] || "";
        const graphemes = Array.from(currentWord);
        switch (phase) {
          case "typing":
            if (currentCharIndex < graphemes.length) {
              setDisplayedText(
                graphemes.slice(0, currentCharIndex + 1).join("")
              );
              setCurrentCharIndex(currentCharIndex + 1);
            } else {
              if (hasMultipleWords || loop) {
                const isLastWord = currentWordIndex === wordsToAnimate.length - 1;
                if (!isLastWord || loop) {
                  setPhase("pause");
                }
              }
            }
            break;
          case "pause":
            setPhase("deleting");
            break;
          case "deleting":
            if (currentCharIndex > 0) {
              setDisplayedText(
                graphemes.slice(0, currentCharIndex - 1).join("")
              );
              setCurrentCharIndex(currentCharIndex - 1);
            } else {
              const nextIndex = (currentWordIndex + 1) % wordsToAnimate.length;
              setCurrentWordIndex(nextIndex);
              setPhase("typing");
            }
            break;
        }
      }, timeoutDelay);
    }
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [
    shouldStart,
    phase,
    currentCharIndex,
    currentWordIndex,
    displayedText,
    wordsToAnimate,
    hasMultipleWords,
    loop,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
    delay
  ]);
  const currentWordGraphemes = Array.from(
    wordsToAnimate[currentWordIndex] || ""
  );
  const isComplete = !loop && currentWordIndex === wordsToAnimate.length - 1 && currentCharIndex >= currentWordGraphemes.length && phase !== "deleting";
  const shouldShowCursor = showCursor && !isComplete && (hasMultipleWords || loop || currentCharIndex < currentWordGraphemes.length);
  const getCursorChar = () => {
    switch (cursorStyle) {
      case "block":
        return "\u258C";
      case "underscore":
        return "_";
      case "line":
      default:
        return "|";
    }
  };
  return /* @__PURE__ */ jsxs58(
    MotionComponent,
    {
      ref: elementRef,
      "data-slot": "typing-animation",
      className: cn(
        "leading-20 tracking-[-0.02em]",
        Component === "span" && "inline-block",
        className
      ),
      ...props,
      children: [
        displayedText,
        shouldShowCursor && /* @__PURE__ */ jsx100(
          "span",
          {
            "data-slot": "typing-animation-cursor",
            className: cn("inline-block", blinkCursor && "animate-blink-cursor"),
            children: getCursorChar()
          }
        )
      ]
    }
  );
}

// src/components/ui/word-rotate.tsx
import { useEffect as useEffect23, useState as useState29 } from "react";
import { AnimatePresence as AnimatePresence9, motion as motion19 } from "motion/react";
import { jsx as jsx101 } from "react/jsx-runtime";
function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" }
  },
  className
}) {
  const [index, setIndex] = useState29(0);
  useEffect23(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words, duration]);
  return /* @__PURE__ */ jsx101("div", { "data-slot": "word-rotate", className: "overflow-hidden py-2", children: /* @__PURE__ */ jsx101(AnimatePresence9, { mode: "wait", children: /* @__PURE__ */ jsx101(
    motion19.h1,
    {
      "data-slot": "word-rotate-text",
      className: cn(className),
      ...motionProps,
      children: words[index]
    },
    words[index]
  ) }) });
}
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertAction,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AnimatedBeam,
  AnimatedCircularProgressBar,
  AnimatedGridPattern,
  AnimatedList,
  AnimatedListItem,
  AnimatedShinyText,
  AuroraText,
  Avatar,
  AvatarBadge,
  AvatarCircles,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
  Badge,
  BentoCard,
  BentoGrid,
  BlobContext,
  BlurFade,
  BorderBeam,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BrowserMockup,
  Button,
  Calendar,
  CalendarDayButton,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  ChoiceGroup,
  CodeBlock,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  ColorPicker,
  Combobox,
  ComboboxClear,
  ComboboxContent,
  ComboboxItem,
  ComboboxTrigger,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
  CompareSlider,
  Confetti,
  ConfettiButton,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  ContributionGraph,
  DatePickerField,
  DateRangePickerField,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DirectionAwareTabs,
  Dock,
  DockIcon,
  DotPattern,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Dropzone,
  DynamicContainer,
  DynamicDescription,
  DynamicDiv,
  DynamicIsland,
  DynamicIslandProvider,
  DynamicIslandSizePresets,
  DynamicTitle,
  Editor,
  EditorToolbar,
  EmptyState,
  FeatureCarousel,
  Flag,
  GridPattern,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  HyperText,
  IPhoneMockup,
  ImageZoom,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Kbd,
  KbdGroup,
  Label,
  MagicCard,
  Marquee,
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
  Meteors,
  Meter,
  MeterIndicator,
  MeterLabel,
  MeterTrack,
  MeterValue,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberTicker,
  Onboarding,
  OrbitingCircles,
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PasswordStrengthInput,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
  Progress,
  ProgressiveBlur,
  QRCode,
  RadioGroup,
  RadioGroupItem,
  RatingInput,
  RelativeTime,
  Ripple,
  SIZE_PRESETS,
  ScrollArea,
  ScrollBar,
  ScrollProgress,
  SegmentedControl,
  SegmentedControlItem,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  ShimmerButton,
  Skeleton,
  Slider,
  Snippet,
  SortableList,
  SortableListItem,
  Spinner,
  StepIndicator,
  Stepper,
  StickyBanner,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Terminal,
  Textarea,
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
  Timer,
  TimerDisplay,
  TimerIcon,
  TimerRoot,
  TipsList,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tree,
  TreeNode,
  TypingAnimation,
  WordRotate,
  badgeVariants,
  buttonVariants,
  cn,
  damping,
  formatBytes,
  navigationMenuTriggerStyle,
  spinnerVariants,
  stiffness,
  tabsListVariants,
  toggleVariants,
  useDynamicIslandSize,
  useEditorState,
  useOnboarding,
  useScheduledAnimations,
  useTimer
};
//# sourceMappingURL=index.js.map