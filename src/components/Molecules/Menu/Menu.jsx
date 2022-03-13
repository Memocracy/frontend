import React from "react";
import { InteligentLink } from "../../Atoms/InteligentLink";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Menu = ({ items = [] }) => {
  return (
    <nav>
      <ul>
        {items.map((item, i) => {
          const isParent = item.childItems?.nodes.length > 0;
          const additionalProps = {};

          if (isParent) {
            additionalProps.tabIndex = i;
            additionalProps["data-is-parent"] = true;
          }

          return (
            <li
              key={item.id}
              {...additionalProps}
            >
              <InteligentLink path={item.path} label={item.label} />
              {isParent && (
                <ul>
                  {item.childItems.nodes.map((subItem) => (
                    <li key={subItem.id}>
                      <InteligentLink
                        path={subItem.path}
                        label={subItem.label}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
