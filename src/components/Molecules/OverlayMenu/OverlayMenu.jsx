import React from "react";
import * as overlayStyles from "./OverlayMenu.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const OverlayMenu = ({ children, toggle = false, closeHandler }) => {
  return (
    <div
      className={`${overlayStyles.base}`}
      aria-hidden={!toggle}
      aria-labelledby="menu-toggle"
      role="navigation"
      onClick={closeHandler}
    >
      {children}
    </div>
  );
};
