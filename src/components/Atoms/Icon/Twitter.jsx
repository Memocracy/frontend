import React from "react";
import { Icon } from "./Icon.jsx";
import TwitterIcon from "../../../assets/images/icon-twitter.inline.svg";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Twitter = () => {
  return (
    <Icon icon={ <TwitterIcon /> } label="menu" />
  );
};
