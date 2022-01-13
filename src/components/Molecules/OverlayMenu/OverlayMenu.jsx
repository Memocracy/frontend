import React, { useEffect, useState } from "react";
import { Button } from "../../Atoms/Button";
import { CloseRight } from "../../Atoms/Icon";
import * as overlayStyles from "./OverlayMenu.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const OverlayMenu = ({ children, toggle = false, closeHandler }) => {
  const [hide, setHide] = useState(!toggle);

  const classes = `
    ${overlayStyles.base}
    ${toggle ? overlayStyles.show : overlayStyles.hide}
  `;

  useEffect(() => {
    if (toggle) {
      setHide(false);
    }
  }, [toggle]);

  return (
    <div
      className={classes}
      aria-hidden={hide}
      aria-labelledby="menu-toggle"
      role="navigation"
      onClick={closeHandler}
      onTransitionEnd={(e) => {
        if (e.target.matches(`.${overlayStyles.hide}`)) {
          setHide(true);
        }
      }}
    >
      <div className={overlayStyles.menu}>
        {children}
        <Button type="transparent" additionalClasses={[overlayStyles.closeButton]}>
          <CloseRight />
        </Button>
      </div>
    </div>
  );
};
