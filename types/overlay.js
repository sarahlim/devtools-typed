// @flow

export type HighlightConfig = {
  showInfo?: boolean,
  showRulers?: boolean,
  showExtensionlines?: boolean,
  displayAsMaterial?: boolean,
  contentColor?: RGBA,
  paddingColor?: RGBA,
  borderColor?: RGBA,
  marginColor?: RGBA,
  eventTargetColor?: RGBA,
  shapeColor?: RGBA,
  shapeMarginColor?: RGBA,
  selectorList?: string,
};

/**
 * RGBA color.
 * Fields r, g, b are [0-255]
 * Field a is [0-1]
 */
export type RGBA = {
  r: number,
  g: number,
  b: number,
  a?: number,
};
