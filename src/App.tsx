import React from 'react';
import { Provider } from 'react-redux';
import store from '@/module/store';
import { Graph, Nav } from '@/components';

import { createGlobalStyle } from 'styled-components';

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

export default () => (
  <Provider store={store}>
    <GlobalStyle />
    <Graph />
    <Nav />
  </Provider>
);
