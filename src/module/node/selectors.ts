import SelectorClass from '@/module/util/rootSelcector';

export default class NodeSelector extends SelectorClass {
  useNodes = () => this.useSelector((state) => state.node.nodes);

  useNodePosition = (id: string) => this.useSelector((state) => state.node.nodes[id].position);

  useSelectedNodes = () => this.useSelector((state) => state.node.selectedNodes);
}
