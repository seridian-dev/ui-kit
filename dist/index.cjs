"use client"

"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Alert: () => Alert,
  AlertAction: () => AlertAction,
  AlertDescription: () => AlertDescription,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogFooter: () => AlertDialogFooter,
  AlertDialogHeader: () => AlertDialogHeader,
  AlertDialogMedia: () => AlertDialogMedia,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  AlertTitle: () => AlertTitle,
  AnimatedBeam: () => AnimatedBeam,
  AnimatedCircularProgressBar: () => AnimatedCircularProgressBar,
  AnimatedGridPattern: () => AnimatedGridPattern,
  AnimatedList: () => AnimatedList,
  AnimatedListItem: () => AnimatedListItem,
  AnimatedShinyText: () => AnimatedShinyText,
  AuroraText: () => AuroraText,
  Avatar: () => Avatar,
  AvatarBadge: () => AvatarBadge,
  AvatarCircles: () => AvatarCircles,
  AvatarFallback: () => AvatarFallback,
  AvatarGroup: () => AvatarGroup,
  AvatarGroupCount: () => AvatarGroupCount,
  AvatarImage: () => AvatarImage,
  Badge: () => Badge,
  BentoCard: () => BentoCard,
  BentoGrid: () => BentoGrid,
  BlobContext: () => BlobContext,
  BlurFade: () => BlurFade,
  BorderBeam: () => BorderBeam,
  Breadcrumb: () => Breadcrumb,
  BreadcrumbEllipsis: () => BreadcrumbEllipsis,
  BreadcrumbItem: () => BreadcrumbItem,
  BreadcrumbLink: () => BreadcrumbLink,
  BreadcrumbList: () => BreadcrumbList,
  BreadcrumbPage: () => BreadcrumbPage,
  BreadcrumbSeparator: () => BreadcrumbSeparator,
  BrowserMockup: () => BrowserMockup,
  Button: () => Button,
  Calendar: () => Calendar,
  CalendarDayButton: () => CalendarDayButton,
  Card: () => Card,
  CardAction: () => CardAction,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  ChoiceGroup: () => ChoiceGroup,
  CodeBlock: () => CodeBlock,
  Collapsible: () => Collapsible,
  CollapsibleContent: () => CollapsibleContent,
  CollapsibleTrigger: () => CollapsibleTrigger,
  ColorPicker: () => ColorPicker,
  Combobox: () => Combobox,
  ComboboxClear: () => ComboboxClear,
  ComboboxContent: () => ComboboxContent,
  ComboboxItem: () => ComboboxItem,
  ComboboxTrigger: () => ComboboxTrigger,
  Command: () => Command,
  CommandDialog: () => CommandDialog,
  CommandEmpty: () => CommandEmpty,
  CommandGroup: () => CommandGroup,
  CommandInput: () => CommandInput,
  CommandItem: () => CommandItem,
  CommandList: () => CommandList,
  CommandSeparator: () => CommandSeparator,
  CommandShortcut: () => CommandShortcut,
  CompareSlider: () => CompareSlider,
  Confetti: () => Confetti,
  ConfettiButton: () => ConfettiButton,
  ContextMenu: () => ContextMenu,
  ContextMenuCheckboxItem: () => ContextMenuCheckboxItem,
  ContextMenuContent: () => ContextMenuContent,
  ContextMenuGroup: () => ContextMenuGroup,
  ContextMenuItem: () => ContextMenuItem,
  ContextMenuLabel: () => ContextMenuLabel,
  ContextMenuPortal: () => ContextMenuPortal,
  ContextMenuRadioGroup: () => ContextMenuRadioGroup,
  ContextMenuRadioItem: () => ContextMenuRadioItem,
  ContextMenuSeparator: () => ContextMenuSeparator,
  ContextMenuShortcut: () => ContextMenuShortcut,
  ContextMenuSub: () => ContextMenuSub,
  ContextMenuSubContent: () => ContextMenuSubContent,
  ContextMenuSubTrigger: () => ContextMenuSubTrigger,
  ContextMenuTrigger: () => ContextMenuTrigger,
  ContributionGraph: () => ContributionGraph,
  DatePickerField: () => DatePickerField,
  DateRangePickerField: () => DateRangePickerField,
  Dialog: () => Dialog,
  DialogClose: () => DialogClose,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DialogOverlay: () => DialogOverlay,
  DialogPortal: () => DialogPortal,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DirectionAwareTabs: () => DirectionAwareTabs,
  Dock: () => Dock,
  DockIcon: () => DockIcon,
  DotPattern: () => DotPattern,
  Drawer: () => Drawer,
  DrawerClose: () => DrawerClose,
  DrawerContent: () => DrawerContent,
  DrawerDescription: () => DrawerDescription,
  DrawerFooter: () => DrawerFooter,
  DrawerHeader: () => DrawerHeader,
  DrawerOverlay: () => DrawerOverlay,
  DrawerPortal: () => DrawerPortal,
  DrawerTitle: () => DrawerTitle,
  DrawerTrigger: () => DrawerTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Dropzone: () => Dropzone,
  DynamicContainer: () => DynamicContainer,
  DynamicDescription: () => DynamicDescription,
  DynamicDiv: () => DynamicDiv,
  DynamicIsland: () => DynamicIsland,
  DynamicIslandProvider: () => DynamicIslandProvider,
  DynamicIslandSizePresets: () => DynamicIslandSizePresets,
  DynamicTitle: () => DynamicTitle,
  Editor: () => Editor,
  EditorToolbar: () => EditorToolbar,
  EmptyState: () => EmptyState,
  FeatureCarousel: () => FeatureCarousel,
  Flag: () => Flag,
  GridPattern: () => GridPattern,
  HoverCard: () => HoverCard,
  HoverCardContent: () => HoverCardContent,
  HoverCardTrigger: () => HoverCardTrigger,
  HyperText: () => HyperText,
  IPhoneMockup: () => IPhoneMockup,
  ImageZoom: () => ImageZoom,
  Input: () => Input,
  InputGroup: () => InputGroup,
  InputGroupAddon: () => InputGroupAddon,
  InputGroupButton: () => InputGroupButton,
  InputGroupInput: () => InputGroupInput,
  InputGroupText: () => InputGroupText,
  InputGroupTextarea: () => InputGroupTextarea,
  InputOTP: () => InputOTP,
  InputOTPGroup: () => InputOTPGroup,
  InputOTPSeparator: () => InputOTPSeparator,
  InputOTPSlot: () => InputOTPSlot,
  Kbd: () => Kbd,
  KbdGroup: () => KbdGroup,
  Label: () => Label,
  MagicCard: () => MagicCard,
  Marquee: () => Marquee,
  Menubar: () => Menubar,
  MenubarCheckboxItem: () => MenubarCheckboxItem,
  MenubarContent: () => MenubarContent,
  MenubarGroup: () => MenubarGroup,
  MenubarItem: () => MenubarItem,
  MenubarLabel: () => MenubarLabel,
  MenubarMenu: () => MenubarMenu,
  MenubarPortal: () => MenubarPortal,
  MenubarRadioGroup: () => MenubarRadioGroup,
  MenubarRadioItem: () => MenubarRadioItem,
  MenubarSeparator: () => MenubarSeparator,
  MenubarShortcut: () => MenubarShortcut,
  MenubarSub: () => MenubarSub,
  MenubarSubContent: () => MenubarSubContent,
  MenubarSubTrigger: () => MenubarSubTrigger,
  MenubarTrigger: () => MenubarTrigger,
  Meteors: () => Meteors,
  Meter: () => Meter,
  MeterIndicator: () => MeterIndicator,
  MeterLabel: () => MeterLabel,
  MeterTrack: () => MeterTrack,
  MeterValue: () => MeterValue,
  NavigationMenu: () => NavigationMenu,
  NavigationMenuContent: () => NavigationMenuContent,
  NavigationMenuIndicator: () => NavigationMenuIndicator,
  NavigationMenuItem: () => NavigationMenuItem,
  NavigationMenuLink: () => NavigationMenuLink,
  NavigationMenuList: () => NavigationMenuList,
  NavigationMenuTrigger: () => NavigationMenuTrigger,
  NavigationMenuViewport: () => NavigationMenuViewport,
  NumberField: () => NumberField,
  NumberFieldDecrement: () => NumberFieldDecrement,
  NumberFieldGroup: () => NumberFieldGroup,
  NumberFieldIncrement: () => NumberFieldIncrement,
  NumberFieldInput: () => NumberFieldInput,
  NumberTicker: () => NumberTicker,
  Onboarding: () => Onboarding,
  OrbitingCircles: () => OrbitingCircles,
  Pagination: () => Pagination,
  PaginationContent: () => PaginationContent,
  PaginationEllipsis: () => PaginationEllipsis,
  PaginationItem: () => PaginationItem,
  PaginationLink: () => PaginationLink,
  PaginationNext: () => PaginationNext,
  PaginationPrevious: () => PaginationPrevious,
  PasswordStrengthInput: () => PasswordStrengthInput,
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverContent: () => PopoverContent,
  PopoverDescription: () => PopoverDescription,
  PopoverHeader: () => PopoverHeader,
  PopoverTitle: () => PopoverTitle,
  PopoverTrigger: () => PopoverTrigger,
  Progress: () => Progress,
  ProgressiveBlur: () => ProgressiveBlur,
  QRCode: () => QRCode,
  RadioGroup: () => RadioGroup,
  RadioGroupItem: () => RadioGroupItem,
  RatingInput: () => RatingInput,
  RelativeTime: () => RelativeTime,
  Ripple: () => Ripple,
  SIZE_PRESETS: () => SIZE_PRESETS,
  ScrollArea: () => ScrollArea,
  ScrollBar: () => ScrollBar,
  ScrollProgress: () => ScrollProgress,
  SegmentedControl: () => SegmentedControl,
  SegmentedControlItem: () => SegmentedControlItem,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectGroup: () => SelectGroup,
  SelectItem: () => SelectItem,
  SelectLabel: () => SelectLabel,
  SelectScrollDownButton: () => SelectScrollDownButton,
  SelectScrollUpButton: () => SelectScrollUpButton,
  SelectSeparator: () => SelectSeparator,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Separator: () => Separator,
  Sheet: () => Sheet,
  SheetClose: () => SheetClose,
  SheetContent: () => SheetContent,
  SheetDescription: () => SheetDescription,
  SheetFooter: () => SheetFooter,
  SheetHeader: () => SheetHeader,
  SheetTitle: () => SheetTitle,
  SheetTrigger: () => SheetTrigger,
  ShimmerButton: () => ShimmerButton,
  Skeleton: () => Skeleton,
  Slider: () => Slider,
  Snippet: () => Snippet,
  SortableList: () => SortableList,
  SortableListItem: () => SortableListItem,
  Spinner: () => Spinner,
  StepIndicator: () => StepIndicator,
  Stepper: () => Stepper,
  StickyBanner: () => StickyBanner,
  Switch: () => Switch,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Tabs: () => Tabs,
  TabsContent: () => TabsContent,
  TabsList: () => TabsList,
  TabsTrigger: () => TabsTrigger,
  Terminal: () => Terminal,
  Textarea: () => Textarea,
  Timeline: () => Timeline,
  TimelineContent: () => TimelineContent,
  TimelineDate: () => TimelineDate,
  TimelineHeader: () => TimelineHeader,
  TimelineIndicator: () => TimelineIndicator,
  TimelineItem: () => TimelineItem,
  TimelineSeparator: () => TimelineSeparator,
  TimelineTitle: () => TimelineTitle,
  Timer: () => Timer,
  TimerDisplay: () => TimerDisplay,
  TimerIcon: () => TimerIcon,
  TimerRoot: () => TimerRoot,
  TipsList: () => TipsList,
  Toaster: () => Toaster,
  Toggle: () => Toggle,
  ToggleGroup: () => ToggleGroup,
  ToggleGroupItem: () => ToggleGroupItem,
  Toolbar: () => Toolbar,
  ToolbarButton: () => ToolbarButton,
  ToolbarGroup: () => ToolbarGroup,
  ToolbarLink: () => ToolbarLink,
  ToolbarSeparator: () => ToolbarSeparator,
  ToolbarToggleGroup: () => ToolbarToggleGroup,
  ToolbarToggleItem: () => ToolbarToggleItem,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  Tree: () => Tree,
  TreeNode: () => TreeNode,
  TypingAnimation: () => TypingAnimation,
  WordRotate: () => WordRotate,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  damping: () => damping,
  formatBytes: () => formatBytes,
  navigationMenuTriggerStyle: () => navigationMenuTriggerStyle,
  spinnerVariants: () => spinnerVariants,
  stiffness: () => stiffness,
  tabsListVariants: () => tabsListVariants,
  toggleVariants: () => toggleVariants,
  useDynamicIslandSize: () => useDynamicIslandSize,
  useEditorState: () => import_react3.useEditorState,
  useOnboarding: () => useOnboarding,
  useScheduledAnimations: () => useScheduledAnimations,
  useTimer: () => useTimer
});
module.exports = __toCommonJS(index_exports);

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.tsx
var import_class_variance_authority = require("class-variance-authority");
var import_radix_ui = require("radix-ui");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
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
  const Comp = asChild ? import_radix_ui.Slot.Root : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
function Kbd({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "span",
    {
      "data-slot": "kbd-group",
      className: cn("inline-flex items-center gap-1", className),
      ...props
    }
  );
}

// src/components/ui/segmented-control.tsx
var React = __toESM(require("react"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SegmentedControlContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_class_variance_authority2 = require("class-variance-authority");
var import_radix_ui2 = require("radix-ui");
var import_jsx_runtime4 = require("react/jsx-runtime");
var toggleVariants = (0, import_class_variance_authority2.cva)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_radix_ui2.Toggle.Root,
    {
      "data-slot": "toggle",
      className: cn(toggleVariants({ variant, size, className })),
      ...props
    }
  );
}

// src/components/ui/toggle-group.tsx
var React2 = __toESM(require("react"), 1);
var import_radix_ui3 = require("radix-ui");
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_radix_ui3.ToggleGroup.Root,
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
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_radix_ui3.ToggleGroup.Item,
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
var React3 = __toESM(require("react"), 1);
var import_radix_ui4 = require("radix-ui");
var import_jsx_runtime6 = require("react/jsx-runtime");
var ToolbarContext = React3.createContext({
  orientation: "horizontal"
});
function Toolbar({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ToolbarContext.Provider, { value: { orientation }, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_radix_ui4.Toolbar.Root,
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_radix_ui4.Toolbar.Button,
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_radix_ui4.Toolbar.Separator,
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_radix_ui4.Toolbar.Link,
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_radix_ui4.Toolbar.ToggleGroup,
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    import_radix_ui4.Toolbar.ToggleItem,
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
var React4 = __toESM(require("react"), 1);
var import_react_day_picker = require("react-day-picker");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime7 = require("react/jsx-runtime");
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
  const defaultClassNames = (0, import_react_day_picker.getDefaultClassNames)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_react_day_picker.DayPicker,
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
          return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
            return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react.ChevronLeftIcon, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react.ChevronRightIcon, { className: cn("size-4", className2), ...props2 });
          }
          return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react.ChevronDownIcon, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: ({ ...props2 }) => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(CalendarDayButton, { locale, ...props2 }),
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("td", { ...props2, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
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
  const defaultClassNames = (0, import_react_day_picker.getDefaultClassNames)();
  const ref = React4.useRef(null);
  React4.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
var import_radix_ui5 = require("radix-ui");
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime8 = require("react/jsx-runtime");
function Checkbox({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    import_radix_ui5.Checkbox.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        import_radix_ui5.Checkbox.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none [&>svg]:size-3.5",
          children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            import_lucide_react2.CheckIcon,
            {}
          )
        }
      )
    }
  );
}

// src/components/ui/color-picker.tsx
var React5 = __toESM(require("react"), 1);
var import_react_colorful = require("react-colorful");
var import_lucide_react3 = require("lucide-react");

// src/components/ui/input.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
var import_radix_ui6 = require("radix-ui");
var import_jsx_runtime10 = require("react/jsx-runtime");
function Popover({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_radix_ui6.Popover.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_radix_ui6.Popover.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_radix_ui6.Popover.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    import_radix_ui6.Popover.Content,
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_radix_ui6.Popover.Anchor, { "data-slot": "popover-anchor", ...props });
}
function PopoverHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "div",
    {
      "data-slot": "popover-header",
      className: cn("flex flex-col gap-0.5 text-sm", className),
      ...props
    }
  );
}
function PopoverTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    "p",
    {
      "data-slot": "popover-description",
      className: cn("text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/color-picker.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
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
  const Picker = enableAlpha ? import_react_colorful.HexAlphaColorPicker : import_react_colorful.HexColorPicker;
  const bareHex = current.replace(/^#/, "").toUpperCase();
  const shownHex = hexDraft ?? bareHex;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    "div",
    {
      "data-slot": "color-picker",
      className: cn("inline-flex", className),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(Popover, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(PopoverTrigger, { asChild: true, disabled, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
          Button,
          {
            type: "button",
            variant: "outline",
            "data-slot": "color-picker-trigger",
            "aria-label": `Color: ${current}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
                "span",
                {
                  "aria-hidden": "true",
                  "data-slot": "color-picker-swatch",
                  className: "size-4 shrink-0 rounded-sm border border-border",
                  style: { backgroundColor: current }
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { className: "font-normal text-muted-foreground tabular-nums", children: current }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_lucide_react3.ChevronDownIcon, { className: "text-muted-foreground" })
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(PopoverContent, { className: "w-64", "data-slot": "color-picker-content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            Picker,
            {
              color: current,
              onChange: commit,
              className: "w-full",
              "aria-label": "Color saturation and brightness"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
              "span",
              {
                "aria-hidden": "true",
                className: "text-sm text-muted-foreground",
                children: "#"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
          presets && presets.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
            "div",
            {
              "data-slot": "color-picker-presets",
              className: "flex flex-wrap gap-1",
              children: presets.map((preset) => /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
var React6 = __toESM(require("react"), 1);
var import_lucide_react6 = require("lucide-react");

// src/components/ui/badge.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var import_radix_ui7 = require("radix-ui");
var import_jsx_runtime12 = require("react/jsx-runtime");
var badgeVariants = (0, import_class_variance_authority3.cva)(
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
  const Comp = asChild ? import_radix_ui7.Slot.Root : "span";
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
var import_cmdk = require("cmdk");

// src/components/ui/dialog.tsx
var import_radix_ui8 = require("radix-ui");
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime13 = require("react/jsx-runtime");
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_radix_ui8.Dialog.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_radix_ui8.Dialog.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_radix_ui8.Dialog.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_radix_ui8.Dialog.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_radix_ui8.Dialog.Overlay,
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(DialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      import_radix_ui8.Dialog.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_radix_ui8.Dialog.Close, { "data-slot": "dialog-close", asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
            Button,
            {
              variant: "ghost",
              className: "absolute top-2 right-2",
              size: "icon-sm",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  import_lucide_react4.XIcon,
                  {}
                ),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
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
        showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_radix_ui8.Dialog.Close, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(Button, { variant: "outline", children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_radix_ui8.Dialog.Title,
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
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_radix_ui8.Dialog.Description,
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
var import_class_variance_authority4 = require("class-variance-authority");

// src/components/ui/textarea.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
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
var import_jsx_runtime15 = require("react/jsx-runtime");
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var inputGroupAddonVariants = (0, import_class_variance_authority4.cva)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var inputGroupButtonVariants = (0, import_class_variance_authority4.cva)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime16 = require("react/jsx-runtime");
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    import_cmdk.Command,
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(Dialog, { ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(DialogHeader, { className: "sr-only", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogTitle, { children: title }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(DialogDescription, { children: description })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { "data-slot": "command-input-wrapper", className: "p-1 pb-0", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(InputGroup, { className: "h-8! rounded-lg! border-input/30 bg-input/30 shadow-none! *:data-[slot=input-group-addon]:pl-2!", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      import_cmdk.Command.Input,
      {
        "data-slot": "command-input",
        className: cn(
          "w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        ...props
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(InputGroupAddon, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react5.SearchIcon, { className: "size-4 shrink-0 opacity-50" }) })
  ] }) });
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    import_cmdk.Command.List,
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    import_cmdk.Command.Empty,
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    import_cmdk.Command.Group,
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    import_cmdk.Command.Separator,
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
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
    import_cmdk.Command.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "group/command-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none in-data-[slot=dialog-content]:rounded-lg! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-muted data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_lucide_react5.CheckIcon, { className: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100" })
      ]
    }
  );
}
function CommandShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
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
var import_jsx_runtime17 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Popover, { open, onOpenChange: setOpen, children })
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-1 text-left", children: multiple ? isEmpty ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "min-w-0 truncate text-muted-foreground", children: placeholder }) : selected.map((itemValue) => {
          const label = getLabel(itemValue);
          return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Badge, { variant: "secondary", children: [
            label,
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
                children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.XIcon, { className: "size-3" })
              }
            )
          ] }, itemValue);
        }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { className: "min-w-0 truncate", children: isEmpty ? placeholder : getLabel(selected[0] ?? "") }) }),
        children,
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.ChevronDownIcon, { className: "pointer-events-none size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-data-[state=open]/button:rotate-180" })
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
    PopoverContent,
    {
      "data-slot": "combobox-content",
      className: cn(
        "w-(--radix-popover-trigger-width) min-w-(--radix-popover-trigger-width) p-0",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Command, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(CommandList, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CommandEmpty, { children: "No results found." }),
          options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "span",
          {
            "data-slot": "combobox-item-indicator",
            className: "mr-2 flex size-4 shrink-0 items-center justify-center",
            children: isSelected && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.CheckIcon, { className: "size-4" })
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.XIcon, { className: "size-3.5" })
    }
  );
}

// src/components/ui/date-picker-field.tsx
var import_react = require("react");
var import_date_fns = require("date-fns");
var import_lucide_react7 = require("lucide-react");

// src/components/ui/label.tsx
var import_radix_ui9 = require("radix-ui");
var import_jsx_runtime18 = require("react/jsx-runtime");
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    import_radix_ui9.Label.Root,
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
var import_jsx_runtime19 = require("react/jsx-runtime");
function DatePickerField({ className, ...props }) {
  const id = (0, import_react.useId)();
  const [date, setDate] = (0, import_react.useState)();
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { "data-slot": "date-picker-field", className, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)("div", { className: "*:not-first:mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Label, { htmlFor: id, children: "Date picker" }),
      /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(Popover, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
          Button,
          {
            id,
            variant: "outline",
            className: "group bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                "span",
                {
                  className: cn("truncate", !date && "text-muted-foreground"),
                  children: date ? (0, import_date_fns.format)(date, "PPP") : "Pick a date"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
                import_lucide_react7.CalendarIcon,
                {
                  size: 16,
                  className: "text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors",
                  "aria-hidden": "true"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(PopoverContent, { className: "w-auto p-2", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Calendar, { mode: "single", selected: date, onSelect: setDate }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
      "p",
      {
        className: "text-muted-foreground mt-2 text-xs",
        role: "region",
        "aria-live": "polite",
        children: [
          "Built with",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
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
var import_react2 = require("react");
var import_date_fns2 = require("date-fns");
var import_lucide_react8 = require("lucide-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
function DateRangePickerField({
  className,
  ...props
}) {
  const id = (0, import_react2.useId)();
  const [date, setDate] = (0, import_react2.useState)();
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    "div",
    {
      "data-slot": "date-range-picker-field",
      className,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("div", { className: "*:not-first:mt-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Label, { htmlFor: id, children: "Date range picker" }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(Popover, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
              Button,
              {
                id,
                variant: "outline",
                className: "group bg-background hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    "span",
                    {
                      className: cn("truncate", !date && "text-muted-foreground"),
                      children: date?.from ? date.to ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
                        (0, import_date_fns2.format)(date.from, "LLL dd, y"),
                        " -",
                        " ",
                        (0, import_date_fns2.format)(date.to, "LLL dd, y")
                      ] }) : (0, import_date_fns2.format)(date.from, "LLL dd, y") : "Pick a date range"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    import_lucide_react8.CalendarIcon,
                    {
                      size: 16,
                      className: "text-muted-foreground/80 group-hover:text-foreground shrink-0 transition-colors",
                      "aria-hidden": "true"
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(PopoverContent, { className: "w-auto p-2", align: "start", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(Calendar, { mode: "range", selected: date, onSelect: setDate }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
          "p",
          {
            className: "text-muted-foreground mt-2 text-xs",
            role: "region",
            "aria-live": "polite",
            children: [
              "Built with",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
var React7 = __toESM(require("react"), 1);
var import_lucide_react9 = require("lucide-react");
var import_jsx_runtime21 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "div",
    {
      "data-slot": "dropzone",
      className: cn("flex flex-col gap-3", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                import_lucide_react9.UploadCloudIcon,
                {
                  "aria-hidden": "true",
                  className: "size-8 text-muted-foreground"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex flex-col gap-0.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { className: "text-sm font-medium", children: "Drag & drop files here, or click to browse" }),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("p", { "data-slot": "dropzone-hint", className: "text-xs text-muted-foreground", children: hint ?? `Up to ${maxFiles ?? "unlimited"} files${maxSize !== void 0 ? ` \xB7 max ${formatBytes(maxSize)} each` : ""}` })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
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
        rejections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ul", { "data-slot": "dropzone-rejections", className: "flex flex-col gap-1", children: rejections.map((rejection) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
          "li",
          {
            className: "text-xs text-destructive",
            "data-slot": "dropzone-rejection",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "font-medium", children: rejection.name }),
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("span", { children: [
                "\u2014 ",
                rejection.reason
              ] })
            ]
          },
          rejection.id
        )) }),
        items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("ul", { "data-slot": "dropzone-files", className: "flex flex-col gap-2", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
          "li",
          {
            "data-slot": "dropzone-file",
            className: "flex items-center gap-3 rounded-lg border border-border bg-background p-2",
            children: [
              item.previewUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                  "img",
                  {
                    src: item.previewUrl,
                    alt: "",
                    "aria-hidden": "true",
                    className: "size-10 shrink-0 rounded-md border border-border object-cover"
                  }
                )
              ) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                "span",
                {
                  "aria-hidden": "true",
                  className: "flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground",
                  children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react9.FileIcon, { className: "size-5" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col", children: [
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "truncate text-sm", children: item.file.name }),
                /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { className: "text-xs text-muted-foreground", children: formatBytes(item.file.size) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon-xs",
                  "aria-label": `Remove ${item.file.name}`,
                  onClick: () => removeItem(item.id),
                  children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react9.XIcon, {})
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
var React8 = __toESM(require("react"), 1);
var import_lucide_react11 = require("lucide-react");
var import_react3 = require("@tiptap/react");
var import_extension_placeholder = require("@tiptap/extension-placeholder");
var import_starter_kit = require("@tiptap/starter-kit");

// src/components/ui/select.tsx
var import_radix_ui10 = require("radix-ui");
var import_lucide_react10 = require("lucide-react");
var import_jsx_runtime22 = require("react/jsx-runtime");
function Select({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui10.Select.Root, { "data-slot": "select", ...props });
}
function SelectGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_radix_ui10.Select.Group,
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
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui10.Select.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    import_radix_ui10.Select.Trigger,
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
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui10.Select.Icon, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react10.ChevronDownIcon, { className: "pointer-events-none size-4 text-muted-foreground" }) })
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
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui10.Select.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    import_radix_ui10.Select.Content,
    {
      "data-slot": "select-content",
      "data-align-trigger": position === "item-aligned",
      className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-36 origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[align-trigger=true]:animate-none data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
      position,
      align,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(SelectScrollUpButton, {}),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          import_radix_ui10.Select.Viewport,
          {
            "data-position": position,
            className: cn(
              "data-[position=popper]:h-(--radix-select-trigger-height) data-[position=popper]:w-full data-[position=popper]:min-w-(--radix-select-trigger-width)",
              position === "popper" && ""
            ),
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectLabel({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_radix_ui10.Select.Label,
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
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
    import_radix_ui10.Select.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "relative flex w-full cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "pointer-events-none absolute right-2 flex size-4 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui10.Select.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react10.CheckIcon, { className: "pointer-events-none" }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_radix_ui10.Select.ItemText, { children })
      ]
    }
  );
}
function SelectSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_radix_ui10.Select.Separator,
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
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_radix_ui10.Select.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        import_lucide_react10.ChevronUpIcon,
        {}
      )
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    import_radix_ui10.Select.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "z-10 flex cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
        import_lucide_react10.ChevronDownIcon,
        {}
      )
    }
  );
}

// src/components/ui/separator.tsx
var import_radix_ui11 = require("radix-ui");
var import_jsx_runtime23 = require("react/jsx-runtime");
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
    import_radix_ui11.Separator.Root,
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
var import_radix_ui12 = require("radix-ui");
var import_jsx_runtime24 = require("react/jsx-runtime");
function TooltipProvider({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
    import_radix_ui12.Tooltip.Provider,
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
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_radix_ui12.Tooltip.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_radix_ui12.Tooltip.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_radix_ui12.Tooltip.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
    import_radix_ui12.Tooltip.Content,
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
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_radix_ui12.Tooltip.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })
      ]
    }
  ) });
}

// src/components/ui/editor.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
var headingLevels = [1, 2, 3];
function ToolbarToggle({
  label,
  pressed,
  disabled,
  onPressedChange,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Tooltip, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TooltipContent, { side: "bottom", children: label })
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Popover, { open, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Tooltip, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Toggle, { size: "sm", "aria-label": "Link", pressed: active || open, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react11.Link2, {}) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TooltipContent, { side: "bottom", children: "Link" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(PopoverContent, { align: "start", className: "flex-row items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Button, { size: "sm", onClick: applyLink, children: "Set" }),
      /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Button, { size: "sm", variant: "outline", onClick: removeLink, children: "Remove" })
    ] })
  ] });
}
function EditorToolbar({ editor }) {
  const state = (0, import_react3.useEditorState)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "div",
    {
      "data-slot": "editor-toolbar",
      className: "sticky top-0 z-10 flex flex-wrap items-center gap-0.5 border-b bg-muted/50 p-1",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          ToolbarToggle,
          {
            label: "Bold",
            pressed: state.bold,
            onPressedChange: () => editor.chain().focus().toggleBold().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react11.Bold, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          ToolbarToggle,
          {
            label: "Italic",
            pressed: state.italic,
            onPressedChange: () => editor.chain().focus().toggleItalic().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react11.Italic, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          ToolbarToggle,
          {
            label: "Strikethrough",
            pressed: state.strike,
            onPressedChange: () => editor.chain().focus().toggleStrike().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react11.Strikethrough, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          ToolbarToggle,
          {
            label: "Code",
            pressed: state.code,
            onPressedChange: () => editor.chain().focus().toggleCode().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react11.Code, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Select, { value: headingValue, onValueChange: applyHeading, children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(Tooltip, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(SelectTrigger, { size: "sm", className: "w-28", "aria-label": "Text style", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(SelectValue, {}) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TooltipContent, { side: "bottom", children: "Text style" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(SelectContent, { position: "popper", align: "start", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(SelectItem, { value: "paragraph", children: "Paragraph" }),
            headingLevels.map((level) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(SelectItem, { value: `h${level}`, children: [
              "Heading ",
              level
            ] }, level))
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          ToolbarToggle,
          {
            label: "Bullet list",
            pressed: state.bulletList,
            onPressedChange: () => editor.chain().focus().toggleBulletList().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react11.List, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          ToolbarToggle,
          {
            label: "Ordered list",
            pressed: state.orderedList,
            onPressedChange: () => editor.chain().focus().toggleOrderedList().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react11.ListOrdered, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          ToolbarToggle,
          {
            label: "Blockquote",
            pressed: state.blockquote,
            onPressedChange: () => editor.chain().focus().toggleBlockquote().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react11.TextQuote, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(LinkToolbarItem, { editor, active: state.link }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(Separator, { orientation: "vertical", className: "mx-1 h-6 data-vertical:self-auto" }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          ToolbarToggle,
          {
            label: "Undo",
            pressed: false,
            disabled: !state.canUndo,
            onPressedChange: () => editor.chain().focus().undo().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react11.Undo2, {})
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          ToolbarToggle,
          {
            label: "Redo",
            pressed: false,
            disabled: !state.canRedo,
            onPressedChange: () => editor.chain().focus().redo().run(),
            children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react11.Redo2, {})
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
  const editor = (0, import_react3.useEditor)({
    immediatelyRender: false,
    editable,
    content,
    extensions: [
      import_starter_kit.StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        link: { openOnClick: false, autolink: true }
      }),
      import_extension_placeholder.Placeholder.configure({ placeholder })
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
    "div",
    {
      "data-slot": "editor",
      className: cn(
        "rounded-md border border-input bg-background transition-colors focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50",
        className
      ),
      children: [
        toolbar && /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(EditorToolbar, { editor }),
        /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
          import_react3.EditorContent,
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
var React9 = __toESM(require("react"), 1);
var import_input_otp = require("input-otp");
var import_lucide_react12 = require("lucide-react");
var import_jsx_runtime26 = require("react/jsx-runtime");
function InputOTP({
  className,
  containerClassName,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    import_input_otp.OTPInput,
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
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
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
  const inputOTPContext = React9.useContext(import_input_otp.OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
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
        hasFakeCaret && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
}
function InputOTPSeparator({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    "div",
    {
      "data-slot": "input-otp-separator",
      className: "flex items-center [&_svg:not([class*='size-'])]:size-4",
      role: "separator",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
        import_lucide_react12.MinusIcon,
        {}
      )
    }
  );
}

// src/components/ui/number-field.tsx
var React10 = __toESM(require("react"), 1);
var import_lucide_react13 = require("lucide-react");
var import_jsx_runtime27 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(
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
        name != null && /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
      children: children ?? (direction === -1 ? /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react13.MinusIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(import_lucide_react13.PlusIcon, {}))
    }
  );
}
function NumberFieldDecrement(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(NumberFieldStepper, { direction: -1, ...props });
}
function NumberFieldIncrement(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(NumberFieldStepper, { direction: 1, ...props });
}
function NumberFieldInput({
  className,
  ...props
}) {
  const { text, setText, commit, step, disabled } = useNumberFieldContext(
    "NumberFieldInput"
  );
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
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
var import_react4 = require("react");
var import_lucide_react14 = require("lucide-react");
var import_jsx_runtime28 = require("react/jsx-runtime");
function PasswordStrengthInput({
  className,
  ...props
}) {
  const id = (0, import_react4.useId)();
  const [password, setPassword] = (0, import_react4.useState)("");
  const [isVisible, setIsVisible] = (0, import_react4.useState)(false);
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
  const strengthScore = (0, import_react4.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { "data-slot": "password-strength-input", className, ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "*:not-first:mt-2", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Label, { htmlFor: id, children: "Input with password strength indicator" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
          "button",
          {
            "data-slot": "password-strength-toggle",
            className: "text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
            type: "button",
            onClick: toggleVisibility,
            "aria-label": isVisible ? "Hide password" : "Show password",
            "aria-pressed": isVisible,
            "aria-controls": id,
            children: isVisible ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react14.EyeOffIcon, { size: 16, "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react14.EyeIcon, { size: 16, "aria-hidden": "true" })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "div",
      {
        "data-slot": "password-strength-progress",
        className: "bg-border mt-3 mb-4 h-1 w-full overflow-hidden rounded-full",
        role: "progressbar",
        "aria-valuenow": strengthScore,
        "aria-valuemin": 0,
        "aria-valuemax": 4,
        "aria-label": "Password strength",
        children: /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
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
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "ul",
      {
        "data-slot": "password-strength-requirements",
        className: "space-y-1.5",
        "aria-label": "Password requirements",
        children: strength.map((req, index) => /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)("li", { className: "flex items-center gap-2", children: [
          req.met ? /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            import_lucide_react14.CheckIcon,
            {
              size: 16,
              className: "text-emerald-500",
              "aria-hidden": "true"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            import_lucide_react14.XIcon,
            {
              size: 16,
              className: "text-muted-foreground/80",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
            "span",
            {
              className: cn(
                "text-xs",
                req.met ? "text-emerald-600" : "text-muted-foreground"
              ),
              children: [
                req.text,
                /* @__PURE__ */ (0, import_jsx_runtime28.jsx)("span", { className: "sr-only", children: req.met ? " - Requirement met" : " - Requirement not met" })
              ]
            }
          )
        ] }, index))
      }
    )
  ] });
}

// src/components/ui/radio-group.tsx
var import_radix_ui13 = require("radix-ui");
var import_jsx_runtime29 = require("react/jsx-runtime");
function RadioGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    import_radix_ui13.RadioGroup.Root,
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
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    import_radix_ui13.RadioGroup.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        import_radix_ui13.RadioGroup.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "flex size-4 items-center justify-center",
          children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" })
        }
      )
    }
  );
}

// src/components/ui/rating-input.tsx
var import_react5 = require("react");
var import_jsx_runtime30 = require("react/jsx-runtime");
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
  const id = (0, import_react5.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
    "fieldset",
    {
      "data-slot": "rating-input",
      className: cn("space-y-4", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("legend", { className: "text-foreground text-sm leading-none font-medium", children: legend }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(RadioGroup, { className: "flex gap-1.5", defaultValue, children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
          "label",
          {
            "data-slot": "rating-item",
            title: item.label,
            className: "border-input has-data-[state=checked]:border-primary/50 has-focus-visible:border-ring has-focus-visible:ring-ring/50 relative flex size-9 cursor-pointer flex-col items-center justify-center rounded-full border text-center text-xl shadow-xs transition-[color,box-shadow] outline-none has-focus-visible:ring-[3px] has-data-disabled:cursor-not-allowed has-data-disabled:opacity-50",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
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
var React11 = __toESM(require("react"), 1);
var import_radix_ui14 = require("radix-ui");
var import_jsx_runtime31 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsxs)(
    import_radix_ui14.Slider.Root,
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
        /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          import_radix_ui14.Slider.Track,
          {
            "data-slot": "slider-track",
            className: "relative grow overflow-hidden rounded-full bg-muted data-horizontal:h-1 data-horizontal:w-full data-vertical:h-full data-vertical:w-1",
            children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
              import_radix_ui14.Slider.Range,
              {
                "data-slot": "slider-range",
                className: "absolute bg-primary select-none data-horizontal:h-full data-vertical:w-full"
              }
            )
          }
        ),
        Array.from({ length: _values.length }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
          import_radix_ui14.Slider.Thumb,
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
var import_radix_ui15 = require("radix-ui");
var import_jsx_runtime32 = require("react/jsx-runtime");
function Switch({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    import_radix_ui15.Switch.Root,
    {
      "data-slot": "switch",
      "data-size": size,
      className: cn(
        "peer group/switch relative inline-flex shrink-0 items-center rounded-full border border-transparent transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[18.4px] data-[size=default]:w-[32px] data-[size=sm]:h-[14px] data-[size=sm]:w-[24px] dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:bg-primary data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        import_radix_ui15.Switch.Thumb,
        {
          "data-slot": "switch-thumb",
          className: "pointer-events-none block rounded-full bg-background ring-0 transition-transform group-data-[size=default]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=default]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] dark:data-checked:bg-primary-foreground group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 dark:data-unchecked:bg-foreground"
        }
      )
    }
  );
}

// src/components/ui/accordion.tsx
var import_radix_ui16 = require("radix-ui");
var import_lucide_react15 = require("lucide-react");
var import_jsx_runtime33 = require("react/jsx-runtime");
function Accordion({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_radix_ui16.Accordion.Root,
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
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_radix_ui16.Accordion.Item,
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
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_radix_ui16.Accordion.Header, { className: "flex", children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    import_radix_ui16.Accordion.Trigger,
    {
      "data-slot": "accordion-trigger",
      className: cn(
        "group/accordion-trigger relative flex flex-1 items-start justify-between rounded-lg border border-transparent py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-50 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_lucide_react15.ChevronDownIcon, { "data-slot": "accordion-trigger-icon", className: "pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden" }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_lucide_react15.ChevronUpIcon, { "data-slot": "accordion-trigger-icon", className: "pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline" })
      ]
    }
  ) });
}
function AccordionContent({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    import_radix_ui16.Accordion.Content,
    {
      "data-slot": "accordion-content",
      className: "overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up",
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
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
var import_lucide_react16 = require("lucide-react");
var import_jsx_runtime34 = require("react/jsx-runtime");
function BentoGrid({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)(
    "div",
    {
      "data-slot": "bento-card",
      className: cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transform-gpu",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { children: background }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "p-4", children: [
          /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("div", { className: "pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10", children: [
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Icon, { className: "h-12 w-12 origin-left transform-gpu text-foreground transition-all duration-300 ease-in-out group-hover:scale-75" }),
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("h3", { className: "text-xl font-semibold text-foreground", children: name }),
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("p", { className: "max-w-lg text-muted-foreground", children: description })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Button, { variant: "link", asChild: true, size: "sm", className: "pointer-events-auto p-0", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("a", { href, children: [
            cta,
            /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react16.ArrowRightIcon, { className: "ms-2 h-4 w-4 rtl:rotate-180" })
          ] }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Button, { variant: "link", asChild: true, size: "sm", className: "pointer-events-auto p-0", children: /* @__PURE__ */ (0, import_jsx_runtime34.jsxs)("a", { href, children: [
          cta,
          /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react16.ArrowRightIcon, { className: "ms-2 h-4 w-4 rtl:rotate-180" })
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { className: "pointer-events-none absolute inset-0 transform-gpu bg-transparent transition-all duration-300 group-hover:bg-foreground/3" })
      ]
    }
  );
}

// src/components/ui/card.tsx
var import_jsx_runtime35 = require("react/jsx-runtime");
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-(--card-spacing)", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
var import_radix_ui17 = require("radix-ui");
var import_jsx_runtime36 = require("react/jsx-runtime");
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_radix_ui17.Collapsible.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    import_radix_ui17.Collapsible.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
    import_radix_ui17.Collapsible.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}

// src/components/ui/direction-aware-tabs.tsx
var import_react6 = require("react");
var import_react7 = require("motion/react");
var import_react_use_measure = __toESM(require("react-use-measure"), 1);
var import_jsx_runtime37 = require("react/jsx-runtime");
function DirectionAwareTabs({
  tabs,
  className,
  rounded,
  roundedInner,
  onChange
}) {
  const [activeTab, setActiveTab] = (0, import_react6.useState)(0);
  const [direction, setDirection] = (0, import_react6.useState)(0);
  const [isAnimating, setIsAnimating] = (0, import_react6.useState)(false);
  const [ref, bounds] = (0, import_react_use_measure.default)();
  const content = (0, import_react6.useMemo)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
    "div",
    {
      className: " flex flex-col items-center w-full",
      "data-slot": "direction-aware-tabs",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          "div",
          {
            className: cn(
              "flex space-x-1 border border-none rounded-full cursor-pointer bg-neutral-600 px-[3px] py-[3.2px] shadow-[0px_1px_0px_0px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(0_0_0/0.02)_inset,0px_0px_0px_1px_oklch(1_0_0/0.25)]",
              className,
              rounded
            ),
            "data-slot": "direction-aware-tabs-list",
            children: tabs.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(
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
                  activeTab === tab.id && /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                    import_react7.motion.span,
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
        /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react7.MotionConfig, { transition: { duration: 0.4, type: "spring", bounce: 0.2 }, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
          import_react7.motion.div,
          {
            className: "relative mx-auto w-full h-full overflow-hidden",
            "data-slot": "direction-aware-tabs-content",
            initial: false,
            animate: { height: bounds.height },
            children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "p-1", ref, children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
              import_react7.AnimatePresence,
              {
                custom: direction,
                mode: "popLayout",
                onExitComplete: () => setIsAnimating(false),
                children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
                  import_react7.motion.div,
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
var import_radix_ui18 = require("radix-ui");
var import_jsx_runtime38 = require("react/jsx-runtime");
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(
    import_radix_ui18.ScrollArea.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          import_radix_ui18.ScrollArea.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(ScrollBar, {}),
        /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_radix_ui18.ScrollArea.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
    import_radix_ui18.ScrollArea.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_radix_ui18.ScrollArea.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "relative flex-1 rounded-full bg-border"
        }
      )
    }
  );
}

// src/components/ui/sortable-list.tsx
var import_react8 = require("react");
var import_lucide_react17 = require("lucide-react");
var import_react9 = require("motion/react");
var import_react_use_measure2 = __toESM(require("react-use-measure"), 1);
var import_jsx_runtime39 = require("react/jsx-runtime");
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
  let [ref, bounds] = (0, import_react_use_measure2.default)();
  const [isDragging, setIsDragging] = (0, import_react8.useState)(false);
  const dragControls = (0, import_react9.useDragControls)();
  const handleDragStart = (event) => {
    setIsDragging(true);
    dragControls.start(event, { snapToCursor: true });
    handleDrag();
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react9.motion.div, { className: cn("", className), "data-slot": "sortable-list-item", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)("div", { className: "flex w-full items-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
      import_react9.Reorder.Item,
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
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { ref, className: cn(isExpanded ? "" : "", "z-20 "), children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
            import_react9.motion.div,
            {
              layout: "position",
              className: "flex items-center justify-center ",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react9.AnimatePresence, { children: !isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
                  import_react9.motion.div,
                  {
                    initial: { opacity: 0, filter: "blur(4px)" },
                    animate: { opacity: 1, filter: "blur(0px)" },
                    exit: { opacity: 0, filter: "blur(4px)" },
                    transition: { duration: 1e-3 },
                    className: "flex  items-center space-x-2 ",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: "pl-3 pt-1", children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                        Checkbox,
                        {
                          checked: item.checked,
                          id: `checkbox-${item.id}`,
                          "aria-label": "Mark to delete",
                          onCheckedChange: () => onCompleteItem(item.id),
                          className: "h-5 w-5 rounded-md border-border bg-muted/30 data-[state=checked]:bg-foreground data-[state=checked]:text-red-200"
                        }
                      ) }),
                      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("p", { className: "font-mono text-xs pl-1 text-muted-foreground", children: order + 1 }),
                      /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
                        import_react9.motion.div,
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
                          children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
          /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
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
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react9.AnimatePresence, { mode: "popLayout", children: item.checked ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      import_react9.motion.div,
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
    /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react9.AnimatePresence, { mode: "popLayout", children: item.checked ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      import_react9.motion.div,
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
        children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
          "button",
          {
            type: "button",
            className: "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium  transition-colors duration-150   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            onClick: () => onRemoveItem(item.id),
            children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_lucide_react17.Trash, { className: "h-4 w-4 text-red-400 transition-colors duration-150 fill-red-400/60 " })
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
    return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react9.LayoutGroup, { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
      import_react9.Reorder.Group,
      {
        axis: "y",
        values: items,
        onReorder: setItems,
        className: "flex flex-col",
        "data-slot": "sortable-list",
        children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_react9.AnimatePresence, { children: items?.map(
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
var import_jsx_runtime40 = require("react/jsx-runtime");
function Table({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    "caption",
    {
      "data-slot": "table-caption",
      className: cn("mt-4 text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/tabs.tsx
var import_class_variance_authority5 = require("class-variance-authority");
var import_radix_ui19 = require("radix-ui");
var import_jsx_runtime41 = require("react/jsx-runtime");
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    import_radix_ui19.Tabs.Root,
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
var tabsListVariants = (0, import_class_variance_authority5.cva)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    import_radix_ui19.Tabs.List,
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
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    import_radix_ui19.Tabs.Trigger,
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
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    import_radix_ui19.Tabs.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 text-sm outline-none", className),
      ...props
    }
  );
}

// src/components/ui/tree.tsx
var React12 = __toESM(require("react"), 1);
var import_lucide_react18 = require("lucide-react");
var import_react10 = require("motion/react");
var import_jsx_runtime42 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(TreeContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    "ul",
    {
      role: "tree",
      "data-slot": "tree",
      className: cn("flex flex-col gap-0.5 text-sm", className),
      ...props,
      children: data.map((node) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(TreeNode, { node, depth: 0 }, node.id))
    }
  ) });
}
function TreeNode({ node, depth = 0 }) {
  const { expandedIds, toggleExpanded, selectedId, changeSelection } = useTree("TreeNode");
  const reducedMotion = (0, import_react10.useReducedMotion)();
  const children = node.children;
  const isFolder = children != null && children.length > 0;
  const isExpanded = isFolder && expandedIds.has(node.id);
  const isSelectable = !isFolder;
  const isSelected = isSelectable && selectedId === node.id;
  const DefaultIcon = isFolder ? isExpanded ? import_lucide_react18.FolderOpenIcon : import_lucide_react18.FolderIcon : import_lucide_react18.FileIcon;
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)("li", { role: "presentation", "data-slot": "tree-node", children: [
    /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
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
          Array.from({ length: depth }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            "span",
            {
              "aria-hidden": "true",
              className: "h-full w-4 shrink-0 self-stretch border-l border-border"
            },
            index
          )),
          isFolder ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            import_lucide_react18.ChevronRightIcon,
            {
              "aria-hidden": "true",
              "data-expanded": isExpanded || void 0,
              className: "size-4 shrink-0 text-muted-foreground transition-transform duration-200 data-expanded:rotate-90"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { "aria-hidden": "true", className: "size-4 shrink-0" }),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
            "span",
            {
              "aria-hidden": "true",
              className: "flex size-4 shrink-0 items-center justify-center text-muted-foreground [&>svg]:size-4",
              children: node.icon ?? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(DefaultIcon, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime42.jsx)("span", { className: "truncate", children: node.label })
        ]
      }
    ),
    isFolder ? /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_react10.AnimatePresence, { initial: false, children: isExpanded && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
      import_react10.motion.ul,
      {
        role: "group",
        "data-slot": "tree-node-children",
        className: "flex flex-col gap-0.5 overflow-hidden",
        initial: reducedMotion ? false : { height: 0, opacity: 0 },
        animate: reducedMotion ? void 0 : { height: "auto", opacity: 1 },
        exit: reducedMotion ? void 0 : { height: 0, opacity: 0 },
        transition: { duration: 0.2, ease: "easeInOut" },
        children: children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(TreeNode, { node: child, depth: depth + 1 }, child.id))
      },
      "tree-node-children"
    ) }) : null
  ] });
}

// src/components/ui/alert-dialog.tsx
var import_radix_ui20 = require("radix-ui");
var import_jsx_runtime43 = require("react/jsx-runtime");
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_radix_ui20.AlertDialog.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_radix_ui20.AlertDialog.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(import_radix_ui20.AlertDialog.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    import_radix_ui20.AlertDialog.Overlay,
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
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsxs)(AlertDialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(AlertDialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
      import_radix_ui20.AlertDialog.Content,
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
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    import_radix_ui20.AlertDialog.Title,
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
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    import_radix_ui20.AlertDialog.Description,
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
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Button, { variant, size, asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    import_radix_ui20.AlertDialog.Action,
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
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(Button, { variant, size, asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    import_radix_ui20.AlertDialog.Cancel,
    {
      "data-slot": "alert-dialog-cancel",
      className: cn(className),
      ...props
    }
  ) });
}

// src/components/ui/context-menu.tsx
var import_radix_ui21 = require("radix-ui");
var import_lucide_react19 = require("lucide-react");
var import_jsx_runtime44 = require("react/jsx-runtime");
function ContextMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_radix_ui21.ContextMenu.Root, { "data-slot": "context-menu", ...props });
}
function ContextMenuTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    import_radix_ui21.ContextMenu.Trigger,
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
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_radix_ui21.ContextMenu.Group, { "data-slot": "context-menu-group", ...props });
}
function ContextMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_radix_ui21.ContextMenu.Portal, { "data-slot": "context-menu-portal", ...props });
}
function ContextMenuSub({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_radix_ui21.ContextMenu.Sub, { "data-slot": "context-menu-sub", ...props });
}
function ContextMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    import_radix_ui21.ContextMenu.RadioGroup,
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
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_radix_ui21.ContextMenu.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    import_radix_ui21.ContextMenu.Content,
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
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    import_radix_ui21.ContextMenu.Item,
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
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
    import_radix_ui21.ContextMenu.SubTrigger,
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
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_lucide_react19.ChevronRightIcon, { className: "ml-auto" })
      ]
    }
  );
}
function ContextMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    import_radix_ui21.ContextMenu.SubContent,
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
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
    import_radix_ui21.ContextMenu.CheckboxItem,
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
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "pointer-events-none absolute right-2", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_radix_ui21.ContextMenu.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          import_lucide_react19.CheckIcon,
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
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
    import_radix_ui21.ContextMenu.RadioItem,
    {
      "data-slot": "context-menu-radio-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)("span", { className: "pointer-events-none absolute right-2", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_radix_ui21.ContextMenu.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          import_lucide_react19.CheckIcon,
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
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    import_radix_ui21.ContextMenu.Label,
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
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
    import_radix_ui21.ContextMenu.Separator,
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
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
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
var import_vaul = require("vaul");
var import_jsx_runtime45 = require("react/jsx-runtime");
function Drawer({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_vaul.Drawer.Root, { "data-slot": "drawer", ...props });
}
function DrawerTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_vaul.Drawer.Trigger, { "data-slot": "drawer-trigger", ...props });
}
function DrawerPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_vaul.Drawer.Portal, { "data-slot": "drawer-portal", ...props });
}
function DrawerClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_vaul.Drawer.Close, { "data-slot": "drawer-close", ...props });
}
function DrawerOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    import_vaul.Drawer.Overlay,
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
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(DrawerOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime45.jsxs)(
      import_vaul.Drawer.Content,
      {
        "data-slot": "drawer-content",
        className: cn(
          "group/drawer-content fixed z-50 flex h-auto flex-col bg-popover text-sm text-popover-foreground data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-xl data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-xl data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-xl data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-xl data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm",
          className
        ),
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime45.jsx)("div", { className: "mx-auto mt-4 hidden h-1 w-[100px] shrink-0 rounded-full bg-muted group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }),
          children
        ]
      }
    )
  ] });
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    import_vaul.Drawer.Title,
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
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    import_vaul.Drawer.Description,
    {
      "data-slot": "drawer-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/dropdown-menu.tsx
var import_radix_ui22 = require("radix-ui");
var import_lucide_react20 = require("lucide-react");
var import_jsx_runtime46 = require("react/jsx-runtime");
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_radix_ui22.DropdownMenu.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_radix_ui22.DropdownMenu.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    import_radix_ui22.DropdownMenu.Trigger,
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_radix_ui22.DropdownMenu.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    import_radix_ui22.DropdownMenu.Content,
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_radix_ui22.DropdownMenu.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    import_radix_ui22.DropdownMenu.Item,
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
    import_radix_ui22.DropdownMenu.CheckboxItem,
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
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-checkbox-item-indicator",
            children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_radix_ui22.DropdownMenu.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              import_lucide_react20.CheckIcon,
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    import_radix_ui22.DropdownMenu.RadioGroup,
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
    import_radix_ui22.DropdownMenu.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
          "span",
          {
            className: "pointer-events-none absolute right-2 flex items-center justify-center",
            "data-slot": "dropdown-menu-radio-item-indicator",
            children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_radix_ui22.DropdownMenu.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
              import_lucide_react20.CheckIcon,
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    import_radix_ui22.DropdownMenu.Label,
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    import_radix_ui22.DropdownMenu.Separator,
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_radix_ui22.DropdownMenu.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsxs)(
    import_radix_ui22.DropdownMenu.SubTrigger,
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
        /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(import_lucide_react20.ChevronRightIcon, { className: "ml-auto" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    import_radix_ui22.DropdownMenu.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn("z-50 min-w-[96px] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
      ...props
    }
  );
}

// src/components/ui/dynamic-island.tsx
var import_react11 = require("react");
var import_react12 = require("motion/react");
var import_jsx_runtime47 = require("react/jsx-runtime");
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
var BlobContext = (0, import_react11.createContext)(void 0);
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
  const [state, dispatch] = (0, import_react11.useReducer)(blobReducer, initialState);
  (0, import_react11.useEffect)(() => {
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
  const setSize = (0, import_react11.useCallback)(
    (newSize) => {
      if (state.previousSize !== newSize && newSize !== state.size) {
        dispatch({ type: "SET_SIZE", newSize });
      }
    },
    [state.previousSize, state.size, dispatch]
  );
  const scheduleAnimation = (0, import_react11.useCallback)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(BlobContext.Provider, { value: contextValue, children });
};
var useDynamicIslandSize = () => {
  const context = (0, import_react11.useContext)(BlobContext);
  if (!context) {
    throw new Error(
      "useDynamicIslandSize must be used within a DynamicIslandProvider"
    );
  }
  return context;
};
var useScheduledAnimations = (animations) => {
  const { scheduleAnimation } = useDynamicIslandSize();
  const animationsRef = (0, import_react11.useRef)(animations);
  (0, import_react11.useEffect)(() => {
    scheduleAnimation(animationsRef.current);
  }, [scheduleAnimation]);
};
var DynamicIslandContainer = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
  const willChange = (0, import_react12.useWillChange)();
  const [screenSize, setScreenSize] = (0, import_react11.useState)("desktop");
  (0, import_react11.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(DynamicIslandContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    import_react12.motion.div,
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
      children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react12.AnimatePresence, { children })
    }
  );
};
var DynamicContainer = ({ className, children }) => {
  const willChange = (0, import_react12.useWillChange)();
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
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    import_react12.motion.div,
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
  const willChange = (0, import_react12.useWillChange)();
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    import_react12.motion.div,
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
  const willChange = (0, import_react12.useWillChange)();
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    import_react12.motion.h3,
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
  const willChange = (0, import_react12.useWillChange)();
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
    import_react12.motion.p,
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
var import_radix_ui23 = require("radix-ui");
var import_jsx_runtime48 = require("react/jsx-runtime");
function HoverCard({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_radix_ui23.HoverCard.Root, { "data-slot": "hover-card", ...props });
}
function HoverCardTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_radix_ui23.HoverCard.Trigger, { "data-slot": "hover-card-trigger", ...props });
}
function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(import_radix_ui23.HoverCard.Portal, { "data-slot": "hover-card-portal", children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    import_radix_ui23.HoverCard.Content,
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
var import_react13 = require("motion/react");
var import_jsx_runtime49 = require("react/jsx-runtime");
function ImageZoom({ alt, src, className, zoomClassName, ...props }) {
  const reducedMotion = (0, import_react13.useReducedMotion)();
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(Dialog, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(DialogTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
      "button",
      {
        type: "button",
        "data-slot": "image-zoom-trigger",
        className: "block cursor-zoom-in rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            "img",
            {
              "data-slot": "image-zoom-thumbnail",
              alt,
              src,
              className: cn("rounded-lg", className),
              ...props
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)("span", { className: "sr-only", children: "Zoom image" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime49.jsxs)(
      DialogContent,
      {
        "aria-describedby": void 0,
        className: "w-fit max-w-[calc(100%-2rem)] bg-transparent p-0 ring-0",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(DialogTitle, { className: "sr-only", children: alt }),
          /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
            import_react13.motion.div,
            {
              "data-slot": "image-zoom-content",
              initial: reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 },
              animate: reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 },
              transition: { duration: reducedMotion ? 0.15 : 0.2, ease: "easeOut" },
              children: /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
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
var import_radix_ui24 = require("radix-ui");
var import_lucide_react21 = require("lucide-react");
var import_jsx_runtime50 = require("react/jsx-runtime");
function Menubar({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    import_radix_ui24.Menubar.Root,
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_radix_ui24.Menubar.Menu, { "data-slot": "menubar-menu", ...props });
}
function MenubarGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_radix_ui24.Menubar.Group, { "data-slot": "menubar-group", ...props });
}
function MenubarPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_radix_ui24.Menubar.Portal, { "data-slot": "menubar-portal", ...props });
}
function MenubarRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_radix_ui24.Menubar.RadioGroup, { "data-slot": "menubar-radio-group", ...props });
}
function MenubarTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    import_radix_ui24.Menubar.Trigger,
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(MenubarPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    import_radix_ui24.Menubar.Content,
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    import_radix_ui24.Menubar.Item,
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    import_radix_ui24.Menubar.CheckboxItem,
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
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_radix_ui24.Menubar.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          import_lucide_react21.CheckIcon,
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    import_radix_ui24.Menubar.RadioItem,
    {
      "data-slot": "menubar-radio-item",
      "data-inset": inset,
      className: cn(
        "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-1.5 pl-7 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("span", { className: "pointer-events-none absolute left-1.5 flex size-4 items-center justify-center [&_svg:not([class*='size-'])]:size-4", children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_radix_ui24.Menubar.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
          import_lucide_react21.CheckIcon,
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    import_radix_ui24.Menubar.Label,
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    import_radix_ui24.Menubar.Separator,
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_radix_ui24.Menubar.Sub, { "data-slot": "menubar-sub", ...props });
}
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(
    import_radix_ui24.Menubar.SubTrigger,
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
        /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_lucide_react21.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function MenubarSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
    import_radix_ui24.Menubar.SubContent,
    {
      "data-slot": "menubar-sub-content",
      className: cn("z-50 min-w-32 origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
      ...props
    }
  );
}

// src/components/ui/sheet.tsx
var import_radix_ui25 = require("radix-ui");
var import_lucide_react22 = require("lucide-react");
var import_jsx_runtime51 = require("react/jsx-runtime");
function Sheet({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_radix_ui25.Dialog.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_radix_ui25.Dialog.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_radix_ui25.Dialog.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_radix_ui25.Dialog.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    import_radix_ui25.Dialog.Overlay,
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
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(SheetOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
      import_radix_ui25.Dialog.Content,
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
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(import_radix_ui25.Dialog.Close, { "data-slot": "sheet-close", asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime51.jsxs)(
            Button,
            {
              variant: "ghost",
              className: "absolute top-3 right-3",
              size: "icon-sm",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
                  import_lucide_react22.XIcon,
                  {}
                ),
                /* @__PURE__ */ (0, import_jsx_runtime51.jsx)("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-0.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    import_radix_ui25.Dialog.Title,
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
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    import_radix_ui25.Dialog.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}

// src/components/ui/sticky-banner.tsx
var import_react14 = require("react");
var import_jsx_runtime52 = require("react/jsx-runtime");
function StickyBanner({
  dismissible = true,
  onDismiss,
  children,
  className,
  ...props
}) {
  const [open, setOpen] = (0, import_react14.useState)(true);
  if (!open) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsxs)(
    "div",
    {
      ...props,
      "data-slot": "sticky-banner",
      className: cn(
        "sticky top-0 z-60 flex items-center justify-center gap-3 bg-gradient-to-r from-primary via-primary to-primary/75 px-4 py-2.5 text-center text-sm text-primary-foreground",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { "data-slot": "sticky-banner-content", className: "flex-1", children }),
        dismissible && /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
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
                children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("path", { d: "M3 3l8 8M11 3l-8 8" })
              }
            )
          }
        )
      ]
    }
  );
}

// src/components/ui/breadcrumb.tsx
var import_radix_ui26 = require("radix-ui");
var import_lucide_react23 = require("lucide-react");
var import_jsx_runtime53 = require("react/jsx-runtime");
function Breadcrumb({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
  const Comp = asChild ? import_radix_ui26.Slot.Root : "a";
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(import_lucide_react23.ChevronRightIcon, {})
    }
  );
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime53.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
          import_lucide_react23.MoreHorizontalIcon,
          {}
        ),
        /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}

// src/components/ui/dock.tsx
var import_react15 = require("react");
var import_react16 = require("motion/react");
var import_jsx_runtime54 = require("react/jsx-runtime");
var DockContext = (0, import_react15.createContext)(null);
function Dock({
  children,
  className,
  baseSize = 40,
  magnification = 64,
  distance = 140
}) {
  const mouseX = (0, import_react16.useMotionValue)(Infinity);
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(DockContext.Provider, { value: { mouseX, baseSize, magnification, distance }, children: /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    import_react16.motion.div,
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
  const ref = (0, import_react15.useRef)(null);
  const reducedMotion = (0, import_react16.useReducedMotion)();
  const fallbackX = (0, import_react16.useMotionValue)(Infinity);
  const ctx = (0, import_react15.useContext)(DockContext);
  const mouseX = ctx?.mouseX ?? fallbackX;
  const baseSize = ctx?.baseSize ?? 40;
  const magnification = ctx?.magnification ?? 64;
  const distance = ctx?.distance ?? 140;
  const distanceFromCursor = (0, import_react16.useTransform)(mouseX, (x) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return x - bounds.x - bounds.width / 2;
  });
  const sizeTarget = (0, import_react16.useTransform)(
    distanceFromCursor,
    [-distance, 0, distance],
    [baseSize, magnification, baseSize]
  );
  const size = (0, import_react16.useSpring)(sizeTarget, {
    mass: 0.1,
    stiffness: 160,
    damping: 13
  });
  return /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(
    import_react16.motion.div,
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
var import_class_variance_authority6 = require("class-variance-authority");
var import_radix_ui27 = require("radix-ui");
var import_lucide_react24 = require("lucide-react");
var import_jsx_runtime55 = require("react/jsx-runtime");
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
    import_radix_ui27.NavigationMenu.Root,
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
        viewport && /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    import_radix_ui27.NavigationMenu.List,
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
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    import_radix_ui27.NavigationMenu.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
var navigationMenuTriggerStyle = (0, import_class_variance_authority6.cva)(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsxs)(
    import_radix_ui27.NavigationMenu.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(import_lucide_react24.ChevronDownIcon, { className: "relative top-px ml-1 size-3 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180", "aria-hidden": "true" })
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    import_radix_ui27.NavigationMenu.Content,
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
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    "div",
    {
      className: cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
        import_radix_ui27.NavigationMenu.Viewport,
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
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    import_radix_ui27.NavigationMenu.Link,
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
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    import_radix_ui27.NavigationMenu.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: cn(
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
    }
  );
}

// src/components/ui/onboarding.tsx
var import_react17 = require("react");
var import_react_use_controllable_state = require("@radix-ui/react-use-controllable-state");
var import_class_variance_authority7 = require("class-variance-authority");
var import_jsx_runtime56 = require("react/jsx-runtime");
var stepIndicatorVariants = (0, import_class_variance_authority7.cva)("flex items-center justify-center gap-2", {
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
var stepDotVariants = (0, import_class_variance_authority7.cva)("rounded-full transition-all duration-200", {
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
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
var OnboardingContext = (0, import_react17.createContext)(null);
function useOnboarding() {
  const ctx = (0, import_react17.useContext)(OnboardingContext);
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
  const [currentStep, setCurrentStep] = (0, import_react_use_controllable_state.useControllableState)({
    prop: controlledValue,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const [stepValue, setStepValueState] = (0, import_react_use_controllable_state.useControllableState)({
    prop: controlledStepValue,
    defaultProp: defaultStepValue,
    onChange: onStepValueChange
  });
  const maxStepValue = controlledMaxStepValue ?? 0;
  const canGoNext = canGoNextFn ? canGoNextFn(currentStep, stepValue) : true;
  const canGoBack = currentStep > 1 || stepValue > 0;
  const handleNext = (0, import_react17.useCallback)(() => {
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
  const handleBack = (0, import_react17.useCallback)(() => {
    if (currentStep === 1 && stepValue > 0) {
      setStepValueState((prev) => prev - 1);
    } else if (currentStep === 2) {
      setCurrentStep(1);
      setStepValueState(maxStepValue);
    } else if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep, stepValue, maxStepValue, setStepValueState, setCurrentStep]);
  const handleComplete = (0, import_react17.useCallback)(() => {
    onComplete?.();
  }, [onComplete]);
  const contextValue = (0, import_react17.useMemo)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(OnboardingContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
      "div",
      {
        className: cn("text-center", className),
        "data-slot": "onboarding-header",
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
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
        title != null && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("h2", { "data-slot": "onboarding-title", children: title }),
        description && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { "data-slot": "onboarding-description", children: description })
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
    return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
      "fieldset",
      {
        className: cn("flex gap-3", className),
        "data-slot": "onboarding-navigation",
        ...props,
        children
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
    "fieldset",
    {
      "aria-label": "Onboarding navigation",
      className: cn("flex gap-3", className),
      "data-slot": "onboarding-navigation",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
        isLastStep ? /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          Button,
          {
            "aria-label": completeLabel,
            className: "flex-1 rounded-xl bg-foreground py-5 text-background hover:bg-foreground/90",
            "data-slot": "onboarding-complete",
            onClick: handleComplete,
            children: completeLabel
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
var ChoiceGroupContext = (0, import_react17.createContext)(null);
function useChoiceGroup() {
  const ctx = (0, import_react17.useContext)(ChoiceGroupContext);
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
  const [value, setValueState] = (0, import_react_use_controllable_state.useControllableState)({
    prop: controlledValue ?? void 0,
    defaultProp: defaultValue ?? null,
    onChange: (v) => v !== null && onValueChange?.(v)
  });
  const setValue = (0, import_react17.useCallback)(
    (v) => {
      setValueState(v);
    },
    [setValueState]
  );
  const contextValue = (0, import_react17.useMemo)(
    () => ({
      value,
      setValue,
      name,
      orientation
    }),
    [value, setValue, name, orientation]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(ChoiceGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
  const handleChange = (0, import_react17.useCallback)(
    (e) => {
      if (e.currentTarget.checked) {
        setValue(itemValue);
      }
    },
    [itemValue, setValue]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
    "label",
    {
      className: cn(className),
      "data-slot": "choice-group-item",
      "data-state": isSelected ? "selected" : "unselected",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
var FeatureCarouselContext = (0, import_react17.createContext)(null);
function useFeatureCarousel() {
  const ctx = (0, import_react17.useContext)(FeatureCarouselContext);
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
  const [value, setValue] = (0, import_react_use_controllable_state.useControllableState)({
    prop: controlledValue,
    defaultProp: defaultValue,
    onChange: onValueChange
  });
  const totalItems = totalItemsProp ?? import_react17.Children.count(children);
  const isActive = (0, import_react17.useCallback)((index) => value === index, [value]);
  const contextValue = (0, import_react17.useMemo)(
    () => ({
      value,
      setValue,
      totalItems,
      isActive
    }),
    [value, setValue, totalItems, isActive]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(FeatureCarouselContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
  const handleClick = (0, import_react17.useCallback)(
    (e) => {
      setValue(index);
      onClick?.(e);
    },
    [index, setValue, onClick]
  );
  const handleKeyDown = (0, import_react17.useCallback)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
  const titleId = (0, import_react17.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { className: cn(className), "data-slot": "tips-list", ...props, children: [
    title && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("p", { className: "sr-only", "data-slot": "tips-list-title", id: titleId, children: title }),
    /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(
    "li",
    {
      className: cn(className),
      "data-number": number,
      "data-slot": "tips-list-item",
      ...props,
      children: [
        number != null && /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("span", { "aria-hidden": true, "data-slot": "tips-list-item-number", children: number }),
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
var import_lucide_react25 = require("lucide-react");
var import_jsx_runtime57 = require("react/jsx-runtime");
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex items-center gap-0.5", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
    Button,
    {
      asChild: true,
      variant: isActive ? "outline" : "ghost",
      size,
      className: cn(className),
      children: /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
    PaginationLink,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("pl-1.5!", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_lucide_react25.ChevronLeftIcon, { "data-icon": "inline-start" }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "hidden sm:block", children: text })
      ]
    }
  );
}
function PaginationNext({
  className,
  text = "Next",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
    PaginationLink,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: cn("pr-1.5!", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "hidden sm:block", children: text }),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(import_lucide_react25.ChevronRightIcon, { "data-icon": "inline-end" })
      ]
    }
  );
}
function PaginationEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(
          import_lucide_react25.MoreHorizontalIcon,
          {}
        ),
        /* @__PURE__ */ (0, import_jsx_runtime57.jsx)("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}

// src/components/ui/stepper.tsx
var import_react18 = require("motion/react");
var import_jsx_runtime58 = require("react/jsx-runtime");
function Stepper({ steps, current, onStepClick, className }) {
  const reducedMotion = (0, import_react18.useReducedMotion)();
  const progress = steps.length > 1 ? current / (steps.length - 1) : 0;
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
    "ol",
    {
      "data-slot": "stepper",
      className: cn("relative flex w-full justify-between", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
          "div",
          {
            "aria-hidden": true,
            "data-slot": "stepper-track",
            className: "absolute top-4 right-4 left-4 -z-10 h-0.5 bg-border",
            children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
              import_react18.motion.div,
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
          return /* @__PURE__ */ (0, import_jsx_runtime58.jsxs)(
            "li",
            {
              "data-slot": "stepper-step",
              className: "flex flex-col items-center gap-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
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
                    children: done ? /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
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
                        children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)("path", { d: "M2.5 7.5l3 3 6-6" })
                      }
                    ) : i + 1
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
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
var import_jsx_runtime59 = require("react/jsx-runtime");
function BrowserMockup({
  url = "velora.dev",
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
    "div",
    {
      "data-slot": "browser-mockup",
      className: cn(
        "overflow-hidden rounded-2xl border bg-card/80 shadow-2xl backdrop-blur",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(
          "div",
          {
            "data-slot": "browser-mockup-toolbar",
            className: "flex items-center gap-3 border-b border-border/60 px-4 py-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "size-3 rounded-full bg-red-500/70" }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "size-3 rounded-full bg-yellow-500/70" }),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("span", { className: "size-3 rounded-full bg-green-500/70" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
                "div",
                {
                  "data-slot": "browser-mockup-url",
                  className: "mx-auto flex h-7 w-64 items-center justify-center rounded-md bg-muted/60 text-xs text-muted-foreground",
                  children: url
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime59.jsx)("div", { className: "w-14" })
            ]
          }
        ),
        children
      ]
    }
  );
}

// src/components/ui/code-block.tsx
var import_react19 = require("react");
var import_lucide_react26 = require("lucide-react");
var import_react20 = require("motion/react");
var import_jsx_runtime60 = require("react/jsx-runtime");
function CodeBlock({
  tabs,
  code,
  language = "bash",
  className
}) {
  const [activeTab, setActiveTab] = (0, import_react19.useState)(0);
  const [copied, setCopied] = (0, import_react19.useState)(false);
  const [direction, setDirection] = (0, import_react19.useState)(0);
  const preRef = (0, import_react19.useRef)(null);
  const tabsContainerRef = (0, import_react19.useRef)(null);
  const tabRefs = (0, import_react19.useRef)([]);
  const [hasOverflow, setHasOverflow] = (0, import_react19.useState)(false);
  const [indicator, setIndicator] = (0, import_react19.useState)(null);
  const measureIndicator = (0, import_react19.useCallback)(() => {
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
  const codeContent = (0, import_react19.useMemo)(() => {
    if (tabs && tabs.length > 0) {
      return tabs;
    }
    if (code) {
      return [{ label: language, code, language }];
    }
    return [];
  }, [tabs, code, language]);
  const currentCode = codeContent[activeTab]?.code || "";
  (0, import_react19.useLayoutEffect)(() => {
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
  (0, import_react19.useLayoutEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
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
        codeContent.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("div", { className: "flex items-center relative pr-2.5", "data-slot": "code-block-tab-bar", children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { ref: tabsContainerRef, className: "relative flex gap-1", children: [
              codeContent.map((tab, index) => /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
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
              indicator && /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
                import_react20.motion.div,
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
        /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("div", { className: "relative overflow-hidden", "data-slot": "code-block-content", children: [
          /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)(
            import_react20.motion.button,
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
                /* @__PURE__ */ (0, import_jsx_runtime60.jsxs)("span", { className: "relative size-3.5", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
                    import_react20.motion.div,
                    {
                      initial: false,
                      animate: {
                        scale: copied ? 0 : 1,
                        opacity: copied ? 0 : 1,
                        rotate: copied ? 90 : 0
                      },
                      transition: { duration: 0.2 },
                      className: "absolute inset-0",
                      children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_lucide_react26.Copy, { className: "size-full" })
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
                    import_react20.motion.div,
                    {
                      initial: false,
                      animate: {
                        scale: copied ? 1 : 0,
                        opacity: copied ? 1 : 0,
                        rotate: copied ? 0 : -90
                      },
                      transition: { duration: 0.2 },
                      className: "absolute inset-0",
                      children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_lucide_react26.Check, { className: "size-full" })
                    }
                  )
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime60.jsx)("span", { children: copied ? "Copied" : "Copy" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
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
              children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_react20.AnimatePresence, { mode: "wait", initial: false, custom: direction, children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
                import_react20.motion.code,
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
var import_react21 = require("react");
var import_jsx_runtime61 = require("react/jsx-runtime");
function CompareSlider({
  before,
  after,
  initial = 50,
  label = "Compare before and after",
  className
}) {
  const [position, setPosition] = (0, import_react21.useState)(initial);
  const ref = (0, import_react21.useRef)(null);
  const moveTo = (clientX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const next = (clientX - rect.left) / rect.width * 100;
    setPosition(Math.min(100, Math.max(0, next)));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime61.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("div", { "data-slot": "compare-slider-after", className: "absolute inset-0", children: after }),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
          "div",
          {
            "data-slot": "compare-slider-before",
            className: "absolute inset-0",
            style: { clipPath: `inset(0 ${100 - position}% 0 0)` },
            children: before
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
          "div",
          {
            "aria-hidden": true,
            "data-slot": "compare-slider-divider",
            style: { left: `${position}%` },
            className: "absolute inset-y-0 w-px -translate-x-1/2 bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.35)]",
            children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
              "span",
              {
                "data-slot": "compare-slider-handle",
                className: "absolute top-1/2 left-1/2 grid size-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-white/20 backdrop-blur-sm",
                children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
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
                    children: /* @__PURE__ */ (0, import_jsx_runtime61.jsx)("path", { d: "M6 4L2.5 8 6 12M10 4l3.5 4-3.5 4" })
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(
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
var React14 = __toESM(require("react"), 1);
var import_date_fns3 = require("date-fns");
var import_jsx_runtime62 = require("react/jsx-runtime");
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
    const dates = data.map((point) => (0, import_date_fns3.parseISO)(point.date)).filter((date) => !Number.isNaN(date.getTime()));
    const earliest = dates.length > 0 ? (0, import_date_fns3.min)(dates) : /* @__PURE__ */ new Date();
    const latest = dates.length > 0 ? (0, import_date_fns3.max)(dates) : /* @__PURE__ */ new Date();
    const start = (0, import_date_fns3.startOfWeek)(earliest);
    const derivedMax = data.reduce(
      (acc, point) => Math.max(acc, point.count),
      0
    );
    return {
      firstWeek: start,
      weeks: Math.max(
        1,
        dates.length > 0 ? (0, import_date_fns3.differenceInCalendarWeeks)((0, import_date_fns3.startOfWeek)(latest), start) + 1 : 1
      ),
      resolvedMax: maxProp ?? Math.max(1, derivedMax)
    };
  }, [data, maxProp]);
  const cells = [];
  for (let i = 0; i < weeks * 7; i++) {
    const date = (0, import_date_fns3.addDays)(firstWeek, i);
    const key = (0, import_date_fns3.format)(date, "yyyy-MM-dd");
    const count = countByDate.get(key) ?? 0;
    const level = toLevel(count, resolvedMax);
    const alpha = LEVEL_ALPHAS[level] ?? 0;
    cells.push(
      /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
        "div",
        {
          "data-slot": "contribution-graph-cell",
          "data-level": level,
          title: `${count} ${count === 1 ? "contribution" : "contributions"} on ${(0, import_date_fns3.format)(date, "MMM d, yyyy")}`,
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
      const weekStart = (0, import_date_fns3.addDays)(firstWeek, w * 7);
      const currentMonth = (0, import_date_fns3.getMonth)(weekStart);
      if (currentMonth !== previousMonth) {
        monthSpans.push({ column: w, label: (0, import_date_fns3.format)(weekStart, "MMM") });
        previousMonth = currentMonth;
      }
    }
  }
  return /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(
    "div",
    {
      "data-slot": "contribution-graph",
      className: cn("flex w-full text-[0.6rem]", className),
      ...props,
      children: [
        weekdayLabels === "left" && /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
          "div",
          {
            "aria-hidden": "true",
            "data-slot": "contribution-graph-weekdays",
            className: "mr-1.5 flex shrink-0 flex-col gap-[3px]",
            style: showMonthLabels ? { paddingTop: "calc(1rem + 3px)" } : void 0,
            children: WEEKDAY_LABELS.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
              "div",
              {
                className: "flex h-3 items-center text-muted-foreground",
                children: label
              },
              index
            ))
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime62.jsx)("div", { "data-slot": "contribution-graph-scroll", className: "overflow-x-auto pb-1", children: /* @__PURE__ */ (0, import_jsx_runtime62.jsxs)(
          "div",
          {
            "data-slot": "contribution-graph-grid",
            className: "grid w-max gap-[3px]",
            style: {
              gridTemplateColumns: `repeat(${weeks}, 0.75rem)`,
              gridTemplateRows: showMonthLabels ? "1rem repeat(7, 0.75rem)" : "repeat(7, 0.75rem)"
            },
            children: [
              showMonthLabels && monthSpans.map(({ column, label }) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
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
var import_jsx_runtime63 = require("react/jsx-runtime");
var devWarnedInvalidCode = false;
function Flag({
  country,
  ratio = "4x3",
  decorative = false,
  alt,
  rounded = false,
  className,
  style,
  ...props
}) {
  const code = country.trim().toLowerCase();
  const isValidCode = /^[a-z]{2}$/.test(code);
  if (process.env.NODE_ENV !== "production" && !devWarnedInvalidCode && !isValidCode) {
    devWarnedInvalidCode = true;
    console.warn(
      `<Flag> expected a 2-letter ISO 3166-1 alpha-2 code, got "${country}" \u2014 the flag will render blank.`
    );
  }
  const src = `https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/${ratio}/${code}.svg`;
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
    "span",
    {
      role: decorative ? void 0 : "img",
      "aria-hidden": decorative || void 0,
      "aria-label": decorative ? void 0 : alt ?? `${code.toUpperCase()} flag`,
      className: cn(
        "inline-block bg-contain bg-center bg-no-repeat align-middle leading-none",
        ratio === "4x3" ? "aspect-[4/3] w-[1.333em]" : "aspect-square w-[1em]",
        rounded && "overflow-hidden rounded-sm",
        className
      ),
      style: {
        backgroundImage: isValidCode ? `url("${src}")` : void 0,
        ...style
      },
      ...props
    }
  );
}

// src/components/ui/iphone-mockup.tsx
var import_jsx_runtime64 = require("react/jsx-runtime");
function IPhoneMockup({ className, children, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(
    "div",
    {
      "data-slot": "iphone-mockup",
      className: cn("relative mx-auto w-70", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("span", { className: "absolute top-24 -left-0.75 h-8 w-1 rounded-l-md bg-neutral-700" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("span", { className: "absolute top-36 -left-0.75 h-12 w-1 rounded-l-md bg-neutral-700" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("span", { className: "absolute top-52 -left-0.75 h-12 w-1 rounded-l-md bg-neutral-700" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("span", { className: "absolute top-32 -right-0.75 h-16 w-1 rounded-r-md bg-neutral-700" }),
        /* @__PURE__ */ (0, import_jsx_runtime64.jsxs)(
          "div",
          {
            "data-slot": "iphone-mockup-frame",
            className: "relative aspect-[9/19] overflow-hidden rounded-[3rem] border-10 border-neutral-800 bg-background shadow-2xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
                "span",
                {
                  "data-slot": "iphone-mockup-dynamic-island",
                  className: "absolute top-2.5 left-1/2 z-20 h-6.5 w-24 -translate-x-1/2 rounded-full bg-neutral-900"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime64.jsx)("div", { "data-slot": "iphone-mockup-screen", className: "absolute inset-0", children })
            ]
          }
        )
      ]
    }
  );
}

// src/components/ui/qr-code.tsx
var React15 = __toESM(require("react"), 1);
var import_qrcode = require("qrcode");
var import_jsx_runtime65 = require("react/jsx-runtime");
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
    (0, import_qrcode.toString)(value, svgOptions).then((raw) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
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
var React16 = __toESM(require("react"), 1);
var import_lucide_react27 = require("lucide-react");
var import_jsx_runtime66 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(
    "figure",
    {
      "data-slot": "snippet",
      className: cn(
        "flex flex-col gap-1 overflow-hidden rounded-xl border border-border bg-muted py-3 text-sm",
        className
      ),
      ...props,
      children: [
        showHeader && /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)(
          "figcaption",
          {
            "data-slot": "snippet-header",
            className: cn(
              "flex items-center gap-2 px-4",
              label == null && "justify-end"
            ),
            children: [
              label != null && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
                "span",
                {
                  "data-slot": "snippet-label",
                  className: "min-w-0 truncate font-mono text-xs text-muted-foreground",
                  children: label
                }
              ),
              showCopy && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon-xs",
                  "aria-label": copied ? "Copied to clipboard" : "Copy to clipboard",
                  onClick: () => void handleCopy(),
                  className: "ml-auto",
                  children: copied ? /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_lucide_react27.CheckIcon, { className: "text-primary", "aria-hidden": "true" }) : /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(import_lucide_react27.CopyIcon, { "aria-hidden": "true" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
          "pre",
          {
            "data-slot": "snippet-code",
            className: "overflow-x-auto px-4 font-mono text-sm leading-relaxed text-foreground",
            children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("code", { children: lines ? lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime66.jsxs)("span", { className: "block whitespace-pre", children: [
              showPrompt && /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
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
var import_react22 = require("react");
var import_react23 = require("motion/react");
var import_jsx_runtime67 = require("react/jsx-runtime");
function Terminal({
  lines,
  title = "bash",
  speed = 18,
  className
}) {
  const ref = (0, import_react22.useRef)(null);
  const inView = (0, import_react23.useInView)(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reducedMotion = (0, import_react23.useReducedMotion)();
  const [progress, setProgress] = (0, import_react22.useState)({ line: 0, char: 0 });
  const done = reducedMotion || progress.line >= lines.length - 1 && progress.char >= (lines[lines.length - 1]?.length ?? 0);
  (0, import_react22.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(
    "div",
    {
      ref,
      "data-slot": "terminal",
      className: cn(
        "w-full overflow-hidden rounded-xl border bg-neutral-950 font-mono text-sm shadow-xl",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(
          "div",
          {
            "data-slot": "terminal-titlebar",
            className: "flex items-center gap-3 border-b border-white/10 px-4 py-2.5",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("div", { className: "flex gap-1.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("span", { className: "size-3 rounded-full bg-red-500/80" }),
                /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("span", { className: "size-3 rounded-full bg-yellow-500/80" }),
                /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("span", { className: "size-3 rounded-full bg-green-500/80" })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("span", { className: "text-xs text-neutral-500", children: title })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
          "div",
          {
            "data-slot": "terminal-body",
            className: "min-h-32 space-y-1.5 p-4 text-neutral-300",
            children: visibleLines.map((line, i) => {
              const isCommand = lines[i]?.startsWith("$ ");
              const isLast = i === visibleLines.length - 1;
              return /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)("p", { "data-slot": "terminal-line", className: "leading-relaxed", children: [
                isCommand ? /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(import_jsx_runtime67.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("span", { className: "text-emerald-400", children: "$ " }),
                  /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("span", { className: "text-neutral-100", children: line.slice(2) })
                ] }) : /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("span", { className: "text-neutral-400", children: line }),
                isLast && !done && /* @__PURE__ */ (0, import_jsx_runtime67.jsx)("span", { className: "animate-pulse text-neutral-100", children: "\u258D" })
              ] }, i);
            })
          }
        )
      ]
    }
  );
}

// src/components/ui/timeline.tsx
var React17 = __toESM(require("react"), 1);
var import_radix_ui28 = require("radix-ui");
var import_jsx_runtime68 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
    TimelineContext.Provider,
    {
      value: { activeStep: currentStep, setActiveStep },
      children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
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
  const Comp = asChild ? import_radix_ui28.Slot.Root : "time";
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)("div", { "data-slot": "timeline-header", className: cn(className), ...props });
}
function TimelineIndicator({
  asChild = false,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
    "h3",
    {
      "data-slot": "timeline-title",
      className: cn("text-sm font-medium", className),
      ...props
    }
  );
}

// src/components/ui/alert.tsx
var import_class_variance_authority8 = require("class-variance-authority");
var import_jsx_runtime69 = require("react/jsx-runtime");
var alertVariants = (0, import_class_variance_authority8.cva)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(
    "div",
    {
      "data-slot": "alert-action",
      className: cn("absolute top-2 right-2", className),
      ...props
    }
  );
}

// src/components/ui/animated-circular-progress-bar.tsx
var import_jsx_runtime70 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(
          "svg",
          {
            "data-slot": "animated-circular-progress-bar-gauge",
            fill: "none",
            className: "size-full",
            strokeWidth: "2",
            viewBox: "0 0 100 100",
            children: [
              currentPercent <= 90 && currentPercent >= 0 && /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
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
              /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
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
var import_radix_ui29 = require("radix-ui");
var import_jsx_runtime71 = require("react/jsx-runtime");
function Avatar({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
    import_radix_ui29.Avatar.Root,
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
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
    import_radix_ui29.Avatar.Image,
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
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
    import_radix_ui29.Avatar.Fallback,
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
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
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
var import_jsx_runtime72 = require("react/jsx-runtime");
var AvatarCircles = ({
  numPeople,
  className,
  avatarUrls
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(
    "div",
    {
      "data-slot": "avatar-circles",
      className: cn("z-10 flex -space-x-4 rtl:space-x-reverse", className),
      children: [
        avatarUrls.map((url, index) => /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
          "a",
          {
            "data-slot": "avatar-circles-item",
            href: url.profileUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            children: /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(
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
        (numPeople ?? 0) > 0 && /* @__PURE__ */ (0, import_jsx_runtime72.jsxs)(
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
var import_jsx_runtime73 = require("react/jsx-runtime");
function EmptyState({
  className,
  title,
  description,
  icon,
  actions,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)(
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
        icon != null && /* @__PURE__ */ (0, import_jsx_runtime73.jsx)(
          "div",
          {
            "data-slot": "empty-state-icon",
            "aria-hidden": "true",
            className: "text-muted-foreground [&>svg]:size-10",
            children: icon
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime73.jsxs)("div", { className: "flex max-w-90 flex-col items-center gap-1", children: [
          /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("h3", { "data-slot": "empty-state-title", className: "font-heading text-base font-medium text-foreground", children: title }),
          description != null && /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("p", { "data-slot": "empty-state-description", className: "text-sm text-muted-foreground", children: description })
        ] }),
        actions != null && /* @__PURE__ */ (0, import_jsx_runtime73.jsx)("div", { "data-slot": "empty-state-actions", className: "mt-1 flex flex-row items-center gap-2", children: actions })
      ]
    }
  );
}

// src/components/ui/meter.tsx
var React18 = __toESM(require("react"), 1);
var import_jsx_runtime74 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
    MeterContext.Provider,
    {
      value: { min: min2, max: safeMax, value: clamped, percent, format: format4 },
      children: /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime74.jsx)(
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
var import_radix_ui30 = require("radix-ui");
var import_jsx_runtime75 = require("react/jsx-runtime");
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
    import_radix_ui30.Progress.Root,
    {
      "data-slot": "progress",
      className: cn(
        "relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime75.jsx)(
        import_radix_ui30.Progress.Indicator,
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
var React19 = __toESM(require("react"), 1);
var import_date_fns4 = require("date-fns");
var import_jsx_runtime76 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime76.jsxs)(
    "time",
    {
      "data-slot": "relative-time",
      dateTime: isValid ? dateObject.toISOString() : void 0,
      title: isValid ? dateObject.toLocaleString() : void 0,
      className: cn("whitespace-nowrap text-sm text-muted-foreground", className),
      ...props,
      children: [
        prefix,
        isValid ? (0, import_date_fns4.formatDistanceToNow)(dateObject, { addSuffix: true }) : null,
        suffix
      ]
    }
  );
}

// src/components/ui/skeleton.tsx
var import_jsx_runtime77 = require("react/jsx-runtime");
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime77.jsx)(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("animate-pulse rounded-md bg-muted", className),
      ...props
    }
  );
}

// src/components/ui/sonner.tsx
var import_sonner = require("sonner");
var import_lucide_react28 = require("lucide-react");
var import_jsx_runtime78 = require("react/jsx-runtime");
var Toaster = ({ theme = "system", ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(
    import_sonner.Toaster,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react28.CircleCheckIcon, { className: "size-4" }),
        info: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react28.InfoIcon, { className: "size-4" }),
        warning: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react28.TriangleAlertIcon, { className: "size-4" }),
        error: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react28.OctagonXIcon, { className: "size-4" }),
        loading: /* @__PURE__ */ (0, import_jsx_runtime78.jsx)(import_lucide_react28.Loader2Icon, { className: "size-4 animate-spin" })
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
var import_class_variance_authority9 = require("class-variance-authority");
var import_jsx_runtime79 = require("react/jsx-runtime");
var spinnerVariants = (0, import_class_variance_authority9.cva)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime79.jsxs)(
    "span",
    {
      role: "status",
      "data-slot": "spinner",
      "data-size": size,
      className: cn(spinnerVariants({ size, className })),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
          "svg",
          {
            viewBox: "0 0 24 24",
            fill: "none",
            "aria-hidden": "true",
            className: "size-full animate-spin",
            children: /* @__PURE__ */ (0, import_jsx_runtime79.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime79.jsx)("span", { className: "sr-only", children: "Loading" })
      ]
    }
  );
}

// src/components/ui/timer.tsx
var import_react24 = __toESM(require("react"), 1);
var import_class_variance_authority10 = require("class-variance-authority");
var import_lucide_react29 = require("lucide-react");
var import_jsx_runtime80 = require("react/jsx-runtime");
var timerVariants = (0, import_class_variance_authority10.cva)(
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
var timerIconVariants = (0, import_class_variance_authority10.cva)("transition-transform duration-[2000ms]", {
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
var timerDisplayVariants = (0, import_class_variance_authority10.cva)("font-mono tabular-nums tracking-tight", {
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
var TimerRoot = import_react24.default.forwardRef(
  ({ variant, size, loading, className, children, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
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
var TimerIcon = import_react24.default.forwardRef(
  ({ size, loading, icon: Icon = import_lucide_react29.Clock, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
      "div",
      {
        ref,
        className: cn(timerIconVariants({ size, loading }), className),
        "data-slot": "timer-icon",
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(Icon, { className: "w-full h-full" })
      }
    );
  }
);
TimerIcon.displayName = "TimerIcon";
var TimerDisplay = import_react24.default.forwardRef(
  ({ size, time, label, className, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(
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
var Timer = import_react24.default.forwardRef(
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
    return /* @__PURE__ */ (0, import_jsx_runtime80.jsxs)(
      TimerRoot,
      {
        ref,
        variant,
        size,
        loading,
        className,
        ...props,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(TimerIcon, { size, loading }),
          /* @__PURE__ */ (0, import_jsx_runtime80.jsx)(TimerDisplay, { size, time: formattedTime.display })
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
  const [elapsedTime, setElapsedTime] = (0, import_react24.useState)(0);
  const [milliseconds, setMilliseconds] = (0, import_react24.useState)(0);
  const [isRunning, setIsRunning] = (0, import_react24.useState)(false);
  const startTimeRef = (0, import_react24.useRef)(0);
  const rafRef = (0, import_react24.useRef)(null);
  const reset = (0, import_react24.useCallback)(() => {
    setElapsedTime(0);
    setMilliseconds(0);
    startTimeRef.current = 0;
  }, []);
  const start = (0, import_react24.useCallback)(() => {
    setIsRunning(true);
    startTimeRef.current = performance.now();
  }, []);
  const stop = (0, import_react24.useCallback)(() => {
    setIsRunning(false);
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
  }, []);
  (0, import_react24.useEffect)(() => {
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
  (0, import_react24.useEffect)(() => {
    if (loading) {
      if (resetOnLoadingChange) {
        reset();
      }
      start();
    } else {
      stop();
    }
  }, [loading, resetOnLoadingChange, reset, start, stop]);
  (0, import_react24.useEffect)(() => {
    if (onTick) {
      onTick(elapsedTime, milliseconds);
    }
  }, [elapsedTime, milliseconds, onTick]);
  const formatTime = (0, import_react24.useCallback)(
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
var import_react25 = require("react");
var import_react26 = require("motion/react");
var import_jsx_runtime81 = require("react/jsx-runtime");
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
  const id = (0, import_react25.useId)();
  const [pathD, setPathD] = (0, import_react25.useState)("");
  const [svgDimensions, setSvgDimensions] = (0, import_react25.useState)({ width: 0, height: 0 });
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
  (0, import_react25.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
          "path",
          {
            d: pathD,
            stroke: pathColor,
            strokeWidth: pathWidth,
            strokeOpacity: pathOpacity,
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)(
          "path",
          {
            d: pathD,
            strokeWidth: pathWidth,
            stroke: `url(#${id})`,
            strokeOpacity: "1",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime81.jsxs)(
          import_react26.motion.linearGradient,
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
              /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("stop", { stopColor: gradientStartColor, stopOpacity: "0" }),
              /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("stop", { stopColor: gradientStartColor }),
              /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("stop", { offset: "32.5%", stopColor: gradientStopColor }),
              /* @__PURE__ */ (0, import_jsx_runtime81.jsx)("stop", { offset: "100%", stopColor: gradientStopColor, stopOpacity: "0" })
            ]
          }
        ) })
      ]
    }
  );
}

// src/components/ui/animated-grid-pattern.tsx
var import_react27 = require("react");
var import_react28 = require("motion/react");
var import_jsx_runtime82 = require("react/jsx-runtime");
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
  const id = (0, import_react27.useId)();
  const containerRef = (0, import_react27.useRef)(null);
  const [dimensions, setDimensions] = (0, import_react27.useState)({ width: 0, height: 0 });
  const [squares, setSquares] = (0, import_react27.useState)([]);
  const getPos = (0, import_react27.useCallback)(() => {
    return [
      Math.floor(Math.random() * dimensions.width / width),
      Math.floor(Math.random() * dimensions.height / height)
    ];
  }, [dimensions.height, dimensions.width, height, width]);
  const generateSquares = (0, import_react27.useCallback)(
    (count) => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        pos: getPos(),
        iteration: 0
      }));
    },
    [getPos]
  );
  const updateSquarePosition = (0, import_react27.useCallback)(
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
  (0, import_react27.useEffect)(() => {
    if (dimensions.width && dimensions.height) {
      setSquares(generateSquares(numSquares));
    }
  }, [dimensions.width, dimensions.height, generateSquares, numSquares]);
  (0, import_react27.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime82.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
          "pattern",
          {
            id,
            width,
            height,
            patternUnits: "userSpaceOnUse",
            x,
            y,
            children: /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
              "path",
              {
                d: `M.5 ${height}V.5H${width}`,
                fill: "none",
                strokeDasharray
              }
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("rect", { width: "100%", height: "100%", fill: `url(#${id})` }),
        /* @__PURE__ */ (0, import_jsx_runtime82.jsx)("svg", { x, y, className: "overflow-visible", children: squares.map(({ pos: [squareX, squareY], id: id2, iteration }, index) => /* @__PURE__ */ (0, import_jsx_runtime82.jsx)(
          import_react28.motion.rect,
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
var import_react29 = __toESM(require("react"), 1);
var import_react30 = require("motion/react");
var import_jsx_runtime83 = require("react/jsx-runtime");
function AnimatedListItem({ children }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
    import_react30.motion.div,
    {
      "data-slot": "animated-list-item",
      ...animations,
      layout: true,
      className: "mx-auto w-full",
      children
    }
  );
}
var AnimatedList = import_react29.default.memo(
  ({ children, className, delay = 1e3, ...props }) => {
    const [index, setIndex] = (0, import_react29.useState)(0);
    const childrenArray = (0, import_react29.useMemo)(
      () => import_react29.default.Children.toArray(children),
      [children]
    );
    (0, import_react29.useEffect)(() => {
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
    const itemsToShow = (0, import_react29.useMemo)(() => {
      const result = childrenArray.slice(0, index + 1).reverse();
      return result;
    }, [index, childrenArray]);
    return /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(
      "div",
      {
        "data-slot": "animated-list",
        className: cn(`flex flex-col items-center gap-4`, className),
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(import_react30.AnimatePresence, { children: itemsToShow.map((item) => /* @__PURE__ */ (0, import_jsx_runtime83.jsx)(AnimatedListItem, { children: item }, item.key)) })
      }
    );
  }
);
AnimatedList.displayName = "AnimatedList";

// src/components/ui/animated-shiny-text.tsx
var import_jsx_runtime84 = require("react/jsx-runtime");
var AnimatedShinyText = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime84.jsx)(
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
var import_react31 = require("react");
var import_jsx_runtime85 = require("react/jsx-runtime");
var AuroraText = (0, import_react31.memo)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime85.jsxs)("span", { "data-slot": "aurora-text", className: cn("relative inline-block", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)("span", { className: "sr-only", children }),
      /* @__PURE__ */ (0, import_jsx_runtime85.jsx)(
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
var import_react32 = require("react");
var import_react33 = require("motion/react");
var import_jsx_runtime86 = require("react/jsx-runtime");
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
  const ref = (0, import_react32.useRef)(null);
  const inViewResult = (0, import_react33.useInView)(ref, { once: true, margin: inViewMargin });
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
  return /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(import_react33.AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime86.jsx)(
    import_react33.motion.div,
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
var import_react34 = require("motion/react");
var import_jsx_runtime87 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
    "div",
    {
      "data-slot": "border-beam",
      className: "pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box]",
      style: { "--border-beam-width": `${borderWidth}px` },
      children: /* @__PURE__ */ (0, import_jsx_runtime87.jsx)(
        import_react34.motion.div,
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
var import_react35 = require("react");
var import_canvas_confetti = __toESM(require("canvas-confetti"), 1);
var import_jsx_runtime88 = require("react/jsx-runtime");
var ConfettiContext = (0, import_react35.createContext)({});
function Confetti({
  ref,
  options,
  globalOptions = { resize: true, useWorker: true },
  manualstart = false,
  children,
  ...props
}) {
  const instanceRef = (0, import_react35.useRef)(null);
  const canvasRef = (0, import_react35.useCallback)(
    (node) => {
      if (node !== null) {
        if (instanceRef.current) return;
        instanceRef.current = import_canvas_confetti.default.create(node, {
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
  const fire = (0, import_react35.useCallback)(
    async (opts = {}) => {
      try {
        await instanceRef.current?.({ ...options, ...opts });
      } catch (error) {
        console.error("Confetti error:", error);
      }
    },
    [options]
  );
  const api = (0, import_react35.useMemo)(() => ({ fire }), [fire]);
  (0, import_react35.useImperativeHandle)(ref, () => api, [api]);
  (0, import_react35.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsxs)(ConfettiContext.Provider, { value: api, children: [
    /* @__PURE__ */ (0, import_jsx_runtime88.jsx)("canvas", { "data-slot": "confetti", ref: canvasRef, ...props }),
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
      await (0, import_canvas_confetti.default)({
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
  return /* @__PURE__ */ (0, import_jsx_runtime88.jsx)(Button, { "data-slot": "confetti-button", onClick: handleClick, ...props, children });
}

// src/components/ui/dot-pattern.tsx
var import_react36 = require("react");
var import_react37 = require("motion/react");
var import_jsx_runtime89 = require("react/jsx-runtime");
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
  const id = (0, import_react36.useId)();
  const containerRef = (0, import_react36.useRef)(null);
  const [dimensions, setDimensions] = (0, import_react36.useState)({ width: 0, height: 0 });
  (0, import_react36.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime89.jsxs)("radialGradient", { id: `${id}-gradient`, children: [
          /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "1" }),
          /* @__PURE__ */ (0, import_jsx_runtime89.jsx)("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0" })
        ] }) }),
        dots.map((dot) => /* @__PURE__ */ (0, import_jsx_runtime89.jsx)(
          import_react37.motion.circle,
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
var import_react38 = require("react");
var import_jsx_runtime90 = require("react/jsx-runtime");
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
  const id = (0, import_react38.useId)();
  return /* @__PURE__ */ (0, import_jsx_runtime90.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
          "pattern",
          {
            id,
            width,
            height,
            patternUnits: "userSpaceOnUse",
            x,
            y,
            children: /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
              "path",
              {
                d: `M.5 ${height}V.5H${width}`,
                fill: "none",
                strokeDasharray
              }
            )
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: `url(#${id})` }),
        squares && /* @__PURE__ */ (0, import_jsx_runtime90.jsx)("svg", { x, y, className: "overflow-visible", children: squares.map(([x2, y2]) => /* @__PURE__ */ (0, import_jsx_runtime90.jsx)(
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
var import_react39 = require("react");
var import_react40 = require("motion/react");
var import_jsx_runtime91 = require("react/jsx-runtime");
var motionElements = {
  article: import_react40.motion.article,
  div: import_react40.motion.div,
  h1: import_react40.motion.h1,
  h2: import_react40.motion.h2,
  h3: import_react40.motion.h3,
  h4: import_react40.motion.h4,
  h5: import_react40.motion.h5,
  h6: import_react40.motion.h6,
  li: import_react40.motion.li,
  p: import_react40.motion.p,
  section: import_react40.motion.section,
  span: import_react40.motion.span
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
  const [displayText, setDisplayText] = (0, import_react39.useState)(
    () => children.split("")
  );
  const [isAnimating, setIsAnimating] = (0, import_react39.useState)(false);
  const iterationCount = (0, import_react39.useRef)(0);
  const elementRef = (0, import_react39.useRef)(null);
  const handleAnimationTrigger = () => {
    if (animateOnHover && !isAnimating) {
      iterationCount.current = 0;
      setIsAnimating(true);
    }
  };
  (0, import_react39.useEffect)(() => {
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
  (0, import_react39.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
    MotionComponent,
    {
      ref: elementRef,
      "data-slot": "hyper-text",
      className: cn("overflow-hidden py-2 text-4xl font-bold", className),
      onMouseEnter: handleAnimationTrigger,
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(import_react40.AnimatePresence, { children: displayText.map((letter, index) => /* @__PURE__ */ (0, import_jsx_runtime91.jsx)(
        import_react40.motion.span,
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
var import_react41 = require("react");
var import_react42 = require("motion/react");
var import_jsx_runtime92 = require("react/jsx-runtime");
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
  const mouseX = (0, import_react42.useMotionValue)(-gradientSize);
  const mouseY = (0, import_react42.useMotionValue)(-gradientSize);
  const orbX = (0, import_react42.useSpring)(mouseX, { stiffness: 250, damping: 30, mass: 0.6 });
  const orbY = (0, import_react42.useSpring)(mouseY, { stiffness: 250, damping: 30, mass: 0.6 });
  const orbVisible = (0, import_react42.useSpring)(0, { stiffness: 300, damping: 35 });
  const modeRef = (0, import_react41.useRef)(mode);
  const glowOpacityRef = (0, import_react41.useRef)(glowOpacity);
  const gradientSizeRef = (0, import_react41.useRef)(gradientSize);
  (0, import_react41.useEffect)(() => {
    modeRef.current = mode;
  }, [mode]);
  (0, import_react41.useEffect)(() => {
    glowOpacityRef.current = glowOpacity;
  }, [glowOpacity]);
  (0, import_react41.useEffect)(() => {
    gradientSizeRef.current = gradientSize;
  }, [gradientSize]);
  const reset = (0, import_react41.useCallback)(
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
  const handlePointerMove = (0, import_react41.useCallback)(
    (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );
  (0, import_react41.useEffect)(() => {
    reset("init");
  }, [reset]);
  (0, import_react41.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime92.jsxs)(
    import_react42.motion.div,
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
        background: import_react42.useMotionTemplate`
          linear-gradient(var(--color-background) 0 0) padding-box,
          radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
            ${gradientFrom},
            ${gradientTo},
            var(--color-border) 100%
          ) border-box
        `
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { className: "bg-background absolute inset-px z-20 rounded-[inherit]" }),
        mode === "gradient" && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
          import_react42.motion.div,
          {
            suppressHydrationWarning: true,
            className: "pointer-events-none absolute inset-px z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            style: {
              background: import_react42.useMotionTemplate`
              radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
                ${gradientColor},
                transparent 100%
              )
            `,
              opacity: gradientOpacity
            }
          }
        ),
        mode === "orb" && /* @__PURE__ */ (0, import_jsx_runtime92.jsx)(
          import_react42.motion.div,
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
        /* @__PURE__ */ (0, import_jsx_runtime92.jsx)("div", { "data-slot": "magic-card-content", className: "relative z-40", children })
      ]
    }
  );
}

// src/components/ui/marquee.tsx
var import_jsx_runtime93 = require("react/jsx-runtime");
function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
    "div",
    {
      "data-slot": "marquee",
      className: cn(
        "group flex gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className
      ),
      ...props,
      children: Array.from({ length: repeat }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime93.jsx)(
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
var import_react43 = require("react");
var import_jsx_runtime94 = require("react/jsx-runtime");
var Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 10,
  angle = 215,
  className
}) => {
  const [meteorStyles, setMeteorStyles] = (0, import_react43.useState)(
    []
  );
  (0, import_react43.useEffect)(() => {
    const styles = [...new Array(number)].map(() => ({
      "--angle": -angle + "deg",
      top: "-5%",
      left: `calc(0% + ${Math.floor(Math.random() * window.innerWidth)}px)`,
      animationDelay: Math.random() * (maxDelay - minDelay) + minDelay + "s",
      animationDuration: Math.floor(Math.random() * (maxDuration - minDuration) + minDuration) + "s"
    }));
    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration, angle]);
  return /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(import_jsx_runtime94.Fragment, { children: [...meteorStyles].map((style, idx) => (
    // Meteor Head
    /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
      "span",
      {
        "data-slot": "meteors",
        style: { ...style },
        className: cn(
          "animate-meteor pointer-events-none absolute size-0.5 rotate-(--angle) rounded-full bg-muted-foreground shadow-[0_0_0_1px_#ffffff10]",
          className
        ),
        children: /* @__PURE__ */ (0, import_jsx_runtime94.jsx)(
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
var import_react44 = require("react");
var import_react45 = require("motion/react");
var import_jsx_runtime95 = require("react/jsx-runtime");
function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}) {
  const ref = (0, import_react44.useRef)(null);
  const motionValue = (0, import_react45.useMotionValue)(direction === "down" ? value : startValue);
  const springValue = (0, import_react45.useSpring)(motionValue, {
    damping: 60,
    stiffness: 100
  });
  const isInView = (0, import_react45.useInView)(ref, { once: true, margin: "0px" });
  (0, import_react44.useEffect)(() => {
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
  (0, import_react44.useEffect)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime95.jsx)(
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
var React23 = __toESM(require("react"), 1);
var import_jsx_runtime96 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime96.jsxs)(import_jsx_runtime96.Fragment, { children: [
    path && /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        "data-slot": "orbiting-circles-path",
        className: "pointer-events-none absolute inset-0 size-full",
        children: /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(
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
      return /* @__PURE__ */ (0, import_jsx_runtime96.jsx)(
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
var import_jsx_runtime97 = require("react/jsx-runtime");
function ProgressiveBlur({
  className,
  height = "30%",
  position = "bottom",
  blurLevels = [0.5, 1, 2, 4, 8, 16, 32, 64]
}) {
  const divElements = Array(blurLevels.length - 2).fill(null);
  return /* @__PURE__ */ (0, import_jsx_runtime97.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
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
          return /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime97.jsx)(
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
var React24 = __toESM(require("react"), 1);
var import_jsx_runtime98 = require("react/jsx-runtime");
var Ripple = React24.memo(function Ripple2({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
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
        return /* @__PURE__ */ (0, import_jsx_runtime98.jsx)(
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
var import_react46 = require("motion/react");
var import_jsx_runtime99 = require("react/jsx-runtime");
function ScrollProgress({
  className,
  ref,
  ...props
}) {
  const { scrollYProgress } = (0, import_react46.useScroll)();
  return /* @__PURE__ */ (0, import_jsx_runtime99.jsx)(
    import_react46.motion.div,
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
var import_jsx_runtime100 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime100.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime100.jsx)("div", { className: "@container-[size] absolute inset-0 -z-30 overflow-visible blur-[2px]", children: /* @__PURE__ */ (0, import_jsx_runtime100.jsx)("div", { className: "animate-shimmer-slide absolute inset-0 aspect-square h-[100cqh] rounded-none [mask:none]", children: /* @__PURE__ */ (0, import_jsx_runtime100.jsx)("div", { className: "animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" }) }) }),
        children,
        /* @__PURE__ */ (0, import_jsx_runtime100.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime100.jsx)("div", { className: "absolute inset-(--cut) -z-20 [border-radius:var(--radius)] [background:var(--bg)]" })
      ]
    }
  );
}

// src/components/ui/typing-animation.tsx
var import_react47 = require("react");
var import_react48 = require("motion/react");
var import_jsx_runtime101 = require("react/jsx-runtime");
var motionElements2 = {
  article: import_react48.motion.article,
  div: import_react48.motion.div,
  h1: import_react48.motion.h1,
  h2: import_react48.motion.h2,
  h3: import_react48.motion.h3,
  h4: import_react48.motion.h4,
  h5: import_react48.motion.h5,
  h6: import_react48.motion.h6,
  li: import_react48.motion.li,
  p: import_react48.motion.p,
  section: import_react48.motion.section,
  span: import_react48.motion.span
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
  const [displayedText, setDisplayedText] = (0, import_react47.useState)("");
  const [currentWordIndex, setCurrentWordIndex] = (0, import_react47.useState)(0);
  const [currentCharIndex, setCurrentCharIndex] = (0, import_react47.useState)(0);
  const [phase, setPhase] = (0, import_react47.useState)("typing");
  const elementRef = (0, import_react47.useRef)(null);
  const isInView = (0, import_react48.useInView)(elementRef, {
    amount: 0.3,
    once: true
  });
  const wordsToAnimate = (0, import_react47.useMemo)(
    () => words ?? (children ? [children] : []),
    [words, children]
  );
  const hasMultipleWords = wordsToAnimate.length > 1;
  const typingSpeed = typeSpeed ?? duration;
  const deletingSpeed = deleteSpeed ?? typingSpeed / 2;
  const shouldStart = startOnView ? isInView : true;
  const animationSourceKey = (0, import_react47.useMemo)(
    () => words ? words.join("\0") : children ?? "",
    [words, children]
  );
  (0, import_react47.useEffect)(() => {
    setDisplayedText("");
    setCurrentWordIndex(0);
    setCurrentCharIndex(0);
    setPhase("typing");
  }, [animationSourceKey]);
  (0, import_react47.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime101.jsxs)(
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
        shouldShowCursor && /* @__PURE__ */ (0, import_jsx_runtime101.jsx)(
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
var import_react49 = require("react");
var import_react50 = require("motion/react");
var import_jsx_runtime102 = require("react/jsx-runtime");
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
  const [index, setIndex] = (0, import_react49.useState)(0);
  (0, import_react49.useEffect)(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);
    return () => clearInterval(interval);
  }, [words, duration]);
  return /* @__PURE__ */ (0, import_jsx_runtime102.jsx)("div", { "data-slot": "word-rotate", className: "overflow-hidden py-2", children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(import_react50.AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_runtime102.jsx)(
    import_react50.motion.h1,
    {
      "data-slot": "word-rotate-text",
      className: cn(className),
      ...motionProps,
      children: words[index]
    },
    words[index]
  ) }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.cjs.map