import React from "react";
import { Button } from "../../Atoms/Button";
import { Twitter } from "../../Atoms/Icon";
import * as footerStyles from "./FooterMobile.module.scss";

const twitterUrl = "https://twitter.com/MEMOCRACY_team";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const FooterMobile = ({ items = [] }) => {
  return (
    <footer className={footerStyles.base}>
      <Button
        type="twitter"
        onClick={() =>
          window.location.assign(twitterUrl)
        }
        additionalClasses={[footerStyles.twitterButton]}
      >
        <Twitter /> Follow us on Twitter
      </Button>
    </footer>
  );
};
