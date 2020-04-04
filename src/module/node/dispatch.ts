import DispatchClass from '@/module/util/rootDispatch';
import {
  addNode, selectNode, deselectNode, deselectAllNodes, updateNodePosition,
} from './actions';

export default class NodesDispatch extends DispatchClass {
  addNode = (id: string, text: string, color: string) => this.dispatch(addNode({ id, text, color }));

  updateNodePosition = (id: string, x: number, y: number) => this.dispatch(updateNodePosition({ id, x, y }));

  selectNode = (id: string) => this.dispatch(selectNode({ id }));

  deselectNode = (id: string) => this.dispatch(deselectNode({ id }));

  deselectAllNodes = () => this.dispatch(deselectAllNodes({}));
}
