import SelectorClass from '@/module/util/rootSelcector';

export default class NodeSelector extends SelectorClass {
  useNodes = () => this.useSelector((state) => state.nodes);
}
