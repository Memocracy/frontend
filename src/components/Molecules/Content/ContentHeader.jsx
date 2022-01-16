import React from "react";
import * as contentStyles from "./ContentHeader.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const ContentHeader = ({ title = "", additionalClasses = [] }) => {
  const classes = `
    ${contentStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <header className={classes}>
      <h1>{title}</h1>
    </header>
  );
};
