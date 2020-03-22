import { createAction, ActionType } from 'typesafe-actions';

export const addNode = createAction('nodes/ADD_NODE')<{
  text: string;
  color: string;
}>();
export type AddNode = ActionType<typeof addNode>;

export type nodeActionTypes = AddNode;
