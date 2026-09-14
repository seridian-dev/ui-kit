// Clean-room implementation for @seridian/ui-kit.
// Functional design inspired by the publicly documented behavior of Kibo UI's
// Tree (https://kibo-ui.com) — no upstream source code was viewed or copied.
// Built on this kit's primitives; zero additional dependencies.
"use client"

import * as React from "react"
import { ChevronRightIcon, FileIcon, FolderIcon, FolderOpenIcon } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

import { cn } from "@/lib/utils"

type TreeNodeData = {
  id: string
  label: string
  icon?: React.ReactNode
  children?: TreeNodeData[]
}

type TreeContextValue = {
  expandedIds: ReadonlySet<string>
  toggleExpanded: (id: string) => void
  selectedId: string | null
  changeSelection: (id: string) => void
}

const TreeContext = React.createContext<TreeContextValue | null>(null)

function useTree(componentName: string): TreeContextValue {
  const context = React.useContext(TreeContext)
  if (!context) {
    throw new Error(`<${componentName}> must be used within <Tree>`)
  }
  return context
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
}: React.ComponentProps<"ul"> & {
  data: TreeNodeData[]
  expandedIds?: string[]
  defaultExpandedIds?: string[]
  onExpandedChange?: (expandedIds: string[]) => void
  selectedId?: string | null
  defaultSelectedId?: string | null
  onSelectionChange?: (id: string | null) => void
}) {
  const isExpandedControlled = expandedIdsProp !== undefined
  const [uncontrolledExpanded, setUncontrolledExpanded] = React.useState<Set<string>>(
    () => new Set(defaultExpandedIds)
  )
  const isSelectionControlled = selectedIdProp !== undefined
  const [uncontrolledSelected, setUncontrolledSelected] =
    React.useState<string | null>(defaultSelectedId)

  const expandedIds = isExpandedControlled
    ? new Set(expandedIdsProp)
    : uncontrolledExpanded
  const selectedId = isSelectionControlled ? selectedIdProp : uncontrolledSelected

  const toggleExpanded = React.useCallback(
    (id: string) => {
      const next = new Set(isExpandedControlled ? expandedIdsProp : uncontrolledExpanded)
      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }
      const nextIds = Array.from(next)
      if (!isExpandedControlled) {
        setUncontrolledExpanded(next)
      }
      onExpandedChange?.(nextIds)
    },
    [
      isExpandedControlled,
      expandedIdsProp,
      uncontrolledExpanded,
      onExpandedChange,
    ]
  )

  const changeSelection = React.useCallback(
    (id: string) => {
      const next = isSelectionControlled ? selectedIdProp : uncontrolledSelected
      const nextId = next === id ? null : id
      if (!isSelectionControlled) {
        setUncontrolledSelected(nextId)
      }
      onSelectionChange?.(nextId)
    },
    [isSelectionControlled, selectedIdProp, uncontrolledSelected, onSelectionChange]
  )

  const contextValue = React.useMemo<TreeContextValue>(
    () => ({ expandedIds, toggleExpanded, selectedId, changeSelection }),
    [expandedIds, toggleExpanded, selectedId, changeSelection]
  )

  return (
    <TreeContext.Provider value={contextValue}>
      <ul
        role="tree"
        data-slot="tree"
        className={cn("flex flex-col gap-0.5 text-sm", className)}
        {...props}
      >
        {data.map((node) => (
          <TreeNode key={node.id} node={node} depth={0} />
        ))}
      </ul>
    </TreeContext.Provider>
  )
}

function TreeNode({ node, depth = 0 }: { node: TreeNodeData; depth?: number }) {
  const { expandedIds, toggleExpanded, selectedId, changeSelection } = useTree("TreeNode")
  const reducedMotion = useReducedMotion()

  const children = node.children
  const isFolder = children != null && children.length > 0
  const isExpanded = isFolder && expandedIds.has(node.id)
  const isSelectable = !isFolder
  const isSelected = isSelectable && selectedId === node.id

  const DefaultIcon = isFolder
    ? isExpanded
      ? FolderOpenIcon
      : FolderIcon
    : FileIcon

  return (
    <li role="presentation" data-slot="tree-node">
      <button
        type="button"
        role="treeitem"
        aria-selected={isFolder ? undefined : isSelected}
        aria-expanded={isFolder ? isExpanded : undefined}
        data-slot="tree-node-row"
        data-expanded={isExpanded || undefined}
        data-selected={isSelected || undefined}
        onClick={() => (isFolder ? toggleExpanded(node.id) : changeSelection(node.id))}
        className={cn(
          "flex h-8 w-full items-center gap-1.5 rounded-lg px-2 text-left text-sm outline-none select-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 aria-selected:bg-accent",
          depth > 0 && "pl-0"
        )}
      >
        {Array.from({ length: depth }).map((_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="h-full w-4 shrink-0 self-stretch border-l border-border"
          />
        ))}
        {isFolder ? (
          <ChevronRightIcon
            aria-hidden="true"
            data-expanded={isExpanded || undefined}
            className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 data-expanded:rotate-90"
          />
        ) : (
          <span aria-hidden="true" className="size-4 shrink-0" />
        )}
        <span
          aria-hidden="true"
          className="flex size-4 shrink-0 items-center justify-center text-muted-foreground [&>svg]:size-4"
        >
          {node.icon ?? <DefaultIcon />}
        </span>
        <span className="truncate">{node.label}</span>
      </button>
      {isFolder ? (
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.ul
              key="tree-node-children"
              role="group"
              data-slot="tree-node-children"
              className="flex flex-col gap-0.5 overflow-hidden"
              initial={reducedMotion ? false : { height: 0, opacity: 0 }}
              animate={reducedMotion ? undefined : { height: "auto", opacity: 1 }}
              exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {children.map((child) => (
                <TreeNode key={child.id} node={child} depth={depth + 1} />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      ) : null}
    </li>
  )
}

export { Tree, TreeNode }
export type { TreeNodeData }
