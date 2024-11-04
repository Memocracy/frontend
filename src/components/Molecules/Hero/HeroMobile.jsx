import React from "react";
import { Logo } from "../../Atoms/Logo";
import { ProjectBaner } from "../../Atoms/ProjectBaner";
import { NewsletterButton } from "../../Atoms/NewsletterButton";
import * as heroStyles from "./HeroMobile.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const HeroMobile = () => {
  const { GATSBY_CURRENT_NEWSLETTER, GATSBY_CURRENT_NEWSLETTER_PDF } = process.env;

  return (
    <div className={heroStyles.base}>
      <div className={heroStyles.newsletterAdvert}>
        <NewsletterButton newsletterLink={GATSBY_CURRENT_NEWSLETTER} NewsletterLinkPdf={ GATSBY_CURRENT_NEWSLETTER_PDF} />
      </div>
      <div className={heroStyles.container}>
        <Logo additionalClasses={[heroStyles.logo]} width="100" height="100" />
        <ProjectBaner />
      </div>
    </div>
  );
};
