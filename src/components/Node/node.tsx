import React from 'react';
import { Rnd, RndResizeCallback } from 'react-rnd';
import useNodes from '@/hoc/useNodes';
import { INode } from '@/type/types';
import Card from '@/components/Card/Card';

const Node: React.SFC<INode> = (props) => {
  const { nodes, resizeNodeAction: resizeNode } = useNodes();
  const onResizeStop: RndResizeCallback = (e, direction, ref, delta, position) => {
    resizeNode(props.id, ref.style.height, ref.style.width);
    console.log(nodes);
  };

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

export default Node;
