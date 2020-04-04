import SelectorClass from '@/module/util/rootSelcector';
import {
  IFullNode, INodesState, INode, IFullHeader, INodeSize, INodeCoordinates,
} from '@/type/types';

export default class NodeSelector extends SelectorClass {
  useNodeState = (): INodesState => this.useSelector((state) => state.node)

  useNodes = (): IFullNode => this.useNodeState().nodes;

  useHeaders = (): IFullHeader => this.useNodeState().headers;

  useNodeById = (id: string): INode => this.useNodes()[id]

  useNodePositionAndSize = (id: string): {position: INodeCoordinates; size: INodeSize} => this.useSelector((state) => {
    const { position, size } = state.node.nodes[id];
    return { position, size };
  });

  useSelectedNodes = (): string[] => this.useNodeState().selectedNodes;
}
