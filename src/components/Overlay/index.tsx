import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    left:0;
    top:0;
`;


export default () => (
  <Overlay>
    <Button />
  </Overlay>
);
