import React from "react";
import { Logo } from "../../Atoms/Logo";
import { ProjectBaner } from "../../Atoms/ProjectBaner";
import { NewsletterButton } from "../../Atoms/NewsletterButton";
import * as heroStyles from "./HeroMobile.module.scss";
import config from "../../../config";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const HeroMobile = () => {
  const { GATSBY_CURRENT_NEWSLETTER: currentNewsletter, GATSBY_CURRENT_NEWSLETTER_PDF: currentNewsletterPdf } = config;

  return (
    <div className={heroStyles.base}>
      <div className={heroStyles.newsletterAdvert}>
      <NewsletterButton newsletterLink={currentNewsletter} NewsletterLinkPdf={currentNewsletterPdf} />
      </div>
      <div className={heroStyles.container}>
        <Logo additionalClasses={[heroStyles.logo]} width="100" height="100" />
        <ProjectBaner />
      </div>
    </div>
  );
};
