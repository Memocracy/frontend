import React from "react";
import * as iconStyles from "./Icon.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Icon = ({ icon }) => {
  return (
    <span className={iconStyles.base}>
      <img src={icon} />
    </span>
  );
};
