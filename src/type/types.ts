export interface INodeCoordinates {
  x: number;
  y: number;
}

export interface INodeSize {
  height: number;
  width: number;
}

export interface ITicket {
  itemId: string;
  name: string;
  status: string;
  labels: string;
  points: string;
  color: string;
  position: INodeCoordinates;
  size: { height: number; width: number };
}

export interface IFullTicket {
  [index: string]: ITicket;
}

export interface IHeader {
  name: string;
  color: string;
  id: string;
}

export interface IFullHeader {
  [index: string]: IHeader;
}

export interface INodesState {
  selectedTickets: string[];
  tickets: IFullTicket;
  headers: IFullHeader;
  colors: IHeaderColor;
}

export interface IHeaderColor {
  [index: string]: string;
}

export interface ILink {
  id: string;
  from: string;
  to: string;
  orientation: string;
}

export interface IGraphState {
  node: INodesState;
  vector: IVectorState;
}

export interface IVector {
  id: string;
  fromNodeId: string;
  toNodeId: string;
}

export interface IVectorState {
  vectors: { [key: string]: IVector };
}

export interface IGenericObject {
  [index: string]: string;
}

export interface IHeadingMap {
  Name: 'name';
  Status: 'status';
  Labels: 'labels';
  Points: 'points';
  Person: 'person';
  'Item ID': 'itemId';
  'Priotiry Order': 'priorityOrder';
}

export interface IAllNodes {
  tickets: ITicket[];
  headers: IHeader[];
  colors: IHeaderColor;
}


export type Headings = keyof IHeadingMap;

export type NodeTypes = 'ticket' | 'header';
