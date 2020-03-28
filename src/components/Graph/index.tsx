import React from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';

import { INode, IVector } from '@/type/types';
import NodesDispatchClass from '@/module/node/dispatch';
import NodesSelectorClass from '@/module/node/selectors';
import VectorDispatchClass from '@/module/vector/dispatch';
import VectorSelectorClass from '@/module/vector/selectors';
import Node from '@/components/Node';
import { useKeyPress } from '../../hooks/useKeyPress';
import Vector from '../Vector';

const GraphOuter = styled.div`
  width: 100vw;
  height: 100vh;
`;

const generateNodes = (
  nodes: { [index: string]: INode },
  selectedNodes: string[],
) => Object.entries(nodes).map(([id, node]) => {
  const { text, color } = node;
  const selected = selectedNodes.includes(id) === true;
  return (
    <Node key={id} id={id} text={text} color={color} selected={selected} />
  );
});

const generateVectors = (vectors: { [index: string]: IVector }) => Object.entries(vectors).map(([id, vector]) => {
  const { toNodeId, fromNodeId } = vector;
  return <Vector fromNodeId={fromNodeId} toNodeId={toNodeId} id={id} />;
});

const addVector = (
  selectedNodes: string[],
  VectorDispatch: VectorDispatchClass,
  NodesDispatch: NodesDispatchClass,
): void => {
  if (selectedNodes.length === 2) {
    const [to, from] = selectedNodes;
    VectorDispatch.addVector(to, from, uniqid('vector-'));
    NodesDispatch.deselectAllNodes();
  }
};
const Graph: React.FC = () => {
  const NodesDispatch = new NodesDispatchClass();
  const NodesSelector = new NodesSelectorClass();

  const VectorDispatch = new VectorDispatchClass();
  const VectorsSelectors = new VectorSelectorClass();

  const nodes = NodesSelector.useNodes();
  const selectedNodes = NodesSelector.useSelectedNodes();
  const vectors = VectorsSelectors.useVectors();

  const keyDown = useKeyPress('Enter');

  /* eslint-disable */
  keyDown && addVector(selectedNodes, VectorDispatch, NodesDispatch);

  return (
    /* eslint-disable */
    <>
      <div>
        {generateNodes(nodes, selectedNodes)}
        {generateVectors(vectors)}
        <button
          type="button"
          onClick={() => NodesDispatch.addNode('test', 'green')}
        >
          Test
        </button>
      </div>
      <GraphOuter
        onClick={(event) => {
          event.stopPropagation();
          NodesDispatch.deselectAllNodes();
        }}
      ></GraphOuter>
      s
    </>
  );
};
export default Graph;
