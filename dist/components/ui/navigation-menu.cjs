"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/ui/navigation-menu.tsx
var navigation_menu_exports = {};
__export(navigation_menu_exports, {
  NavigationMenu: () => NavigationMenu,
  NavigationMenuContent: () => NavigationMenuContent,
  NavigationMenuIndicator: () => NavigationMenuIndicator,
  NavigationMenuItem: () => NavigationMenuItem,
  NavigationMenuLink: () => NavigationMenuLink,
  NavigationMenuList: () => NavigationMenuList,
  NavigationMenuTrigger: () => NavigationMenuTrigger,
  NavigationMenuViewport: () => NavigationMenuViewport,
  navigationMenuTriggerStyle: () => navigationMenuTriggerStyle
});
module.exports = __toCommonJS(navigation_menu_exports);
var import_class_variance_authority = require("class-variance-authority");
var import_utils = require("../../lib/utils.cjs");
var import_radix_ui = require("radix-ui");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_radix_ui.NavigationMenu.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: (0, import_utils.cn)(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.NavigationMenu.List,
    {
      "data-slot": "navigation-menu-list",
      className: (0, import_utils.cn)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.NavigationMenu.Item,
    {
      "data-slot": "navigation-menu-item",
      className: (0, import_utils.cn)("relative", className),
      ...props
    }
  );
}
var navigationMenuTriggerStyle = (0, import_class_variance_authority.cva)(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted"
);
function NavigationMenuTrigger({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_radix_ui.NavigationMenu.Trigger,
    {
      "data-slot": "navigation-menu-trigger",
      className: (0, import_utils.cn)(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDownIcon, { className: "relative top-px ml-1 size-3 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180", "aria-hidden": "true" })
      ]
    }
  );
}
function NavigationMenuContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.NavigationMenu.Content,
    {
      "data-slot": "navigation-menu-content",
      className: (0, import_utils.cn)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      className: (0, import_utils.cn)(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_radix_ui.NavigationMenu.Viewport,
        {
          "data-slot": "navigation-menu-viewport",
          className: (0, import_utils.cn)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.NavigationMenu.Link,
    {
      "data-slot": "navigation-menu-link",
      className: (0, import_utils.cn)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_radix_ui.NavigationMenu.Indicator,
    {
      "data-slot": "navigation-menu-indicator",
      className: (0, import_utils.cn)(
        "top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
});
//# sourceMappingURL=navigation-menu.cjs.map