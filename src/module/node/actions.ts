import { createAction, ActionType } from 'typesafe-actions';
import { ITicket, IHeader, NodeTypes } from '@/type/types';

export const addTicket = createAction('nodes/ADD_TICKET')<{
  ticket: ITicket;
}>();

export const addHeader = createAction('nodes/ADD_HEADER')<{
  header: IHeader;
}>();

export const updateNodePosition = createAction('nodes/UPDATE_NODE_POSITION')<{
  id: string;
  x: number;
  y: number;
}>();

export const updateNodeSize = createAction('nodes/UPDATE_SIZE')<{
  id: string;
  height: number;
  width: number;
}>();

export const selectNode = createAction('nodes/SELECT_NODE')<{
  id: string;
}>();

export const deselectNode = createAction('nodes/DESELECT_NODE')<{
  id: string;
}>();

export const deselectAllNodes = createAction('nodes/DESELECT_ALL_NODES')<{}>();

export type nodeActionTypes =
  | ActionType<typeof addTicket>
  | ActionType<typeof addHeader>
  | ActionType<typeof updateNodePosition>
  | ActionType<typeof updateNodeSize>
  | ActionType<typeof selectNode>
  | ActionType<typeof deselectNode>
  | ActionType<typeof deselectAllNodes>;
