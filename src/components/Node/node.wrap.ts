import NodesDispatchClass from '@/module/node/dispatch';
import NodesSelectorClass from '@/module/node/selectors';

export const useNodeWrap = () => {
  const NodesDispatch = new NodesDispatchClass();
  const NodesSelector = new NodesSelectorClass();
  const selectedTickets = NodesSelector.useSelectedTickets();

  return { selectedTickets, NodesDispatch };
};
