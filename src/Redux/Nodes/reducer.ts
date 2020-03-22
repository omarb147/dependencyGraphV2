import { getType } from 'typesafe-actions';
import { INodesState } from '@/type/types';
import { resizeNode, nodeActionTypes } from './actions';

const initialState: INodesState = {
  node123: {
    id: 'node123',
    size: { height: 100, width: 200 },
    color: 'red',
    text: 'first node in',
  },
};

const convertToNumber = (value: string): number => {
  const splitStr = value.split(/[a-z]/);
  return parseInt(splitStr[0], 10) || 100;
};

export default (
  state: INodesState = initialState,
  action: nodeActionTypes,
): INodesState => {
  switch (action.type) {
    case getType(resizeNode): {
      const { id } = action.payload;
      return {
        ...state,
        [id]: {
          ...state[id],
          size: {
            height: convertToNumber(action.payload.height),
            width: convertToNumber(action.payload.width),
          },
        },
      };
    }
    default: {
      return state;
    }
  }
};
