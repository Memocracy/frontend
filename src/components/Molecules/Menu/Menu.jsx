import React from "react";
import { Link } from "gatsby";
import { getTypeOfLink } from "../../../lib/stringHelpers";


/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Menu = ({ items = [] }) => {
  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {/* Internal type of a link */}
            {getTypeOfLink(item.path) === "internal" && <Link
              to={item.path}
              activeClassName="active"
              partiallyActive={item.path !== "/"}
            >
              {item.label}
            </Link>}
            {/* External type of a link */}
            {getTypeOfLink(item.path) !== "internal" && <a
              href={item.path}
              target="_blank"
              rel="noreferrer"
            >
              {item.label}
            </a>}
          </li>
        ))}
      </ul>
    </nav>
  );
};
