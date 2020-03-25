import React from 'react';
import styled from 'styled-components';
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


export default () => (
  <NavBar>
    <Button />
  </NavBar>
);
