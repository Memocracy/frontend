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
      <ul>
      {items.map((item) => (
        <li key={item.id} >
          <Link to={item.path} activeClassName="active">
            { item.label }
          </Link>
        </li>
      ))}
      </ul>
    </nav>
  );
};
