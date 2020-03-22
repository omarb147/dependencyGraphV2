import { createAction, ActionType } from 'typesafe-actions';

export const addVector = createAction('vector/ADD_VECTOR')<{
  id: string;
  from: string;
  to: string;
}>();

export type vectorActionTypes = ActionType<typeof addVector>;
