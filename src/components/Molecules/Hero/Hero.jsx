import React from "react";
import { Logo } from "../../Atoms/Logo";
import { ProjectBaner } from "../../Atoms/ProjectBaner";
import { NewsletterForm } from "../Form";
import * as heroStyles from "./Hero.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const Hero = () => {
  return (
    <div className={heroStyles.base}>
      <div className={heroStyles.innerContainer}>
        <Logo additionalClasses={[heroStyles.logo]} width="150" height="150" />
        <ProjectBaner breakLine={true} additionalClasses={[heroStyles.projectBaner]} />
        <NewsletterForm />
      </div>
    </div>
  );
};
