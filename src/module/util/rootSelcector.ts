import { TypedUseSelectorHook, useSelector as reduxUseSelector } from 'react-redux';
import { IGraphState } from '@/type/types';

export default class SelectorClass {
  useSelector: TypedUseSelectorHook<IGraphState>;

  constructor() {
    this.useSelector = reduxUseSelector;
  }
}
