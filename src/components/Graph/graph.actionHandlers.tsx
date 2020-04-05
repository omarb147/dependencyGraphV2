import React from 'react';
import NodesDispatchClass from '@/module/node/dispatch';
import VectorDispatchClass from '@/module/vector/dispatch';
import { IFullTicket, IVector, IFullHeader } from '@/type/types';
import { v4 as uuidv4 } from 'uuid';
import Node from '@/components/Node';
import Vector from '@/components/Vector';

interface IVectorsObject {
  [index: string]: IVector;
}

interface INodes {
  tickets: IFullTicket;
  headers: IFullHeader;
}

export const generateNodes = (nodes: INodes, selectedTickets: string[]): JSX.Element[] => {
  const tickets = Object.entries(nodes.tickets).map(([id]) => {
    const selected = selectedTickets.includes(id);
    return (
      <Node
        key={id}
        itemId={id}
        selected={selected}
        type="ticket"
      />
    );
  });

  const headers = Object.entries(nodes.headers).map(([id]) => (
    <Node
      key={id}
      itemId={id}
      selected={false}
      type="header"
    />
  ));

  return [
    ...tickets,
    ...headers];
};


export const generateVectors = (vectors: IVectorsObject): JSX.Element[] => Object.entries(vectors).map(([id, vector]) => {
  const { toNodeId, fromNodeId } = vector;
  return <Vector key={id} fromNodeId={fromNodeId} toNodeId={toNodeId} id={id} />;
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
