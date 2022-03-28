import { capitalize } from "./stringHelpers";
import * as fontSizes from "../assets/styles/FontSizes.module.scss";
import * as lineHeights from "../assets/styles/LineHeights.module.scss";
import * as horizontalSpacing from "../assets/styles/HorizontalSpacing.module.scss";
import * as verticalSpacing from "../assets/styles/VerticalSpacing.module.scss";
import * as standard from "../assets/styles/Standard.module.scss";

/**
 * @returns {string} classes A list of ready classes
 */
export const typographer = (
  size,
  lineHeight,
  paddingTop ,
  paddingBottom,
  marginTop,
  marginBottom,
  textAlign
) => {
  const classes = [];

  // Font size
  const sizeName = `size${capitalize(size)}`;

  if (fontSizes[sizeName]) {
    classes.push(fontSizes[sizeName]);
  }

  // Line height
  const lineHeightName = `lineHeight${capitalize(lineHeight)}`;

  if (lineHeights[lineHeightName]) {
    classes.push(lineHeights[lineHeightName]);
  }

  // Spacing bottom
  if (textAlign) {
    const textAlignName = `textAlign${capitalize(textAlign)}`;

    if (standard[textAlignName]) {
      classes.push(standard[textAlignName]);
    }
  }

  classes.push(horizontalSpacer(
    paddingTop ,
    paddingBottom,
    marginTop,
    marginBottom,
  ));

  return classes.join(" ");
};

/**
 * @returns {string} classes A list of ready classes
 */
export const horizontalSpacer = (
  paddingTop ,
  paddingBottom,
  marginTop,
  marginBottom
) => {
  const classes = [];

  // Spacing top
  if (paddingTop) {
    const paddingTopName = `paddingTop${capitalize(paddingTop)}`;

    if (horizontalSpacing[paddingTopName]) {
      classes.push(horizontalSpacing[paddingTopName]);
    }
  }

  // Spacing bottom
  if (paddingBottom) {
    const paddingBottomName = `paddingBottom${capitalize(paddingBottom)}`;

    if (horizontalSpacing[paddingBottomName]) {
      classes.push(horizontalSpacing[paddingBottomName]);
    }
  }

  // Margin top
  if (marginTop) {
    const marginTopName = `marginTop${capitalize(marginTop)}`;

    if (horizontalSpacing[marginTopName]) {
      classes.push(horizontalSpacing[marginTopName]);
    }
  }

  // Margin bottom
  if (marginBottom) {
    const marginBottomName = `marginBottom${capitalize(marginBottom)}`;

    if (horizontalSpacing[marginBottomName]) {
      classes.push(horizontalSpacing[marginBottomName]);
    }
  }

  return classes.join(" ");
}

/**
 * @returns {string} classes A list of ready classes
 */
 export const verticalSpacer = (
  paddingLeft,
  paddingRight
) => {
  const classes = [];

  // Padding left
  if (paddingLeft) {
    const paddingLeftName = `paddingLeft${capitalize(paddingLeft)}`;

    if (verticalSpacing[paddingLeftName]) {
      classes.push(verticalSpacing[paddingLeftName]);
    }
  }

  // Padding right
  if (paddingRight) {
    const paddingRightName = `paddingRight${capitalize(paddingRight)}`;

    if (verticalSpacing[paddingRightName]) {
      classes.push(verticalSpacing[paddingRightName]);
    }
  }

  return classes.join(" ");
}
