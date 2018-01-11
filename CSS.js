// @flow @format
import type { CRDP$FrameId } from './Page';
import type { CRDP$BackendNodeId, CRDP$PseudoType } from './DOM';

export type CRDP$PseudoElementMatches = {
  pseudoType: CRDP$PseudoType,
  matches: CRDP$RuleMatch[],
};

export type CRDP$PseudoClass = 'active' | 'focus' | 'hover' | 'visited';

/**
 * CSS style sheet identifier.
 * Absent for UA styles and user-specified stylesheet rules.
 */
export type CRDP$StyleSheetId = string;

/**
 * Stylesheet type.
 * 'injected': for stylesheets injected via extension
 * 'user-agent': for user-agent stylesheets
 * 'inspector': for stylesheets created by the inspector
 * 'regular': for regular stylesheets
 */
export type CRDP$StyleSheetOrigin =
  | 'injected'
  | 'user-agent'
  | 'inspector'
  | 'regular';

/**
 * Text range within a resource. Zero-indexed, [) range.
 */
export type CRDP$SourceRange = {
  startLine: number,
  startColumn: number,
  endLine: number,
  endColumn: number,
};

/**
 * Data for a simple selector (i.e. those delimited by commas in a selector list).
 *
 * .foo
 */
export type CRDP$Value = {
  text: string,
  range?: CRDP$SourceRange,
};

/**
 * Selector list data.
 *
 * .foo, .bar
 */
export type CRDP$SelectorList = {
  selectors: CRDP$Value[],
  text: string,
};

/**
 * CSS property declaration data.
 *
 * position: absolute !important;
 */
export type CRDP$CSSProperty = {
  name: string,
  value: string,
  important?: boolean,
  implicit?: boolean,
  text?: string,
  parsedOk?: boolean,
  disabled?: boolean,
  range?: CRDP$SourceRange,
};

/**
 * CSS style representation.
 *
 * {
 *   position: absolute;
 *   left: 50px;
 * }
 */
export type CRDP$CSSStyle = {
  styleSheetId?: CRDP$StyleSheetId,
  cssProperties: CRDP$CSSProperty[],
  shorthandEntries: CRDP$ShorthandEntry[],
  cssText?: string,
  range?: CRDP$SourceRange,
};

/**
 * CSS rule representation.
 *
 * .foo {
 *   position: absolute;
 *   left: 50px;
 * }
 */
export type CRDP$CSSRule = {
  styleSheetId: CRDP$StyleSheetId,
  selectorList: CRDP$SelectorList,
  origin: CRDP$StyleSheetOrigin,
  style: CRDP$CSSStyle,
  media?: CRDP$CSSMedia[],
};

/**
 * Match data for a CSS rule.
 *
 * .foo, .bar {
 *   position: absolute;
 *   left: 50px;
 * }
 *
 * Differs from CSSRule in that it includes the selector
 * indices in the rule's selectorList.
 */
export type CRDP$RuleMatch = {
  rule: CRDP$CSSRule,
  matchingSelectors: number[],
};

export type CRDP$StyleDeclarationEdit = {
  styleSheetId: CRDP$StyleSheetId,
  range: CRDP$SourceRange,
  text: string,
};

export type CRDP$ShorthandEntry = {
  name: string,
  value: string,
  important?: boolean,
};

export type CRDP$CSSMedia = {
  text: string,
  source: 'mediaRule' | 'importRule' | 'linkedSheet' | 'inlineSheet',
  sourceURL?: string,
  range?: CRDP$SourceRange,
  styleSheetId?: CRDP$StyleSheetId,
  mediaList?: CRDP$MediaQuery[],
};

export type CRDP$MediaQuery = {
  expressions: CRDP$MediaQueryExpression[],
  active: boolean,
};

export type CRDP$MediaQueryExpression = {
  value: number,
  unit: string,
  feature: string,
  valueRange?: CRDP$SourceRange,
  computedLength?: number,
};

/**
 * Result of calling CSS.getMatchedStylesForNode.
 */
export type CRDP$MatchedStyles = {
  inlineStyle: CRDP$CSSStyle,
  attributesStyle: CRDP$CSSStyle,
  matchedCSSRules: CRDP$RuleMatch[],
  inherited: CRDP$InheritedStyleEntry[],
  pseudoElements: CRDP$PseudoElementMatches[],
  cssKeyframesRules: CRDP$CSSKeyframesRule[],
};

/**
 * Inherited CSS rule collection from ancestor node.
 */
export type CRDP$InheritedStyleEntry = {
  inlineStyle?: CRDP$CSSStyle,
  matchedCSSRules: CRDP$RuleMatch[],
};

export type CRDP$CSSKeyframesRule = {
  animationName: CRDP$Value,
  keyframes: CRDP$CSSKeyframeRule[],
};

export type CRDP$CSSKeyframeRule = {
  styleSheetId?: CRDP$StyleSheetId,
  origin: CRDP$StyleSheetOrigin,
  keyText: CRDP$Value,
  style: CRDP$CSSStyle,
};

export type CRDP$CSSComputedStyleProperty = {
  name: string,
  value: string,
};

export type CRDP$CSSStyleSheetHeader = {
  styleSheetId: CRDP$StyleSheetId,
  frameId: CRDP$FrameId,
  sourceURL: string,
  sourceMapURL?: string,
  origin: CRDP$StyleSheetOrigin,
  title: string,
  ownerNode?: CRDP$BackendNodeId,
  disabled: boolean,
  hasSourceURL?: boolean,
  isInline: boolean,
  startLine: number,
  startColumn: number,
  length: number,
};
