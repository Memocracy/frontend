import React from "react";
import { Icon } from "./Icon.jsx";
import CloseRightIcon from "../../../assets/images/icon-close-right.inline.svg";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const CloseRight = () => {
  return (
    <Icon icon={ <CloseRightIcon /> } label="close" />
  );
};
