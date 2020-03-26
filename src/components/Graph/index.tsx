import React from 'react';
import { INodesState } from '@/type/types';
import NodesDispatchClass from '@/module/node/dispatch';
import NodesSelectorClass from '@/module/node/selectors';
import Node from '@/components/Node';

const generateNodes = (nodes: INodesState) => Object.entries(nodes).map(([id, node]) => {
  const { text, color } = node;
  return <Node key={id} id={id} text={text} color={color} />;
});

const Graph: React.SFC = () => {
  const NodesDispatch = new NodesDispatchClass();
  const NodesSelector = new NodesSelectorClass();

  const nodes = NodesSelector.useNodes();

  return (
    <div>
      {generateNodes(nodes)}
      <button type="button" onClick={() => NodesDispatch.addNode('test', 'green')}>
        Test
      </button>
    </div>
  );
};
export default Graph;
