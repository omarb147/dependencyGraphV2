import React from 'react';
import { compose } from 'recompose';
import { Rnd, RndResizeCallback } from 'react-rnd';
import { withNodes, WithNodesProps } from '@hoc/withNodes';
import { INode } from '@type/types';
import Card from '@components/Card/Card';

type Props = WithNodesProps & INode;

const Node: React.SFC<Props> = (props) => {
  const onResizeStop: RndResizeCallback = (
    e,
    direction,
    ref,
    delta,
    position,
  ) => {
    props.resizeNode(props.id, ref.style.height, ref.style.width);
  };

  console.log(props);
  return (
    <Rnd
      key={props.id}
      className={props.id}
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        onResizeStop(e, direction, ref, delta, position);
      }}
    >
      <Card text={props.text} color={props.color} size={props.size} />
    </Rnd>
  );
};

const Wrapper = compose<Props, {}>(withNodes);
export default Wrapper(Node);
