import React from 'react';
// @ts-ignore
import { SteppedLine } from 'react-lineto';
import NodeSelectorClass from '@/module/node/selectors';
import { IVector } from '@/type/types';

const formatLineToFrom = () => {};

const Vector: React.FC<IVector> = (props: IVector) => {
  const { id, fromNodeId, toNodeId } = props;
  const NodeSelector = new NodeSelectorClass();
  const fromNodePosition = NodeSelector.useNodePosition(fromNodeId);
  const toNodePosition = NodeSelector.useNodePosition(toNodeId);

  return (
    <SteppedLine
      key={id}
      x0={toNodePosition.x}
      y0={toNodePosition.y}
      x1={fromNodePosition.x}
      y1={fromNodePosition.y}
      borderWidth={2.5}
    />
  );
};

export default Vector;
