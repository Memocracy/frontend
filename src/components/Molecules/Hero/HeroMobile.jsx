import React from "react";
import { Logo } from "../../Atoms/Logo";
import { ProjectBaner } from "../../Atoms/ProjectBaner";
import * as heroStyles from "./HeroMobile.module.scss";

/**
 * Renders a <Menu /> component
 * @param  props
 * @param  {array} props.items
 */
export const HeroMobile = () => {
  return (
    <div className={heroStyles.base}>
      <div className={heroStyles.container}>
        <Logo additionalClasses={[heroStyles.logo]} width="100" height="100" />
        <ProjectBaner />
      </div>
    </div>
  );
};
