import React from "react";
import { horizontalSpacer, verticalSpacer } from "../../../lib/cssHelpers";
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
  additionalClasses = [],
}) => {
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
