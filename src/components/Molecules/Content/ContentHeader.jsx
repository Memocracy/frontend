import React from "react";
import { capitalize } from "../../../lib/stringHelpers";
import { typographer } from "../../../lib/cssHelpers";
import * as fontSizes from "../../../assets/styles/FontSizes.module.scss";
import * as contentStyles from "./ContentHeader.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const ContentHeader = ({
  title = "",
  additionalClasses = [],
  as = "h1",
  hr = "none",
  size = "h1",
  lineHeight = "sm",
  spacinTop = null,
  spacingBottom = null,
}) => {
  const Element = `${as}`;

  // Top or bottom line
  switch (hr) {
    case "top":
      additionalClasses.push(contentStyles.borderTop);
      break;
    case "bottom":
      additionalClasses.push(contentStyles.borderBottom);
      break;
  }

  const classes = `
    ${contentStyles.base}
    ${additionalClasses.join(" ")}
  `;

  // Inner element classes
  const typography = typographer(size, lineHeight, spacinTop, spacingBottom);

  return (
    <header className={classes}>
      <Element className={typography}>{title}</Element>
    </header>
  );
};
