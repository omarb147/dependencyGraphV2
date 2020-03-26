import { createAction, ActionType } from 'typesafe-actions';
import { INode } from '@/type/types';

export const addNode = createAction('nodes/ADD_NODE')<{
  node: INode;
}>();

export type AddNode = ActionType<typeof addNode>;

export const updateNodePosition = createAction('nodes/UPDATE_NODE_POSITION')<{
  id: string;
  x: number;
  y: number;
}>();

export const selectNode = createAction('nodes/SELECT_NODE')<{
  id: string;
}>();

export const deselectNode = createAction('nodes/DESELECT_NODE')<{
  id: string;
}>();

export const deselectAllNodes = createAction('nodes/DESELECT_ALL_NODES')<{}>();

export type nodeActionTypes =
  | ActionType<typeof addNode>
  | ActionType<typeof updateNodePosition>
  | ActionType<typeof selectNode>
  | ActionType<typeof deselectNode>
  | ActionType<typeof deselectAllNodes>;
