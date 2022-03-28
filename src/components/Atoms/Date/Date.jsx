import React from "react";
import * as dateStyles from "./Date.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Date = ({ dateTime, humanTime, additionalClasses = [] }) => {
  const classes = `
    ${dateStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <time className={classes} dateTime={dateTime}>
      {humanTime}
    </time>
  );
};
