import { getType } from 'typesafe-actions';
import { INodesState } from '@/type/types';

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
      itemId: 'node123',
      color: 'red',
      name: 'first node in',
      position: { x: 0, y: 0 },
      size: { height: 120, width: 320 },
      labels: '#sprintGoal',
      points: '2',
      status: 'Create Survey',
    },
  },
  selectedNodes: [],
};

export default (state: INodesState = initialState, action: nodeActionTypes): INodesState => {
  switch (action.type) {
    case getType(addNode): {
      const {
        itemId, color, name, status, labels, points,
      } = action.payload.node;
      return {
        ...state,
        nodes: {
          ...state.nodes,
          [itemId]: {
            itemId,
            color,
            name,
            status,
            labels,
            points,
            position: { x: 0, y: 0 },
            size: { height: 120, width: 320 },
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
      const index = state.selectedNodes.findIndex((nodeID) => nodeID === action.payload.id);
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
