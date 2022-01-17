import React from "react";
import * as footerStyles from "./FooterMobile.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const FooterMobile = ({ items = [] }) => {
  return (
    <footer className={footerStyles.base}>
      Ja sem footerek
    </footer>
  );
};
