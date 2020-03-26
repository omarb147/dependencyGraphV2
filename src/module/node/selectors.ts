import SelectorClass from '@/module/util/rootSelcector';
import { IFullNode, INodesState } from '@/type/types';

export default class NodeSelector extends SelectorClass {
  getNodeState = (): INodesState => this.useSelector((state) => state.node)

  useNodes = (): IFullNode => this.getNodeState().nodes;

  useNodePositionAndSize = (id: string) => this.useSelector((state) => {
    const { position, size } = state.node.nodes[id];
    return { position, size };
  });

  useSelectedNodes = () => this.getNodeState().selectedNodes;
}
