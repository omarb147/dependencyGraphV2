import DispatchClass from '@/module/util/rootDispatch';
import { ITicket, IHeader, IHeaderColor } from '@/type/types';
import {
  addTicket, selectNode, deselectNode, deselectAllNodes, updateNodePosition, updateNodeSize, addHeader, addColor,
} from './actions';

export default class NodesDispatch extends DispatchClass {
  addTicket = (ticket: ITicket) => this.dispatch(addTicket({ ticket }));

  addHeader = (header: IHeader) => this.dispatch(addHeader({ header }));

  addColor = (color: IHeaderColor) => this.dispatch(addColor({ color }));

  updateNodePosition = (id: string, x: number, y: number) => this.dispatch(updateNodePosition({ id, x, y }));

  updateNodeSize = (id: string, height: number, width: number) => this.dispatch(updateNodeSize({ id, height, width }))

  selectNode = (id: string) => this.dispatch(selectNode({ id }));

  deselectNode = (id: string) => this.dispatch(deselectNode({ id }));

  deselectAllNodes = () => this.dispatch(deselectAllNodes({}));
}
