import React from 'react';
import { INodesState } from '@/type/types';
import useNodes from '@/hoc/useNodes';
import Node from '@/components/Node/node';

const generateNodes = (nodes: INodesState) => Object.entries(nodes).map(([id, node]) => {
  const { text, color } = node;
  return <Node key={id} id={id} text={text} color={color} />;
});

const Graph: React.SFC = () => {
  const { nodes } = useNodes();
  return <div>{generateNodes(nodes)}</div>;
};
export default Graph;
