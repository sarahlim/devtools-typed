// @flow

export type Node = {
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

({
  nodeId: 198,
  backendNodeId: 203,
  nodeType: 1,
  nodeName: 'H2',
  localName: 'h2',
  nodeValue: '',
  childNodeCount: 1,
  children: [
    {
      nodeId: 199,
      backendNodeId: 204,
      nodeType: 3,
      nodeName: '#text',
      localName: '',
      nodeValue: 'Objectively innovate empowered manufactured products',
    },
  ],
  attributes: ['class', 'grid-xs col'],
}: Node);

export type NodeId = number | string;

export type AttributeList = string[];

([
  'class',
  'my-awesome-class another-class',
  'id',
  'element-id',
  'data-no-value',
  '',
  'data-hello',
  'hello-value',
]: AttributeList);
