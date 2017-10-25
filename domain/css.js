// @flow

export type CRDP$PseudoType =
  | 'first-line'
  | 'first-letter'
  | 'before'
  | 'after'
  | 'backdrop'
  | 'selection'
  | 'first-line-inherited'
  | 'scrollbar'
  | 'scrollbar-thumb'
  | 'scrollbar-button'
  | 'scrollbar-track'
  | 'scrollbar-track-piece'
  | 'scrollbar-corner'
  | 'resizer'
  | 'input-list-button';

export type CRDP$PseudoElementMatches = {
  pseudoType: PseudoType,
  matches: RuleMatch[],
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
  range?: SourceRange,
};

/**
 * Selector list data.
 *
 * .foo, .bar
 */
export type CRDP$SelectorList = {
  selectors: Value[],
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
  range?: SourceRange,
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
  styleSheetId?: StyleSheetId,
  cssProperties: CSSProperty[],
  shorthandEntries: ShorthandEntry[],
  cssText?: string,
  range?: SourceRange,
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
  styleSheetId: StyleSheetId,
  selectorList: SelectorList,
  origin: StyleSheetOrigin,
  style: CSSStyle,
  media?: CSSMedia[],
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
  rule: CSSRule,
  matchingSelectors: number[],
};

export type CRDP$StyleDeclarationEdit = {
  styleSheetId: StyleSheetId,
  range: SourceRange,
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
  range?: SourceRange,
  styleSheetId?: StyleSheetId,
  mediaList?: MediaQuery[],
};

export type CRDP$MediaQuery = {
  expressions: MediaQueryExpression[],
  active: boolean,
};

export type CRDP$MediaQueryExpression = {
  value: number,
  unit: string,
  feature: string,
  valueRange?: SourceRange,
  computedLength?: number,
};

/**
 * Result of calling CSS.getMatchedStylesForNode.
 */
export type CRDP$MatchedStyles = {
  inlineStyle: CSSStyle,
  attributesStyle: CSSStyle,
  matchedCSSRules: RuleMatch[],
  inherited: InheritedStyleEntry[],
  pseudoElements: PseudoElementMatches[],
  cssKeyframesRules: CSSKeyframesRule[],
};

/**
 * Inherited CSS rule collection from ancestor node.
 */
export type CRDP$InheritedStyleEntry = {
  inlineStyle?: CSSStyle,
  matchedCSSRules: RuleMatch[],
};

export type CRDP$CSSKeyframesRule = {
  animationName: Value,
  keyframes: CSSKeyframeRule[],
};

export type CRDP$CSSKeyframeRule = {
  styleSheetId?: StyleSheetId,
  origin: StyleSheetOrigin,
  keyText: Value,
  style: CSSStyle,
};
