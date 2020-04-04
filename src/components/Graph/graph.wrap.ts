import NodesDispatchClass from '@/module/node/dispatch';
import NodesSelectorClass from '@/module/node/selectors';
import VectorDispatchClass from '@/module/vector/dispatch';
import VectorSelectorClass from '@/module/vector/selectors';
import { useKeyPress } from '../../hooks/useKeyPress';

export const useGraphWrap = () => {
  const NodesDispatch = new NodesDispatchClass();
  const NodesSelector = new NodesSelectorClass();

  const VectorDispatch = new VectorDispatchClass();
  const VectorsSelectors = new VectorSelectorClass();

  const nodes = NodesSelector.useNodes();
  const selectedNodes = NodesSelector.useSelectedNodes();
  const vectors = VectorsSelectors.useVectors();

  // Set up KeyDown Handler on Enter Key
  const enterPressed = useKeyPress('Enter');

  return { vector:{ vectors, VectorDispatch }, node:{nodes, selectedNodes, NodesDispatch}, enterPressed };
}
