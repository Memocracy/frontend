import React from "react";
import MemocracyLogo from "../../../assets/images/logo-memocracy.svg";
import * as logoStyles from "./Logo.module.scss";

/**
 * Renders a <Logo /> component
 * @param  props
 * @param  {string} props.sizing the color of the text in the button
 * @param  {array}  props.additionalClasses additional classes
 */
export const Logo = ({
  sizing = "height",
  additionalClasses = [],
  width = 34,
  height = 34,
}) => {
  const classes = `
    ${logoStyles.base}
    ${sizing === "width" ? logoStyles.fullWidth : logoStyles.fullHeight}
    ${additionalClasses.join(" ")}
  `;

  return (
    <div className={classes}>
      <img src={MemocracyLogo} width={width} height={height} alt="Memocracy" />
    </div>
  );
};
