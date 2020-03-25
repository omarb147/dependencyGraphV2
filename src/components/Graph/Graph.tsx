import React from 'react';
import { INodesState } from '@/type/types';
import { useNodes, useAddNodeAction } from '@/module/node/hooks';
import Node from '@/components/Node/node';

const generateNodes = (nodes: INodesState) => Object.entries(nodes).map(([id, node]) => {
  const { text, color } = node;
  return <Node key={id} id={id} text={text} color={color} />;
});

const Graph: React.SFC = () => {
  const nodes = useNodes();
  const addNodeAction = useAddNodeAction();
  return (
    <div>
      {generateNodes(nodes)}
      <button type="button" onClick={() => addNodeAction('test', 'green')}>
        Test
      </button>
    </div>
  );
};
export default Graph;
