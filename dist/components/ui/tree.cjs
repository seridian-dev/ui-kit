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

// src/components/ui/tree.tsx
var tree_exports = {};
__export(tree_exports, {
  Tree: () => Tree,
  TreeNode: () => TreeNode
});
module.exports = __toCommonJS(tree_exports);
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");
var import_react = require("motion/react");
var import_utils = require("../../lib/utils.cjs");
var import_jsx_runtime = require("react/jsx-runtime");
var TreeContext = React.createContext(null);
function useTree(componentName) {
  const context = React.useContext(TreeContext);
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
  const [uncontrolledExpanded, setUncontrolledExpanded] = React.useState(
    () => new Set(defaultExpandedIds)
  );
  const isSelectionControlled = selectedIdProp !== void 0;
  const [uncontrolledSelected, setUncontrolledSelected] = React.useState(defaultSelectedId);
  const expandedIds = isExpandedControlled ? new Set(expandedIdsProp) : uncontrolledExpanded;
  const selectedId = isSelectionControlled ? selectedIdProp : uncontrolledSelected;
  const toggleExpanded = React.useCallback(
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
  const changeSelection = React.useCallback(
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
  const contextValue = React.useMemo(
    () => ({ expandedIds, toggleExpanded, selectedId, changeSelection }),
    [expandedIds, toggleExpanded, selectedId, changeSelection]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "ul",
    {
      role: "tree",
      "data-slot": "tree",
      className: (0, import_utils.cn)("flex flex-col gap-0.5 text-sm", className),
      ...props,
      children: data.map((node) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeNode, { node, depth: 0 }, node.id))
    }
  ) });
}
function TreeNode({ node, depth = 0 }) {
  const { expandedIds, toggleExpanded, selectedId, changeSelection } = useTree("TreeNode");
  const reducedMotion = (0, import_react.useReducedMotion)();
  const children = node.children;
  const isFolder = children != null && children.length > 0;
  const isExpanded = isFolder && expandedIds.has(node.id);
  const isSelectable = !isFolder;
  const isSelected = isSelectable && selectedId === node.id;
  const DefaultIcon = isFolder ? isExpanded ? import_lucide_react.FolderOpenIcon : import_lucide_react.FolderIcon : import_lucide_react.FileIcon;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { role: "presentation", "data-slot": "tree-node", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        className: (0, import_utils.cn)(
          "flex h-8 w-full items-center gap-1.5 rounded-lg px-2 text-left text-sm outline-none select-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 aria-selected:bg-accent",
          depth > 0 && "pl-0"
        ),
        children: [
          Array.from({ length: depth }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "span",
            {
              "aria-hidden": "true",
              className: "h-full w-4 shrink-0 self-stretch border-l border-border"
            },
            index
          )),
          isFolder ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_lucide_react.ChevronRightIcon,
            {
              "aria-hidden": "true",
              "data-expanded": isExpanded || void 0,
              className: "size-4 shrink-0 text-muted-foreground transition-transform duration-200 data-expanded:rotate-90"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { "aria-hidden": "true", className: "size-4 shrink-0" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "span",
            {
              "aria-hidden": "true",
              className: "flex size-4 shrink-0 items-center justify-center text-muted-foreground [&>svg]:size-4",
              children: node.icon ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefaultIcon, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "truncate", children: node.label })
        ]
      }
    ),
    isFolder ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.AnimatePresence, { initial: false, children: isExpanded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react.motion.ul,
      {
        role: "group",
        "data-slot": "tree-node-children",
        className: "flex flex-col gap-0.5 overflow-hidden",
        initial: reducedMotion ? false : { height: 0, opacity: 0 },
        animate: reducedMotion ? void 0 : { height: "auto", opacity: 1 },
        exit: reducedMotion ? void 0 : { height: 0, opacity: 0 },
        transition: { duration: 0.2, ease: "easeInOut" },
        children: children.map((child) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TreeNode, { node: child, depth: depth + 1 }, child.id))
      },
      "tree-node-children"
    ) }) : null
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tree,
  TreeNode
});
//# sourceMappingURL=tree.cjs.map