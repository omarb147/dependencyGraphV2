import React from 'react';
import { Rnd } from 'react-rnd';
import { INode } from '@/type/types';
import Card from '@/components/Card';
import { selectNode, updateNodePosition } from './nodeActionHandlers';
import { useNodeWrap } from './node.wrap';

interface INodeComponentProps extends Omit<INode, 'position'> {
  selected: boolean;
}

const Node: React.FC<INodeComponentProps> = (props: INodeComponentProps) => {
  const {
    id, text, color, selected, size,
  } = props;
  const { NodesDispatch, selectedNodes } = useNodeWrap();
  return (
    <Rnd
      key={id}
      enableResizing={{
        top: false,
        right: false,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      }}
      className={id}
      default={{
        x: 0,
        y: 0,
        width: size.width,
        height: size.height,
      }}
      onDragStart={() => {
        selectNode(selectedNodes, id, selected, NodesDispatch);
      }}
      onDrag={(e, data): void => {
        updateNodePosition(data, NodesDispatch, id);
      }}
    >
      <Card text={text} color={color} selected={selected} />
    </Rnd>
  );
};

export default Node;
