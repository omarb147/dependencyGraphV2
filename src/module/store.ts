import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import nodesReducer from './node/reducer';
import vectorReducer from './vector/reducer';

const rootReducer = combineReducers({ nodes: nodesReducer, vector: vectorReducer });

export default createStore(rootReducer, composeWithDevTools());
