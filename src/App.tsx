import React from 'react';
import { Provider } from 'react-redux';
import store from '@/module/store';
import { Graph, Nav } from '@/components';

import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  height:100%;
  margin: 0;
  position:relative;
  font-family: 'Quicksand';
  }
  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display:flex;
  flex-direction: column;
  height:100vh;
  width:100vw;
`;

export default () => (
  <Provider store={store}>
    <GlobalStyle />
    <Container>
      <Graph />
      <Nav />
    </Container>
  </Provider>
);
