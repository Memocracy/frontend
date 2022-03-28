import React from "react";
import { typographer } from "../../../lib/cssHelpers";
import * as contentStyles from "./ContentHeader.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const ContentHeader = React.forwardRef(({
  title = "",
  additionalClasses = [],
  as = "h1",
  hr = "none",
  size = "h1",
  lineHeight = "sm",
  textAlign = "left",
  paddingTop = null,
  paddingBottom = null,
  marginTop = null,
  marginBottom = null,
}, ref) => {
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
  const typography = typographer(
    size,
    lineHeight,
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom,
    textAlign
  );

  return (
    <header className={classes} ref={ref}>
      <Element className={typography}>{title}</Element>
    </header>
  );
});
