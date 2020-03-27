import React from 'react';
import styled from 'styled-components';
import { INode } from '@/type/types';
import NodesDispatchClass from '@/module/node/dispatch';
import NodesSelectorClass from '@/module/node/selectors';
import Node from '@/components/Node';
import { useKeyPress } from '../../hooks/useKeyPress';

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

const Graph: React.FC = () => {
  const NodesDispatch = new NodesDispatchClass();
  const NodesSelector = new NodesSelectorClass();

  const nodes = NodesSelector.useNodes();
  const selectedNodes = NodesSelector.useSelectedNodes();

  const keyDown = useKeyPress('Enter');

  /* eslint-disable */
  keyDown && console.log('enter');

  return (
    /* eslint-disable */
    <>
      <div>
        {generateNodes(nodes, selectedNodes)}
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
