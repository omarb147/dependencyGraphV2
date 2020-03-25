import DispatchClass from '@/module/util/rootDispatch';
import { addNode } from './actions';

export default class NodesDispatch extends DispatchClass {
  addNode = (text: string, color: string) => this.dispatch(addNode({ text, color }));
}
