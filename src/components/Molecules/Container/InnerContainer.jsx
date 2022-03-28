import React from "react";
import { horizontalSpacer, verticalSpacer } from "../../../lib/cssHelpers";
import * as standard from "../../../assets/styles/Standard.module.scss";
import * as containerStyles from "./InnerContainer.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const InnerContainer = ({
  children,
  paddingTop,
  paddingBottom,
  marginTop,
  marginBottom,
  paddingLeft,
  paddingRight,
  textAlign,
  additionalClasses = [],
}) => {
  switch (textAlign) {
    case "right":
      additionalClasses.push(standard.textAlignRight);
      break;
    case "center":
      additionalClasses.push(standard.textAlignCenter);
      break;
    case "left":
    default:
      additionalClasses.push(standard.textAlignLeft);
  }

  const classes = `
    ${containerStyles.base}
    ${additionalClasses.join(" ")}
  `;

  const horizontalSpacing = horizontalSpacer(
    paddingTop,
    paddingBottom,
    marginTop,
    marginBottom
  );
  const verticalSpacing = verticalSpacer(paddingLeft, paddingRight);

  return (
    <div className={`${classes} ${horizontalSpacing} ${verticalSpacing}`}>
      {children}
    </div>
  );
};
