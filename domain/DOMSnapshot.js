// @flow @format
import type { CRDP$FrameId } from './Page';
import type { CRDP$BackendNodeId, CRDP$PseudoType } from './DOM';
import type { CRDP$EventListener } from './DOMDebugger';

export type CRDP$DOMNode = {
  nodeType: number,
  nodeName: string,
  nodeValue: string,
  textValue?: string,
  inputValue?: string,
  inputChecked?: boolean,
  optionSelected?: boolean,
  backendNodeId: CRDP$BackendNodeId,
  childNodeIndexes?: Array<number>,
  attributes?: Array<CRDP$NameValue>,
  pseudoElementIndexes?: Array<number>,
  layoutNodeIndex?: number,
  documentURL?: string,
  baseURL?: string,
  contentLanguage?: string,
  documentEncoding?: string,
  publicId?: string,
  systemId?: string,
  frameId?: CRDP$FrameId,
  contentDocumentIndex?: number,
  importedDocumentIndex?: number,
  templateContentIndex?: number,
  pseudoType?: CRDP$PseudoType,
  isClickable?: boolean,
  eventListeners?: Array<CRDP$EventListener>,
};

export type CRDP$NameValue = {
  name: string,
  value: string,
};
