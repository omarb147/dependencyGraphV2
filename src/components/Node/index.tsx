import React from 'react';
import { Rnd } from 'react-rnd';
import { INode } from '@/type/types';
import Card from '@/components/Card';

const Node: React.SFC<INode> = (props: INode) => {
  const { id, text, color } = props;
  return (
    <Rnd
      key={id}
      enableResizing={{
        top: false,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      className={id}
      default={{
        x: 0,
        y: 0,
        width: 'auto',
        height: 'auto',
      }}
    >
      <Card text={text} color={color} />
    </Rnd>
  );
};
export default Node;
