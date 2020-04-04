import React, {useEffect} from 'react';
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
    name, color, selected, size, itemId, points, status, labels
  } = props;
  const { NodesDispatch, selectedNodes } = useNodeWrap();

  useEffect(() => {
    const component = document.querySelector(`#node-${itemId}`) as HTMLElement ;
    const {offsetHeight, offsetWidth} = component
    NodesDispatch.updateNodeSize(itemId,offsetHeight,offsetWidth)
  },[])


  return (
    <Rnd
      id={`node-${itemId}`}
      key={itemId}
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
      className={itemId}
      default={{
        x: 0,
        y: 0,
        width:"auto",
        height:"auto",
      }}
      onDragStart={(e,data) => {
        selectNode(selectedNodes, itemId, selected, NodesDispatch);
      }}
      onDrag={(e, data): void => {
        updateNodePosition(data, NodesDispatch, itemId)
      }}
    >
      <Card text={name} color={color} selected={selected} points={points} status={status} labels={labels} />
    </Rnd>
  );
};

export default Node;
