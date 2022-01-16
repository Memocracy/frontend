import React from "react";
import * as contentStyles from "./Content.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Content = ({ content, children, additionalClasses = [] }) => {
  const classes = `
    ${contentStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <section dangerouslySetInnerHTML={{ __html: content }} className={classes}>
      {children}
    </section>
  );
};
