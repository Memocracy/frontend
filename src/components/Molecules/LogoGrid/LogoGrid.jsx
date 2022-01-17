import React from "react";
import * as logoGridStyles from "./LogoGrid.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const LogoGrid = ({ children, additionalClasses = [] }) => {
  const classes = `
    ${logoGridStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <div className={classes}>
      {children &&
        React.Children.map(children, (child) => (
          <div className={logoGridStyles.logo}>{React.cloneElement(child)}</div>
        ))}
    </div>
  );
};
