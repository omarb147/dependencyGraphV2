import NodesDispatchClass from '@/module/node/dispatch';
import { DraggableData } from 'react-rnd';

export const selectNode = (
  selectedTickets: string[],
  id: string,
  selected: boolean,
  NodesDispatch: NodesDispatchClass,
): void => {
  // should not have more than 2 items selected at a time
  if (selected) {
    NodesDispatch.deselectNode(id);
  } else {
    if (selectedTickets.length >= 2) NodesDispatch.deselectAllNodes();
    NodesDispatch.selectNode(id);
  }
};

export const updateNodePosition = (
  data: DraggableData,
  NodesDispatch: NodesDispatchClass,
  nodeId: string,
): void => {
  const { x, y } = data;
  NodesDispatch.updateNodePosition(nodeId, x, y);
};
