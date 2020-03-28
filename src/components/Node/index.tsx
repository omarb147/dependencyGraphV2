import React from 'react';
import { Rnd, DraggableData } from 'react-rnd';
import { INode } from '@/type/types';
import Card from '@/components/Card';
import NodesDispatchClass from '@/module/node/dispatch';
import NodesSelectorClass from '@/module/node/selectors';

interface INodeComponentProps extends Omit<INode, 'position' | 'size'> {
  selected: boolean;
}

const selectNode = (
  selectedNodes: string[],
  id: string,
  selected: boolean,
  NodesDispatch: NodesDispatchClass,
): void => {
  // should not have more than 2 items selected
  if (selected) {
    NodesDispatch.deselectNode(id);
  } else {
    if (selectedNodes.length >= 2) NodesDispatch.deselectAllNodes();
    NodesDispatch.selectNode(id);
  }
};

const onNodeDrag = (
  data: DraggableData,
  NodesDispatch: NodesDispatchClass,
  nodeId: string,
): void => {
  const { x, y } = data;
  NodesDispatch.updateNodePosition(nodeId, x, y);
};

const Node: React.FC<INodeComponentProps> = (props: INodeComponentProps) => {
  const NodesDispatch = new NodesDispatchClass();
  const NodesSelector = new NodesSelectorClass();
  const selectedNodes = NodesSelector.useSelectedNodes();
  const {
    id, text, color, selected,
  } = props;
  return (
    <Rnd
      key={id}
      enableResizing={{
        top: false,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      className={id}
      default={{
        x: 0,
        y: 0,
        width: 'auto',
        height: 'auto',
      }}
      onDragStart={() => {
        selectNode(selectedNodes, id, selected, NodesDispatch);
      }}
      onDrag={(e, data): void => {
        onNodeDrag(data, NodesDispatch, id);
      }}
    >
      <Card text={text} color={color} selected={selected} />
    </Rnd>
  );
};

export default Node;
