import * as React from 'react';

type TreeNodeData = {
    id: string;
    label: string;
    icon?: React.ReactNode;
    children?: TreeNodeData[];
};
declare function Tree({ data, expandedIds: expandedIdsProp, defaultExpandedIds, onExpandedChange, selectedId: selectedIdProp, defaultSelectedId, onSelectionChange, className, ...props }: React.ComponentProps<"ul"> & {
    data: TreeNodeData[];
    expandedIds?: string[];
    defaultExpandedIds?: string[];
    onExpandedChange?: (expandedIds: string[]) => void;
    selectedId?: string | null;
    defaultSelectedId?: string | null;
    onSelectionChange?: (id: string | null) => void;
}): React.JSX.Element;
declare function TreeNode({ node, depth }: {
    node: TreeNodeData;
    depth?: number;
}): React.JSX.Element;

export { Tree, TreeNode, type TreeNodeData };
