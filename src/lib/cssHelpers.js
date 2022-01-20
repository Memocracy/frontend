import { capitalize } from "./stringHelpers";
import * as fontSizes from "../assets/styles/FontSizes.module.scss";
import * as lineHeights from "../assets/styles/LineHeights.module.scss";
import * as horizontalSpacing from "../assets/styles/HorizontalSpacing.module.scss";

/**
 * @returns {string} classes A list of ready classes
 */
export const typographer = (
  size,
  lineHeight,
  spacingTop = null,
  spacingBottom = null
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

  // Spacing top
  if (spacingTop) {
    const spacingTopName = `paddingTop${capitalize(spacingTop)}`;

    if (horizontalSpacing[spacingTopName]) {
      classes.push(horizontalSpacing[spacingTopName]);
    }
  }

  // Spacing bottom
  if (spacingBottom) {
    const spacingBottomName = `paddingBottom${capitalize(spacingBottom)}`;

    if (horizontalSpacing[spacingBottomName]) {
      classes.push(horizontalSpacing[spacingBottomName]);
    }
  }

  return classes.join(" ");
};
