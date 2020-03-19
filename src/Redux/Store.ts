import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { nodesReducer } from "./Nodes/reducer";

const rootReducer = combineReducers({ nodes: nodesReducer });

export const store = createStore(rootReducer);
