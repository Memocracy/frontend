import React from "react";
import * as banerStyles from "./ContainerLimited.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const ContainerLimited = ({ children, additionalClasses = [] }) => {
  const classes = `
    ${banerStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <div className={classes}>
      <div>
        {children}
      </div>
    </div>
  );
};
