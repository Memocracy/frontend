import React from "react";
import { Link } from "gatsby";
import { getTypeOfLink } from "../../../lib/stringHelpers";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const InteligentLink = ({ path, label }) => {
  const linkType = getTypeOfLink(path);

  if (getTypeOfLink(path) === "internal") {
    return (
      <Link to={path} activeClassName="active" partiallyActive={path !== "/"}>
        {label}
      </Link>
    );
  // eslint-disable-next-line no-else-return
  } else if(linkType === "non-clickable") {
    return (
      <span>
        {label}
      </span>
    );
  }

  return (
    <a href={path} target="_blank" rel="noreferrer">
      {label}
    </a>
  );
};
