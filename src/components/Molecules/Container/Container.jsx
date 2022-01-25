import React from "react";
import * as containerStyles from "./Container.module.scss";

/**
 * Universal container
 * @param  props
 * @param  {array} props.items
 */
export const Container = ({ children, type = "main", additionalClasses = [] }) => {
  let As;

  const classes = `
    ${containerStyles.base}
    ${type === "main" ? containerStyles.main : containerStyles.standard}
    ${additionalClasses.join(" ")}
  `;

  if (type === "main") {
    As = "main";
  } else {
    As = "div";
  }

  return (
    <As className={classes}>
      <div className={containerStyles.innerContainer}>{children}</div>
    </As>
  );
};
