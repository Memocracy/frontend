import React from "react";
import * as containerStyles from "./Container.module.scss";

/**
 * Universal container
 * @param  props
 * @param  {array} props.items
 */
export const Container = ({ children, additionalClasses = [] }) => {
  const classes = `
    ${containerStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <main className={classes}>
      <div className={containerStyles.innerContainer}>{children}</div>
    </main>
  );
};
