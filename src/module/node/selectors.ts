import SelectorClass from '@/module/util/rootSelcector';
import {
  IFullTicket, INodesState, ITicket, IFullHeader, INodeSize, INodeCoordinates,
} from '@/type/types';

export default class NodeSelector extends SelectorClass {
  useNodeState = (): INodesState => this.useSelector((state) => state.node)

  useTickets = (): IFullTicket => this.useNodeState().tickets;

  useHeaders = (): IFullHeader => this.useNodeState().headers;

  useTicketById = (id: string): ITicket => this.useTickets()[id]

  useNodePositionAndSize = (id: string): {position: INodeCoordinates; size: INodeSize} => this.useSelector((state) => {
    const { position, size } = state.node.tickets[id];
    return { position, size };
  });

  useSelectedNodes = (): string[] => this.useNodeState().selectedNodes;
}
