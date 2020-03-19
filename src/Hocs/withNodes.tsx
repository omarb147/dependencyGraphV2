import { compose } from "recompose";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { IGraphState } from "../Types/types";
import { resizeNode } from "../Redux/Nodes/actions";

const mapStateToProps = (state: IGraphState) => {
  return { nodes: state.nodes };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    resizeNode: (id: string, height: string, width: string) =>
      dispatch(resizeNode({ id, height, width }))
  };
};

export type WithNodesProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

export const withNodes = compose(connect(mapStateToProps, mapDispatchToProps));
