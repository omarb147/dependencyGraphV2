import { useSelector as reduxUseSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';
import { addNode, AddNode } from '@/module/node/actions';
import { IGraphState, INodesState } from '@/type/types';

const useSelector: TypedUseSelectorHook<IGraphState> = reduxUseSelector;

export default () => {
  // Replaces mapStateToProps
  const nodes: INodesState = useSelector((state) => state.nodes);

  // Replaces mapDispatchToProps
  const dispatch = useDispatch();
  const addNodeAction = (text: string, color: string): AddNode => dispatch(addNode({ text, color }));

  return { nodes, actions: { addNodeAction } };
};
