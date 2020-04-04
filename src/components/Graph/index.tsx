import React from 'react';
import styled from 'styled-components';
import { useGraphWrap } from './graph.wrap';
import { generateNodes, generateVectors, addVector } from './graph.actionHandlers';

const GraphOuter = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Graph: React.FC = () => {
  const { vector, node, enterPressed } = useGraphWrap();

  /* eslint-disable */
  enterPressed && addVector(node.selectedTickets, vector.VectorDispatch, node.NodesDispatch);

  return (
    /* eslint-disable */
    <>
      <div>
        {generateNodes(node.nodes, node.selectedTickets)}
        {generateVectors(vector.vectors)}
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
