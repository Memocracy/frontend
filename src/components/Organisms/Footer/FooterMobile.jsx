import React from "react";
import { Button } from "../../Atoms/Button";
import { Twitter } from "../../Atoms/Icon";
import * as footerStyles from "./FooterMobile.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const FooterMobile = ({ items = [] }) => {
  return (
    <footer className={footerStyles.base}>
      <Button type="twitter" additionalClasses={[footerStyles.twitterButton]}>
        <Twitter /> Follow us on Twitter
      </Button>
    </footer>
  );
};
