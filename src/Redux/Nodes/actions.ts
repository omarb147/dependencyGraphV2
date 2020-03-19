import { createAction, ActionType } from 'typesafe-actions';

export const resizeNode = createAction('nodes/RESIZE_NODE')<{
  id: string;
  height: string;
  width: string;
}>();

export type nodeActionTypes = ActionType<typeof resizeNode>;
