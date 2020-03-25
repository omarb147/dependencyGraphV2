import { useSelector as reduxUseSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { addNode, AddNode } from '@/module/node/actions';
import { IGraphState } from '@/type/types';

const useSelector: TypedUseSelectorHook<IGraphState> = reduxUseSelector;

export const useNodes = () => useSelector((state) => state.nodes);

export const useAddNodeAction = () => (text: string, color: string): AddNode => useDispatch()(addNode({ text, color }));
