import React from 'react';
import styled from 'styled-components';
import { v4 as uuidV4 } from 'uuid';
import { useGraphWrap } from './graph.wrap';
import { generateNodes, generateVectors, addVector } from './graph.actionHandlers';

const GraphOuter = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Graph: React.FC = () => {
  const { vector, node, enterPressed } = useGraphWrap();

  /* eslint-disable */
  enterPressed && addVector(node.selectedNodes, vector.VectorDispatch, node.NodesDispatch);

  return (
    /* eslint-disable */
    <>
      <div>
        {generateNodes(node.nodes, node.selectedNodes)}
        {generateVectors(vector.vectors)}
        <button type="button" onClick={() => node.NodesDispatch.addNode(uuidV4(), 'test', 'green')}>
          Test
        </button>
      </div>
      <GraphOuter
        onClick={(event) => {
          event.stopPropagation();
          node.NodesDispatch.deselectAllNodes();
        }}
      ></GraphOuter>
      s
    </>
  );
};
export default Graph;
