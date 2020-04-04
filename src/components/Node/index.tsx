import React, { useEffect } from 'react';
import { Rnd } from 'react-rnd';
import { Ticket, Header } from '@/components';
import { NodeTypes } from '@/type/types';
import { selectNode, updateNodePosition, updateNodeSize } from './nodeActionHandlers';
import { useNodeWrap } from './node.wrap';

interface INodeComponentProps {
  selected: boolean;
  itemId: string;
  type: NodeTypes;
}

const Node: React.FC<INodeComponentProps> = (props: INodeComponentProps) => {
  const {
    selected, itemId, type,
  } = props;
  const { NodesDispatch, selectedTickets } = useNodeWrap();

  useEffect(() => {
    const component = document.querySelector(`#node-${itemId}`) as HTMLElement;
    const { offsetHeight, offsetWidth } = component;

    updateNodeSize(itemId, offsetHeight, offsetWidth, NodesDispatch, type);
  }, []);


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
        width: 'auto',
        height: 'auto',
      }}
      onDragStart={(e, data) => {
        selectNode(selectedTickets, itemId, selected, NodesDispatch, type);
      }}
      onDrag={(e, data): void => {
        updateNodePosition(data, NodesDispatch, itemId, type)
      }}
    >
      {
        type === 'ticket'
          ? (
            <Ticket
              itemId={itemId}
              selected={selected}
            />
          )
          : <Header itemId={itemId} />
      }
    </Rnd>
  );
};

export default Node;
