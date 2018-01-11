// @flow

export type CRDP$Viewport = {
  x: number,
  y: number,
  width: number,
  height: number,
  scale: number,
};

export type CRDP$FrameId = {
  id: string,
  parentId?: string,
  loaderId: string,
  name?: string,
  url: string,
  securityOrigin: string,
  mimeType: string,
  unreachableUrl?: string,
};

