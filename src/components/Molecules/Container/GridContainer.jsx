import React from "react";
import * as gridStyles from "./GridContainer.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const GridContainer = ({ children, columns = 3, additionalClasses = [] }) => {
  const columnsClass = `columns${columns}`;

  const classes = `
    ${gridStyles.base}
    ${gridStyles[columnsClass]}
    ${additionalClasses.join(" ")}
  `;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
