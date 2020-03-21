import { compose } from 'recompose';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { IGraphState } from '@type/types';
import { resizeNode } from '@redux/Nodes/actions';

const mapStateToProps = (state: IGraphState) => ({ nodes: state.nodes });

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resizeNode: (id: string, height: string, width: string) => dispatch(resizeNode({ id, height, width })),
});

export type WithNodesProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export const withNodes = compose(connect(mapStateToProps, mapDispatchToProps));
