import React from "react";
import { Icon } from "./Icon.jsx";
import TableOfContentsIcon from "../../../assets/images/icon-table-of-contents.inline.svg";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const TableOfContents = () => {
  return (
    <Icon icon={ <TableOfContentsIcon /> } label="menu" />
  );
};
