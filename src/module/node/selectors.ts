import SelectorClass from '@/module/util/rootSelcector';

export default class NodeSelector extends SelectorClass {
  useNodes = () => this.useSelector((state) => state.node.nodes);

  useNodePositionAndSize = (id: string) => this.useSelector((state) => {
    const { position, size } = state.node.nodes[id];
    return { position, size };
  });

  useSelectedNodes = () => this.useSelector((state) => state.node.selectedNodes);
}
