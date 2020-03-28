export interface INodeCoordinates {
  x: number;
  y: number;
}

export interface INodeSize {
  height: number;
  width: number;
}

export interface INode {
  id: string;
  color: string;
  text: string;
  position: INodeCoordinates;
  size: { height: number; width: number };
}

export interface INodesState {
  nodes: { [key: string]: INode };
  selectedNodes: string[];
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
