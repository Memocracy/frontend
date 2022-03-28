import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as portraitStyles from "./Portrait.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Portrait = ({ featuredImage, additionalClasses = [] }) => {
  const classes = `
    ${portraitStyles.base}
    ${additionalClasses.join(" ")}
  `;

  return (
    <figure className={classes}>
      <GatsbyImage image={featuredImage.data} alt={featuredImage.alt} />
    </figure>
  );
};
