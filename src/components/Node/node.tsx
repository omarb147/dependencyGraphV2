import React from 'react';
import { Rnd } from 'react-rnd';
import { INode } from '@/type/types';
import Card from '@/components/Card/Card';

const Node: React.SFC<INode> = (props) => {
  const { id, text, color } = props;
  return (
    <Rnd
      key={id}
      className={id}
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
    >
      <Card text={text} color={color} />
    </Rnd>
  );
};
export default Node;
