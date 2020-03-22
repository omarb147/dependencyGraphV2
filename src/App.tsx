import React from 'react';
import { Provider } from 'react-redux';
import store from '@/module/store';
import { Graph, Overlay } from '@/components';

export default () => (
  <Provider store={store}>
    <Graph />
    <Overlay />
  </Provider>
);
