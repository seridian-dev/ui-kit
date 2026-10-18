"use client";

// src/components/ui/sortable-list.tsx
import {
  useState
} from "react";
import { Trash } from "lucide-react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  Reorder,
  useDragControls
} from "motion/react";
import useMeasure from "react-use-measure";
import { cn } from "../../lib/utils.js";
import { Checkbox } from "./checkbox.js";
import { jsx, jsxs } from "react/jsx-runtime";
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
  let [ref, bounds] = useMeasure();
  const [isDragging, setIsDragging] = useState(false);
  const dragControls = useDragControls();
  const handleDragStart = (event) => {
    setIsDragging(true);
    dragControls.start(event, { snapToCursor: true });
    handleDrag();
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  return /* @__PURE__ */ jsx(motion.div, { className: cn("", className), "data-slot": "sortable-list-item", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center", children: [
    /* @__PURE__ */ jsxs(
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
          /* @__PURE__ */ jsx("div", { ref, className: cn(isExpanded ? "" : "", "z-20 "), children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              layout: "position",
              className: "flex items-center justify-center ",
              children: [
                /* @__PURE__ */ jsx(AnimatePresence, { children: !isExpanded ? /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, filter: "blur(4px)" },
                    animate: { opacity: 1, filter: "blur(0px)" },
                    exit: { opacity: 0, filter: "blur(4px)" },
                    transition: { duration: 1e-3 },
                    className: "flex  items-center space-x-2 ",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "pl-3 pt-1", children: /* @__PURE__ */ jsx(
                        Checkbox,
                        {
                          checked: item.checked,
                          id: `checkbox-${item.id}`,
                          "aria-label": "Mark to delete",
                          onCheckedChange: () => onCompleteItem(item.id),
                          className: "h-5 w-5 rounded-md border-border bg-muted/30 data-[state=checked]:bg-foreground data-[state=checked]:text-red-200"
                        }
                      ) }),
                      /* @__PURE__ */ jsx("p", { className: "font-mono text-xs pl-1 text-muted-foreground", children: order + 1 }),
                      /* @__PURE__ */ jsx(
                        motion.div,
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
                          children: /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx(
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
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: item.checked ? /* @__PURE__ */ jsx(
      motion.div,
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
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "popLayout", children: item.checked ? /* @__PURE__ */ jsx(
      motion.div,
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
        children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-3 text-sm font-medium  transition-colors duration-150   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            onClick: () => onRemoveItem(item.id),
            children: /* @__PURE__ */ jsx(Trash, { className: "h-4 w-4 text-red-400 transition-colors duration-150 fill-red-400/60 " })
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
    return /* @__PURE__ */ jsx(LayoutGroup, { children: /* @__PURE__ */ jsx(
      Reorder.Group,
      {
        axis: "y",
        values: items,
        onReorder: setItems,
        className: "flex flex-col",
        "data-slot": "sortable-list",
        children: /* @__PURE__ */ jsx(AnimatePresence, { children: items?.map(
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
export {
  SortableList,
  SortableListItem
};
//# sourceMappingURL=sortable-list.js.map