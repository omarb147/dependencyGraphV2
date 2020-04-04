import React from 'react';
import NodesDispatchClass from '@/module/node/dispatch';
import VectorDispatchClass from '@/module/vector/dispatch';
import { ITicket, IVector } from '@/type/types';
import { v4 as uuidv4 } from 'uuid';
import Node from '@/components/Node';
import Vector from '@/components/Vector';

interface INodesObject {
  [index: string]: ITicket;
}

interface IVectorsObject {
  [index: string]: IVector;
}

export const generateNodes = (nodes: INodesObject, selectedNodes: string[]): JSX.Element[] => Object.entries(nodes).map(([id]) => {
  const selected = selectedNodes.includes(id);
  return (
    <Node
      key={id}
      itemId={id}
      selected={selected}
    />
  );
});

export const generateVectors = (vectors: IVectorsObject): JSX.Element[] => Object.entries(vectors).map(([id, vector]) => {
  const { toNodeId, fromNodeId } = vector;
  return <Vector fromNodeId={fromNodeId} toNodeId={toNodeId} id={id} />;
});

export const addVector = (
  selectedNodes: string[],
  VectorDispatch: VectorDispatchClass,
  NodesDispatch: NodesDispatchClass,
): void => {
  if (selectedNodes.length === 2) {
    const [to, from] = selectedNodes;
    VectorDispatch.addVector(to, from, uuidv4());
    NodesDispatch.deselectAllNodes();
  }
};
