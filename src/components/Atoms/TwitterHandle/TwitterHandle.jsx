import React from "react";
import TwitterIcon from "../../../assets/images/icon-twitter.inline.svg";
import * as handleStyles from "./TwitterHandle.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const TwitterHandle = ({ handle, additionalClasses = [] }) => {
  const classes = `
    ${handleStyles.base}
    ${additionalClasses.join(" ")}
  `;

  const url = `https://twitter.com/${handle.replace("@", "")}`;

  return (
    <a href={url} className={classes} target="_blank" rel="noreferrer">
      <TwitterIcon />
      <span>{handle}</span>
    </a>
  );
};
