import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import nodesReducer from './node/reducer';

const rootReducer = combineReducers({ nodes: nodesReducer });

export default createStore(rootReducer, composeWithDevTools());
