import React, { useState } from "react";
import { Button } from "../../Atoms/Button";
import { TableOfContents } from "../../Atoms/Icon";
import * as containerStyles from "./OffScreenContainer.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const OffScreenContainer = ({
  children,
  toggle = false,
  additionalClasses = [],
}) => {
  const [hide, setHide] = useState(!toggle);

  const classes = `
    ${containerStyles.base}
    ${hide ? containerStyles.hide : containerStyles.show}
    ${additionalClasses.join(" ")}
  `;

  return (
    <div className={classes}>
      <div className={containerStyles.content} aria-hidden={hide} >
        {children}
      </div>
      <div className={containerStyles.control}>
        <Button
          type="dark"
          additionalClasses={[containerStyles.button]}
          onClick={() => setHide(!hide)}
        >
          <TableOfContents />
        </Button>
      </div>
    </div>
  );
};
