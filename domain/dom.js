// @flow

export type CRDP$Node = {
  nodeId: NodeId,
  parentId?: number,
  backendNodeId: NodeId,
  nodeType: number,
  nodeName: string,
  localName: string,
  nodeValue: string,
  childNodeCount?: number,
  children?: Node[],
  attributes?: AttributeList,
  name?: string,
  pseudoType?: string,
  pseudoElements?: Node[],

  // Added properties
  offsetParent?: Node,
};

export type CRDP$NodeId = number | string;

export type CRDP$AttributeList = string[];

export type CRDP$BackendNodeId = number;
