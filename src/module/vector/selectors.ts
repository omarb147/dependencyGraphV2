import SelectorClass from '@/module/util/rootSelector';

export default class VectorSelector extends SelectorClass {
  useVectors = () => this.useSelector((state) => state.vector.vectors);
}
