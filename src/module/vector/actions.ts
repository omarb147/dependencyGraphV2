import { createAction, ActionType } from 'typesafe-actions';

export const addVector = createAction('vector/ADD_VECTOR')<{
  id: string;
  from: string;
  to: string;
}>();

export const deleteVector = createAction('vector/DELETE_VECTOR')<{
  id: string;
}>();

export type vectorActionTypes = ActionType<typeof addVector> | ActionType<typeof deleteVector>;
