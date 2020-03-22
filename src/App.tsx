import React from 'react';
import { Provider } from 'react-redux';
import store from '@/module/store';
import { Graph } from '@/components';

export default () => (
  <Provider store={store}>
    <div>
      <Graph />
    </div>
  </Provider>
);
