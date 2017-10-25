// @flow

export type CRDP$Node = {
  nodeId: CRDP$NodeId,
  parentId?: number,
  backendNodeId: CRDP$NodeId,
  nodeType: number,
  nodeName: string,
  localName: string,
  nodeValue: string,
  childNodeCount?: number,
  children?: CRDP$Node[],
  attributes?: CRDP$AttributeList,
  name?: string,
  pseudoType?: string,
  pseudoElements?: CRDP$Node[],

  // Added properties
  offsetParent?: CRDP$Node,
};

export type CRDP$NodeId = number | string;

export type CRDP$AttributeList = string[];

export type CRDP$BackendNodeId = number;
