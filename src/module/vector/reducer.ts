import { getType } from 'typesafe-actions';
import { IVectorState } from '@/type/types';
import { addVector, deleteVector, vectorActionTypes } from './actions';

const initialState: IVectorState = {
  vectors: {},
};

export default (
  state: IVectorState = initialState,
  action: vectorActionTypes,
): IVectorState => {
  switch (action.type) {
    case getType(addVector): {
      const { id, from, to } = action.payload;
      return {
        ...state,
        vectors: {
          ...state.vectors,
          [id]: { fromNodeId: from, toNodeId: to, id },
        },
      };
    }
    case getType(deleteVector): {
      const { [action.payload.id]: value, ...existingVectors } = state.vectors;
      return {
        ...state,
        vectors: { ...existingVectors },
      };
    }
    default: {
      return state;
    }
  }
};
