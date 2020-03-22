import { createAction, ActionType } from 'typesafe-actions';

export const resizeNode = createAction('nodes/RESIZE_NODE')<{
  id: string;
  height: string;
  width: string;
}>();
export type ResizeNode = ActionType<typeof resizeNode>;

export type nodeActionTypes = ActionType<typeof resizeNode>;
