import React from 'react';
import styled from 'styled-components';
import { useGraphWrap } from './graph.wrap';
import { generateNodes, generateVectors, addVector } from './graph.actionHandlers';

const GraphOuter = styled.div`
  height: 100%;
  width: 100%;
`;

const Boundary = styled.div`
  height: 100%;
  width: 100%;
`;

const Graph: React.FC = () => {
  const { vector, node, enterPressed } = useGraphWrap();

  /* eslint-disable */
  enterPressed && addVector(node.selectedTickets, vector.VectorDispatch, node.NodesDispatch);

  return (
    /* eslint-disable */
    <Boundary className='boundary'>
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
    </Boundary>
  );
};
export default Graph;
