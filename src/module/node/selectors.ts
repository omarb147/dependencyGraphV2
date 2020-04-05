import SelectorClass from '@/module/util/rootSelector';
import {
  IFullTicket, INodesState, ITicket, IFullHeader, INodeSize, INodeCoordinates, IHeader,
} from '@/type/types';

export default class NodeSelector extends SelectorClass {
  useNodeState = (): INodesState => this.useSelector((state) => state.node)

  useTickets = (): IFullTicket => this.useNodeState().tickets;

  useHeaders = (): IFullHeader => this.useNodeState().headers;

  useTicketById = (id: string): ITicket => this.useTickets()[id];

  useHeaderById = (id: string): IHeader => this.useHeaders()[id];

  useNodePositionAndSize = (id: string): {position: INodeCoordinates; size: INodeSize} => this.useSelector((state) => {
    const { position, size } = state.node.tickets[id];
    return { position, size };
  });

  useSelectedTickets = (): string[] => this.useNodeState().selectedTickets;
}
