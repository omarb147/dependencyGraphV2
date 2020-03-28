import { getType } from 'typesafe-actions';
import { INodesState } from '@/type/types';
import uniqid from 'uniqid';
import {
  addNode,
  nodeActionTypes,
  selectNode,
  deselectNode,
  deselectAllNodes,
  updateNodePosition,
} from './actions';

const initialState: INodesState = {
  nodes: {
    node123: {
      id: 'node123',
      color: 'red',
      text: 'first node in',
      position: { x: 0, y: 0 },
    },
  },
  selectedNodes: [],
};

export default (
  state: INodesState = initialState,
  action: nodeActionTypes,
): INodesState => {
  switch (action.type) {
    case getType(addNode): {
      const id = uniqid('node-');
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [id]: {
            id,
            color: action.payload.color,
            text: action.payload.text,
            position: { x: 0, y: 0 },
          },
        },
      };
    }
    case getType(updateNodePosition): {
      const { id, x, y } = action.payload;
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [id]: {
            ...state.nodes[id],
            position: {
              x,
              y,
            },
          },
        },
      };
    }
    case getType(selectNode):
      return {
        ...state,
        selectedNodes: [...state.selectedNodes, action.payload.id],
      };
    case getType(deselectNode): {
      const index = state.selectedNodes.findIndex(
        (nodeID) => nodeID === action.payload.id,
      );
      return index !== -1
        ? {
          ...state,
          selectedNodes: [
            ...state.selectedNodes.slice(0, index),
            ...state.selectedNodes.slice(index + 1),
          ],
        }
        : state;
    }
    case getType(deselectAllNodes):
      return { ...state, selectedNodes: [] };
    default: {
      return state;
    }
  }
};
