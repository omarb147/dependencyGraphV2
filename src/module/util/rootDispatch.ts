import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';

export default class DispatchClass {
  dispatch: Dispatch;

  constructor() {
    this.dispatch = useDispatch();
  }
}
