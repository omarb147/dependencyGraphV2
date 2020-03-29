import NodeSelectorClass from '@/module/node/selectors';
import VectorDispatchClass from '@/module/vector/dispatch';

export const useVectorWrap = (fromNodeId: string, toNodeId: string) => {
  const NodeSelector = new NodeSelectorClass();
  const VectorDispatch = new VectorDispatchClass();

  const fromNode = NodeSelector.useNodePositionAndSize(fromNodeId);
  const toNode = NodeSelector.useNodePositionAndSize(toNodeId);

  return {
    fromNode,
    toNode,
    VectorDispatch,
  };
};
