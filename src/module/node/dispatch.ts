import DispatchClass from '@/module/util/rootDispatch';
import {
  addNode, selectNode, deselectNode, deselectAllNodes,
} from './actions';

export default class NodesDispatch extends DispatchClass {
  addNode = (text: string, color: string) => this.dispatch(addNode({ text, color }));

  selectNode = (id: string) => this.dispatch(selectNode({ id }));

  deselectNode = (id: string) => this.dispatch(deselectNode({ id }));

  deselectAllNodes = () => this.dispatch(deselectAllNodes({}));
}
