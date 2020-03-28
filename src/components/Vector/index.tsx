import React from 'react';
// @ts-ignore
import { SteppedLine } from 'react-lineto';
import NodeSelectorClass from '@/module/node/selectors';
import VectorDispatchClass from '@/module/vector/dispatch';
import { IVector, INodeCoordinates, INodeSize } from '@/type/types';

const formatVectorToFrom = (
  fromNodePosition: INodeCoordinates,
  fromNodeSize: INodeSize,
  toNodePosition: INodeCoordinates,
  toNodeSize: INodeSize,
) => {
  const coords = {
    x0: 0,
    y0: 0,
    x1: 0,
    y1: 0,
    orientation: 'v',
  };

  const fromNodeNotFullyAboveToNode = toNodePosition.y > fromNodePosition.y
    && toNodePosition.y - (fromNodePosition.y + fromNodeSize.height) <= 0;
  const toNodeNotFullyAboveFromNode = fromNodePosition.y > toNodePosition.y
    && fromNodePosition.y - (toNodePosition.y + toNodeSize.height) <= 0;

  const nodesNotFullyAboveEachOther = fromNodeNotFullyAboveToNode || toNodeNotFullyAboveFromNode;
  // position Y

  if (nodesNotFullyAboveEachOther) {
    coords.orientation = 'h';
    coords.y0 = fromNodePosition.y + fromNodeSize.height / 2;
    coords.y1 = toNodePosition.y + toNodeSize.height / 2;
    // FromNode is above toNode
  } else if (fromNodePosition.y < toNodePosition.y) {
    coords.orientation = 'v';
    coords.y0 = fromNodePosition.y + fromNodeSize.height;
    coords.y1 = toNodePosition.y;
    // FromNode is below toNode
  } else if (fromNodePosition.y > toNodePosition.y) {
    coords.orientation = 'v';
    coords.y0 = fromNodePosition.y;
    coords.y1 = toNodePosition.y + toNodeSize.height;
    // From Node is above the bottom of to node / vice versa
  }

  // Position X

  // One Node is fully above the other node
  if (!nodesNotFullyAboveEachOther) {
    coords.orientation = 'v';
    coords.x0 = fromNodePosition.x + fromNodeSize.width / 2;
    coords.x1 = toNodePosition.x + toNodeSize.width / 2;
    // Nodes are not fully above each other and fromNode is to the right of to Node
  } else if (fromNodePosition.x > toNodePosition.x) {
    coords.orientation = 'h';
    coords.x0 = fromNodePosition.x;
    coords.x1 = toNodePosition.x + toNodeSize.width;
    // Nodes are not fully above each other and fromNode is to the right of to Node
  } else if (fromNodePosition.x < toNodePosition.x) {
    coords.orientation = 'h';
    coords.x0 = fromNodePosition.x + fromNodeSize.width;
    coords.x1 = toNodePosition.x;
  }

  return coords;
};

const Vector: React.FC<IVector> = (props: IVector) => {
  const { id, fromNodeId, toNodeId } = props;
  const NodeSelector = new NodeSelectorClass();
  const VectorDispatch = new VectorDispatchClass();

  const {
    position: fromNodePosition,
    size: fromNodeSize,
  } = NodeSelector.useNodePositionAndSize(fromNodeId);
  const {
    position: toNodePosition,
    size: toNodeSize,
  } = NodeSelector.useNodePositionAndSize(toNodeId);

  const coords = formatVectorToFrom(
    fromNodePosition,
    fromNodeSize,
    toNodePosition,
    toNodeSize,
  );
  return (
    /* eslint-disable */
    <div
      onClick={() => {
        VectorDispatch.deleteVector(id);
        console.log('clicked');
      }}
    >
      <SteppedLine
        key={id}
        x0={coords.x0}
        y0={coords.y0}
        x1={coords.x1}
        y1={coords.y1}
        orientation={coords.orientation}
        borderWidth={2.5}
      />
    </div>
  );
};

export default Vector;
