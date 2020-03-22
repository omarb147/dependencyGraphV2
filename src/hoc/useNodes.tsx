import { useSelector as reduxUseSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { resizeNode, ResizeNode } from '@/redux/Nodes/actions';
import { IGraphState, INodesState } from '@/type/types';

const useSelector: TypedUseSelectorHook<IGraphState> = reduxUseSelector;

export default () => {
  const nodes: INodesState = useSelector((state) => state.nodes);
  const dispatch = useDispatch();
  const resizeNodeAction = (id: string, height: string, width: string): ResizeNode => dispatch(resizeNode({ id, height, width }));
  return { nodes, resizeNodeAction };
};
