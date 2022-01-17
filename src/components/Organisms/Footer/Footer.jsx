import React from "react";
import { Partners } from "../Partners";
import { Menu } from "../../Molecules/Menu";
import * as footerStyles from "./Footer.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Footer = ({ items = [] }) => {
  return (
    <footer className={footerStyles.base}>
      <div className={footerStyles.innerContainer}>
        <div className={footerStyles.columnLeft}>
          <Partners additionalClasses={[footerStyles.logoGrid]} />
        </div>
        <div className={footerStyles.columnCenter}>
          <a
            className="twitter-timeline"
            data-height="450"
            href="https://twitter.com/MEMOCRACY_team?ref_src=twsrc%5Etfw"
          >
            Tweets by MEMOCRACY_team
          </a>
        </div>
        <div className={footerStyles.columnRight}>
          <Menu items={items} />
        </div>
      </div>
    </footer>
  );
};
