import { getType } from 'typesafe-actions';
import { INodesState } from '@/type/types';

import {
  addTicket,
  nodeActionTypes,
  selectNode,
  deselectNode,
  deselectAllNodes,
  updateNodePosition,
  updateNodeSize,
  addHeader,
  addColor,
} from './actions';

const initialState: INodesState = {
  tickets: {
    node123: {
      itemId: 'node123',
      color: 'red',
      name: 'first node in',
      position: { x: 0, y: 0 },
      size: { height: 0, width: 0 },
      labels: '#sprintGoal',
      points: '2',
      status: 'Create Survey',
    },
  },
  selectedTickets: [],
  headers: {},
  colors: {},
};

export default (state: INodesState = initialState, action: nodeActionTypes): INodesState => {
  switch (action.type) {
    case getType(addTicket): {
      const {
        itemId, color, name, status, labels, points,
      } = action.payload.ticket;
      return {
        ...state,
        tickets: {
          ...state.tickets,
          [itemId]: {
            itemId,
            color,
            name,
            status,
            labels,
            points,
            size: { height: 0, width: 0 },
            position: { x: 0, y: 0 },
          },
        },
      };
    }
    case getType(updateNodeSize): {
      const {
        id, height, width,
      } = action.payload;
      return {
        ...state,
        tickets: {
          ...state.tickets,
          [id]: {
            ...state.tickets[id],
            size: {
              height,
              width,
            },
          },
        },
      };
    }
    case getType(addHeader): {
      const { name, color, id } = action.payload.header;
      return {
        ...state,
        headers: {
          ...state.headers,
          [id]: {
            color,
            name,
            id,
          },
        },
      };
    }
    case getType(updateNodePosition): {
      const { id, x, y } = action.payload;
      return {
        ...state,
        tickets: {
          ...state.tickets,
          [id]: {
            ...state.tickets[id],
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
        selectedTickets: [...state.selectedTickets, action.payload.id],
      };
    case getType(deselectNode): {
      const index = state.selectedTickets.findIndex((nodeID) => nodeID === action.payload.id);
      return index !== -1
        ? {
          ...state,
          selectedTickets: [
            ...state.selectedTickets.slice(0, index),
            ...state.selectedTickets.slice(index + 1),
          ],
        }
        : state;
    }
    case getType(deselectAllNodes):
      return { ...state, selectedTickets: [] };
    case getType(addColor):
      return {
        ...state,
        colors: {
          ...state.colors,
          ...action.payload.color,
        },
      };
    default: {
      return state;
    }
  }
};
