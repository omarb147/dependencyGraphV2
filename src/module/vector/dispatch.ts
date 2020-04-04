import DispatchClass from '@/module/util/rootDispatch';
import { addVector, deleteVector } from './actions';

export default class VectorsDispatch extends DispatchClass {
  addVector = (to: string, from: string, id: string) => this.dispatch(addVector({ id, to, from }));

  deleteVector = (id: string) => this.dispatch(deleteVector({ id }));
}
