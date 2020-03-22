import { getType } from 'typesafe-actions';
import { INodesState } from '@/type/types';
import uniqid from 'uniqid';
import { addNode, nodeActionTypes } from './actions';

const initialState: INodesState = {
  node123: {
    id: 'node123',
    color: 'red',
    text: 'first node in',
  },
};

export default (state: INodesState = initialState, action: nodeActionTypes): INodesState => {
  switch (action.type) {
    case getType(addNode): {
      const id = uniqid('node-');
      return {
        ...state,
        [id]: {
          id,
          color: action.payload.color,
          text: action.payload.text,
        },
      };
    }
    default: {
      return state;
    }
  }
};
