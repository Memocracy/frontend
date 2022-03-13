import React from "react";
import { Link } from "gatsby";
import { getTypeOfLink } from "../../../lib/stringHelpers";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const InteligentLink = ({ path, label }) => {
  if (getTypeOfLink(path) === "internal") {
    return (
      <Link to={path} activeClassName="active" partiallyActive={path !== "/"}>
        {label}
      </Link>
    );
  }

  return (
    <a href={path} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
};
