// @flow

export type CRDP$HighlightConfig = {
  showInfo?: boolean,
  showRulers?: boolean,
  showExtensionlines?: boolean,
  displayAsMaterial?: boolean,
  contentColor?: CRDP$RGBA,
  paddingColor?: CRDP$RGBA,
  borderColor?: CRDP$RGBA,
  marginColor?: CRDP$RGBA,
  eventTargetColor?: CRDP$RGBA,
  shapeColor?: CRDP$RGBA,
  shapeMarginColor?: CRDP$RGBA,
  selectorList?: string,
};

/**
 * RGBA color.
 * Fields r, g, b are [0-255]
 * Field a is [0-1]
 */
export type CRDP$RGBA = {
  r: number,
  g: number,
  b: number,
  a?: number,
};
