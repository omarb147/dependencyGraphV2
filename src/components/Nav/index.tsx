import React from 'react';
import styled from 'styled-components';
import NodesDispatchClass from '@/module/node/dispatch';
import { v4 as uuidV4 } from 'uuid';
import Button from './Button';

const NavBar = styled.div`
    width: 100%;
    height: 4rem;
    position: fixed;
    left: 0;
    bottom:0;
    border-top: 1px black solid;
    padding: 1rem 1rem;
    display:flex;
    flex-direction:row-reverse;
`;


export default () => {
  const NodesDispatch = new NodesDispatchClass();
  return (
    <NavBar>
      <button
        type="button"
        onClick={() => NodesDispatch.addNode({
          itemId: uuidV4(),
          name: 'test',
          color: 'green',
          status: '',
          labels: 'template',
          points: '2',
          position: { x: 0, y: 0 },
          size: { height: 120, width: 320 },
        })}
      >
        Test Node
      </button>
      <button
        type="button"
        onClick={() => NodesDispatch.addHeader({ color: 'red', name: 'Header', id: 'header' })}
      >
        Test Header
      </button>
      <Button />
    </NavBar>
  );
};
