import React from "react";
import { Link } from "gatsby";
import { InteligentLink } from "../../Atoms/InteligentLink";
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
            <InteligentLink path={item.path} label={item.label} />
            {item.childItems?.nodes.length > 0 && (
              <ul>
                {item.childItems.nodes.map((subItem) => (
                  <li key={subItem.id}>
                    <InteligentLink path={subItem.path} label={subItem.label} />
                  </li>
                ))}

              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
