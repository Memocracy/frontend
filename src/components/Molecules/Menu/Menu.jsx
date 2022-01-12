import React from "react";
import { Link } from "gatsby";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Menu = ({ items = [] }) => {
  return (
    <nav>
      {items.map((item) => (
        <Link key={item.id} to={item.path} activeClassName="active">
          { item.label }
        </Link>
      ))}
    </nav>
  );
};
