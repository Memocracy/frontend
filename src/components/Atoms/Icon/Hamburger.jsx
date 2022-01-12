import React from "react";
import { Icon } from "./Icon.jsx";
import HamburgerIcon from "../../../assets/images/icon-hamburger.inline.svg";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Hamburger = () => {
  return (
    <Icon icon={ <HamburgerIcon /> } label="menu" />
  );
};
