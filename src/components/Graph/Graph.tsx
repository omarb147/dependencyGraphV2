import React from "react";
import { compose } from "recompose";

import { withNodes, WithNodesProps } from "../../Hocs/withNodes";
import Node from "../Node/node";
import { IGraphState, INodesState } from "src/Types/types";

type Props = IGraphState & WithNodesProps;

const Graph: React.SFC<Props> = props => {
  console.log(props);
  return <div>{generateNodes(props.nodes)}</div>;
};

const generateNodes = (nodes: INodesState) => {
  return Object.keys(nodes).map(id => {
    const node = nodes[id];
    return <Node key={id} {...node} />;
  });
};

const Wrapper = compose<Props, {}>(withNodes);

export default Wrapper(Graph);
