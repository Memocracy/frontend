import React from "react";
import { StaticImage } from "gatsby-plugin-image";
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
      <StaticImage
        className={heroStyles.background}
        src="../../../assets/images/europa-illustration-optmized.png"
        alt="Memocracy map"
      />
      <div className={heroStyles.container}>
        <Logo additionalClasses={[heroStyles.logo]} />
        <ProjectBaner />
      </div>
    </div>
  );
};
