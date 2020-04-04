import { INodeCoordinates, INodeSize } from '@/type/types';

interface IFormattedVectorCoords {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  orientation: string;
}

export const calculateVectorCoords = (
  fromNodePosition: INodeCoordinates,
  fromNodeSize: INodeSize,
  toNodePosition: INodeCoordinates,
  toNodeSize: INodeSize,
): IFormattedVectorCoords => {
  const coords = {
    x0: 0,
    y0: 0,
    x1: 0,
    y1: 0,
    orientation: 'v',
  };

  // Find when Nodes are not fully above each other
  const fromNodeNotFullyAboveToNode = toNodePosition.y >= fromNodePosition.y
    && toNodePosition.y - (fromNodePosition.y + fromNodeSize.height) <= 0;
  const toNodeNotFullyAboveFromNode = fromNodePosition.y >= toNodePosition.y
    && fromNodePosition.y - (toNodePosition.y + toNodeSize.height) <= 0;

  // Combine instances where nodes are not fully above each other
  const nodesNotFullyAboveEachOther = fromNodeNotFullyAboveToNode || toNodeNotFullyAboveFromNode;

  // Find Y position of Vector
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

  // Find X position of Vector

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
