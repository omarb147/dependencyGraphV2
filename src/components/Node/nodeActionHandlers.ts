import NodesDispatchClass from '@/module/node/dispatch';
import { DraggableData } from 'react-rnd';
import { NodeTypes } from '@/type/types';

export const selectNode = (
  selectedTickets: string[],
  id: string,
  selected: boolean,
  NodesDispatch: NodesDispatchClass,
  type: NodeTypes,
): void => {
  if (type === 'ticket') {
    // should not have more than 2 items selected at a time
    if (selected) {
      NodesDispatch.deselectNode(id);
    } else {
      if (selectedTickets.length >= 2) NodesDispatch.deselectAllNodes();
      NodesDispatch.selectNode(id);
    }
  }
};

export const updateNodePosition = (
  data: DraggableData,
  NodesDispatch: NodesDispatchClass,
  nodeId: string,
  type: NodeTypes,
): void => {
  if (type === 'ticket') {
    const { x, y } = data;
    NodesDispatch.updateNodePosition(nodeId, x, y);
  }
};

export const updateNodeSize = (
  itemId: string,
  offsetHeight: number,
  offsetWidth: number,
  NodesDispatch: NodesDispatchClass,
  type: NodeTypes,
): void => {
  if (type === 'ticket') {
    NodesDispatch.updateNodeSize(itemId, offsetHeight, offsetWidth);
  }
};
