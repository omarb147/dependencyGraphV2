import { getType } from 'typesafe-actions';
import { IVectorState } from '@/type/types';
import { addVector, vectorActionTypes } from './actions';

const initialState: IVectorState = {
  vectors: {},
};

export default (
  state: IVectorState = initialState,
  action: vectorActionTypes,
): IVectorState => {
  switch (action.type) {
    case getType(addVector): {
      console.log('In add vector action');
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
