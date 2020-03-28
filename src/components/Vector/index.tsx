import React from 'react';
// @ts-ignore
import { SteppedLineTo } from 'react-lineto';
import { IVector } from '@/type/types';

const Vector: React.FC<IVector> = (props: IVector) => {
  const { id, fromNodeId, toNodeId } = props;
  return <SteppedLineTo key={id} from={fromNodeId} to={toNodeId} />;
};

export default Vector;
