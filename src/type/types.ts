export interface INodeCoordinates {
  x: number;
  y: number;
}

export interface INodeSize {
  height: number;
  width: number;
}

export interface INode {
  itemId: string;
  name: string;
  status: string;
  labels: string;
  points: string;
  color: string;
  position: INodeCoordinates;
  size: { height: number; width: number };
}

export interface IFullNode {
  [index: string]: INode;
}

export interface INodesState {
  selectedNodes: string[];
  nodes: IFullNode;
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

export type Headings = keyof IHeadingMap;
