import SelectorClass from '@/module/util/rootSelcector';

export default class VectorSelector extends SelectorClass {
  useVectors = () => this.useSelector((state) => state.vector.vectors);
}
