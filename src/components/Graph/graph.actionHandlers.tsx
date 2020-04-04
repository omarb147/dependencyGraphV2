import React from 'react';
import NodesDispatchClass from '@/module/node/dispatch';
import VectorDispatchClass from '@/module/vector/dispatch';
import { IFullTicket, IVector } from '@/type/types';
import { v4 as uuidv4 } from 'uuid';
import Node from '@/components/Node';
import Vector from '@/components/Vector';

interface IVectorsObject {
  [index: string]: IVector;
}

export const generateNodes = (tickets: IFullTicket, selectedTickets: string[]): JSX.Element[] => Object.entries(tickets).map(([id]) => {
  const selected = selectedTickets.includes(id);
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
  selectedTickets: string[],
  VectorDispatch: VectorDispatchClass,
  NodesDispatch: NodesDispatchClass,
): void => {
  if (selectedTickets.length === 2) {
    const [to, from] = selectedTickets;
    VectorDispatch.addVector(to, from, uuidv4());
    NodesDispatch.deselectAllNodes();
  }
};
