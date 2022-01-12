import React from "react";
import { Button as ReakitButton } from "reakit/Button";
import * as buttonStyles from "./Button.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Button = (props) => {
  const { children, type, additionalClasses = [], ...rest } = props;
  let typeClass;

  switch (type) {
    case "primary":
      typeClass = buttonStyles.primary;
    break;
    case "transparent":
    default:
      typeClass = buttonStyles.transparent;
  }

  const classes = `
    ${buttonStyles.base}
    ${typeClass}
    ${additionalClasses.join(" ")}
  `;

  return (
    <ReakitButton className={classes} {...rest}>
      { children }
    </ReakitButton>
  );
};
