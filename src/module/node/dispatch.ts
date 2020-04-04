import DispatchClass from '@/module/util/rootDispatch';
import { ITicket, IHeader } from '@/type/types';
import {
  addNode, selectNode, deselectNode, deselectAllNodes, updateNodePosition, updateNodeSize, addHeader,
} from './actions';

export default class NodesDispatch extends DispatchClass {
  addNode = (node: ITicket) => this.dispatch(addNode({ node }));

  addHeader = (header: IHeader) => this.dispatch(addHeader({ header }));

  updateNodePosition = (id: string, x: number, y: number) => this.dispatch(updateNodePosition({ id, x, y }));

  updateNodeSize = (id: string, height: number, width: number) => this.dispatch(updateNodeSize({ id, height, width }))

  selectNode = (id: string) => this.dispatch(selectNode({ id }));

  deselectNode = (id: string) => this.dispatch(deselectNode({ id }));

  deselectAllNodes = () => this.dispatch(deselectAllNodes({}));
}

export interface INodesDispatch {
  addNode(node: ITicket): void;
}
