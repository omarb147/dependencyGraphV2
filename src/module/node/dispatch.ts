import DispatchClass from '@/module/util/rootDispatch';
import { INode } from '@/type/types';
import {
  addNode, selectNode, deselectNode, deselectAllNodes, updateNodePosition,
} from './actions';

export default class NodesDispatch extends DispatchClass {
  addNode = (node: INode) => this.dispatch(addNode({ node }));

  updateNodePosition = (id: string, x: number, y: number) => this.dispatch(updateNodePosition({ id, x, y }));

  selectNode = (id: string) => this.dispatch(selectNode({ id }));

  deselectNode = (id: string) => this.dispatch(deselectNode({ id }));

  deselectAllNodes = () => this.dispatch(deselectAllNodes({}));
}

export interface INodesDispatch {
  addNode(node: INode): void;
}
