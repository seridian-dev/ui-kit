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

// src/components/ui/pagination.tsx
var pagination_exports = {};
__export(pagination_exports, {
  Pagination: () => Pagination,
  PaginationContent: () => PaginationContent,
  PaginationEllipsis: () => PaginationEllipsis,
  PaginationItem: () => PaginationItem,
  PaginationLink: () => PaginationLink,
  PaginationNext: () => PaginationNext,
  PaginationPrevious: () => PaginationPrevious
});
module.exports = __toCommonJS(pagination_exports);
var import_utils = require("../../lib/utils.cjs");
var import_button = require("./button.cjs");
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: (0, import_utils.cn)("mx-auto flex w-full justify-center", className),
      ...props
    }
  );
}
function PaginationContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "ul",
    {
      "data-slot": "pagination-content",
      className: (0, import_utils.cn)("flex items-center gap-0.5", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_button.Button,
    {
      asChild: true,
      variant: isActive ? "outline" : "ghost",
      size,
      className: (0, import_utils.cn)(className),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    PaginationLink,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: (0, import_utils.cn)("pl-1.5!", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronLeftIcon, { "data-icon": "inline-start" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block", children: text })
      ]
    }
  );
}
function PaginationNext({
  className,
  text = "Next",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    PaginationLink,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: (0, import_utils.cn)("pr-1.5!", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden sm:block", children: text }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronRightIcon, { "data-icon": "inline-end" })
      ]
    }
  );
}
function PaginationEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "span",
    {
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: (0, import_utils.cn)(
        "flex size-8 items-center justify-center [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_lucide_react.MoreHorizontalIcon,
          {}
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
});
//# sourceMappingURL=pagination.cjs.map