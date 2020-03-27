import SelectorClass from '@/module/util/rootSelcector';

export default class NodeSelector extends SelectorClass {
  useNodes = () => this.useSelector((state) => state.node.nodes);

  useSelectedNodes = () => this.useSelector((state) => state.node.selectedNodes);
}
