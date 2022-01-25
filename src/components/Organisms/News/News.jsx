import React from "react";
import * as newsStyles from "./News.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const News = ({ data, additionalClasses = [] }) => {
  const classes = `
    ${newsStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <article className={classes}>
      <h1>{data.title}</h1>
    </article>
  );
};
