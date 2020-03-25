export interface INode {
  id: string;
  color: string;
  text: string;
}

export interface INodesState {
  [key: string]: INode;
}

export interface ILink {
  id: string;
  from: string;
  to: string;
  orientation: string;
}

export interface IGraphState {
  nodes: INodesState;
}

export interface IVector {
  [key: string]: {
    id: string;
    fromNodeId: string;
    toNodeId: string;
  };
}

export interface IVectorState {
  vectors: IVector;
}

export interface IGenericObject {
  [index: string]: string;
}
