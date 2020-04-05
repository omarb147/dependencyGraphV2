import React from 'react';
// @ts-ignore
import { SteppedLine } from 'react-lineto';
import { IVector } from '@/type/types';
import { calculateVectorCoords } from './calculateVectorCoords';
import { useVectorWrap } from './vector.wrap';

const Vector: React.FC<IVector> = (props: IVector) => {
  const { id, fromNodeId, toNodeId } = props;
  const { fromNode, toNode, VectorDispatch } = useVectorWrap(fromNodeId, toNodeId);

  const coords = calculateVectorCoords(
    fromNode.position,
    fromNode.size,
    toNode.position,
    toNode.size,
  );
  return (
    /* eslint-disable */
    <div
      onClick={() => {
        VectorDispatch.deleteVector(id);
      }}
    >
      <SteppedLine
        borderColor={'#979797'}
        key={id}
        x0={coords.x0}
        y0={coords.y0}
        x1={coords.x1}
        y1={coords.y1}
        orientation={coords.orientation}
        borderWidth={3.5}
      />
    </div>
  );
};

export default Vector;
