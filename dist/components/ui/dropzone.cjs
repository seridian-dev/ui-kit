"use client";
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

// src/components/ui/dropzone.tsx
var dropzone_exports = {};
__export(dropzone_exports, {
  Dropzone: () => Dropzone,
  formatBytes: () => formatBytes
});
module.exports = __toCommonJS(dropzone_exports);
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_utils = require("../../lib/utils.cjs");
var import_button = require("./button.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
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
  const inputRef = React.useRef(null);
  const dragDepth = React.useRef(0);
  const itemsRef = React.useRef([]);
  const [items, setItems] = React.useState([]);
  const [rejections, setRejections] = React.useState([]);
  const [isDragging, setIsDragging] = React.useState(false);
  itemsRef.current = items;
  React.useEffect(() => {
    return () => {
      for (const item of itemsRef.current) {
        if (item.previewUrl) URL.revokeObjectURL(item.previewUrl);
      }
    };
  }, []);
  const addFiles = React.useCallback(
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
  const removeItem = React.useCallback((id) => {
    setItems((prev) => {
      const target = prev.find((item) => item.id === id);
      if (target?.previewUrl) URL.revokeObjectURL(target.previewUrl);
      itemsRef.current = prev.filter((item) => item.id !== id);
      return prev.filter((item) => item.id !== id);
    });
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      "data-slot": "dropzone",
      className: (0, import_utils.cn)("flex flex-col gap-3", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
            className: (0, import_utils.cn)(
              "flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
              disabled ? "pointer-events-none opacity-50" : "cursor-pointer hover:bg-muted/50 data-dragging:border-primary data-dragging:bg-accent/50"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_lucide_react.UploadCloudIcon,
                {
                  "aria-hidden": "true",
                  className: "size-8 text-muted-foreground"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col gap-0.5", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-sm font-medium", children: "Drag & drop files here, or click to browse" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { "data-slot": "dropzone-hint", className: "text-xs text-muted-foreground", children: hint ?? `Up to ${maxFiles ?? "unlimited"} files${maxSize !== void 0 ? ` \xB7 max ${formatBytes(maxSize)} each` : ""}` })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
        rejections.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { "data-slot": "dropzone-rejections", className: "flex flex-col gap-1", children: rejections.map((rejection) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "li",
          {
            className: "text-xs text-destructive",
            "data-slot": "dropzone-rejection",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "font-medium", children: rejection.name }),
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
                "\u2014 ",
                rejection.reason
              ] })
            ]
          },
          rejection.id
        )) }),
        items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { "data-slot": "dropzone-files", className: "flex flex-col gap-2", children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "li",
          {
            "data-slot": "dropzone-file",
            className: "flex items-center gap-3 rounded-lg border border-border bg-background p-2",
            children: [
              item.previewUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                  "img",
                  {
                    src: item.previewUrl,
                    alt: "",
                    "aria-hidden": "true",
                    className: "size-10 shrink-0 rounded-md border border-border object-cover"
                  }
                )
              ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "span",
                {
                  "aria-hidden": "true",
                  className: "flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-muted-foreground",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.FileIcon, { className: "size-5" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "truncate text-sm", children: item.file.name }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-xs text-muted-foreground", children: formatBytes(item.file.size) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                import_button.Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "icon-xs",
                  "aria-label": `Remove ${item.file.name}`,
                  onClick: () => removeItem(item.id),
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.XIcon, {})
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Dropzone,
  formatBytes
});
//# sourceMappingURL=dropzone.cjs.map