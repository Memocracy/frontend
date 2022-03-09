import React from "react";
import * as banerStyles from "./ImagePlaceholder.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const ImagePlaceholder = ({ aspectRatio = "16_9", additionalClasses = [] }) => {
  const classes = `
    ${banerStyles.base}
    ${banerStyles[`ar${aspectRatio}`]}
    ${additionalClasses.join(" ")}
  `;

  return <div className={classes}></div>;
};
